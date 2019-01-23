const WishForm = require('./views/wish_form.js')

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#submit-bucket-form');
  const wishForm = new WishForm(form);
  wishForm.bindEvents();

});
