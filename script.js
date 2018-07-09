const THEFORM = document.querySelector('#contact-form');

THEFORM.addEventListener('submit', check_form);

var validationInfo = {
  "name" : {
    "required" : true
  },
  "email" : {
    "required" : true
  },
  "phone" : {
    "required" : true
  },
};

var newDiv = document.createElement('div');
newDiv.className = 'alert alert-danger d-none';
THEFORM.append(newDiv);
THEFORM.insertBefore(newDiv, THEFORM.firstElementChild);

function check_form(event) {
  event.preventDefault();
  for (key in validationInfo) {
    var myField = document.getElementById(key);
    if((validationInfo[key].required) && (myField.value == '')) {
      newDiv.classList.remove("d-none");
      newDiv.innerHTML = "Required field " + key + " not filled.";
      myField.select();
      return false;
    }
  }
  newDiv.innerHTML = "";
  newDiv.classList.add("d-none");
  return true;
}

// PATTERNS
var inputFields = THEFORM.querySelectorAll("input");

for (key in inputFields) {
  var theFields = inputFields[key];
  theFields.onchange = function() {
    var myPattern = this.pattern;
    var myPlaceholder = this.placeholder;
    var isValid = this.value.search(myPattern) >= 0;
    if(!(isValid)) {
      newDiv.innerHTML = "Input does not match expected pattern." + myPlaceholder;
    } else {
      newDiv.innerHTML = "";
      newDiv.classList.add("d-none");
    }
  }
}
