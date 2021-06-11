"use strict";
let count = 10;
setInterval(myFunction, 1000);
setTimeout(timeoutfunction, count * 1000);
function myFunction() {
  let date = new Date();
  let d1 = date.getHours() - 12;
  console.log(d1);
  if (d1 < 10) {
    d1 = "0" + d1;
  }
  let d2 = date.getMinutes();
  if (d2 < 10) {
    d2 = "0" + d2;
  }
  let d3 = date.getSeconds();
  if (d3 < 10) {
    d3 = "0" + d3;
  }
  document.getElementById("first").innerHTML = d1 + ":" + d2 + ":" + d3;
}
function timeoutfunction() {
  count = Number(prompt("Enter the next timeout:"));
  setTimeout(timeoutfunction, count * 1000);
}
