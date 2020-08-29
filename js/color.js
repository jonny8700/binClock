function colorFour(dig, circle1, circle2, circle3, circle4){
    if (dig % 2 == 1)
        circle1.style.fill="black";
    else
        circle1.style.fill="white";

    if (dig == 2 || dig == 3 ||dig == 6 || dig == 7)
        circle2.style.fill="black";
    else
        circle2.style.fill="white";

    if (dig <= 7 && dig >= 4)
        circle3.style.fill="black";
    else
        circle3.style.fill="white";

    if (dig >= 8)
        circle4.style.fill="black";
    else
        circle4.style.fill="white";
}
function colorThree(dig, circle1, circle2, circle3){
    if (dig % 2 == 1)
        circle1.style.fill="black";
    else
        circle1.style.fill="white";

    if (dig == 2 || dig == 3 ||dig == 6 || dig == 7)
        circle2.style.fill="black";
    else
        circle2.style.fill="white";

    if (dig <= 7 && dig >= 4)
        circle3.style.fill="black";
    else
        circle3.style.fill="white";
}
function colorTwo(dig, circle1, circle2){
    if (dig % 2 == 1)
        circle1.style.fill="black";
    else
        circle1.style.fill="white";

    if (dig == 2 || dig == 3 ||dig == 6 || dig == 7)
        circle2.style.fill="black";
    else
        circle2.style.fill="white";
}


