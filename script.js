let mins = document.querySelector(".minutes p")
let hour = document.querySelector(".hours p")
let secs = document.querySelector(".seconds p")
let session = document.querySelector(".sessions p")
let hours =document.querySelector(".hours")
let minutes =document.querySelector(".minutes")
let seconds =document.querySelector(".seconds")
const showtime = () => {
    let now = new Date
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let ms=now.getMilliseconds()
  
    hour.innerHTML = h
    mins.innerHTML = m
    secs.innerHTML = s
    if (h > 12) {
        session.innerHTML = "PM"
    }
    if (h < 10) {
        hour.innerHTML = `0${h}`
    }
    if (m < 10) {
        mins.innerHTML = `0${m}`
    }
    if (s < 10) {
        secs.innerHTML = `0${s}`
    }
    let radius_sec=((s+ms/1000)/60)*360
    let radius_min=(m/60)*360
    let radius_hour=(h/24)*360
    seconds.style.background=`conic-gradient(rgb(51, 42, 231) ${radius_sec}deg, rgb(51, 42, 231) 0deg, white ${radius_sec}deg)`
    minutes.style.background=`conic-gradient(rgb(244, 237, 13) ${radius_min}deg, rgb(244, 237, 13) 0deg, white ${radius_min}deg)`
    hours.style.background=`conic-gradient(red ${radius_hour}deg, red 0deg, white ${radius_hour}deg)`
    
    requestAnimationFrame(showtime)
}

// setInterval(showtime, 1000)

showtime()
