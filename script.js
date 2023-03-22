function sanitizeInput(input) {
  // regular expression to match any characters that are not digits, operators, or decimal points
  const regex = /[^0-9+\-*/.]/g;
  // replace any matches with an empty istring
  return input.replace(regex, "");
}

let inputString = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      // sanitize the input
      const sanitizedInput = sanitizeInput(inputString);
      // evaluate the sanitized input
      inputString = eval(sanitizedInput);
      document.querySelector("input").value = inputString;
    } else if (e.target.innerHTML == "C") {
      inputString = "";
      document.querySelector("input").value = inputString;
    } else {
      console.log(e.targer);
      inputString = inputString + e.target.innerHTML;
      document.querySelector("input").value = inputString;
    }
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Enter") {
    key = "=";
  }
  let button = document.querySelector(`.button[data-key="${key}"]`);
  if (button) {
    button.click();
  }
});
