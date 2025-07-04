document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');
        
        // Close all other answers
        faqButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.nextElementSibling.style.maxHeight = null;
        });

        // Toggle current
        if (!isActive) {
          button.classList.add('active');
          const answer = button.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });


