const images = [
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Crop_Einstein.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Crop_Heisenberg.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0a/Crop_Schrodinger.png",
];

let currentIndex = 0;
const quantumImage = document.getElementById("quantumImage");

setInterval(() => {
  quantumImage.classList.add("opacity-0"); // Start fade-out

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    quantumImage.src = images[currentIndex];
    quantumImage.classList.remove("opacity-0"); // Fade-in
  }, 500); // Match transition duration
}, 3000);




document.addEventListener('DOMContentLoaded', () => {
    const mainDisplay = document.querySelector('.main-display');
    const radios = document.querySelectorAll('input[name="gallery-radio"]');
    let currentIndex = 0;
    
    function updateMainImage(imgSrc) {
      mainDisplay.style.opacity = '0';
      setTimeout(() => {
        mainDisplay.innerHTML = `<img src="${imgSrc}" alt="" />`;
        mainDisplay.style.opacity = '1';
      }, 300);
    }
  
    function advanceGallery() {
      currentIndex = (currentIndex + 1) % radios.length;
      const currentRadio = radios[currentIndex];
      currentRadio.checked = true;
      const imgSrc = currentRadio.nextElementSibling.getAttribute('data-img-src');
      updateMainImage(imgSrc);
    }
  
    // Initial load: display the first image
    const initialSrc = document.querySelector('input[name="gallery-radio"]:checked + .gallery-item').getAttribute('data-img-src');
    updateMainImage(initialSrc);
    
    // Start the automatic slideshow
    setInterval(advanceGallery, 3000); // Change image every 2 seconds
    
    // Make thumbnails clickable to override the automatic transition
    radios.forEach((radio, index) => {
      radio.nextElementSibling.addEventListener('click', () => {
        currentIndex = index; // Update the index to match the user's selection
        const imgSrc = radio.nextElementSibling.getAttribute('data-img-src');
        updateMainImage(imgSrc);
      });
    });
  });






  // Set the date and time for the countdown (e.g., Nov 11, 2025, 9:00 AM)
const countDownDate = new Date("Oct 13, 2025 09:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EVENT IS LIVE!";
  }
}, 1000);






// Global time zone 

  function updateTimezones() {
    // Use 'en-US' locale for the time string to force consistent 12-hour format with uppercase AM/PM.
    const timeLocale = "en-US"; 
    
    // Set hour12: true to ensure AM/PM is displayed.
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const dayOptions = { weekday: 'long' };
    
    // Locales for displaying the Day of the Week (kept regional for "vendredi" etc.)
    const dayLocale = { 
        london: "en-GB", 
        moscow: "en-GB", 
        delhi: "en-IN", 
        paris: "fr-FR"
    };

    // London (GMT/BST)
    document.getElementById("tz-london").textContent =
      new Date().toLocaleTimeString(timeLocale, { timeZone: "Europe/London", ...timeOptions });
    document.getElementById("day-london").textContent =
      new Date().toLocaleDateString(dayLocale.london, { timeZone: "Europe/London", ...dayOptions });

    // Moscow (MSK)
    document.getElementById("tz-moscow").textContent =
      new Date().toLocaleTimeString(timeLocale, { timeZone: "Europe/Moscow", ...timeOptions });
    document.getElementById("day-moscow").textContent =
      new Date().toLocaleDateString(dayLocale.moscow, { timeZone: "Europe/Moscow", ...dayOptions });

    // Delhi (IST - Asia/Kolkata)
    document.getElementById("tz-delhi").textContent =
      new Date().toLocaleTimeString(timeLocale, { timeZone: "Asia/Kolkata", ...timeOptions });
    document.getElementById("day-delhi").textContent =
      new Date().toLocaleDateString(dayLocale.delhi, { timeZone: "Asia/Kolkata", ...dayOptions });

    // Paris (CET/CEST - Europe/Paris)
    document.getElementById("tz-paris").textContent =
      new Date().toLocaleTimeString(timeLocale, { timeZone: "Europe/Paris", ...timeOptions });
    document.getElementById("day-paris").textContent =
      new Date().toLocaleDateString(dayLocale.paris, { timeZone: "Europe/Paris", ...dayOptions });
  }

  setInterval(updateTimezones, 1000);
  updateTimezones();




