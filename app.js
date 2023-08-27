const buttons = document.querySelectorAll("button");

const divs = document.querySelectorAll(".content");

function switchBtnActiveState(buttons, index) {
  buttons.forEach((b) => {
    b.classList.remove("active");
  });
  buttons[index].classList.add("active");
}

function switchDivActiveState(divs, index) {
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[index].classList.add("active")
}

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    switchBtnActiveState(buttons, index);
    switchDivActiveState(divs, index);
  });
});
