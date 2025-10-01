// Animasi fade-in ketika elemen masuk viewport
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // biar animasi jalan sekali
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

