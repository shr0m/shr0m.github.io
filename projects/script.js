document.addEventListener("DOMContentLoaded", () => {
    
  /* ===============================
       STAR EFFECT (Background Stars)
       =============================== */
    const starsContainer = document.getElementById("stars");
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 1500}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      starsContainer.appendChild(star);
    }
  
    /* ===============================
       CARD EXPANSION LOGIC
       =============================== */
    const cards = document.querySelectorAll(".card");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Prevent multiple modals
        const existing = document.querySelector(".card.modal-active");
        if (existing) return;
  
        // Clone the card to animate
        const clone = card.cloneNode(true);
        clone.classList.add("modal-active");
  
        // Get position and size
        const rect = card.getBoundingClientRect();
        clone.style.position = "fixed";
        clone.style.top = `${rect.top}px`;
        clone.style.left = `${rect.left}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.margin = "0";
        clone.style.zIndex = "300";
  
        // Append and animate to center
        document.body.appendChild(clone);
        requestAnimationFrame(() => {
          clone.style.top = "50%";
          clone.style.left = "50%";
          clone.style.transform = "translate(-50%, -50%)";
        });
  
        overlay.classList.add("active");
        document.body.classList.add("blurred");
  
        // Make sure the card expands and the description and link show
        setTimeout(() => {
          clone.classList.add("expanded");
        }, 400); // Delay for animation
      });
    });
  
    // Handle overlay click
    overlay.addEventListener("click", () => {
        const activeCard = document.querySelector(".card.modal-active");
        if (activeCard) {
          // Add a fade-out class before removing
          activeCard.classList.remove("expanded");
          activeCard.classList.add("fade-out");
      
          // Wait for fade-out transition before removing the element
          activeCard.addEventListener(
            "transitionend",
            () => {
              activeCard.remove();
            },
            { once: true }
          );
        }
      
        overlay.classList.remove("active");
        document.body.classList.remove("blurred");
      });

      // Get all project cards and add the class to trigger animation
    const card2 = document.querySelectorAll('.card');
    cards2.forEach((card) => {
        card2.classList.add('fly-in');  // Add class to trigger fly-in
    });
  });