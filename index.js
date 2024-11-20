// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    // Add 'scrolled' class if scrolled past 50px
    navbar.classList.add('scrolled');
  } else {
    // Remove 'scrolled' class if back to the top
    navbar.classList.remove('scrolled');
  }
});




// PAGE LINK 
// ABOUT
function smoothScrollTo(target, duration) {
  const start = window.pageYOffset;
  const targetPosition = document.querySelector(target).offsetTop;
  const distance = targetPosition - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) { 
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Event listener for the About link

document.getElementById('aboutLink').addEventListener('click', function(event) {
  event.preventDefault(); 
  smoothScrollTo('#about', 200); 
});



// Event listener for the About link

document.getElementById('contactLink').addEventListener('click', function(event) {
  event.preventDefault(); 
  smoothScrollTo('#contact', 600); 
});

// SPEAKERS
// Event listener for the Speaker link

document.getElementById('speakerLink').addEventListener('click', function(event) {
  event.preventDefault(); 
  smoothScrollTo('#speaker', 400); 
});


                                    // TESTIMONIAL SCROLL
let currentIndex = 0;
const boxWidth = window.innerWidth * 0.95 / 2.5;
const marginRight = window.innerWidth * 0.012;
const slideWidth = boxWidth + marginRight;

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    document.querySelector(".testimonial-texts").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

function moveRight() {
  const totalSlides = document.querySelectorAll(".testimonial-boxes").length;
  if (currentIndex < totalSlides - 2.5) {
    currentIndex++;
    document.querySelector(".testimonial-texts").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}


                                    // FIXED GO TO TOP 
// FIXED GO TO TOP VISIBILITY

window.addEventListener('scroll', function() {
  const targetElement = document.getElementById('myElement');
  const scrollThreshold = window.innerHeight; // 200vh in pixels

  // Check if the scroll position is beyond 200vh
  if (window.scrollY >= scrollThreshold) {
    targetElement.classList.add('visible');
    targetElement.classList.remove('hidden');
  } else {
    targetElement.classList.add('hidden');
    targetElement.classList.remove('visible');
  }
});

// FIXED GO TO TOP DELAY
document.getElementById('scroll-top').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Delay the scroll action by 500ms
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // Adjust delay time in milliseconds
});


// NAV-LINK TOGGLE
const navlink = document.querySelector('.nav-ul');
const navToggle = document.getElementById('toggle');

navToggle.addEventListener('click', function(event) {
navlink.classList.toggle('nav-show')
navbar.classList.toggle('scrolling');
})