$(function() {
    //Customize by setting base_url to cybercom/api docker application
    base_url = "/api";
    //No other alterations is need to get the standard applicaiton running!
    login_url = base_url + "/api-auth/login/?next=";
    logout_url = base_url + "/api-auth/logout/?next=";
    user_task_url = base_url + "/queue/usertasks/.json?page_size=10";
    user_url = base_url + "/user/?format=json";
    reader_url = base_url + "/etag/readers/.json?page_size=20";
    prevlink=null;nextlink=null;
    //set_auth(base_url,login_url);
    $("#aprofile").click(function(){activateTab('custom');get_data(user_url,load_uprofile);})
    $("#alogout").click(function(){window.location = logout_url.concat(document.URL);})
    //load_task_history(user_task_url);
    //$('#prevlink').click(function(){load_task_history(prevlink);});
    //$('#nextlink').click(function(){load_task_history(nextlink);});
    Handlebars.registerHelper('json_metatags', function(context) {
      if (typeof context !== 'undefined') {
        return JSON.stringify(context).replace(/"/g,'').replace(/\[/g,'').replace(/\]/g,'').replace(/,/g,', ');
      }else{
        return ""
      }
    });
    load_home_panel();

});//End of Document Ready

//Funtions used for edit data
function get_data(dataurl, callback){
  $.getJSON(dataurl,function(data){
	callback(data);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
 	alert("Error:"+ textStatus); // + jqXHR.responseText);
	callback({});
  });
}
//User profile
function load_uprofile(data){
  $('#data-container').empty();
  data.csrftoken = getCookie('csrftoken')
  tmpl=Handlebars.templates['tmpl-user'];
  $('#data-container').append(tmpl(data));
  $('#user_form').hide();
  $('#view_form').show();
  //Events
  $('#reset_password').click(function(){$('#pass_form').toggle(!$('#pass_form').is(':visible'));});
}
//ETAG Funcitons for data manipulation
function load_readers(data){
  $('#data-container').empty();
  reader_template = Handlebars.templates['tmpl-readers'];
  $('#data-container').append(reader_template({readers: data.results}));
  //Events
  $('#readers-container').change(function(){
      select_change($('#readers-container').val());
      reader_change($('#readers-container').val());
   });
   //code to select first item in the select box
   $('select option:first-child').attr("selected", "selected").change();
}
function load_tags(data){
  $('#data-container').empty();
  tags_template = Handlebars.templates['tmpl-tags'];
  $('#data-container').append(tags_template({readers: data.results}));
  //Events
  $('#tags-container').change(function(){
      tags_form($('#tags-container').val());
      tags_change($('#tags-container').val());
  });
  //code to select first item in the select box
  $('select option:first-child').attr("selected", "selected").change();
}
//File upload for data ingest
function load_file_upload(data){
  $('#data-container').empty();
  file_template = Handlebars.templates['tmpl-file'];
  $('#data-container').append(file_template({readers:data.results}));
  //Events
  $('#file-container').change(function(){
      get_data(base_url + "/etag/readers/" + $('#file-container').val() + "/.json",file_upload_reader_change)
      /*console.log($('#file-container').val());
      file_form($('#file-container').val());
      file_change($('#file-container').val());*/
  });
 $('select option:first-child').attr("selected", "selected").change();
}
function file_upload_reader_change(data){
  var f1 = Handlebars.templates['tmpl-file-form'];
  $('#file-form').empty();
  //Add CSRF to form to submit
  data.csrftoken = getCookie('csrftoken')
  $('#file-form').append(f1(data));
  $('#submit_file_button').click(function(){
    return upload_async_file('submit_file');
  });
}
function upload_async_file(form){
  console.log(new FormData($('#' + form )));
  $.ajax({
        // Your server script to process the upload
        url: '/api/etag/file-upload/',
        type: 'POST',

        // Form data
        data: new FormData($('#' + form )),

        // Tell jQuery not to process data or worry about content-type
        // You *must* include these options!
        cache: false,
        contentType: false,
        processData: false,
        beforeSend :function(xhr, settings){
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        },
        // Custom XMLHttpRequest
        xhr: function() {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
                // For handling the progress of the upload
                myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        $('progress').attr({
                            value: e.loaded,
                            max: e.total,
                        });
                    }
                } , false);
            }
            return myXhr;
        },
	success: function (data) {
	  $('#upload_result').empty();
	  $('#upload_result').append('<a href="' + data.result_url + '" target="_blank">Upload Task Results</a>'); 
	},
    });
  return false; 
}
function load_history(){
  $('#data-container').empty();
  template = Handlebars.templates['tmpl-history-table'];
  $('#data-container').append(template({}));
  $('#prevlink').click(function(){get_data(prevlink,set_task_history);});
  $('#nextlink').click(function(){get_data(nextlink,set_task_history);});
  get_data(user_task_url,set_task_history);
}
function set_task_history(data){
    prevlink = data.previous;
    nextlink = data.next;
    if (prevlink == null){$('#li_prevlink').addClass("disabled");} else {$('#li_prevlink').removeClass("disabled");};
    if (nextlink == null){$('#li_nextlink').addClass("disabled");} else {$('#li_nextlink').removeClass("disabled");};
    setTaskDisplay(data);
    //source = $('#tr-template').html();
    //tr_template = Handlebars.compile(source);
    tr_template = Handlebars.templates['tmpl-tr']
    $('#result_tbody').html("")//clear table
    $.each(data.results, function(i, item) {
        temp=item.task_name.split('.')
        item['task_name']= temp[temp.length-1]
        item.timestamp = item.timestamp.substring(0,19).replace('T',' ')
        $('#result_tbody').append(tr_template(item))
    });
}
//End functions used for edit data

