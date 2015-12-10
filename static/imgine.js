$(document).ready(function() {
	
	var imgnum = 2;
	
	function getImage(i) {
	$.get("/image/" + i, function(data){
		console.log("What");
		console.log(data);
		$("#slideimg").attr("src",data);
	    });
	};

	var slideshow = function slideshow(){
	    getImage(imgnum);
	    if (imgnum < 5)
		imgnum++;
	    else
		imgnum = 1;
	};
	
	setInterval(slideshow,2000);
    });
