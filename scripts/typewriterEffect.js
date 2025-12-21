const typingTextElement = document.getElementById('typingText');
const words = [ 'Web Developer', 'Python Enthusiast', 'Robotics engineer'];
let wordIndex = 0;

let currentCharIndex = 0;

function typeWriterEffect() {
    const currentWord = words[wordIndex];
    typingText.classList.remove("blink");
    if (currentCharIndex < currentWord.length) {
        typingTextElement.textContent = currentWord.slice(0, currentCharIndex + 1);
        currentCharIndex += 1;
        setTimeout(typeWriterEffect, 125);
    } 
    else {
        typingText.classList.add("blink");
        setTimeout(eraseEffect, 2500);
    }
}

function eraseEffect() {
    const currentWord = words[wordIndex];
    typingText.classList.remove("blink");
    if (currentCharIndex > 0) {
        typingTextElement.textContent = currentWord.slice(0, currentCharIndex - 1);
        currentCharIndex -= 1;
        setTimeout(eraseEffect, 75);
    } else{
        wordIndex = (wordIndex + 1) % words.length;
        typingText.classList.add("blink");
        setTimeout(typeWriterEffect, 1500);
    }
}

typeWriterEffect();

