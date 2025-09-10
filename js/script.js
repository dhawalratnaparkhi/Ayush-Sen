// small UI helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: add mailto fallback and basic UX
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Let Formspree handle submit normally; show minimal feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    // After 4s, re-enable if no redirect (simple fallback)
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send';
    }, 4000);
  });
// year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form UX (runs only if form exists)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send';
    }, 4000);
  });
}

// Typing effect
const heroHeading = document.querySelector(".hero-content h2");
if (heroHeading) {
  const text = heroHeading.textContent;
  heroHeading.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    heroHeading.textContent += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(typing);
  }, 80);
}

// Scroll reveal
const sections = document.querySelectorAll(".section");
if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "light" ? "☀️" : "🌙";
  });

  // Set the icon based on current theme on load
  const currentTheme = document.documentElement.getAttribute("data-theme");
  themeToggle.textContent = currentTheme === "light" ? "☀️" : "🌙";
}
