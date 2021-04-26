//Get The Selector Elements//
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
//Get The Elements That Are To Be Changed//
const loc = document.getElementById('location');
const timeline = document.getElementById('timeline');
const description = document.getElementById('description');

//This is a reload bind that loads the default content on the page//
c1.addEventListener('click', () =>{
    c1.style.background = "var(--accent-clr)";
    c2.style.background = "white";
    c3.style.background = "white";
    loc.innerText = "Long Branch, NJ";
    timeline.innerText = "June 13th - June 16th"; 
});
//Changes to next event//
c2.addEventListener('click', () =>{
    c1.style.background = "white";
    c2.style.background = "var(--accent-clr)";
    c3.style.background = "white";
    loc.innerText = "Asbury Park, NJ";
    timeline.innerText = "Aug, 15th - Aug, 20th ";    
})
c3.addEventListener('click', () =>{
    c1.style.background = "white";
    c2.style.background = "white";
    c3.style.background = "var(--accent-clr)";
    loc.innerText = "Vega Baja, Puerto Rico";
    timeline.innerText = "Sept, 20th - Sept, 29th ";
})