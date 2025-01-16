// Get the button:
let mybutton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
let mybutton = document.getElementById("myBtn")

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const themeStitcher = document.getElementById("themingSwitcher");
const isSystemThemeSetToDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// set toggler position based on system theme
if (isSystemThemeSetToDark) {
  themeStitcher.checked = true;
}

// add listener to theme toggler
themeStitcher.addEventListener("change", (e) => {
  toggleTheme(e.target.checked);
});

const toggleTheme = (isChecked) => {
  const theme = isChecked ? "dark" : "light";

  document.documentElement.dataset.mdbTheme = theme;
}

// add listener to toggle theme with Shift + D
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    themeStitcher.checked = !themeStitcher.checked;
    toggleTheme(themeStitcher.checked);
  }
});