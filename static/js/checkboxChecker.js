const checkBoxLimit = () => {
  const checkBoxGroup = document.forms['checkTime']['time']
  const checkBoxButton = document.getElementById("btn")
  const maxCount = document.getElementById("maxAantal")
  checkBoxButton.disabled = true;
  const limit = 2

  for (let i = 0; i < checkBoxGroup.length; i++) {
    checkBoxGroup[i].onclick = () => {
      let checkedCount = 0
      for ( let i = 0; i < checkBoxGroup.length; i++ ) {
        checkedCount += (checkBoxGroup[i].checked) ? 1 : 0
      }
      if (checkedCount > limit) {
        console.log("You can select maximum of " + limit + " checkboxes.")
        maxCount.innerHTML = "Je kan maar maximaal 2 tijden selecteren"
        this.checked = false
        maxCount.style.color = 'red'
      }
      checkBoxButton.disabled = checkedCount < 1
    }
  }
}

checkBoxLimit()


let time = {}

const addTimeDB = () => {
  const fullTime = document.querySelector('').value
  time.push(fullTime)
}