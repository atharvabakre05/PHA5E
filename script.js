window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      if (
        window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/'
      ) {
        window.location.href = 'home.html';
      }
    }, 500);
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.classList.add("fade-in");
  }

  document.querySelectorAll('.image-container').forEach(container => {
    const img = container.querySelector('.hero-image');
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width - 0.5) * 20;
      const yPercent = (y / rect.height - 0.5) * 20;
      img.style.setProperty('--tx', `${xPercent}px`);
      img.style.setProperty('--ty', `${yPercent}px`);
    });
    container.addEventListener('mouseleave', () => {
      img.style.setProperty('--tx', `0px`);
      img.style.setProperty('--ty', `0px`);
    });
  });
});
