// Перший варіант, не розумію чого не працює

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = JSON.parse(localStorage.getItem(STORAGE_KEY) || {});

// const refs = {
//   feedbackForm: document.querySelector('.feedback-form'),
//   emailInput: document.querySelector('.feedback-form input[name="email"]'),
//   messageInput: document.querySelector(
//     '.feedback-form textarea[name="message"]'
//   ),
// };

// refs.feedbackForm.addEventListener('submit', onFormSubmit);
// refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

// loadFormData();

// function onFormInput(evt) {
//   formData[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
// }

// function loadFormData() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     const data = JSON.parse(savedMessage);
//     refs.emailInput.value = data.email;
//     refs.messageInput.value = data.message;
//   }
// }

// Другий варіант Не розумію чому не працює log onFormSubmit

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input[name="email"]'),
  messageInput: document.querySelector(
    '.feedback-form textarea[name="message"]'
  ),
};

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formData = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  const state = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };
  console.log(state);
}

function loadFormData() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const data = JSON.parse(savedMessage);
    refs.emailInput.value = data.email;
    refs.messageInput.value = data.message;
  }
}

loadFormData();