function populate_map() {
    // Setup leaflet map
    var map = new L.Map('map');
    var basemapLayer = new L.TileLayer('https://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');
    // Center map and default zoom level
    map.setView([35.11413, -90.091807], 9); 
     // Adds the background layer to the map
     map.addLayer(basemapLayer);
     // create another variable and then add counts to the reader location
     $(document).ready(function(){
        $.getJSON("/api/etag/reader_location/", function(result){
            $.each(result.results, function(i,l){
                var reader = l.reader;
                var lat = l.latitude;
                var lon = l.longitude;
                var location = [lat, lon];
                var active = l.active;
                var start = l.start_timestamp;
                if (active == true){
                    $.getJSON("/api/etag/tag_reads/?search&reader="+reader, function(get){
                        var count = get.count;
                        var time = get.tag_timestamp;
                        var tag = get.tag;
                        var marker = new L.Marker(location)
                        .bindPopup("station: " + reader +'<br>'+"count: " +count+'<br>'+"starts from: "+start)
                        .addTo(map);
                    })
                }
            })
        })
     }); 
} 

function load_home_panel(){
    /*$('#home').empty();
    $.getJSON(base_url + "/etag/readers/.json?page_size=20&ordering=reader_id", function(data) {
     reader_template = Handlebars.templates['tmpl-readers'];
     var context = {
       readers: data.results
     };
     console.log('---->>>');
     $('#home').append(reader_template(context));
     $('#readers-container').change(function(){
      select_change($('#readers-container').val());
      reader_change($('#readers-container').val());
     });
     //code to select first item in the select box
     $('select mption:first-child').attr("selected", "selected").change();
   });*/
    //##########################################################################
      $('#custom').empty();
      lnav_template = Handlebars.templates['tmpl-leftnav'];
      $('#custom').append(lnav_template({}));
      $('#custom_tab').click(function(){set_auth(base_url,login_url);})
      //$('#viz_tab').click(function(){alert("clicked");});
      $('#viz_tab').click(function(){populate_map()});
      //$('#data-container').empty();
      $('#user-profile').click(function(){get_data(user_url,load_uprofile);});
      $('#editReaders').click(function(){get_data(base_url + "/etag/readers/.json?page_size=20&ordering=reader_id",load_readers);});
      $('#editTags').click(function(){get_data(base_url +"/etag/tags/.json?page_size=20&ordering=tag_id",load_tags);});
      $('#ingestData').click(function(){get_data(base_url +"/etag/readers/.json?page_size=20&ordering=reader_id",load_file_upload);});
      $('#ingestHistory').click(function(){load_history()});
    //####################################################################
  /*$('#tags').empty();
  $.getJSON(base_url + "/etag/tags/.json?page_size=20&ordering=tag_id", function(data) {
    tags_template = Handlebars.templates['tmpl-tags'];
    var context = {
      readers: data.results
    };
    $('#tags').append(tags_template(context));
    $('#tags-container').change(function(){
      tags_form($('#tags-container').val());
      tags_change($('#tags-container').val());
    });
    $('select option:first-child').attr("selected", "selected").change();
  });
//################################################################################
//file upload functions begins here
$('#file_upload').empty();
  $.getJSON(base_url +"/etag/tags/.json?page_size=20&ordering=tag_id", function(data) {
    file_template = Handlebars.templates['tmpl-file'];
    var context = {
      readers: data.results
    };
    $('#file_upload').append(file_template(context));
    $('#file-container').change(function(){
      file_form($('#file-container').val());
      file_change($('#file-container').val());
    });
   $('select option:first-child').attr("selected", "selected").change();
  });

//file upload function ends here....
      $('#description').ready(function(){
      console.log('hello');
      $('#tabContent1').hide();
      console.log('hello11');
  });

  */
};
//load_home_panel() function ends here....
/*
function hide_tab(){
        console.log('hello2');
        $('#tabContent1').hide();
    }

function show_tab(){
        console.log('working');
        set_auth(base_url,login_url);
        console.log('hello3');
        $('#tabContent1').show();
        $('[href="#tasks"]').tab('show');
        console.log('hello3_again');
        $('[href="#edit"]').tab('show');
        $('#tasks').hide();
        $('#edit').show();
    }

 function show_edit(){
        console.log('hello4');
        $('#edit').show();
    }
function hide_edit(){
        console.log('hello5');
        $('#edit').hide();
    }

function hide_edit1(){
        console.log('hello7');
        $('#edit').hide();
        $('#tasks').show();
    }

*/

