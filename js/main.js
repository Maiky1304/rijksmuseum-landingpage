const topBtn = document.querySelector('.top-btn');

$(window).scroll(event => {
    var scroll = $(window).scrollTop();
    
    if (scroll >= 250) {
        if (topBtn.classList.contains('hidden')) {
            topBtn.classList.remove('hidden');
        }
    } else {
        if (!topBtn.classList.contains('hidden')) {
            topBtn.classList.add('hidden');
        }
    }
});

const menuButton = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
$(menuButton).click(event => {
    const menu = document.querySelector('.mobile-menu-div');
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('hidden');
})