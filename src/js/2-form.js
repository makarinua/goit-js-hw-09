"use strict";

const feedbackForm = document.querySelector('.feedback-form');

const storedData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

feedbackForm.email.value = storedData.email || '';
feedbackForm.message.value = storedData.message || '';

feedbackForm.addEventListener('input', function (event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
    const currentState = {
      email: feedbackForm.email.value.trim(),
      message: feedbackForm.message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  }
});

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const currentState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (!currentState.email || !currentState.message) {
    alert('Please fill email and message fields before submitting.');
    return;
  }

  console.log('Form Data:', {
    email: currentState.email,
    message: currentState.message,
  });

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});