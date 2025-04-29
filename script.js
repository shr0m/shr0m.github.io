document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       STAR EFFECT (Background Stars)
       =============================== */
    const starsContainer = document.getElementById('stars');
    const numStars = 100;
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 1500}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      starsContainer.appendChild(star);
    }
  
    /* ===============================
       GLITCH TEXT EFFECT
       =============================== */
    const element = document.getElementById("typingEffect");
    const word = "shr0m";
    const glitchChars = "!@#$%^&*()_+{}:\"<>?-=[];',./abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    function glitchText(originalText, iterations, interval) {
      let count = 0;
      const glitchInterval = setInterval(() => {
        let glitched = "";
  
        for (let i = 0; i < originalText.length; i++) {
          const useGlitch = Math.random() < 0.3;
          glitched += useGlitch
            ? glitchChars.charAt(Math.floor(Math.random() * glitchChars.length))
            : originalText.charAt(i);
        }
  
        element.textContent = glitched;
        count++;
  
        if (count > iterations) {
          clearInterval(glitchInterval);
          element.textContent = originalText;
        }
      }, interval);
    }
  
    // Trigger initial glitch and repeat every 4 seconds
    glitchText(word, 20, 100);
    setInterval(() => glitchText(word, 20, 100), 4000);
  
    /* ===============================
       LINK SECTION ANIMATION
       =============================== */
    const linkSection = document.querySelector('.link-sections');
    setTimeout(() => {
      linkSection.classList.add('fly-in');
    }, 500); // Delay to ensure smoother appearance
  });