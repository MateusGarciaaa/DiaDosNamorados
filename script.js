document.getElementById('btn-reveal').addEventListener('click', () => {
  document.getElementById('surprise').classList.remove('hidden');
  document.getElementById('title-1').classList.add('hidden');
  document.getElementById('title-2').classList.remove('hidden');
  document.getElementById('title-4').classList.remove('hidden');
});

function startLiveCounter() {
  const startDate = new Date("2023-12-31T00:00:00");

  function getTimeDifference(startDate, now) {
    let start = new Date(startDate);
    let end = new Date(now);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const previousMonthDays = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      days += previousMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Agora calcula o tempo dentro do dia (horas, minutos, segundos)
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

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
      if (days < 0) {
        months--;
        if (months < 0) {
          months += 12;
          years--;
        }
        const previousMonthDays = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += previousMonthDays;
      }
    }

    return { years, months, days, hours, minutes, seconds };
  }

  function update() {
    const now = new Date();
    const { years, months, days, hours, minutes, seconds } = getTimeDifference(startDate, now);

    document.getElementById("years").textContent = years !== 1 ? `${years} anos` : `${years} ano`;
    document.getElementById("months").textContent = months !== 1 ? `${months} meses` : `${months} mês`;
    document.getElementById("days").textContent = days !== 1 ? `${days} dias` : `${days} dia`;
    document.getElementById("clock").textContent = `${pad(hours)} horas ${pad(minutes)} minutos e ${pad(seconds)} segundos`;
  }

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  update(); // chama no início
  setInterval(update, 1000); // atualiza a cada segundo
}
