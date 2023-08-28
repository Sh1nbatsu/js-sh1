const buttons = document.querySelectorAll("button:not(:only-of-type)");

const themeBtn = document.getElementById("theme");

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
  divs[index].classList.add("active");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    switchBtnActiveState(buttons, index);
    switchDivActiveState(divs, index);
  });
});

function changeTheme() {
  let dark = false;
  themeBtn.addEventListener("click", (e) => {
    themeBtn.classList.toggle("light-theme");
    themeBtn.classList.toggle("dark-theme");
    if (dark === false) {
      dark = true;
      document.body.classList.add("dark");
    } else {
      dark = false;
      document.body.classList.remove("dark");
    }
  });
}

changeTheme();
