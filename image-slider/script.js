const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;
let timeout;


nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();


function updateImg() {
    if (currentImg > imgsEl.length - 1) {
        currentImg = 0;
    } else if (currentImg < 0) {
        currentImg = imgsEl.length - 1;
    }
    imageContainerEl.style.transform = `translateX(-${currentImg * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}
