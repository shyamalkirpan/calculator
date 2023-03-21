function sanitizeInput(input) {
  // regular expression to match any characters that are not digits, operators, or decimal points
  const regex = /[^0-9+\-*/.]/g;
  // replace any matches with an empty string
  return input.replace(regex, "");
}

let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      // sanitize the input
      const sanitizedInput = sanitizeInput(string);
      // evaluate the sanitized input
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.targer);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

let input = document.querySelector(".input");
input.addEventListener("change", (e) => {
  e.target.value = sanitizeInput(e.target.value);
});

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let button = document.querySelector(`.button[data-key="${key}"]`);
  if (button) {
    button.click();
  }
});
