document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById('stars');

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 1500 + "px"; 
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Random sparkle speed
    starsContainer.appendChild(star);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cloudContainer = document.querySelector('.imagesection'); // Cloud container (same as cadet images)

  // Increase the cloud count for more randomness
  const totalClouds = 15; // Adjust this number to control how many clouds you want

  for (let i = 0; i < totalClouds; i++) {
    const cloud = document.createElement('img');
    cloud.classList.add('cloud');
    cloud.src = './images/cloud.png'; // Cloud image
    cloud.style.position = 'absolute';
    
    // Random horizontal position across the entire width of the page (from 0% to 100%)
    cloud.style.left = `${Math.random() * 100}%`; // Position cloud randomly across the page width

    // Random vertical position between 10% and 70% (restricting the cloud to this range)
    cloud.style.bottom = `${Math.random() * 50 + 10}%`; // Position between 10% and 70% height

    // Randomly adjust the size of the clouds for variety
    const cloudSize = Math.random() * 50 + 50; // Random size between 50px and 100px
    cloud.style.width = `${cloudSize}px`;

    // Random opacity for added randomness
    cloud.style.opacity = (Math.random() * 0.4 + 0.4); // Random opacity between 0.4 and 0.8

    // Add the cloud to the body, not just the imagesection, so it can extend across the full width
    document.body.appendChild(cloud);
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

// Apply animation when the section is fully in view
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  const cadetSection = document.querySelectorAll('.imagesection')[0]; // First imagesection
  const plane = document.getElementById('plane');

  sections.forEach(section => {
    if (isElementFullyInViewport(section)) {
      section.classList.add('section-visible');
    }
  });

  // If cadet image section is fully in view, trigger the plane
  if (isElementFullyInViewport(cadetSection)) {
    if (!plane.classList.contains('fly')) { // Only trigger once
      plane.classList.add('fly');
    }
  }
}

// Event listener to trigger the animation when scrolling
window.addEventListener('scroll', animateOnScroll);

// Initial check in case the sections are already fully in view on page load
animateOnScroll();