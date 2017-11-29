from celery.task import task
from dockertask import docker_task
from subprocess import call,STDOUT
import requests
import json
import os, sys
import pandas as pd
from datetime import datetime

#Default base directory 
basedir="/data/static/"

hostname=os.environ.get("host_hostname", '10.195.67.43')

def insert_tag_reads(row,session):
    """
    Checks or creates tag record. Then inserts datarow into tag_reads.

    insert_tag_reads(row,session)
    args:
        row - Pandas Dataframe Row
        session - python requests session with api token as header
    """
    payload={'format':'json','tag_id':row['TagID']}
    r1=session.get('http://{0}/api/etag/tags/'.format(hostname),params=payload)
    if r1.json()['count'] <1:
        payload={'tag_id':row['TagID'],'name':'ETAG TAG_ID {0}'.format(row['TagID']),'description':'ETAG TAG_ID {0}'.format(row['TagID'])}
        session.post('http://{0}/api/etag/tags/'.format(hostname),data=payload)
    payload={'reader':row['reader_id'],'tag':row['TagID'],'tag_timestamp':row['timestamp']}
    r2=session.post('http://{0}/api/etag/tag_reads/?format=json'.format(hostname),data=payload)
    return r2.status_code

def etlData(reader_id,file_path,session,skipHeaderRows):
    """ 
    etlData(reader_id,file_path,session,skipHeaderRows)
    args: 
        reader_id - reader must be present in database
        file_path - local file upload from api view
        session - python requests session with api token as header
        skipHeaderRows - Number of rows to skip
    """
    # Load pandas dataframe
    data=pd.read_csv(file_path,sep=' ',skiprows=skipHeaderRows)
    columnnames=["TagID","Date","Time"]
    data.columns=columnnames
    #add timestamp
    data['timestamp']=pd.to_datetime(data['Date'] + ' ' + data['Time'])
    #Trim and add reader_id to row
    data1=data[['TagID','timestamp']]
    data1['reader_id']=reader_id
    #Apply function to each row of dataframe 
    data1.apply( (lambda x: insert_tag_reads(x,session)), axis=1)
    return "Tag Reads recored: {0}".format(len(data1.index))

@task()
def etagDataUpload(reader_id,file_path,token,skipHeaderRows=1):
    """
    This task is associated with the etag-file-upload view.
    The view URl: /api/etag/file-upload/ . Provides a mechanism 
    to upload local file and runs this task. If you are unsure 
    you should go to the upload view to run task.

    etagDataUpload(reader_id,file_path,token,skipHeaderRows=1)
    args:
        reader_id - reader must exist in  database
        file_path - local filepath (associated with etag-file-upload view
        token - REST api token for authentication
    kwargs:
        skipHeaderRows - Number of rows to skip
    """

    headers={'Authorization':'Token {0}'.format(token)}
    payload = {'format':'json','reader_id':reader_id}
    s = requests.Session()
    s.headers.update(headers)
    r = s.get('http://{0}/api/etag/readers/'.format(hostname),params=payload)
    if r.json()['count'] >=1:
        return etlData(reader_id,file_path,s,int(skipHeaderRows))
    else:
        raise Exception('reader_id must be provided')
