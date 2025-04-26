document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById('stars');

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 300 + "px"; // Only top 300px
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Random sparkle speed
    starsContainer.appendChild(star);
  }
});

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

// Function to check if an element is fully within the viewport
function isElementFullyInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

// Apply animation when the section is fully in view or out of view
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    if (isElementFullyInViewport(section)) {
      section.classList.add('section-visible');  // Add class to make the section visible
    } else {
      section.classList.remove('section-visible');  // Remove class to hide the section
    }
  });
}

// Event listener to trigger the animation when scrolling
window.addEventListener('scroll', animateOnScroll);

// Initial check in case the sections are already fully in view on page load
animateOnScroll();