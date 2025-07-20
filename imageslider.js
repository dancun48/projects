//IMAGE SLIDER PROJECT

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0; // to start at the first slide
let intervalId = null;


//to load the image after all the DOM content is loaded...
document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){ // will populate the browser with the 1st image

    if(slides.length > 0){ //if we have slides, display them

        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 3000); // will invoke the next slide after 5 seconds
        //console.log(intervalId);

    } 

}

function showSlide(index){ // index of next slide we want to go to

    if(index >= slides.length){ //once we are at the last page, this resets the index to 0; 1st image
        slideIndex = 0;
    }
    else if(index < 0){ //once we are at the first page, this resets the index to 5; 6th image
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');

}

function prevSlide(){
    clearInterval(intervalId); // stops the setInterval function allowing us to admire each image for longer
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}