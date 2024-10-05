const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");


// console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);
// console.log(bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50);

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }

})