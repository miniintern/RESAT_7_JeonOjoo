let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slides")[0];
    let images = slides.getElementsByTagName("img");
    if (n >= images.length) slideIndex = 0;
    if (n < 0) slideIndex = images.length - 1;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.getElementById("prev").addEventListener("click", function() {
    showSlides(--slideIndex);
});

document.getElementById("next").addEventListener("click", function() {
    showSlides(++slideIndex);
});