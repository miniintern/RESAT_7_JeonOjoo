let slideIndex = 0;
showSlides(slideIndex);

setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 2000);

function showSlides(n) {
    let slides = document.getElementsByClassName("slides")[0];
    let images = slides.getElementsByTagName("img");


    if (n >= images.length) {
        slideIndex = 0;
        n = 0;
    }

    if (n < 0) {
        slideIndex = images.length - 1;
        n = images.length - 1;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.getElementById("prev").addEventListener("click", function() {
    slideIndex--;
    showSlides(slideIndex);
    resetInterval();
});

document.getElementById("next").addEventListener("click", function() {
    slideIndex++;
    showSlides(slideIndex);
    resetInterval();
});

