// ==== Dark Mode Toggle ====
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ==== Simple Scroll Animation ====
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".section-title, .project-card, .skill");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
const words = ["Web Developer", "Innovator", "Problem Solver", "Tech Enthusiast"];
let wordIndex = 0;
const changingWord = document.getElementById("changing-word");

setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  changingWord.textContent = words[wordIndex];
}, 2000);
