const words = ["web developer", "UX/UI designer", "creative coder", "creative technologist"];
let wordIndex = 0;
const wordElement = document.getElementById("title");

function createLetters(word) {
  wordElement.innerHTML = "";
  const letters = word.split("").map((char, index) => {
    const letterElement = document.createElement("span");
    letterElement.classList.add("letter");
    letterElement.style.left = `${index * 20}px`;
    letterElement.textContent = char;
    return letterElement;
  });
  letters.forEach(letter => wordElement.appendChild(letter));
  return letters;
}

function animateWordChange(newWord) {
  const oldLetters = Array.from(wordElement.children);
  const newLetters = createLetters(newWord);

  oldLetters.forEach((letter, index) => {
    letter.classList.add("out");
    setTimeout(() => {
      letter.remove();
    }, 500);
  });

  newLetters.forEach((letter, index) => {
    letter.classList.add("in");
  });
}

function changeWord() {
  const nextWord = words[wordIndex];
  animateWordChange(nextWord);
  wordIndex = (wordIndex + 1) % words.length;
}

createLetters(words[0]);
setInterval(changeWord, 2000);
