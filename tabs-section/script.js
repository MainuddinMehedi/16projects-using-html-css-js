const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");


tabs.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    console.log(id)
    
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });

        event.target.classList.add("live");

        articles.forEach((articles) => {
            articles.classList.remove("live");
        });

        const element = document.getElementById(id);
        element.classList.add("live");
        console.log(element)
    }
})