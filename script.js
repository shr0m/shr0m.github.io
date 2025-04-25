const element = document.getElementById("typingEffect");
const words = ["shr0m", "Jan Korzybski"];
let wordIndex = 0;
let charIndex = 0;
let typing = true; // Flag to toggle between typing and deleting

const typingSpeed = 150; // Speed of typing
const deletingSpeed = 100; // Speed of deleting
const pauseBetweenWords = 1000; // Pause before switching words

function typeText() {
  const currentWord = words[wordIndex];
  if (typing) {
    if (charIndex < currentWord.length) {
      element.textContent += currentWord.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Pause after typing a word
      typing = false;
      setTimeout(typeText, pauseBetweenWords);
    }
  } else {
    if (charIndex > 0) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeText, deletingSpeed);
    } else {
      // Switch to the next word
      typing = true;
      wordIndex = (wordIndex + 1) % words.length; // Switch between the two words
      setTimeout(typeText, pauseBetweenWords);
    }
  }
}

// Start typing effect
typeText();