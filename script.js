// Create constant variable for our form
const THEFORM = document.querySelector('#contact-form');

// Run the function check_required_fields on form submission
THEFORM.addEventListener('submit', check_required_fields);

// Variable used by function check_required_fields
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

// Position the new alert above the form
var newDiv = document.createElement('div');
newDiv.className = 'alert alert-danger d-none';
THEFORM.append(newDiv);
THEFORM.insertBefore(newDiv, THEFORM.firstElementChild);

function check_required_fields(event) {
  event.preventDefault();
  for (key in validationInfo) {
    let myField = document.getElementById(key);
    if((validationInfo[key].required) && (myField.value == '')) {
      // Display the danger alert
      newDiv.classList.remove("d-none");
      newDiv.innerHTML = "Required field " + key + " not filled.";
      // Focus the field to the user
      myField.select();
      // Do not submit the form
      return false;
    }
  }
  // Reset the div to not display
  newDiv.innerHTML = "";
  newDiv.classList.add("d-none");
  return true;
}

// PATTERNS
var inputFields = THEFORM.querySelectorAll("input");

for (key in inputFields) {
  let theFields = inputFields[key];
  // Anonymous function run when a change occurs
  theFields.onchange = function() {
    // Grab that fields pattern and placeholder attributes
    let myPattern = this.pattern;
    let myPlaceholder = this.placeholder;
    // 0 indicates pattern is a match
    let isValid = this.value.search(myPattern) >= 0;
    if(!(isValid)) {
      newDiv.innerHTML = "Input does not match expected pattern." + myPlaceholder;
    } else {
      newDiv.innerHTML = "";
      newDiv.classList.add("d-none");
    }
  }
}
