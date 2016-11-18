// JavaScript File
/*
Program Name: Recipe Display Application
Author: Ali Gurewicz
Date: November 18th, 2016
Filename: myrecipe.js
*/
//attach event listener to h3 elements to invoke display function when clicked 
    $ ("h3").click(display);
    
//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "green");
 }, function(){
 $(this).css("background-color", "blue");
});

//displays and animates the next element after the current target
function display2(event) {
        $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);