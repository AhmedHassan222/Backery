let navItems = document.querySelectorAll('.nav-items')
for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = 'white'
}
$(window).scroll(function () {
    let wscroll = $(window).scrollTop()
    if (wscroll >= 30) {
        $('#nav').css('backgroundColor', 'rgba(255,255,255,0.9)')
        $('.nav-items').css('color', 'black')
        document.querySelector('img').setAttribute('src', 'pic/bakery-color.png')
        document.querySelector('nav').classList.replace('navbar-dark', 'navbar-light')
        document.querySelector('#goUp').classList.replace('opacity-0', 'opacity-100')
    } else {
        $('#nav').css('backgroundColor', 'transparent')
        $('.nav-items').css('color', 'white')
        document.querySelector('img').setAttribute('src', 'pic/bakery-light-1.png')
        document.querySelector('nav').classList.replace('navbar-light', 'navbar-dark')
        document.querySelector('#goUp').classList.replace('opacity-100', 'opacity-0')
    }
});
document.getElementById('smallbtn').addEventListener('click', function () {
    if ($(window).scrollTop() <= 100) {
        window.scrollTo(0, 100)
    }
})
document.querySelector('#goUp').addEventListener('click', function () {
    scrollTo(0, 0)
})