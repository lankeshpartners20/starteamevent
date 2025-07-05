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


  // Set your event date (YYYY-MM-DDTHH:MM:SS format)
  const eventDate = new Date("2025-08-20T09:00:00").getTime();

  const countdownFunc = setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff < 0) {
      clearInterval(countdownFunc);
      document.getElementById("countdown").innerHTML = "<p style='color:#ff3366;'>Event Started!</p>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);


