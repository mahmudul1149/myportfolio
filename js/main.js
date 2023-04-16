document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider1", {
    type: "loop",
    autoWidth: true,
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider2", {
    type: "loop",
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
  }).mount();
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splider3", {
    type: "loop",
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perPage: 2,
    padding: "1rem",
  }).mount();
});
