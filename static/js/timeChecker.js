const placeTime = document.querySelectorAll("[tijdlatenzien]");
const placeTimeButton = document.querySelector("[tijdlatenzienbutton]");
const placeTimeValue = document.querySelector("[placeTimevalue]");
let today = new Date();
let minutes = today.getMinutes();
let endTimeHours = today.getHours();
let endTimeMinutes = minutes + 15;

const startTime = () => {

  if (
    minutes === 0 ||
    minutes === 1 ||
    minutes === 2 ||
    minutes === 3 ||
    minutes === 4 ||
    minutes === 5 ||
    minutes === 6 ||
    minutes === 7 ||
    minutes === 8 ||
    minutes === 9
  ) {
    minutes = "0" + minutes;
  }

  if (endTimeMinutes > 59) {
    endTimeMinutes = endTimeMinutes - 60;
    endTimeHours = endTimeHours + 1;
  }

  if (endTimeHours > 23) {
    endTimeHours = 0;
  }

  if (
    endTimeMinutes === 0 ||
    endTimeMinutes === 1 ||
    endTimeMinutes === 2 ||
    endTimeMinutes === 3 ||
    endTimeMinutes === 4 ||
    endTimeMinutes === 5 ||
    endTimeMinutes === 6 ||
    endTimeMinutes === 7 ||
    endTimeMinutes === 8 ||
    endTimeMinutes === 9
  ) {
    endTimeMinutes = "0" + endTimeMinutes;
  }

  let beginTime = today.getHours() + ":" + minutes;
  const endTime = endTimeHours + ":" + endTimeMinutes;

  placeTimeButton.value = "Reserveer " + beginTime + " tot " + endTime;
  placeTimeValue.value = beginTime + "," + endTime;


  [].forEach.call(placeTime, function (placeTimes) {
    placeTimes.innerHTML = beginTime;
  });
  setTimeout(function () {
    startTime();
  }, 1000);
};

startTime();
