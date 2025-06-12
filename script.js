document.getElementById("btn-reveal").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("title-2").classList.remove("hidden");
  document.getElementById("title-1").classList.add("hidden");
  document.getElementById("title-3").classList.add("hidden");
  document.getElementById("title-4").classList.remove("hidden");
  startLiveCounter();
});

function startLiveCounter() {
  const startDate = new Date("2024-01-01T00:00:00");

  function update() {
    const now = new Date();
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);
    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60)) % 12;
    const days = Math.floor(totalSeconds / (24 * 60 * 60)) % 30;
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;

    document.getElementById("years").textContent = years !== 1 ? `${years} anos` : `${years} ano`;
    document.getElementById("months").textContent = months !== 1 ? `${months} meses` : `${months} mês`;
    document.getElementById("days").textContent = days !== 1 ? `${days} dias` : `${days} dia`;
    document.getElementById("clock").textContent = `${pad(hours)} horas ${pad(minutes)} minutos e ${pad(seconds)} segundos`;
  }

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Carrossel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const imgs = document.querySelectorAll('.carousel-track img');

let index = 0;
const totalSlides = imgs.length;

function getSlideWidth() {
  const img = imgs[0];
  const style = getComputedStyle(img);
  const width = img.getBoundingClientRect().width;
  const marginRight = parseFloat(style.marginRight || 0);
  return width + marginRight;
}

function updateCarousel() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (index < totalSlides - 1) {
    index++;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);

// Suporte a toque (arraste no celular)
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0 && index < totalSlides - 1) {
      index++;
    } else if (deltaX > 0 && index > 0) {
      index--;
    }
    updateCarousel();
    isDragging = false;
  }
});

track.addEventListener('touchend', () => {
  isDragging = false;
});
