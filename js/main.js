var hr = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var date = document.getElementById("date");
var mnth = document.getElementById("month");
var yr = document.getElementById("year");
var ap = document.getElementById("am-pm");


var a = function() {
    const b = new Date();
    let x = b.getHours();
    let y = b.getMinutes();
    let z = b.getSeconds();
    let i = b.getDate();
    let j = b.getMonth();
    let k = b.getFullYear();
    

    hr.innerText = x;
    min.innerText = y;
    sec.innerText = z;

    date.innerText = i;
    mnth.innerText = j+1;
    yr.innerText = k;

    if (x==0) {
        ap.innerText = "AM";
    }
    else if (x>=12) {
        ap.innerText = "PM";
    }



     
}
a()
setInterval(a,1000) 





