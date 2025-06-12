document.getElementById("btn-reveal").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
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

    document.getElementById("years").textContent = years != 1 ? `${years} anos` : `${years} ano`;
    document.getElementById("months").textContent = months != 1 ? `${months} mêses` : `${months} mês`;
    document.getElementById("days").textContent = days != 1 ? `${days} dias` : `${days} dia`;
    document.getElementById("clock").textContent = `${pad(hours)} horas ${pad(minutes)} minutos e ${pad(seconds)} segundos`;
}


  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  update(); // chama logo no início
  setInterval(update, 1000); // atualiza a cada segundo
}

document.getElementById("btn-reveal").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("title-2").classList.remove("hidden");
  document.getElementById("title-1").classList.add("hidden");
  document.getElementById("title-3").classList.add("hidden");
  document.getElementById("title-4").classList.remove("hidden");
  startLiveCounter();
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
const totalSlides = 10;

function updateCarousel() {
  const slideWidth = track.clientWidth / totalSlides;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});


