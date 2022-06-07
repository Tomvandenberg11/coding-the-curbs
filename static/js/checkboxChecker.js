// if (window.location.href.indexOf("timelist") > -1) {
  document.getElementById('footer-button-1').classList.add('active')
  document.getElementById('footer-button-2').classList.remove('active')
  const checkBoxLimit = () => {
    var checkBoxGroup = document.forms['checkTime']['time'];			
    var limit = 2;
    for (var i = 0; i < checkBoxGroup.length; i++) {
      checkBoxGroup[i].onclick = function() {
        var checkedcount = 0;
        for (var i = 0; i < checkBoxGroup.length; i++) {
          checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
        }
        if (checkedcount > limit) {
          console.log("You can select maximum of " + limit + " checkboxes.");
          alert("You can select maximum of " + limit + " checkboxes.");						
          this.checked = false;
        }
      }
    }
  }

  checkBoxLimit()

  let time = {}

  const addTimeDB = () => {

    const fulltime = document.querySelector('').value

    time.push(fulltime)
  }
// }

if (window.location.href.indexOf("manage") > -1) {
  document.getElementById('footer-button-2').classList.add('active')
  document.getElementById('footer-button-1').classList.remove('active')
}

startTime()

function startTime() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  console.log(time);
  setTimeout(function() {startTime()}, 10000);
}