document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k3ogrgw', 'template_y7jpnap', '#contact-form', 'bJFbhpoRPLOnOO5Jz')
            .then(() => {
                // Show sent message
                contactMessage.textContent = 'Message sent successfully ✅';

                // Remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);

                // Clear input fields
                contactForm.reset()
            }, () => {
                // Show error message
                contactMessage.textContent = 'Message not sent (Service error) ❌'
            });
    };

    contactForm.addEventListener('submit', sendEmail);
});
