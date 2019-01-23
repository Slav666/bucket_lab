const WishForm = require('./views/wish_form.js');
const Wish = require('./models/wish.js');
const DisplayWish = require('./views/display_wish.js');
document.addEventListener('DOMContentLoaded', () => {

  const wish = new Wish();
  wish.bindEvents();

  const section = document.querySelector('.display-wishes')
  const displayWish = new DisplayWish (section);
  displayWish.bindEvents();

  const form = document.querySelector('#submit-bucket-form');
  const wishForm = new WishForm(form);
  wishForm.bindEvents();

  wish.getData();
});
