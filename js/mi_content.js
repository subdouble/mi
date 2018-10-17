
function contSwitch(switchName) {


    // var switchName = ".ovhd-1";

    console.log(switchName);
    console.log(switchName + " . item-list");
    var contList = document.querySelector(switchName + " .item-list");
    console.log(contList);
    var contCircle = document.querySelectorAll(switchName + " .circle-box .dot");
    console.log(contCircle);
    var contControl = document.querySelectorAll(switchName + " .controls a");
    console.log(contControl);

    var moveWidth = 296;

    var n = 0;

    contCircle.forEach(function (val, index) {
        console.log(val);
        console.log(index);
        val.onclick = function () {
            contCircle.forEach(function (val, index) {
                val.classList.remove("active");
            });
            val.classList.add("active");
            contList.style.left = (-moveWidth * index) + "px";
            console.log(contList.style.left);
            if (index === 0) {
                contControl[0].style.cursor = "default";
            }
            else {
                contControl[0].style.cursor = "pointer";
            }
            if (index === contCircle.length - 1) {
                contControl[1].style.cursor = "default";
            }
            else {
                contControl[1].style.cursor = "pointer";
            }
            n = index;
            console.log(n);
        }
    });

    contControl[0].onclick = function () {
        if (n === 0) {
        }
        else {
            n--;
            contList.style.left = (-moveWidth * n) + "px";
            contCircle.forEach(function (val, index) {
                val.classList.remove("active");
            });
            contCircle[n].classList.add("active");
        }
        if (n === 0) {
            contControl[0].style.cursor = "default";
        }
        else {
            contControl[0].style.cursor = "pointer";
        }
        if (n === contCircle.length - 1) {
            contControl[1].style.cursor = "default";
        }
        else {
            contControl[1].style.cursor = "pointer";
        }
    };

    contControl[1].onclick = function () {
        if (n === contCircle.length - 1) {
        }
        else {
            n++;
            contList.style.left = (-moveWidth * n) + "px";
            contCircle.forEach(function (val, index) {
                val.classList.remove("active");
            });
            contCircle[n].classList.add("active");
        }
        if (n === 0) {
            contControl[0].style.cursor = "default";
        }
        else {
            contControl[0].style.cursor = "pointer";
        }
        if (n === contCircle.length - 1) {
            contControl[1].style.cursor = "default";
        }
        else {
            contControl[1].style.cursor = "pointer";
        }
    };

}

contSwitch(".ovhd-1");
contSwitch(".ovhd-2");
contSwitch(".ovhd-3");
contSwitch(".ovhd-4");
