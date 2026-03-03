const viewButton = document.getElementById('viewCV');

viewButton.addEventListener('click', () => {
    // URL of the PDF in static folder
    const pdfUrl = '/documents/MIE_Candidate_Kgobe_SJN_JAVA08.pdf';

    // Open PDF in a new browser tab
    window.open(pdfUrl, '_blank');
});

//Change theme
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const storageKey = 'theme';

function setTheme(theme){
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey,theme);
    themeToggleBtn.setAttribute('aria-label', theme === 'dark'? 'Change to light theme' : 'Change to dark theme')
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Optional: detect system preference as a fallback
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});

function changeImage() {
    const img = document.getElementById("profilePicture");

    // Start flip
    img.classList.add("active");

    setTimeout(() => {
        // Change image halfway through animation
        if (img.src.includes("profile1.png")) {
            img.src = "./images/profile2.JPEG";
        } else {
            img.src = "./images/profile1.png";
        }
    }, 300); // Half of animation time

    setTimeout(() => {
        // Reset flip so it can animate again
        img.classList.remove("active");
    }, 600);
}

// Click event
const img = document.getElementById("profilePicture");
img.addEventListener("click", changeImage);

//console.log(document.getElementById("hamburger"));
//console.log(document.getElementById("nav"));