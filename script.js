let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
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

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let button = document.querySelector(`.button[data-key="${key}"]`);
  if (button) {
    button.click();
  }
});
