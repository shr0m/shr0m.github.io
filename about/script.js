document.addEventListener("DOMContentLoaded", () => {
  // === STAR GENERATION ===
  const starsContainer = document.getElementById('stars');

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 1500}px`; // Random vertical position
    star.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random sparkle speed
    starsContainer.appendChild(star);
  }

  // === CLOUD GENERATION ===
  const cloudContainer = document.querySelector('.imagesection');
  const totalClouds = 15; // Number of clouds to create

  for (let i = 0; i < totalClouds; i++) {
    const cloud = document.createElement('img');
    cloud.classList.add('cloud');
    cloud.src = '../images/cloud.png';
    cloud.style.position = 'absolute';

    // Random horizontal position (0% to 100%)
    cloud.style.left = `${Math.random() * 100}%`;

    // Random vertical position (10% to 70% from bottom)
    cloud.style.bottom = `${Math.random() * 50 + 10}%`;

    // Random width (50px to 100px)
    const cloudSize = Math.random() * 50 + 50;
    cloud.style.width = `${cloudSize}px`;

    // Random opacity (0.4 to 0.8)
    cloud.style.opacity = (Math.random() * 0.4 + 0.4).toFixed(2);

    document.body.appendChild(cloud);
  }
});

// === TYPING EFFECT ===
const typedText = document.getElementById("typedText");
const cursor = document.getElementById("cursor");
const words = ["shr0m", "Jan Korzybski"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 1000;

function typeText() {
  const currentWord = words[wordIndex];

  if (typing) {
    // Typing the word
    if (charIndex < currentWord.length) {
      typedText.textContent += currentWord.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      typing = false;
      setTimeout(typeText, pauseBetweenWords);
    }
  } else {
    // Deleting the word
    if (charIndex > 0) {
      typedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeText, deletingSpeed);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeText, pauseBetweenWords);
    }
  }
}

typeText();

// === SCROLL ANIMATION ===

// Check if an element is fully visible in the viewport
function isElementFullyInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

// Apply animations when elements scroll into view
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  const cadetSection = document.querySelector('.imagesection');
  const plane = document.getElementById('plane');

  sections.forEach(section => {
    if (isElementFullyInViewport(section)) {
      section.classList.add('section-visible');
    }
  });

  // Trigger plane animation once when cadet section is visible
  if (isElementFullyInViewport(cadetSection)) {
    if (!plane.classList.contains('fly')) {
      plane.classList.add('fly');
    }
  }
}

// Trigger animation on scroll and on initial load
window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check