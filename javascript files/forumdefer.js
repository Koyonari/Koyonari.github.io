// Forum animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        // Add a delay before adding the "show" class
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 3000); // Delay for 3 seconds
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  