// Text Animaltion
const words = ["Researcher", "Data Scientist", "Developer"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

const wordElement = document.getElementById("changing-word");

typeEffect = () => {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
        currentLetterIndex--;
    } else {
        currentLetterIndex++;
    }

    wordElement.textContent = currentWord.substring(0, currentLetterIndex);

    if (!isDeleting && currentLetterIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000); // Pause after typing
    } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 75 : 150; // Typing speed
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
    const navbarMobileMenuOpenBar = document.querySelector("#open-bar")
    const navbarMenuCloseBar = document.querySelector("#close-bar")
    const navbarMenu = document.querySelector(".navbar-menu")

    if (navbarMobileMenuOpenBar) {
        navbarMobileMenuOpenBar.addEventListener('click', () => {
            navbarMenu.classList.add('active')
        })
    }

    if (navbarMenuCloseBar) { 
        navbarMenuCloseBar.addEventListener('click', () => {
            navbarMenu.classList.remove('active')
        }) 
    }
});


