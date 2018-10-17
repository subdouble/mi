var floorBox = document.querySelector(".floor");
console.log(floorBox);

var jumpList = document.querySelectorAll(".floor-item");
console.log(jumpList);

var floorList = document.querySelectorAll(".floor-ent");
console.log(floorList);

document.documentElement.scrollTop = 1;
var toTop = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
document.documentElement.scrollTop = 0;

for(let i = 0; i < jumpList.length - 1; i ++){
	jumpList[i].onclick = function(){
		var floorTop = floorList[i].offsetTop;
		if(toTop.scrollTop < floorTop){
			var jumpTimer = setInterval(function(){
				if(toTop.scrollTop > floorTop){
					clearInterval(jumpTimer);
					toTop.scrollTop = floorTop;
					console.log("cleardown");
				}
				else{
					toTop.scrollTop += 50;
				}
			}, 10)
		}
		else{
			var jumpTimer = setInterval(function(){
				if(toTop.scrollTop < floorTop){
					clearInterval(jumpTimer);
					toTop.scrollTop = floorTop;
					console.log("clearup");
				}
				else{
					toTop.scrollTop -= 50;
				}
			}, 10)
		}
	}
}

var floorShowHeight = floorList[0].offsetHeight;

// to-top-bar
var toTopBar = document.querySelector(".to-top");
var topHeight = document.documentElement.scrollTop;
if (topHeight > 1000) {
	toTopBar.style.visibility = "visible";
}

toTopBar.onclick = function(){
	toTopAnimation(500, 10);
}

// schFx
var schTopHeight = 0;
var schFx = document.querySelector(".sch-fx");

window.onscroll = function(){
	if(toTop.scrollTop >= floorShowHeight){
		floorBox.style.display = "block";
	}
	else{
		floorBox.style.display = "none";
	}
	
	
	topHeight = document.documentElement.scrollTop;
	if(topHeight > 1000) {
		toTopBar.style.visibility = "visible";
	}
	else {
		toTopBar.style.visibility = "hidden";
	}
	
	schTopHeight = document.documentElement.scrollTop;
	if(schTopHeight > 1000) {
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
	
	for(let i = 0; i < jumpList.length - 1; i ++){
		var floorTop = floorList[i].offsetTop;
		jumpList.forEach(function(val, index){
			jumpList[i].style.background = "transparent";
		})
		if(toTop.scrollTop >= floorTop && toTop.scrollTop <= floorTop + floorList[i].offsetHeight){
			jumpList[i].style.background = "#FF6700";
			jumpList[i].style.color = "#fff !important";
		}
	}
}

jumpList[jumpList.length - 1].onclick = function(){
	toTopAnimation();
};

function toTopAnimation(step = 100, time = 10){
	if(toTop.scrollTop != 0){
		var toTopTimer = setInterval(function(){
			if(toTop.scrollTop == 0){
				clearInterval(toTopTimer);
			}
			toTop.scrollTop -= step;
		}, time)
	}
}