$(document).ready(function(){
alert("Ready Called...");

$(".like").click(function(){
    var id = $(this).attr("id");
    var that = $(this);
    alert("Like Request "+id);

    var ajaxparams = {
        type: "GET", //The type of HTTP method (post, get, etc)
        url: "like?id="+id, //The URL from the form element where the AJAX request will be sent

        dataType: "json"
    }

    var promise = $.ajax(ajaxparams);
    promise.success(function(response){
        alert("JSON Response "+response);
       alert("Response "+response.count.n);
        that.html("Like<sub>"+response.count.n+"</sub>");
    });
    promise.error(function(xhr,errorCode, errorStatus){
        alert("Error ",errorCode);
    });
});

$(".unlike").click(function(){
    alert("UnLike Request");
});
});
