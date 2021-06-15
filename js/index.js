const header = document.getElementById('header');
const headerLogo = document.getElementById('logo');

window.addEventListener('scroll', () => {
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