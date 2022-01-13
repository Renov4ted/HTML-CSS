let userName = prompt ("Lutfen isminizi giriniz")

let myName = document.querySelector("#myName")

myName.innerHTML = `${userName}`

// Saatte Anlık olarak ilerleme için Function Kullandım

function showTime() {

let DAY = new Date();

let DAYS = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let time = document.querySelector("#myClock")

time.innerHTML = `${DAY.getHours()}:${DAY.getMinutes()}: ${DAY.getSeconds()}: ${DAYS[DAY.getUTCDay()]} :`
setTimeout(showTime, 1000);

}
showTime();