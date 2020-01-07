$(document).ready(function() {
    var button1 = document.getElementById('slide');
    button1.onclick = function () {
        var container1 = document.getElementById('container');
        sideScroll(container1,'right',25,100,10);
    };
  
    var back1 = document.getElementById('slideBack');
    back1.onclick = function () {
        var container1 = document.getElementById('container');
        sideScroll(container1,'left',25,100,10);
    };
  
    function sideScroll(element,direction,speed,distance,step){
        scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    
    var button2 = document.getElementById('slide2');
    button2.onclick = function () {
        var container2 = document.getElementById('container2');
        sideScroll(container2,'right',25,100,10);
    };
  
    var back2 = document.getElementById('slideBack2');
    back2.onclick = function () {
        var container2 = document.getElementById('container2');
        sideScroll(container2,'left',25,100,10);
    };
  
    function sideScroll(element,direction,speed,distance,step){
        scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
  
    var button3 = document.getElementById('slide3');
    button3.onclick = function () {
        var container3 = document.getElementById('container3');
        sideScroll(container3,'right',25,100,10);
    };
  
    var back3 = document.getElementById('slideBack3');
    back3.onclick = function () {
        var container3 = document.getElementById('container3');
        sideScroll(container3,'left',25,100,10);
    };
  
    function sideScroll(element,direction,speed,distance,step){
        scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
  
});