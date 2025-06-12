// Seleciona elementos do DOM
const btnReveal = document.getElementById('btn-reveal');
const surprise = document.getElementById('surprise');

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width + 10; // +10 por causa da margem direita
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Evento do botão para mostrar o conteúdo surpresa
btnReveal.addEventListener('click', () => {
  // Esconde o título 1 e mostra os outros
  document.getElementById('title-1').classList.add('hidden');
  document.getElementById('title-2').classList.remove('hidden');
  document.getElementById('title-3').classList.add('hidden');
  document.getElementById('title-4').classList.remove('hidden');

  // Mostra o conteúdo surpresa
  surprise.classList.remove('hidden');
  btnReveal.style.display = 'none';

  // Inicializa o carrossel
  updateSlidePosition();
});

// Eventos para os botões do carrossel
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlidePosition();
});

// Atualiza a posição ao redimensionar a janela (para responsividade)
window.addEventListener('resize', () => {
  updateSlidePosition();
});
