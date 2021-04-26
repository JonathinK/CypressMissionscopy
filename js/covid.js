//Get the modal//
const covidModal = document.getElementById('covidModal');
//Get The scroll element//
const scrollContainer = document.getElementById('scrollContainer');
//Get element to open covid modal//
const covidOpen = document.getElementById('modalOpen');
//Get the element to close the modal//
const covidClose = document.getElementById('menuClose');
//Get elements the will change on click within modal//
const covidIframe = document.querySelector('modal_iframe');
//Get close wrap element//
const closeWrap = document.getElementById('closeWrap');

//Event listener Function to open menu and apply different animation styles//
covidOpen.addEventListener('click', () => {
    covidModal.style.width = "100%";
    scrollContainer.style.opacity = "1"
    scrollContainer.style.transition = "opacity .5s ease-in .8s";
    closeWrap.style.opacity = "1";
    covidClose.style.opacity = "1";
})

//Event Listener to Close the menu and remove the styles//
covidClose.addEventListener('click', () => {
    covidModal.style.width = "0";
    scrollContainer.style.opacity = "0";
    scrollContainer.style.transition = "opacity .2s ease-out";
    closeWrap.style.opacity = "0";
    covidClose.style.opacity = "0";
})
