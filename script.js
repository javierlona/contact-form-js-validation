// document.theform.onsubmit = function() {
//   alert('submission interrupted');
//   return false;
// }

const THEFORM = document.querySelector('#contact-form');
// console.log(THEFORM);

THEFORM.addEventListener('submit', check_form);

function check_form(event) {
  event.preventDefault();
  console.log("Something");
}
