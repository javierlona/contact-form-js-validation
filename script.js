const THEFORM = document.querySelector('#contact-form');

THEFORM.addEventListener('submit', check_form);

var myError = document.querySelector('.alert.alert-danger');
// console.log(myError);

var validationInfo = {
  "name" : {
    "required" : false
  },
  "email" : {
    "required" : false
  },
  "phone" : {
    "required" : true,
    "pattern" : "\\d{3}[\\-]\\d{3}[\\-]\\d{4}"
  },
};

function check_form(event) {
  event.preventDefault();
  console.log("Something");

  for (key in validationInfo) {
    var myField = document.getElementById(key);
    // var myPattern = validationInfo[key].pattern;
    // console.log("pattern in first ",myPattern);
    if((validationInfo[key].required) && (myField.value == '')) {
      myError.innerHTML = "Required field " + key + " not filled.";
      myField.select();
      return false;
    }
  }
  return true;
}

// PATTERNS
var inputFields = THEFORM.querySelectorAll("input");
console.log(inputFields);

for (key in inputFields) {
  var theFields = inputFields[key];
  theFields.onchange = function() {
    var myPattern = this.pattern;

    // console.log("pattern in second ",myPattern);
    var myPlaceholder = this.placeholder;
    var isValid = this.value.search(myPattern) >= 0;
    console.log(isValid);
    if(!(isValid)) {
      myError.innerHTML = "Input does not match expected pattern." + myPlaceholder;
    } else {
      myError.innerHTML = "";
    }
  }
}
