// Get the navbar element
const navbar = document.querySelector('.navbar');
let processing = false

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


//register new user
const form = document.getElementById("registerForm")

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const spinner = document.querySelector('.fa-spinner')
  spinner.classList.add('open')

  // Create a FormData object to capture all form fields
  const formData = new FormData(form);

  
  const formValues = {};
  formData.forEach((value, key) => {
      formValues[key] = value;
  });

  await register(formValues);
});

//register function
async function register(data) {
  const spinner = document.querySelector('.fa-spinner')
  const URL = "https://cit306-backend.onrender.com/register"
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if(response.ok){
    spinner.classList.remove('open')
    // Show success popup
    const popup = document.getElementById('successPopup');
    popup.classList.remove('popup-hidden');
    popup.classList.add('show');

    // Hide popup after 1 second
    setTimeout(() => {
      popup.classList.remove('show');
      popup.classList.add('hidden');
    }, 4000);

    // Redirect to index page after 3 seconds
    setTimeout(() => {
        window.location.href = 'index.html'; // Replace 'index.html' with your actual page
    }, 5000);
    const data = await response.json()
  }
  else{
    spinner.classList.remove('open')
    alert("Sorry couldn't register user")
  }
}