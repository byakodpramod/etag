# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AccessoryData',
            fields=[
                ('accessory_id', models.AutoField(serialize=False, primary_key=True)),
                ('reader_id', models.CharField(max_length=10)),
                ('tag_id', models.CharField(max_length=10)),
                ('access_timestamp', models.DateTimeField(null=True, blank=True)),
                ('accessory_type', models.CharField(max_length=255, blank=True)),
                ('value', jsonfield.fields.JSONField(blank=True)),
            ],
            options={
                'db_table': 'accessory_data',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='ReaderLocation',
            fields=[
                ('location_id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=255, blank=True)),
                ('latitude', models.FloatField(null=True, blank=True)),
                ('longitude', models.FloatField(null=True, blank=True)),
                ('start_timestamp', models.DateTimeField(null=True, blank=True)),
                ('end_timestamp', models.DateTimeField(null=True, blank=True)),
                ('active', models.NullBooleanField()),
            ],
            options={
                'db_table': 'reader_location',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Readers',
            fields=[
                ('reader_id', models.CharField(max_length=10, serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255, blank=True)),
                ('user_id', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'db_table': 'readers',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TagAnimal',
            fields=[
                ('animal_id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=255, blank=True)),
                ('description', models.CharField(max_length=500, blank=True)),
                ('start_timestamp', models.DateTimeField(null=True, blank=True)),
                ('end_timestamp', models.DateTimeField(null=True, blank=True)),
                ('field_data', jsonfield.fields.JSONField(blank=True)),
            ],
            options={
                'db_table': 'tag_animal',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TagReads',
            fields=[
                ('tag_reads_id', models.AutoField(serialize=False, primary_key=True)),
                ('tag_timestamp', models.DateTimeField()),
            ],
            options={
                'db_table': 'tag_reads',
                'managed': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('tag_id', models.CharField(max_length=10, serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=255, blank=True)),
                ('description', models.CharField(max_length=500, blank=True)),
                ('user_id', models.IntegerField(null=True, blank=True)),
                ('public', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'tags',
                'managed': True,
            },
            bases=(models.Model,),
        ),
    ]
