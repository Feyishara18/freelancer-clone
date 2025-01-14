window.addEventListener('scroll', () => {
    let stickyDiv = document.querySelector('.white-scroll');
    let navHeight = document.querySelector('nav').offsetHeight;
    let scrollDivHeight = document.querySelector('.scroll-nav').offsetHeight;

    // Get the current scroll position
    let scrollY = window.scrollY;

    // Show the sticky div when the scroll position exceeds the combined height of nav and scroll-div
    if (scrollY >= navHeight + scrollDivHeight) {
        stickyDiv.style.display = 'flex';
    } else {
        stickyDiv.style.display = 'none';
    }
})



// Sections
const buttons = document.querySelectorAll('.white-cont button');
const sections = document.querySelectorAll('section');
const offset = 13 * window.innerHeight / 100; // The height of the nav (13vh)
let isClicking = false;

// Function to handle button click and scroll to the respective section
buttons.forEach(button => {
    button.addEventListener('click', function() {
        isClicking = true; // Set to true when a button is clicked
        const target = document.querySelector(button.getAttribute('data-target'));
                
        // Smooth scroll to the target section
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });

        // Remove focus and active state from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.blur(); // Remove focus from all buttons
        });

        // Set focus and active state to the clicked button
        button.classList.add('active');
        button.focus();

        // Delay re-enabling scroll-triggered focus
        setTimeout(() => {
            isClicking = false; // Reset after smooth scroll completes
        }, 500); // Adjust delay time if needed
    });
});

// Function to handle scroll event and update the active button based on the section in view
window.addEventListener('scroll', () => {
    if (isClicking) return; // Skip scroll handling while clicking

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.clientHeight;
                
        // Check if the section is in view
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            buttons.forEach(button => {
                button.classList.remove('active');
                button.blur(); // Remove focus from other buttons
            });
            buttons[index].classList.add('active');
            buttons[index].focus(); // Focus on the button corresponding to the visible section
        }
    });
});
// Get the footer and the button
const footer = document.getElementById('footer');
const toggleBtn = document.getElementById('toggleFooterBtn');

// Toggle the 'footer-open' class when the button is clicked
toggleBtn.addEventListener('click', function() {
    footer.classList.toggle('footer-open'); // Toggle the class
});

// Get the footer and the button
const phnmenu = document.getElementById('phn-menu');
const togglePhn = document.getElementById('togphnmenu');

// Toggle the 'footer-open' class when the button is clicked
togglePhn.addEventListener('click', function() {
    phnmenu.classList.toggle('hamb-open'); // Toggle the class
});