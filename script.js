console.log("Online, yeaboiii!");

//Slider
const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".previous-button");
const rightButton = document.querySelector(".next-button");

let currentSlide = 0;
const maxSlide = slides.length;

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

//Function go-to-slide
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

// Next Slide
rightButton.addEventListener("click", nextSlide);
// -100%, 0%, 100%, 200%

// Previous Slide
leftButton.addEventListener("click", previousSlide);

// trial code

/* const reviewSlide1 = document.querySelector(".slide1");
const reviewSlide2 = document.querySelector(".slide2");
const reviewSlide3 = document.querySelector(".slide3");

const reviewSlides = [reviewSlide1, reviewSlide2, reviewSlide3];
console.log(...reviewSlides);




let thisSlide = 0;
const lastSlide = reviewSlides.length - 1; */

/* rightButton.addEventListener("click", nextSlide() {

}) */
