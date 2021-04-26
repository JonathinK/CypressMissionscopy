//Get Btn//
const scrollBtn = document.getElementById('heroBtn');
const summary = document.getElementById('cypressSummary');

//Onclick btn scrolls to info section//
scrollBtn.addEventListener('click', () => {
    summary.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
// scrollBtn.addEventListener('click', () => {
//    if(window.innerHeight <= 568 ){
//         window.scrollTo({
//                 top:470,
//                 left:0,
//                 behavior: "smooth"
//             });
//    }else if (window.innerHeight <= 640 ){
//         window.scrollTo({
//                 top:540,
//                 left: 0,
//                 behavior: "smooth"
//         });
//    }else if(window.innerHeight <= 667){
//         window.scrollTo({
//                 top:570,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 731){
//         window.scrollTo({
//                 top:635,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 736){
//         window.scrollTo({
//                 top:640,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 812){
//         window.scrollTo({
//                 top:715,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 823){
//         window.scrollTo({
//                 top:730,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 1024){
//         window.scrollTo({
//                 top:910,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 823){
//         window.scrollTo({
//                 top:730,
//                 left:0,
//                 behavior: "smooth"
//         })
//    }else if(window.innerHeight <= 823){
//         window.scrollTo({
//                 top:730,
//                 left:0,
//                 behavior: "smooth"
//         })
//    };
// })
