const toggleButton = document.querySelector('.toggle-button');
const menuLinks = document.querySelector('.menu-links');
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');
const vtexButton = document.querySelector('.vtex button');
const mainMenu = document.querySelector('.main-menu-div');
var isToggle = false;
var oldScroll = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > oldScroll) {
        mainMenu.classList.add('main-menu-down');
        mainMenu.classList.remove('main-menu-up');
    }
    if (window.scrollY < oldScroll) {
        mainMenu.classList.add('main-menu-up');
        mainMenu.classList.remove('main-menu-down');
    }
    if (window.scrollY < 50) {
        mainMenu.classList.remove('main-menu-up');        
    }
    oldScroll = window.scrollY;            
});

toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('menu-links-show');
    toggleButton.classList.toggle('button-fixed');
    if (isToggle) {
        returnButton();
    } else {
        animateButton();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.parentElement != toggleButton && event.target != toggleButton) {
        menuLinks.classList.remove('menu-links-show');
        toggleButton.classList.remove('button-fixed');
        returnButton();
    }
});

function animateButton() {
    bar1.style.transform = 'rotate(45deg) translateY(14px)';
    bar3.style.transform = 'rotate(-45deg) translateY(-14px)';
    bar2.style.width = '0';
    isToggle = true;
}

function returnButton() {
    bar1.style.transform = 'rotate(0) translateY(0)';
    bar3.style.transform = 'rotate(0) translateY(0)';
    bar2.style.width = '20px';
    isToggle = false;
}

setInterval(() => {
    vtexButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        vtexButton.style.transform = 'scale(0.9)';
    }, 125);
    setTimeout(() => {
        vtexButton.style.transform = 'scale(1)';
    }, 250);
}, 2000);