'use strict';

/**********************************Functions************************************************************* */

function clock(){
    let date= new Date();
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(hour>12){
      hour= hour-12;
    }
    let angleHour= hour*30;
    let angleMinutes=minutes*6;
    let angleSeconds=seconds*6;
    
    if(angleMinutes>180){
      angleHour=angleHour + angleMinutes/12;
    }
     document.getElementById("circle1")
        .style.transform="rotate("+angleHour+"deg";
    document.getElementById("circle2")
      .style.transform="rotate("+angleMinutes+"deg";
     document.getElementById("circle3")
      .style.transform="rotate("+angleSeconds+"deg";
  }
  
  function mood(){
    let moodTable=[":-)", ":=<", "zzZZ", "busy", "love"];
    let date= new Date();
    let hour=date.getHours();
    let random= Math.floor((Math.random() * moodTable.length-1) + 1);   
    document.querySelector("input").value=moodTable[random];  
  }



  /****************************************Events******************************************************** */
  window.onload=function(){mood(), clock()};
  setInterval(clock, 1000); 