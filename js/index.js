const header = document.getElementById('header');
const navItems = document.getElementById('navItems');
const body = document.querySelector('body');

const toggleMenu = (menu) => {
    navItems.classList.toggle('nav-active');
    menu.classList.toggle('hamburger__active')
    body.classList.toggle('menu-overflow')

    if(menu.classList.contains('hamburger__active')){
      header.style.background = '#141414';
    }else{
      header.style.background='transparent';
    }
}


window.addEventListener('scroll', () => {

  if(navItems.classList.contains('nav-active')){
    return
  }else{
    if(window.scrollY >= 75){
      header.style.background = 'rgba(20, 20, 20, 0.9)';
    }else{
        header.style.background = 'transparent';
    }
  }
    
    
})

var countDownDate = new Date("July 28, 2021 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
