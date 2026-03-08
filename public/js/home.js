document.addEventListener('DOMContentLoaded', function () {
  const imgs = document.querySelectorAll('.carousel img');
  let current = 0;

  function showSlide(index) {
    imgs.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  showSlide(current);

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % imgs.length;
      showSlide(current);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + imgs.length) % imgs.length;
      showSlide(current);
    });
  }

  // auto slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % imgs.length;
    showSlide(current);
  }, 5000);
});