function form_submit(formName){
  data = $('#'+formName).serializeObject();
  console.log(data);
  if("latitude" in data){data.latitude=parseFloat(data.latitude)}
  if("longitude" in data){data.longitude=parseFloat(data.longitude)}
  if("field_data" in data){data.field_data=JSON.parse(data.field_data)}
  $.postJSON(data.url, data, "PUT");
  return false;
};

//-----------------------------------------------------------------------------------
function form_post(formName){
  data = $('#'+formName).serializeObject();
  console.log(data);
  if("latitude" in data){data.latitude=parseFloat(data.latitude)}
  if("longitude" in data){data.longitude=parseFloat(data.longitude)}
  $.postJSON(data.url, data, "POST");
  return false;
};
//-----------------------------------------------------------------------------------
function form_submit_insert(formName){
  data = $('#'+formName).serializeObject();
  console.log('called again');
  url1= base_url + '/etag/reader_location/';
  console.log(data);
  //data = data.serializeObject();
  console.log('called again');
  //console.log(data.url);
  if("latitude" in data){data.latitude=parseFloat(data.latitude)}
  if("longitude" in data){data.longitude=parseFloat(data.longitude)}

  $.postJSON(url1, data, "POST");
  return false;
};
//=============================================================================================


//-----------------------------------------------------------------------------------
function form_submit_insert1(formName){
  data = $('#'+formName).serializeObject();
  console.log('called again');
  url1=base_url +'/etag/tag_animal/';
  console.log(data);
  //data = data.serializeObject();
  console.log('called again');
  //console.log(data.url);
  if("latitude" in data){data.latitude=parseFloat(data.latitude)}
  if("longitude" in data){data.longitude=parseFloat(data.longitude)}

  $.postJSON(url1, data, "POST");
  return false;
};
//=============================================================================================

function select_change(reader){
	$.getJSON(base_url +"/etag/readers/" + reader + "/.json" , function(data){
                reader_form_template = Handlebars.templates['tmpl-readers-form'];
                $('#readers-form').empty();
                $('#readers-form').append(reader_form_template(data));
		//$.each(data, function(key, value){
	        //    $('[name='+key+']').val(value);
		//});
	});
};
function tags_form(tags){
	$.getJSON(base_url + "/etag/tags/" + tags + "/.json" , function(data){
                tags_form_template = Handlebars.templates['tmpl-tags-form'];
                $('#tags-form').empty();
                $('#tags-form').append(tags_form_template(data));
		//$.each(data, function(key, value){
	        //    $('[name='+key+']').val(value);
		//});
	});
};

//-----------------------------
function file_form(file_upload){

	$.getJSON(base_url + "/etag/readers/" + file_upload + "/.json" , function(data){
               // console.log(data)
                var f1 = Handlebars.templates['tmpl-file-form'];
                $('#file-form').empty();
                $('#file-form').append(f1(data));
                $('#submit_file_button').click(function(){
					file_upld('submit_file');
					});
                //$('#submit_file_button').click(function(){file_upld();
					//return false;
					//});
		//$.each(data, function(key, value){
	        //    $('[name='+key+']').val(value);
		//});
	});
};


