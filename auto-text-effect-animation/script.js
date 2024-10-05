// const containerEl = document.querySelector(".container");

// const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

// let careerIndex = 0;
// let characterIndex = 0;

// updateText()

// function updateText () {
//     characterIndex++
//     containerEl.innerHTML = `<p>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</p>`;
//     if (characterIndex === careers[careerIndex].length) {
//         careerIndex++;
//         characterIndex = 0;
//     }
//     if (careerIndex === careers.length) {
//         careerIndex = 0;
//     }
//     setTimeout(updateText, 400);
// }

const containerEl = document.querySelector(".container")
const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<p>I am a ${careers[careerIndex].slice(0, characterIndex)}</p>`;
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

