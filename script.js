const textElement = document.querySelector(".typewriter");
const texts = ["a Data Scientist", "a ML Enthusiast", "a Data Analyst", "an AI Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2 seconds before typing next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();
