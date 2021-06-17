const header = document.getElementById('header');
const headerLogo = document.getElementById('logo');

/*window.addEventListener('scroll', () => {
    if(window.scrollY >= 75){
        header.style.background = 'black';
        header.style.opacity = '0.7';
        header.style.height = '8vh';
        headerLogo.style.height="50px";
    }else{
        header.style.background = 'transparent';
        header.style.opacity = '1';
        header.style.height = '12vh';
        headerLogo.style.height="100px";
    }
    
})
*/
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

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);