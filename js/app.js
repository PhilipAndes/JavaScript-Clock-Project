const secondHand = document.querySelector('.second-hand');

const minuteHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

// function setDate2() {
//   const now = new Date();
//   const minutes = now.getMinutes();
//   const minutesDegrees = ((minutes / 60) * 360) + 90;
//   minuteHand.style.transfrom = `rotate(${minutesDegrees}deg)`;
//   console.log(minutes);
// }

// setInterval(setDate2, 1000);

