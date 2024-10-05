const textareaEl = document.getElementById("textarea");
const totalCountsEl = document.getElementById("totalCounts");
const remainingCountsEl = document.getElementById("remainingCounts");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter() {
    totalCountsEl.innerText = textareaEl.value.length;
    remainingCountsEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}