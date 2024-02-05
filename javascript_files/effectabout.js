// Hacker Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

window.addEventListener("DOMContentLoaded", () => {
  const h2Element = document.querySelector("h2");

  setTimeout(() => {
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
      iterations += 1 / 20;
    }, 20);
  }, 2100); // Delay until lottie ends
});