function file_upld(formName){
	console.log('#'+formName);
	var form = document.getElementById('submit_file');

	var form_data = $('#'+formName).serializeObject();
	console.log('hello');
	console.log(form);
	console.log(form_data);

		/*$.ajax({
        url:'/api/etag/file-upload/',
        type:'post',
        //async:false,
        cache: false,
        dataType: 'json',
        data:form_data,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success:function(response){
            alert(response);
        },
        error: function(){
			alert("error in submission");
			}

    }); */

	return false;
		};
//------------------------------------------

function reader_change(reader){
  $('#grid-container').remove();
  $.getJSON(base_url + "/etag/reader_location/.json?reader=" + reader, function(data){
    readers_table_template = Handlebars.templates['tmpl-readers-table'];
    var context = {
        results: data.results
    };
    $('#readers-table').empty();
    $('#readers-table').append(readers_table_template(context));
    //$('#grid-basic').append(dataTable);
  })
};

function lat_long_change(url) {
  $.getJSON(url, function(data){
    lat_long_template = Handlebars.templates['tmpl-location-popup'];
    //$('#modal2').modal("show");
    //console.log(JSON.stringify(data));
    $('#modal-lat-long').empty();
    $('#modal-lat-long').append(lat_long_template(data));
    });
};

function tags_change(tags){
  $('#tag-container').remove();
  $.getJSON(base_url + "/etag/tag_animal/.json?tag=" + tags, function(data){
    tags_table_template = Handlebars.templates['tmpl-tags-table'];
    var context = {
        results: data.results
    };
    $('#tags-table').empty();
    $('#tags-table').append(tags_table_template(context));
    //$('#grid-basic').append(dataTable);
  })
};

//--------------------------------------------------------------
function file_change(file_upload){
  //$('#file-container').remove();
  $.getJSON(base_url + "/etag/tag_animal/.json?tag=" + file_upload, function(data){
    var filetabletemplate = Handlebars.templates['tmpl-file-table'];
    var context = {
        results: data.results
    };
    $('#file-table').empty();
    $('#file-table').append(filetabletemplate(context));
    //$('#grid-basic').append(dataTable);
  })
};
//---------------------------------------------------------------

function tag_animal_change(url) {
  $.getJSON(url, function(data){
    tag_animal_template = Handlebars.templates['tmpl-animal-popup'];
    //$('#modal2').modal("show");
    //data=JSON.stringify(data);
    data.field_data = JSON.stringify(data.field_data,null,4);
      console.log(JSON.stringify(data));
    $('#modal-tag-animal').empty();
    $('#modal-tag-animal').append(tag_animal_template(data));
    });
};

function tag_animal_add() {
  //$.getJSON("/api/etag/tag_animal/.json?tag=" + tags, function(data){
    tag_animal_template = Handlebars.templates['tmpl-new-animal-popup'];
    //$('#modal2').modal("show");
    //console.log(JSON.stringify(data));
    var tag_id=$('#tags-container').find(":selected").text();
    var data=({tag:tag_id});
    $('#modal-animal').empty();
    $('#modal-animal').append(tag_animal_template(data));
    //});
};

function reader_add() {
  //$.getJSON("/api/etag/tag_animal/.json?tag=" + tags, function(data){
    location_template = Handlebars.templates['tmpl-new-location-popup'];
    //console.log($('#readers-container').find(":selected").text());
    var reader_id=$('#readers-container').find(":selected").text();
    var data=({reader:reader_id});
    //$('#modal2').modal("show");
    console.log('---->>>');
    console.log(data);
    $('#modal-location').empty();
    $('#modal-location').append(location_template(data));
    //});
};

