import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
    
    const message = document.querySelector('#message');
    const emailarea = document.querySelector('#email');
    const form = document.querySelector('.feedback-form');

    // console.log('message:', message);
    // console.log('emailarea:', emailarea);
    // console.log('form:', form);

    if (!message || !emailarea || !form) {
        console.error('One or more elements not found.');
        return;
    }
    
    form.addEventListener('input', throttle((ev) => {
        ev.preventDefault();

        const emailText = emailarea.value;
        const messageText = message.value;

        const formData = {
            email: emailText,
            message: messageText,
        };

        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }, 500));

    window.addEventListener('DOMContentLoaded', () => {
        const savedFormData = localStorage.getItem('feedback-form-state');

        const parsedFormData = JSON.parse(savedFormData);

        if (parsedFormData) {
            emailarea.value = parsedFormData.email;
            message.value = parsedFormData.message;
        }
    });

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const savedFormData = localStorage.getItem('feedback-form-state');

        const parsedFormData = JSON.parse(savedFormData);

        console.log(`Email : ${parsedFormData.email}`);
        console.log(`Feedback : ${parsedFormData.message}`);

        localStorage.removeItem('feedback-form-state');

        emailarea.value = '';
        message.value = '';
    });
});
