const buttons = document.querySelectorAll("button");

const divs = document.querySelectorAll(".content");

function switchButtons(buttons, index) {
  buttons.forEach((b) => {
    b.classList.remove("active");
  });
  buttons[index].classList.add("active");
}

function switchDivs(divs, index) {
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[index].classList.add("active")
}

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    switchButtons(buttons, index);
    switchDivs(divs, index);
  });
});
