// Index.html splash screen animation
let intro = document.querySelector(".intro-animation");
let logo = document.querySelector(".intro-animation__logo");
let logoSpan = document.querySelectorAll(".intro-animation__logo--span");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.left = "100vw";
    }, 2300);
  });
});
