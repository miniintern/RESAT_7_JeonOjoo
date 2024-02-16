let slideIndex = 0;
let slideInterval;

function showSlides() {
    let slides = document.getElementsByClassName("slides")[0];
    let images = slides.getElementsByTagName("img");
    slideIndex++;
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    updateArrowState();
    let slideWidth = 100 / images.length; // 각 슬라이드의 너비 비율
    slides.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
}

function updateArrowState() {
    let leftArrow = document.getElementById("prev");
    let rightArrow = document.getElementById("next");
    // 첫 번째 이미지에서 왼쪽 화살표 활성화, 두 번째 이미지에서 오른쪽 화살표 활성화
    if (slideIndex === 0) {
        leftArrow.classList.add("active");
        rightArrow.classList.remove("active");
    } else {
        rightArrow.classList.add("active");
        leftArrow.classList.remove("active");
    }
}

function startSlideShow() {
    slideInterval = setInterval(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    startSlideShow();
    updateArrowState(); // 초기 화살표 상태 업데이트
});

document.getElementById("prev").addEventListener("click", function() {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlides();
    resetInterval();
});

document.getElementById("next").addEventListener("click", function() {
    slideIndex = (slideIndex + 1) % images.length;
    showSlides();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 2000);
}
