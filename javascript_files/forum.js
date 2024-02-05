// Preloader
const preloader = document.getElementById('preloader');
preloader.style.display = 'flex'; // Initially show the preloader

// Position the preloader to cover the entire viewport and overlap everything
preloader.style.position = 'fixed';
preloader.style.zIndex = 9999; // Ensure it's on top of everything

setTimeout(() => {
  preloader.style.display = 'none'; // Hide preloader after 2 seconds
  document.getElementById('main-content').style.display = 'flex';
  document.body.style.overflow = 'auto'; // Re-enable scrollbars
}, 3000);

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