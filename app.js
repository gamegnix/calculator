let firstNumber = "";
let operator = "";
let secondNumber = "";

let display = document.querySelector("#display");

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      firstNumber = "";
      operator = "";
      secondNumber = "";
      display.value = "";
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      firstNumber = display.value;
      operator = value;
      display.value += value;
    } else if (value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});

//     keyboard support

document.addEventListener("keydown", (event) => {
  let value = event.key;

  if (value === "Enter") value = "=";
  if (value === "Backspace") {
     firstNumber = ""
     operator = ""
     secondNumber = ""
     display.value = ""
     return
  }

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === "=" ||
    (!isNaN(value) && value.trim() !== "")
  ) {
    let btn = [...buttons].find((button) => button.textContent === value);
    if (btn) btn.click();
  }
});
