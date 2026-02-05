const dogImageEl = document.querySelector('#dog-image');
const errorEl = document.querySelector('.error');

export const updateDogImage = (src) => {
  dogImageEl.src = src;
}

export const updateError = (msg) => {
  errorEl.textContent = msg;
}