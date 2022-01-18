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