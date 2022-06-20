const checkBoxLimit = () => {
  let inputName = "time";
  let checkBoxGroup = document.forms["checkTime"][inputName];
  const checkBoxButton = document.getElementById("btn");
  const maxAantal = document.getElementById("maxAantal");
  checkBoxButton.disabled = true;
  let limit = 2;
  for (let i = 0; i < checkBoxGroup.length; i++) {
    let checkBoxGroup = document.forms["checkTime"][inputName];
    checkBoxGroup[i].onclick = function () {
      let checkedcount = 0;
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
        checkBoxGroup.forEach((element) => (element.name = "time"));
      }

      console.log(checkedcount);
    };
  }
};

checkBoxLimit();