function submit_user(user_div){
    //checking for default user_dev will be deprecated.
    user_div = (typeof user_div !== 'undefined') ?  '#'+ user_div : '#profile';
    //User update
    $.post( user_url,$('#user_form').serializeObject(),function(data){
        data.csrftoken = getCookie('csrftoken')
        $(user_div).empty();
        user_template = Handlebars.templates['tmpl-user']
        $(user_div).append(user_template(data))
        $('#user_form').hide()
        $('#view_form').show()
        $('#reset_password').click(function(){$('#pass_form').toggle(!$('#pass_form').is(':visible'));});
    })
    .fail(function(){ alert("Error Occured while updating User information.")});
    return false;
}
function edit_user(){
    $('#user_form').show()
    $('#view_form').hide()
    return false;
}
function set_password(){
    pass = $('#pass_form').serializeObject()
    if (pass.password !== pass.password2){
        alert("Passwords were not identical")
        return false;

    }
    $.post( user_url,$('#pass_form').serializeObject(),function(data){
        $('#reset_password').click(function(){$('#pass_form').toggle(!$('#pass_form').is(':visible'));});
        alert(JSON.stringify(data))
    })
    .fail(function(){ alert("Error Occured on Password Reset.")});
    return false;
}
function set_auth(base_url,login_url){
    $.getJSON( base_url + "/user/?format=json",function(data){
        $('#user').html(data['username'].concat( ' <span class="caret"></span> '));
        $("#user").append($('<img style="border-radius:80px;">').attr("src",data['gravator_url'] + "?s=40&d=mm") );
        data.csrftoken = getCookie('csrftoken')
        //source = $('#user-template').html()
        //user_template = Handlebars.compile(source);
        user_template = Handlebars.templates['tmpl-user']
        $('#profile').append(user_template(data))
        $('#user_form').hide()
        $('#view_form').show()
        $('#reset_password').click(function(){$('#pass_form').toggle(!$('#pass_form').is(':visible'));});
    })
    .fail(function() {
        var slink = login_url.concat(document.URL);
        window.location = slink
    });
}
function activateTab(tab){
    $('a[href="#' + tab + '"]').tab('show')
};
function load_task_history(url){
    $.getJSON(url, function(data){
    prevlink = data.previous;
    nextlink = data.next;
    if (prevlink == null){$('#li_prevlink').addClass("disabled");} else {$('#li_prevlink').removeClass("disabled");};
    if (nextlink == null){$('#li_nextlink').addClass("disabled");} else {$('#li_nextlink').removeClass("disabled");};
    setTaskDisplay(data);
    //source = $('#tr-template').html();
    //tr_template = Handlebars.compile(source);
    tr_template = Handlebars.templates['tmpl-tr']
    $('#result_tbody').html("")//clear table
    $.each(data.results, function(i, item) {
        temp=item.task_name.split('.')
        item['task_name']= temp[temp.length-1]
        item.timestamp = item.timestamp.substring(0,19).replace('T',' ')
        $('#result_tbody').append(tr_template(item))
    });
    });
}
function setTaskDisplay(data){
    if (data.count <= data.meta.page_size){
        $('#task_count').text('Task 1 - ' + data.count +  ' Total ' + data.count );
    }else{
        rec_start = data.meta.page_size*data.meta.page - data.meta.page_size +1;
        rec_end = "";
        if(data.meta.page_size*data.meta.page >= data.count){
            rec_end = data.count;
        }else{
            rec_end = data.meta.page_size*data.meta.page;
        }
        $('#task_count').text('Task ' + rec_start + ' - ' + rec_end  +  ' Total ' + data.count )
    }

}
function showResult(url){
    //myModalLabel -->title
    $.getJSON(url + ".json" , function(data){
        json_data = JSON.stringify(data,null, 4);
        $("#myModalbody").html(json_data);
        $("#myModalbody").urlize();
        $("#myModal").modal('show');
    });
}
jQuery.fn.urlize = function() {
    if (this.length > 0) {
        this.each(function(i, obj){
            // making links active
            var x = $(obj).html();
            var list = x.match( /\b(http:\/\/|www\.|http:\/\/www\.)[^ <]{2,200}\b/g );
            if (list) {
                for ( i = 0; i < list.length; i++ ) {
                    var prot = list[i].indexOf('http://') === 0 || list[i].indexOf('https://') === 0 ? '' : 'http://';
                    x = x.replace( list[i], "<a target='_blank' href='" + prot + list[i] + "'>"+ list[i] + "</a>" );
                }

            }
            $(obj).html(x);
        });
    }
};
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};
$.postJSON = function(url, data,method, callback,fail) {
    if (typeof method === "undefined" || method === null) {
        method = "POST";
    }
    return jQuery.ajax({
        'type': method,
        'url': url,
        'contentType': 'application/json',
        'data': JSON.stringify(data),
        'dataType': 'json',
        'success': callback,
        'error':fail,
        'beforeSend':function(xhr, settings){
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    });
};
