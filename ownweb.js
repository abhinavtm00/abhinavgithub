let menuIcons = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]')
                .classList.add('active')
            })
        }
    })
}

menuIcon.oneclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');

}