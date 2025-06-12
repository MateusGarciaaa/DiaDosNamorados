document.addEventListener('DOMContentLoaded', () => {
  // --- Botão que revela o conteúdo surpresa ---
  const btnReveal = document.getElementById('btn-reveal');
  const surprise = document.getElementById('surprise');

  btnReveal.addEventListener('click', () => {
    document.getElementById('title-1').classList.add('hidden');
    document.getElementById('title-2').classList.remove('hidden');
    btnReveal.classList.add('hidden');
    document.getElementById('title-3').classList.add('hidden');
    document.getElementById('title-4').classList.remove('hidden');
    surprise.classList.remove('hidden');
  });

  // --- Contador de tempo junto ---
  const startDate = new Date(2024, 0, 1); // Ajuste a data do começo do namoro
  const yearsEl = document.getElementById('years');
  const monthsEl = document.getElementById('months');
  const daysEl = document.getElementById('days');
  const clockEl = document.getElementById('clock');

  function updateTimeTogether() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      // pega quantidade de dias no mês anterior
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    yearsEl.textContent = `${years} ano,`;
    monthsEl.textContent = `${months} meses,`;
    daysEl.textContent = ` ${days} dias,`;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clockEl.textContent = `${hours} horas,\n${minutes} minutos,\n${seconds} segundos`;

  }

  setInterval(updateTimeTogether, 1000);
  updateTimeTogether();

  // --- Carrossel de fotos ---
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  let currentIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const style = window.getComputedStyle(slides[0]);
    const marginRight = parseFloat(style.marginRight); // pega margem direita

    track.style.transform = `translateX(-${currentIndex * (slideWidth + marginRight)}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  updateSlidePosition();
});
