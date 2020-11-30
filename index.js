window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.intro .dark');
    let scrollPos = window.pageYOffset;

    parallax.style.transform = 'translateY(' +scrollPos * -0.5 + 'px)';
})


function scrollAppear() {
    var jeeText = document.querySelector('.jee');
    var jeePosition = jeeText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2.5;

    if (screenPosition < jeePosition) {
        jeeText.classList.add('jee-appear');
    }
}

window.addEventListener('scroll', scrollAppear);