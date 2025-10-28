// ==== Theme Toggle ====
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ==== Dynamic Tagline ====
const words = ["Web Developer", "Innovator", "Problem Solver", "Tech Enthusiast"];
let index = 0;
const changingWord = document.getElementById("changing-word");

setInterval(() => {
  index = (index + 1) % words.length;
  changingWord.textContent = words[index];
}, 2000);

// ==== Scroll Reveal ====
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section-title, .project-card, .skill").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add("show");
  });
});

// ==== Contact Form ====
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again!");
    }
  });
}
