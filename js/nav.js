const openNav = document.getElementById('openMenu');
const mobileMenu = document.querySelector('.nav_links');
const closeNav = document.getElementById('closeMenu');
const covidLink = document.getElementById('modalOpen');
const link1 = document.querySelector('.nav_links .link1');
const link2 = document.querySelector('.nav_links .link2');
const link3 = document.querySelector('.nav_links .link3');
const link4 = document.querySelector('.nav_links .link4');
const link5 = document.querySelector('.nav_links .link5');
const link6 = document.querySelector('.nav_links .link6');
const body = document.querySelector('body');

//Open Nav Menu//
openNav.addEventListener('click', () => {
   mobileMenu.classList.add("menuOpen");   
   mobileMenu.style.transition = "width .6s ease-in-out";
   closeNav.style.opacity = ("1");
   closeNav.style.transition = ("opacity .3s ease-in .5s");
   closeNav.style.pointerEvents = ("all");
   body.classList.add("noScroll"); 
   link1.classList.add("slide");
   link2.classList.add("slide");
   link3.classList.add("slide");
   link4.classList.add("slide");
   link5.classList.add("slide");
   link6.classList.add("slide");
});

//Close Nav Menu//
closeNav.addEventListener('click', () => {
    mobileMenu.classList.remove("menuOpen");
    mobileMenu.style.transition = "width .6s ease-in-out";
    closeNav.style.opacity = ("0");
    closeNav.style.transition = ("opacity .3s ease-out");
    closeNav.style.pointerEvents = ("none");
    body.classList.remove("noScroll");
    link1.classList.remove("slide");
    link2.classList.remove("slide");
    link3.classList.remove("slide");
    link4.classList.remove("slide");
    link5.classList.remove("slide");
    link6.classList.remove("slide");
 });


//Removes any styles that would cause awkward pre animations on resizing//
window.addEventListener("resize", () => {
    if(window.innerWidth < 768){
        mobileMenu.classList.remove("menuOpen");
        mobileMenu.style.transition = "none";
        closeNav.style.opacity = ("0");
        closeNav.style.transition = ("opacity .1ms ease-out");
        closeNav.style.pointerEvents = ("none");
        body.classList.remove("noScroll");
        link1.classList.remove("slide");
        link2.classList.remove("slide");
        link3.classList.remove("slide");
        link4.classList.remove("slide");
        link5.classList.remove("slide");
        link6.classList.remove("slide");
    }
}); 

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        mobileMenu.classList.remove("menuOpen");
        mobileMenu.style.transition = "none";
        closeNav.style.opacity = ("0");
        closeNav.style.transition = ("opacity .1ms ease-out");
        closeNav.style.pointerEvents = ("none");
        body.classList.remove("noScroll"); 
        link1.classList.remove("slide");
        link2.classList.remove("slide");
        link3.classList.remove("slide");
        link4.classList.remove("slide");
        link5.classList.remove("slide");
        link6.classList.remove("slide");
    }
});


