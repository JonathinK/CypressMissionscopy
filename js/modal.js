const imgModal = document.querySelector(".image_modal");
const previews = document.querySelectorAll(".img__wrap img");
const original = document.querySelector(".full_img");
const caption = document.querySelector(".caption");
const bodyModal = document.querySelector("body");
//Get the image modal,images and text//
previews.forEach(preview => {
    preview.addEventListener("click", () => {
        imgModal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image//
        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        // const altText = preview.alt;
        // caption.textContent = altText;
        //Body Fixed On Modal Open//
        bodyModal.classList.add("noScroll");
    });
});
//Close the modal//
imgModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("image_modal")) {
        imgModal.classList.remove("open");
        original.classList.remove("open");
        bodyModal.classList.remove("noScroll");
    }
});