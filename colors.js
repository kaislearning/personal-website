"use strict";
var a = document.getElementById("first");

a.addEventListener("click", function() {
    let h = document.getElementById("firstSlide");
    if (h.style.transform == "translate(-100%)"){
        a.style.zIndex = 3;
        h.style.transform = "translate(0)";
    }
    else {
        h.style.transform = "translate(-100%)";        
    }
})