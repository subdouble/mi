var toTop = document.querySelector(".to-top");
var topHeight = document.documentElement.scrollTop;
if (topHeight > 1000) {
	toTop.style.visibility = "visible";
}

window.onscroll = function(){
	topHeight = document.documentElement.scrollTop;
	if(topHeight > 1000) {
		toTop.style.visibility = "visible";
	}
	else {
		toTop.style.visibility = "hidden";
	}
}
