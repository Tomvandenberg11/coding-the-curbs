let todayDate = new Date();
const placeDateValue = document.querySelector("[placeDatevalue]");

let dd = String(todayDate.getDate()).padStart(2, '0');
let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = todayDate.getFullYear();

let todayDateFull = dd + '/' + mm + '/' + yyyy;

placeDateValue.value = todayDateFull;

console.log(placeDateValue.value);