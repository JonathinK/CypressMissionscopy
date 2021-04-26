const openNav = document.getElementById('openMenu');
const mobileMenu = document.querySelector('.nav_wrap');
const closeNav = document.getElementById('closeMenu');
const showLinks = document.querySelector('.nav_links');
const covidLink = document.getElementById('modalOpen');
const dropTrigger = document.getElementById('dropTrigger');
const dropMenu = document.getElementById('dropDown');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const line = document.querySelectorAll('.linkHover::before');
const lineHover = document.querySelector('.linkHover:hover:before');
const body = document.querySelector('body');
//Drop Menu Open and Close//
dropTrigger.addEventListener('click', () => {
    if(dropMenu.classList.contains('dropOpen')){
        dropMenu.classList.remove('dropOpen');
        link1.classList.remove('linksShow');
        link2.classList.remove('linksShow');
    }else{
        dropMenu.classList.add('dropOpen');
        link1.classList.add('linksShow');
        link2.classList.add('linksShow');
    }
});


//Open Nav Menu//
openNav.addEventListener('click', () => {
   mobileMenu.classList.add("menuOpen");
   closeNav.style.display = ("block");
   showLinks.classList.add("showLinks");
   body.classList.add("noScroll"); 
   mobileMenu.style.transition = "width .6s ease-in-out";
   dropMenu.classList.remove('dropOpen');
   link1.classList.remove('linksShow');
   link2.classList.remove('linksShow');
});
//Close Nav Menu//
closeNav.addEventListener('click', () => {
    mobileMenu.classList.remove("menuOpen");
    closeNav.style.display = ("none");
    showLinks.classList.remove("showLinks");
    body.classList.remove("noScroll");
    mobileMenu.style.transition = "width .6s ease-in-out";
    dropMenu.classList.remove('dropOpen');
    link1.classList.remove('linksShow');
    link2.classList.remove('linksShow');
 });
//If covid link is clicked then nav menu closes//
covidLink.addEventListener('click', () =>{
    mobileMenu.classList.remove("menuOpen");
    showLinks.classList.remove('showLinks');
});
//Removes any styles that would cause awkward pre animations on resizing//
window.addEventListener("resize", () => {
    if(window.innerWidth < 800){
        mobileMenu.classList.remove("menuOpen");
        closeNav.style.display = ("none");
        showLinks.classList.remove("showLinks");
        body.classList.remove("noScroll");
        mobileMenu.style.transition = "none";
        dropMenu.classList.remove('dropOpen');
        link1.classList.remove('linksShow');
        link2.classList.remove('linksShow');
    }
}); 

window.addEventListener("resize", () => {
    if(window.innerWidth > 800){
        mobileMenu.classList.remove("menuOpen");
        closeNav.style.display = ("none");
        showLinks.classList.remove("showLinks");
        body.classList.remove("noScroll"); 
        mobileMenu.style.transition = "none";
        dropMenu.classList.remove('dropOpen');
        link1.classList.remove('linksShow');
        link2.classList.remove('linksShow');
    }
});


