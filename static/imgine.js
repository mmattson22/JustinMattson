$(document).ready(function() {
	$.get("/image", function(data){
		console.log("What");
		console.log(data);
		$("#slideimg").attr("src",data);
	    });
    });
