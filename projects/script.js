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

      // Get position and size including scroll offset
      const rect = card.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;

      clone.style.position = "fixed";
      clone.style.top = `${rect.top + scrollY}px`;
      clone.style.left = `${rect.left + scrollX}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = "0";
      clone.style.zIndex = "300";
      clone.style.transition = "all 0.4s ease";

      // Append and force layout
      document.body.appendChild(clone);
      clone.getBoundingClientRect(); // Force reflow

      // Animate to center
      clone.style.top = "50%";
      clone.style.left = "50%";
      clone.style.transform = "translate(-50%, -50%)";

      overlay.classList.add("active");
      document.body.classList.add("blurred");

      // Expand content
      setTimeout(() => {
        clone.classList.add("expanded");
      }, 400);
    });
  });

  // Handle overlay click
  overlay.addEventListener("click", () => {
    const activeCard = document.querySelector(".card.modal-active");
    if (activeCard) {
      activeCard.classList.remove("expanded");
      activeCard.classList.add("fade-out");

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

  /* ===============================
     TRIGGER FLY-IN ANIMATION
     =============================== */
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("fly-in");
  });
});