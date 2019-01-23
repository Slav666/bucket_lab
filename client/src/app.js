const WishForm = require('./views/wish_form.js');
const Wish = require('./models/wish.js');

document.addEventListener('DOMContentLoaded', () => {

  const wish = new Wish();
  wish.bindEvents();

  const form = document.querySelector('#submit-bucket-form');
  const wishForm = new WishForm(form);
  wishForm.bindEvents();
});
