const checkBoxLimit = () => {
  let inputName = "time";
  var checkBoxGroup = document.forms["checkTime"][inputName];
  var checkBoxButton = document.getElementById("btn");
  var maxAantal = document.getElementById("maxAantal");
  checkBoxButton.disabled = true;
  var limit = 2;
  for (var i = 0; i < checkBoxGroup.length; i++) {
    var checkBoxGroup = document.forms["checkTime"][inputName];
    checkBoxGroup[i].onclick = function () {
      var checkedcount = 0;
      console.log(checkBoxGroup);
      for (var i = 0; i < checkBoxGroup.length; i++) {
        checkedcount += checkBoxGroup[i].checked ? 1 : 0;
      }
      if (checkedcount > limit) {
        console.log("You can select maximum of " + limit + " checkboxes.");
        maxAantal.innerHTML = "Je kan maar maximaal 2 tijden selecteren";
        this.checked = false;
        maxAantal.style.color = "red";
      }
      if (checkedcount >= 1) {
        checkBoxButton.disabled = false;
      }
      if (checkedcount === 0 || checkedcount === 1) {
        inputName = "time";
        checkBoxGroup.forEach((element) => (element.name = "time"));
      } else {
        inputName = "time2";
        checkBoxButton.disabled = true;
        checkBoxGroup.forEach((element) => (element.name = "time"));
      }

      console.log(checkedcount);
    };
  }
};

checkBoxLimit();
