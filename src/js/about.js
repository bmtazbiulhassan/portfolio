// Toggle Between Education and Experience in 'About' Page
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.check-button');
    const educationSection = document.querySelector('.timeline-container.education');
    const experienceSection = document.querySelector('.timeline-container.experience');

    // Initial state: Show Education, Hide Experience
    educationSection.style.display = 'block';
    experienceSection.style.display = 'none';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'active' from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' to the clicked button
            this.classList.add('active');

            // Toggle sections based on the button clicked
            if (this.textContent.trim() === 'Education') {
                educationSection.style.display = 'block';
                experienceSection.style.display = 'none';
            } else if (this.textContent.trim() === 'Experience') {
                educationSection.style.display = 'none';
                experienceSection.style.display = 'block';
            }
        });
    });
});





