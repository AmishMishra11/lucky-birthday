var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#message");

function checkLuck(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "Your Birthday is Lucky🤩";
  } else {
    output.innerText = " Your Birthday is not Lucky😐";
  }
}

function checkBirthDateisLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && luckyNumber) {
    checkLuck(sum, luckyNumber.value);
  } else {
    output.innerText = " Please enter a value😬";
  }
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthDateisLucky);
