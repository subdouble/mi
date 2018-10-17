var top_active = document.querySelectorAll(".household .mbp-title .more>div");
var bottom_active = document.querySelectorAll(".household .mbp-con .right-item");
console.log(top_active);
console.log(bottom_active);

//for(let i = 0; i < top_active.length; i ++){
//	top_active[i].onmouseenter = function(){
//		console.log(top_active[i]);
//		for(var j = 0; j < top_active.length; j ++){
//			top_active[j].classList.remove("active");
//			bottom_active[j].classList.remove("active");
//		}
//		top_active[i].classList.add("active");
//		bottom_active[i].classList.add("active");
//	}
//}

//top_active.forEach(function(val, index) {
//	val.onmouseenter = function() {
//		top_active.forEach(function(val, index) {
//			val.classList.remove("active");
//			bottom_active[index].classList.remove("active");
//		})
//		val.classList.add("active");
//		bottom_active[index].classList.add("active");
//	}
//})

function tabSwitch(name) {
	var top_active = document.querySelectorAll(name + " .top-switch>div");
	var bottom_active = document.querySelectorAll(name + " .bottom-switch>div");

	top_active.forEach(function(val, index) {
		val.onmouseenter = function() {
			top_active.forEach(function(val, index) {
				val.classList.remove("active");
				bottom_active[index].classList.remove("active");
			})
			val.classList.add("active");
			bottom_active[index].classList.add("active");
		}
	})
}

tabSwitch(".household-1");
tabSwitch(".household-2");