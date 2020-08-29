function binUhr(){
    date = new Date();
    var curSec = date.getSeconds()%10;
    var curMin = date.getMinutes()%10;
    var curHou = date.getHours()%10;
    var curSec10 = Math.floor(date.getSeconds()/10);
    var curMin10 = Math.floor(date.getMinutes()/10);
    var curHou10 = Math.floor(date.getHours()/10);
    //s
    var circle0 = document.getElementById('binUhrcircle0');
    var circle1 = document.getElementById('binUhrcircle1');
    var circle2 = document.getElementById('binUhrcircle2');
    var circle3 = document.getElementById('binUhrcircle3');
    //ss
    var circle4 = document.getElementById('binUhrcircle4');
    var circle5 = document.getElementById('binUhrcircle5');
    var circle6 = document.getElementById('binUhrcircle6');
    //m
    var circle00 = document.getElementById('binUhrcircle00');
    var circle01 = document.getElementById('binUhrcircle01');
    var circle02 = document.getElementById('binUhrcircle02');
    var circle03 = document.getElementById('binUhrcircle03');
    //mm
    var circle04 = document.getElementById('binUhrcircle04');
    var circle05 = document.getElementById('binUhrcircle05');
    var circle06 = document.getElementById('binUhrcircle06');
    //h
    var circle10 = document.getElementById('binUhrcircle10');
    var circle11 = document.getElementById('binUhrcircle11');
    var circle12 = document.getElementById('binUhrcircle12');
    var circle13 = document.getElementById('binUhrcircle13');
    //hh
    var circle14 = document.getElementById('binUhrcircle14');
    var circle15 = document.getElementById('binUhrcircle15');
    
    colorFour(curSec, circle0, circle1, circle2, circle3);
    colorFour(curMin, circle00, circle01, circle02, circle03);
    colorFour(curHou, circle10, circle11, circle12, circle13);
    colorThree(curSec10,circle4,circle5,circle6);
    colorThree(curMin10,circle04,circle05,circle06);
    colorTwo(curHou10,circle14,circle15);

    setTimeout("binUhr()", 1000);
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }