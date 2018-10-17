var topHeight = 0;
var schFx = document.querySelector(".sch-fx");
console.log(schFx);

window.onscroll = function(){
	topHeight = document.documentElement.scrollTop;
	if(topHeight > 1000) {
		schFx.style.top = "0";
		setTimeout(function(){
			schFx.style.transition = "all 0s";
		}, 500)
	}
	else {
		schFx.style.top = "-101px";
		setTimeout(function(){
			schFx.style.transition = "all .5s";
		}, 50)
	}
}
