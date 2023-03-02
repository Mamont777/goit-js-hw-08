// Перший варіант, не розумію чому не виводить консоль лог при сабміті

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData;

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input[name="email"]'),
  messageInput: document.querySelector(
    '.feedback-form textarea[name="message"]'
  ),
};

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

loadFormData();

function onFormInput(evt) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    formData = JSON.parse(savedMessage);
  } else {
    formData = {};
  }
  //   console.log(formData);
  formData[evt.target.name] = evt.target.value;
  const message = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, message);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
}

function loadFormData() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const data = JSON.parse(savedMessage);
    refs.emailInput.value = data.email;
    refs.messageInput.value = data.message;
  }
}

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//   feedbackForm: document.querySelector('.feedback-form'),
//   emailInput: document.querySelector('.feedback-form input'),
//   messageInput: document.querySelector('.feedback-form textarea'),
// };

// refs.feedbackForm.addEventListener('submit', onFormSubmit);
// refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput() {
//   const formData = {
//     email: refs.emailInput.value,
//     message: refs.messageInput.value,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   localStorage.removeItem(STORAGE_KEY);
//   const state = {
//     email: refs.emailInput.value,
//     message: refs.messageInput.value,
//   };
//   console.log(state);
//   evt.target.reset();
// }

// function loadFormData() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   const data = JSON.parse(savedMessage);
//   if (savedMessage) {
//     refs.emailInput.value = data.email;
//     refs.messageInput.value = data.message;
//   }
// }

// loadFormData();
