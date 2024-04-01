document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  //Select all the slide elements   
  const slides = document.querySelectorAll(".slide");

  //Function to set the current slide
  const showSlide = (n) => {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

   // Set the default slide
   showSlide(currentSlide);

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  }

  const previousSlide = () => {
    showSlide(currentSlide - 1);
  }

  //Select previous and next button elements 
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  //Attach handler functions to the button elements
  prevButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);

 
});