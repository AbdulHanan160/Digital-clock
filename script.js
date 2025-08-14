let mins = document.querySelector(".minutes p")
let hours = document.querySelector(".hours p")
let secs = document.querySelector(".seconds p")
let session = document.querySelector(".sessions p")
const showtime = () => {
    let now = new Date
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
  
    hours.innerHTML = h
    mins.innerHTML = m
    secs.innerHTML = s
    if (h > 12) {
        session.innerHTML = "PM"
    }
    if (h < 10) {
        hours.innerHTML = `0${h}`
    }
    if (m < 10) {
        mins.innerHTML = `0${m}`
    }
    if (s < 10) {
        secs.innerHTML = `0${s}`
    }
}

setInterval(showtime, 1000)
showtime()
