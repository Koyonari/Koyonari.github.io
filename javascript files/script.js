//Hacker Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

window.addEventListener("DOMContentLoaded", () => {
  const h2Element = document.querySelector("h2");
  let iterations = 0;

  const interval = setInterval(() => {
    h2Element.innerText = h2Element.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return h2Element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= h2Element.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1 / 7;
  }, 12);
});

//News Popup
function togglePopup(popupid) {
  document.getElementById(popupid).classList.toggle("active");
}

//Forum Login Popup
const join = document.querySelector(".join"),
    overlay = document.querySelector(".overlay"),
    closeBtn = document.querySelector(".overlay .close");

join.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});