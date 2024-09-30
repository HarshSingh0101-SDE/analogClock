let hours = document.getElementById("tickerH");
let minutes = document.getElementById("tickerM");
let seconds = document.getElementById("tickerS");


 function tickerRotation(){
    
   let date = new Date();

   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let hTicker = 30*hh + mm/2;
   let mTicker = 6*mm;
   let sTicker = 6*ss;


    hours.style.transform = `rotate(${hTicker}deg)`;
    minutes.style.transform = `rotate(${mTicker}deg)`;
    seconds.style.transform = `rotate(${sTicker}deg)`;
 }

 setInterval(tickerRotation, 1000);