document.getElementById('btn-reveal').addEventListener('click', () => {
  document.getElementById('surprise').classList.remove('hidden');
  document.getElementById('title-1').classList.add('hidden');
  document.getElementById('title-2').classList.remove('hidden');
  document.getElementById('title-4').classList.remove('hidden');

  startLiveCounter(); // inicia o contador assim que clicar no coração
});

function startLiveCounter() {
  const startDate = new Date("2023-12-31T00:00:00");

  function getTimeDifference(startDate, now) {
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      months--;
      const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthDays;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function update() {
    const now = new Date();
    const { years, months, days, hours, minutes, seconds } = getTimeDifference(startDate, now);

    document.getElementById("years").textContent = years !== 1 ? `${years} anos` : `${years} ano`;
    document.getElementById("months").textContent = months !== 1 ? `${months} meses` : `${months} mês`;
    document.getElementById("days").textContent = days !== 1 ? `${days} dias` : `${days} dia`;
    document.getElementById("clock").textContent = `${pad(hours)} horas ${pad(minutes)} minutos e ${pad(seconds)} segundos`;
  }

  update(); // atualiza imediatamente ao começar
  setInterval(update, 1000); // atualiza a cada segundo
}
