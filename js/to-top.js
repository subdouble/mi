var toTopBar = document.querySelector(".to-top");
var topHeight = document.documentElement.scrollTop;
if (topHeight > 1000) {
	toTopBar.style.visibility = "visible";
}

window.onscroll = function(){
	console.log("zhixingle");
	topHeight = document.documentElement.scrollTop;
	if(topHeight > 1000) {
		toTopBar.style.visibility = "visible";
	}
	else {
		toTopBar.style.visibility = "hidden";
	}
}
