var floorBox = document.querySelector(".floor");
console.log(floorBox);

var jumpList = document.querySelectorAll(".floor-item");
console.log(jumpList);

var floorList = document.querySelectorAll(".floor-ent");
console.log(floorList);

document.documentElement.scrollTop = 1;
var toTop = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
document.documentElement.scrollTop = 0;



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
	var toTop = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
	
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
			jumpList[i].firstElementChild.style.color = "#757575";
		})
		if(toTop.scrollTop >= floorTop && toTop.scrollTop <= floorTop + floorList[i].offsetHeight){
			jumpList[i].style.background = "#FF6700";
			jumpList[i].firstElementChild.style.color = "#fff";
		}
	}
}

var jumpFlag = true;

for(let i = 0; i < jumpList.length - 1; i ++){
	jumpList[i].onclick = function(){
		let floorTop = floorList[i].offsetTop;
		if(toTop.scrollTop > floorTop){
			jumpFlag = false;
		}
		else{
			jumpFlag = true;
		}
		let jumpTimer = setInterval(function(){
			if(jumpFlag){
				if(toTop.scrollTop >= floorTop){
					clearInterval(jumpTimer);
					toTop.scrollTop = floorTop;
				}
				else{
					toTop.scrollTop += 50;
				}
			}
			else{
				if(toTop.scrollTop <= floorTop){
					clearInterval(jumpTimer);
					toTop.scrollTop = floorTop;
				}
				else{
					toTop.scrollTop -= 50;
				}
			}
		}, 10)
		
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


let headItem = document.querySelectorAll(".header .item");
console.log(headItem);
let headItemHide = document.querySelectorAll(".header .item-hide");
console.log(headItemHide);


for(let i = 0; i < headItemHide.length; i ++){
	headItem[i].onmouseover = function(){
		headItemHide.forEach(function(value, index){
			value.classList.remove("active-hide");
			value.style.height = "230px";
		})
		headItemHide[i].classList.add("active-hide");
	}
}

for(let i = 0; i < headItemHide.length; i ++){
	headItem[i].onmouseout = function(){
		headItemHide.forEach(function(value, index){
			value.style.height = "0px";
			value.classList.remove("active-hide");
		})
	}
}


let purMoveBox = document.querySelector(".pur-con .item-list");
let purMoveBoxLen = purMoveBox.offsetWidth;
let purMoveStep = 978;
let purLeft = document.querySelector(".pur-title .left");
let purRight = document.querySelector(".pur-title .right");
let nPur = 1;



purLeft.onclick = function(){
	if(nPur == 1){
		purMoveBox.style.marginLeft = "0px";
	}
	else{
		nPur--;
		purMoveBox.style.marginLeft = (- (nPur - 1) * purMoveStep - 248) + "px";
	}
}

purRight.onclick = function(){
	if(nPur == 2){
		purMoveBox.style.marginLeft = "-1240px";
	}
	else{
		purMoveBox.style.marginLeft = (- nPur * purMoveStep) + "px";
		nPur++;
	}
}

purMoveBox.addEventListener("transitionend", function(){
	if(getComputedStyle(purMoveBox).marginLeft == "-1240px"){
		purRight.classList.remove("active");
		purRight.style.cursor = "default";
	}
	else{
		purRight.classList.add("active");
		purRight.style.cursor = "pointer";
	}
	
	if(getComputedStyle(purMoveBox).marginLeft == "0px"){
		purLeft.classList.remove("active");
		purLeft.style.cursor = "default";
	}
	else{
		purLeft.classList.add("active");
		purLeft.style.cursor = "pointer";
	}
})