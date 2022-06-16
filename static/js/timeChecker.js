const placeTime = document.querySelectorAll('[tijdlatenzien]');
const placeTimeButton = document.querySelector('[tijdlatenzienbutton]');
const placeTimevalue = document.querySelector('[placeTimevalue]');

startTime()

function startTime() {
  var today = new Date();
  var minutes = today.getMinutes()
  if (minutes === 0 || minutes === 1 || minutes === 2 || minutes === 3 || minutes === 4 || minutes === 5 || minutes === 6 || minutes === 7 || minutes === 8|| minutes === 9) {
    minutes = '0'+minutes
  }
  var time = today.getHours() + ":" + minutes;
  placeTimeButton.value = "Reserveer "+time+" voor 15 minuten"
  placeTimevalue.value = time
  console.log();
  [].forEach.call(placeTime, function(placeTimes) {
    placeTimes.innerHTML = time 
  });
  setTimeout(function () {
    startTime()
  }, 1000);
}