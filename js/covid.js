//Get the modal//
const covidModal = document.getElementById('covidModal');
//Get The scroll element//
const scrollContainer = document.getElementById('scrollContainer');
//Get element to open covid modal//
const covidOpen = document.getElementById('modalOpen');
//Get the element to close the modal//
const covidClose = document.querySelector('.close_wrap');
//Get elements the will change on click within modal//
const covidIframe = document.querySelector('.covid_iframe');
//Get close wrap element//
const closeWrap = document.querySelector('.title_exit_wrap');
//Get the no scroll query//
const covidScroll = document.querySelector('body');

//Event listener Function to open menu and apply different animation styles//
covidOpen.addEventListener('click', () => {
    covidModal.style.width = "100%";
    covidModal.style.opacity = "1";
    covidModal.style.pointerEvents = "all";
    scrollContainer.style.opacity = "1";
    scrollContainer.style.transition = "opacity .5s ease-in";
    closeWrap.style.opacity = "1";
    covidScroll.classList.add('noScroll');
})
//Close the modal//
covidClose.addEventListener('click', () => {
    covidModal.style.width = "0";
    covidModal.style.pointerEvents = "none";
    scrollContainer.style.opacity = "0";
    scrollContainer.style.transition = "opacity .1ms ease-out";
    closeWrap.style.opacity = "0";
    covidScroll.classList.remove('noScroll');
})


