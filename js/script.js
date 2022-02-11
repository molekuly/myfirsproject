var elem = document.querySelector(".menu_icon");
elem.addEventListener('click', openModal);

function openModal() {
    var menuBody = document.querySelector(".menu_body");
    menuBody.classList.toggle("active");
    elem.classList.toggle("close");
}

var openWin = document.getElementById("openWin");
var one = document.getElementById("one").addEventListener('click', page1);
var two = document.getElementById("two").addEventListener('click', page2);
var three = document.getElementById("three").addEventListener('click', page3);
var four = document.getElementById("four").addEventListener('click', page4);
var five = document.getElementById("five").addEventListener('click', page5);
var six = document.getElementById("six").addEventListener('click', page6);
var seven = document.getElementById("seven").addEventListener('click', page7);
var eight = document.getElementById("eight").addEventListener('click', page8);

function page1() {
    openWin.setAttribute("src", "pages/ссылка1.html");


    //pages/ссылка1.html

}

function page2() {
    openWin.setAttribute("src", "pages/ссылка2.html");
}

function page3() {
    openWin.setAttribute("src", "pages/ссылка3.html");
}
function page4() {
    openWin.setAttribute("src" , "pages/accordion.html");
} 

function page5() {
    openWin.setAttribute("src" , "pages/jrl.html");
} 

function page6() {
    openWin.setAttribute("src" , "pages/LKFGLKMR.html");
} 

function page7() {
    openWin.setAttribute("src" , "pages/modal.html");
} 

function page8() {
    openWin.setAttribute("src" , "pages/table.html");
} 