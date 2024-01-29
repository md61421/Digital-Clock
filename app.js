let hrs = document.querySelector("#hours");
let min = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);
