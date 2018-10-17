
var slideImgList = document.querySelectorAll(".ban-cast .slide-list .slide-item");
console.log(slideImgList);

var slideCircle = document.querySelectorAll(".ban-cast .circle-box .circle");
console.log(slideCircle);

let nSlide = 1;

var slideMove = function () {
    console.log("before: " + nSlide);
    if (nSlide > 4) {
        nSlide = 0;
    }
    slideImgList.forEach(function (val, index) {
        val.classList.remove("active");
        slideCircle[index].classList.remove("active");
    });
    slideImgList[nSlide].classList.add("active");
    slideCircle[nSlide].classList.add("active");
    nSlide++;
    console.log("after: " + nSlide);
};

var slideTimer = setInterval(slideMove, 2000);

var slideBox = document.querySelector(".ban-cast");
console.log(slideBox);

slideBox.onmouseover = function () {
    console.log("now: " + nSlide);
    clearInterval(slideTimer);
};

slideBox.onmouseout = function () {
    slideTimer = setInterval(slideMove, 2000);
};

slideCircle.forEach(function (val, index) {
    val.onclick = function () {
        slideCircle.forEach(function (val, index) {
            val.classList.remove("active");
            slideImgList[index].classList.remove("active");
        });
        this.classList.add("active");
        slideImgList[index].classList.add("active");
        if (nSlide > 4) {
            nSlide = 0;
        }
        else {
            nSlide = index + 1;
        }
    }
});

var slideLeft = document.querySelector(".ban-cast .slide-left");
console.log(slideLeft);
var slideRight = document.querySelector(".ban-cast .slide-right");
console.log(slideRight);

slideLeft.onclick = function () {
    console.log(nSlide);
    if (nSlide > 1){
        nSlide -= 2;
    }
    else {
        nSlide = 4;
    }
    slideImgList.forEach(function (val, index) {
        val.classList.remove("active");
        slideCircle[index].classList.remove("active");
    });
    slideImgList[nSlide].classList.add("active");
    slideCircle[nSlide].classList.add("active");

    nSlide++;
};

slideRight.onclick = function () {
    if (nSlide > 4){
        nSlide = 0;
    }

    slideImgList.forEach(function (val, index) {
        val.classList.remove("active");
        slideCircle[index].classList.remove("active");
    });
    slideImgList[nSlide].classList.add("active");
    slideCircle[nSlide].classList.add("active");

    nSlide++;
};

