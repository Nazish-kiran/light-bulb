var power = document.querySelector(".switch")
var bulb = document.querySelector(".bulb-icon")
var body = document.querySelector("body")

const powerOn = ()=>{
    power.classList.toggle("onSwitch")
    bulb.classList.toggle("onBulb")
    body.classList.toggle("on")

}

power.addEventListener("click",powerOn)