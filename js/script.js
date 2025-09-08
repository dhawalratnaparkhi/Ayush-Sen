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
}
