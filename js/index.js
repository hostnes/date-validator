const dateInput = document.getElementById("date-input");
arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"];

function inputProcessing(event, inputChar) {
  event.preventDefault();
  let inputValue = event.target.value + inputChar;
  const inputlength = inputValue.length;
  if (inputChar == "Backspace") {
    if (inputlength == 12) {
      inputValue = inputValue.substring(0, dateInput.value.length - 2);
    } else if (inputlength == 15) {
      inputValue = inputValue.substring(0, dateInput.value.length - 2);
    } else {
      inputValue = inputValue.substring(0, dateInput.value.length - 1);
    }
    dateInput.value = inputValue;
  }
  if (inputlength <= 10 && inputChar != "Backspace") {
    if (inputlength == 2) {
      inputValue += ".";
    } else if (inputlength == 5) {
      inputValue += ".";
    }
    dateInput.value = inputValue;
  }
}

function validateInput(event) {
  event.preventDefault();
  const inputChar = event.key;
  if (arr.includes(inputChar) == true) {
    inputProcessing(event, inputChar);
  }
}

dateInput.addEventListener("keydown", validateInput);
