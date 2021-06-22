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


  document.getElementById('days-timer').innerHTML = days;
  document.getElementById('hours-timer').innerHTML = hours;
  document.getElementById('minutes-timer').innerHTML = minutes;
  document.getElementById('seconds-timer').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



const teamsSwitcher = () => {
  const gamesIcons = document.querySelector('.teams__icons').children;
  const gamesContainer = document.querySelector('.teams-container__news').children;
  const arrIcons = [].slice.call(gamesIcons)
  const arrGames = [].slice.call(gamesContainer)

  arrIcons.forEach(element => {

    element.addEventListener('click', () =>{

      const classes = [...element.classList];

      element.classList.add('games-active');

      arrIcons.forEach(item => {
        if(item !== element){
          item.classList.remove('games-active')
        }
      })

      arrGames.forEach(game => {
        if(game.classList.contains(classes[0])){
          game.classList.remove('games-disabled')
        }else{
          game.classList.add('games-disabled')
        }
      })
      
    })
  })
}

teamsSwitcher()