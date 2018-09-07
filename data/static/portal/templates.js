(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tmpl-animal-popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_animal\" onsubmit = \"form_submit('submit_animal'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"tag\">Tag</label>\n          <input type=\"text\" class=\"form-control\" name=\"tag\" id=\"tag\" value=\""
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"start_timestamp\">Start Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"start_timestamp\" id=\"start_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.start_timestamp || (depth0 != null ? depth0.start_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"end_timestamp\">End Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"end_timestamp\" id=\"end_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.end_timestamp || (depth0 != null ? depth0.end_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"field_data\">Field Data</label>\n          <input type=\"text\" class=\"form-control\" name=\"field_data\" id=\"field_data\" value=\""
    + alias4(((helper = (helper = helpers.field_data || (depth0 != null ? depth0.field_data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field_data","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-desc'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Electronic Transponder Analysis Gateway</h2>\n            <p>The Electronic Transponder Analysis Gateway (ETAG) is a database and software system that will provide professional\n            data management and versatile data dissemination to a growing community of researchers who use Radio Frequency Identification (RFID)\n            technology to advance biological inquiries in fields like animal behavior, ecological physiology, and community ecology. RFID entails\n            short-range wireless communication between small transponder tags and readers, and it can facilitate tracking of individual items or\n            animals that are equipped with a tag. RFID is a mature and ubiquitous technology, familiar to people in the form of electronic tool-booths\n            or as 'microchip' tags implanted in cats and dogs. A community of researchers has emerged that employs RFID to track individual birds, mammals,\n            fish, reptiles, and even insects in a wide range of field and laboratory research endeavors. For the majority of these projects, data collection,\n            analysis, and curation are currently done by hand, which requires individual investigators to spend considerable time on data management rather\n            than science. ETAG will transform the practices of its user community, by creating an infrastructure based on open-source tools that will\n            allow scientist to collect, validate, visualize, analyze, and share data in near real-time. As a result, researchers will have new capacities\n            both for producing novel science and for sharing their work with their peers and the general public.</p>\n";
},"useData":true});
templates['tmpl-file-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_file\" action=\"/api/etag/file-upload/\" method=\"POST\"  enctype=\"multipart/form-data\">\n      <div style=\"display:none\">\n          <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\""
    + alias4(((helper = (helper = helpers.csrftoken || (depth0 != null ? depth0.csrftoken : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"csrftoken","hash":{},"data":data}) : helper)))
    + "\"/>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label\" for=\"reader_id\">Reader ID</label>\n          <input type=\"text\" class=\"form-control\" name=\"reader_id\" id=\"tag_id\" value=\""
    + alias4(((helper = (helper = helpers.reader_id || (depth0 != null ? depth0.reader_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reader_id","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label\" for=\"file\">File Upload</label>\n	  <input type=\"file\" name=\"upload_file\" id=\"upload_file\">\n      </div>\n      <div class=\"form-group\">\n          <div class=\"sumbit1\">\n            <button id=\"submit_file_button\" >Submit</button>\n          </div>\n      </div>\n</form>\n<progress class=\"progress-bar progress-bar-success\"/>\n<div id=\"upload_result\"></div>\n";
},"useData":true});
templates['tmpl-file-table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <tr>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.start_timestamp : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.end_timestamp : depth0), depth0))
    + "</td>\n        <td><button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modal3\" onclick = \"tag_animal_change('"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'); return false;\" id=\"#myModal3\">Edit</button></td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id = \"file-container\">\n  <table id=\"grid-basic\" name=\"myTable\" class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th data-column-id=\"name\">Name</th>\n        <th data-column-id=\"description\">Description</th>\n        <th data-column-id=\"start_time\">Start Timestamp</th>\n        <th data-column-id=\"end_time\">End Timestamp</th>\n        <th data-column-id=\"longitude\">Edit <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-toggle=\"modal\" data-target=\"#modal_add2\" onclick = \"tag_animal_add(); return false;\" id=\"#myModal_add2\">+</button></th>\n      </tr>\n    </thead>\n    <tbody id =\"animalRow\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n\n  <div class=\"modal fade\" id=\"modal3\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Edit Animal</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-tag-animal\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <div class=\"modal fade\" id=\"modal_add2\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Add Animal</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-animal\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n</div>";
},"useData":true});
templates['tmpl-file'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <option>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.reader_id : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div> <!--beginning div-->\n  <div class = \"file-container\"> <!--file container div-->\n    <div class = \"dropdown-reader\"> <!--dropdown div-->\n      <select class=\"form-control\" id=\"file-container\" size = \"10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.readers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\n    </div> <!--end of dropdown div-->\n\n    <div id=\"file-form\" class=\"form-container\"> <!--form div-->\n    </div> <!--end of form div-->\n   <!-- <div id=\"file-table\" class = \"table-container\">\n    </div>  -->\n  </div> <!--end of container div-->\n</div> <!--ending div-->\n";
},"useData":true});
templates['tmpl-history-table'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-lg-8\"><h2>Task History</h2>\n<h4 id=\"task_count\"></h4>\n<table class=\"table table-striped table-bordered table-condensed table-hover\" id='resulttable'>\n  <tr>\n      <th>Task Name</th>\n      <th>Timestamp</th>\n      <th>Metadata Tags</th>\n      <!--<th>Result</th>-->\n  </tr>\n<tbody id='result_tbody'>\n  </tbody>\n</table>\n<nav>\n<ul class=\"pager\">\n    <li id=\"li_prevlink\" class=\"disabled\"><a id=\"prevlink\" href=\"#\"><span aria-hidden=\"true\">&larr;</span> Previous</a></li>\n    <li id=\"li_nextlink\" ><a id=\"nextlink\" href=\"#\">Next <span aria-hidden=\"true\">&rarr;</span></a></li>\n</ul>\n</nav>\n</div>\n";
},"useData":true});
templates['tmpl-leftnav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\" navbar  navbar-fixed-left\">\n  <ul class=\"nav navbar-nav\">\n   <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Edit Data <span class=\"caret\"></span></a>\n     <ul class=\"dropdown-menu\" role=\"menu\">\n      <li><a id=\"editReaders\" href=\"#\">Readers</a></li>\n      <li><a id=\"editTags\" href=\"#\">Tags</a></li>\n     </ul>\n   </li>\n   <li class=\"divider\"></li>\n   <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Ingest Data<span class=\"caret\"></span></a>\n     <ul class=\"dropdown-menu\" role=\"menu\">\n      <li><a id=\"ingestData\" href=\"#\">Upload Data</a></li>\n      <li><a id=\"ingestHistory\" href=\"#\">History</a></li>\n     </ul>\n   </li>\n   <li class=\"divider\"></li>\n   <li><a id=\"user-profile\" href=\"#\">User Profile</a></li>\n  </ul>\n</div>\n<div class=\"col-lg-8\">\n <div id=\"data-container\" class=\"col-md-08\">\n   <h3>Select Item from Menu</h3>\n </div>\n</div>\n";
},"useData":true});
templates['tmpl-location-popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_location\" onsubmit = \"form_submit('submit_location'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"reader\">Reader</label>\n          <input type=\"text\" class=\"form-control\" name=\"reader\" id=\"reader\" value=\""
    + alias4(((helper = (helper = helpers.reader || (depth0 != null ? depth0.reader : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reader","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"start_timestamp\">Start Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"start_timestamp\" id=\"start_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.start_timestamp || (depth0 != null ? depth0.start_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"end_timestamp\">End Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"end_timestamp\" id=\"end_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.end_timestamp || (depth0 != null ? depth0.end_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"longitude\">Longitude</label>\n          <input type=\"number\" class=\"form-control\" name=\"longitude\" id=\"longitude\" value="
    + alias4(((helper = (helper = helpers.longitude || (depth0 != null ? depth0.longitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data}) : helper)))
    + ">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"latitude\">Latitude</label>\n          <input type=\"number\" class=\"form-control\" name=\"latitude\" id=\"latitude\" value="
    + alias4(((helper = (helper = helpers.latitude || (depth0 != null ? depth0.latitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data}) : helper)))
    + ">\n        </div>\n\n        <div class=\"checkbox\">\n        <label class=\"control-label\" for=\"active\">\n          <input type=\"checkbox\" name=\"active\" id=\"active\" value="
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + " checked> Active\n        </label>\n      </div>\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-new-animal-popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_animal\" onsubmit = \"form_submit_insert1('submit_animal'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"tag\">Tag</label>\n          <input type=\"text\" class=\"form-control\" name=\"tag\" id=\"tag\" value=\""
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"start_timestamp\">Start Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"start_timestamp\" id=\"start_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.start_timestamp || (depth0 != null ? depth0.start_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"end_timestamp\">End Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"end_timestamp\" id=\"end_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.end_timestamp || (depth0 != null ? depth0.end_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"field_data\">Field Data</label>\n          <input type=\"text\" class=\"form-control\" name=\"field_data\" id=\"field_data\" value=\""
    + alias4(((helper = (helper = helpers.field_data || (depth0 != null ? depth0.field_data : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field_data","hash":{},"data":data}) : helper)))
    + "\">\n            \n                <label for=\"field_data\">Note:Field Data should be in json format. <a  target=\"_blank\" href=\"https://www.w3schools.com/js/js_json_syntax.asp\">Json Syntax</a> </label>  \n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-new-location-popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_location\" onsubmit = \"form_submit_insert('submit_location'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"reader\">Reader</label>\n          <input type=\"text\" class=\"form-control\" name=\"reader\" id=\"reader\" value=\""
    + alias4(((helper = (helper = helpers.reader || (depth0 != null ? depth0.reader : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reader","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"start_timestamp\">Start Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"start_timestamp\" id=\"start_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.start_timestamp || (depth0 != null ? depth0.start_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"end_timestamp\">End Timestamp</label>\n          <input type=\"text\" class=\"form-control\" name=\"end_timestamp\" id=\"end_timestamp\" value=\""
    + alias4(((helper = (helper = helpers.end_timestamp || (depth0 != null ? depth0.end_timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_timestamp","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"longitude\">Longitude</label>\n          <input type=\"number\" class=\"form-control\" name=\"longitude\" id=\"longitude\" value="
    + alias4(((helper = (helper = helpers.longitude || (depth0 != null ? depth0.longitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data}) : helper)))
    + ">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"latitude\">Latitude</label>\n          <input type=\"number\" class=\"form-control\" name=\"latitude\" id=\"latitude\" value="
    + alias4(((helper = (helper = helpers.latitude || (depth0 != null ? depth0.latitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data}) : helper)))
    + ">\n        </div>\n\n        <div class=\"checkbox\">\n        <label class=\"control-label\" for=\"active\">\n          <input type=\"checkbox\" name=\"active\" id=\"active\" value="
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + " checked> Active\n        </label>\n      </div>\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-readers-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submitForm\" onclick = \"form_submit('submitForm'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"reader_id\">Reader ID</label>\n          <input type=\"text\" class=\"form-control\" name=\"reader_id\" id=\"reader_id\" value=\""
    + alias4(((helper = (helper = helpers.reader_id || (depth0 != null ? depth0.reader_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reader_id","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <!--<div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"user_id\">User ID</label>\n          <input type=\"text\" class=\"form-control\" name=\"user_id\" id=\"user_id\" value=\""
    + alias4(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data}) : helper)))
    + "\">\n        </div>-->\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-readers-table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <tr>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.start_timestamp : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.end_timestamp : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.latitude : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.longitude : depth0), depth0))
    + "</td>\n        <td><button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modal2\" onclick = \"lat_long_change('"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'); return false;\" id=\"#myModal2\">Edit</button></td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id = \"grid-container\">\n  <table id=\"grid-basic\" name=\"myTable\" class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th data-column-id=\"start_time\">Start Timestamp</th>\n        <th data-column-id=\"end_time\">End Timestamp</th>\n        <th data-column-id=\"latitude\">Latitude</th>\n        <th data-column-id=\"longitude\">Longitude</th>\n        <th data-column-id=\"longitude\">Edit <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-toggle=\"modal\" data-target=\"#modal_add\" onclick = \"reader_add(); return false;\" id=\"#myModal3\">+</button></th>\n      </tr>\n    </thead>\n    <tbody id =\"locationRow\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n\n  <div class=\"modal fade\" id=\"modal2\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Edit Longitude/Latitude</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-lat-long\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <div class=\"modal fade\" id=\"modal_add\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Add Longitude/Latitude</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-location\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n</div>\n";
},"useData":true});
templates['tmpl-readers'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <option>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.reader_id : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div> <!--beginning div-->\n  <div class = \"tab-container\"> <!--tab container div-->\n    <div class = \"dropdown-reader\"> <!--dropdown div-->\n      <select class=\"form-control\" id=\"readers-container\" size = \"10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.readers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\n    </div> <!--end of dropdown div-->\n\n    <div id=\"readers-form\" class=\"form-container\"> <!--form div-->\n    </div> <!--end of form div-->\n    <div id=\"readers-table\" class = \"table-container\"> <!--table div-->\n    </div> <!--end of table div-->\n  </div> <!--end of container div-->\n</div> <!--ending div-->\n";
},"useData":true});
templates['tmpl-tags-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form id=\"submit_tags\" onclick = \"form_submit('submit_tags'); return false;\">\n\n        <div class=\"form-group\" style=\"display:none\">\n          <label class=\"control-label\" for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" name=\"url\" id=\"url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"reader_id\">Tag ID</label>\n          <input type=\"text\" class=\"form-control\" name=\"tag_id\" id=\"tag_id\" value=\""
    + alias4(((helper = (helper = helpers.tag_id || (depth0 != null ? depth0.tag_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag_id","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"sumbit\">\n            <button class=\"btn btn-primary\" id=\"submitButton\" value=\"PUT\">Submit</button>\n          </div>\n        </div>\n</form>\n";
},"useData":true});
templates['tmpl-tags-table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <tr>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.start_timestamp : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.end_timestamp : depth0), depth0))
    + "</td>\n        <td><button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#modal3\" onclick = \"tag_animal_change('"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'); return false;\" id=\"#myModal3\">Edit</button></td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id = \"tag-container\">\n  <table id=\"grid-basic\" name=\"myTable\" class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th data-column-id=\"name\">Name</th>\n        <th data-column-id=\"description\">Description</th>\n        <th data-column-id=\"start_time\">Start Timestamp</th>\n        <th data-column-id=\"end_time\">End Timestamp</th>\n        <th data-column-id=\"longitude\">Edit <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-toggle=\"modal\" data-target=\"#modal_add2\" onclick = \"tag_animal_add(); return false;\" id=\"#myModal_add2\">+</button></th>\n      </tr>\n    </thead>\n    <tbody id =\"animalRow\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n\n  <div class=\"modal fade\" id=\"modal3\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Edit Animal</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-tag-animal\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <div class=\"modal fade\" id=\"modal_add2\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Add Animal</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"modal-animal\"></div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n</div>\n";
},"useData":true});
templates['tmpl-tags'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <option>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.tag_id : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div> <!--beginning div-->\n  <div class = \"tab-container\"> <!--tab container div-->\n    <div class = \"dropdown-reader\"> <!--dropdown div-->\n      <select class=\"form-control\" id=\"tags-container\" size = \"10\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.readers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\n    </div> <!--end of dropdown div-->\n\n    <div id=\"tags-form\" class=\"form-container\"> <!--form div-->\n    </div> <!--end of form div-->\n    <div id=\"tags-table\" class = \"table-container\">\n    </div>\n  </div> <!--end of container div-->\n</div> <!--ending div-->\n";
},"useData":true});
templates['tmpl-tr'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr><td><a href=\"#\" onclick=\"showResult('"
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data}) : helper)))
    + "');return false;\" >"
    + alias4(((helper = (helper = helpers.task_name || (depth0 != null ? depth0.task_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"task_name","hash":{},"data":data}) : helper)))
    + "</a></td><td>"
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias4((helpers.json_metatags || (depth0 && depth0.json_metatags) || alias2).call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"json_metatags","hash":{},"data":data}))
    + "</td></tr>\n";
},"useData":true});
templates['tmpl-user'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <h2>User Profile</h2>\n      <div id=\"user_profile\">\n          <div id=\"photo\" class=\"col-md-2\" style=\"width:200px \">\n            <img src=\""
    + alias4(((helper = (helper = helpers.gravator_url || (depth0 != null ? depth0.gravator_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gravator_url","hash":{},"data":data}) : helper)))
    + "?s=180&d=mm\"><br><br>\n            <a href=\"https://en.gravatar.com/\" target=\"_blank\" style=\"clear:both;\">Profile Image</a><br><br>\n            <a id=\"reset_password\" style=\"clear:both;\">Reset Password</a>\n          </div>\n          <form  id=\"view_form\" class=\"form-horizontal col-md-4\" onsubmit=\"return edit_user();\">\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\">Username</label>\n                  <div class=\"col-md-09\">\n                <p class=\"form-control-static\">"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n             <div class=\"form-group\">\n                  <label class=\"col-md-3 control-label\">Name</label>\n                    <div class=\"col-md-09\">\n                  <p class=\"form-control-static\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                  </div>\n            </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-3 control-label\">Email</label>\n                  <div class=\"col-md-09\">\n                    <p class=\"form-control-static\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n                 </div>\n             </div>\n             <button type=\"submit\" id=\"form_submit\" class=\"btn btn-default pull-right\" style=\"margin-right:40px;\">Edit</button>\n         </form>\n          <form class=\"col-md-4\" id=\"user_form\" onsubmit=\"return submit_user();\">\n              <div style=\"display:none\">\n                  <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\""
    + alias4(((helper = (helper = helpers.csrftoken || (depth0 != null ? depth0.csrftoken : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"csrftoken","hash":{},"data":data}) : helper)))
    + "\"/>\n             </div>\n              <div class=\"form-group\">\n                 <label for=\"first_name\">First Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"first_name\" placeholder=\"John\" value=\""
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "\">\n             </div>\n              <div class=\"form-group\">\n                   <label for=\"last_name\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"last_name\" placeholder=\"Doe\" value=\""
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\">\n               </div>\n              <div class=\"form-group\">\n                 <label for=\"email\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n             </div>\n             <button type=\"submit\" id=\"form_submit\" class=\"btn btn-default pull-right\">Update</button>\n         </form>\n         <div class=\"row\" style=\"width:100%;clear:both;\"></div>\n          <form class=\"form-inline\" id=\"pass_form\" onsubmit=\"return set_password();\" style=\"display:none\">\n            <div style=\"display:none\">\n                    <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\""
    + alias4(((helper = (helper = helpers.csrftoken || (depth0 != null ? depth0.csrftoken : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"csrftoken","hash":{},"data":data}) : helper)))
    + "\"/>\n           </div>\n            <div class=\"form-group\">\n             <label for=\"password\">New Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"New Password\">\n           </div>\n            <div class=\"form-group\">\n             <label for=\"password2\">Retype New Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password2\" placeholder=\"Retype New Password\">\n           </div>\n           <button type=\"submit\" class=\"btn btn-default\">Set Password</button>\n         </form>\n\n     </div>\n";
},"useData":true});
})();