$(function() {
    tags_url="http://head.ouetag.org/api/etag/tags/.json"
    options(tags_url,'#myselectTag')
});

$(function() {
    readers_url="http://head.ouetag.org/api/etag/readers/.json"
    optionsReaders(readers_url,'#myselectReader')
});

function options(apiUrl, selector ){
    $.getJSON(apiUrl, function (data){

        $.each(data.results, function(key, value) {
         $(selector)
             .append($("<option></option>")
                        .attr("value",value.tag_id)
                        .text(value.tag_id));
        });
 

});
}
function optionsReaders(apiUrl, selector ){
    $.getJSON(apiUrl, function (data){

        $.each(data.results, function(key, value) {
         $(selector)
             .append($("<option></option>")
                        .attr("value",value.reader_id)
                        .text(value.reader_id));
        });
    });

}

