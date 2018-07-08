const THEFORM = document.querySelector('#contact-form');

THEFORM.addEventListener('submit', check_form);

var myError = document.querySelector('.alert.alert-danger');
console.log(myError);

var validationInfo = {
  "name" : {
    "required" : true
  },
  "email" : {
    "required" : true
  },
  "phone" : {
    "required" : true,
    "pattern" : "\\d{3}[\\-]\\d{3}[\\-]\\d{4}"
  }
};

function check_form(event) {
  event.preventDefault();
  console.log("Something");

  for (key in validationInfo) {
    var myField = document.getElementById(key);
    console.log(myField);
    if((validationInfo[key].required) && (myField.value == '')) {
      myError.innerHTML = "Required field " + key + " not filled.";
      myField.select();
      return false;
    }
  }
  return true;
}
