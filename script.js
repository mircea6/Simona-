function updateCountdown() {
    const targetDate = new Date("May 11, 2024 22:30:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + " days";
    document.getElementById('hours').innerHTML = hours + " hours";
    document.getElementById('minutes').innerHTML = minutes + " minutes";
    document.getElementById('seconds').innerHTML = seconds + " seconds";

    if (difference < 0) {
        clearInterval(x);
        document.querySelector('.countdown-container').innerHTML = "Event has started!";
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);

let menu_icon_box  = document.querySelector(".menu_icon_box");
let navbar = document.querySelector(".navbar");

menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    navbar.classList.toggle("active");
}

document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !navbar.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        navbar.classList.remove("active");
    }
}