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
    const nav = document.getElementById("nav-container");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
