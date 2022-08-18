const clockTitle = document.querySelector(".js-clock");

function howManyTimesLeft() {
  const christmasDay = new Date("2022-12-25,00:00:00").getTime();
  console.log(christmasDay);
  const present = new Date().getTime();
  console.log(present);
  const diffMS = (christmasDay - present) / 1000;
  const seconds = Math.floor(diffMS) % 60;
  const minutes = Math.floor(diffMS / 60) % 60;
  const hours = Math.floor(diffMS / (60 * 60)) % 24;
  const days = Math.floor(diffMS / (60 * 60 * 24));
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

howManyTimesLeft();
setInterval(howManyTimesLeft, 1000);
