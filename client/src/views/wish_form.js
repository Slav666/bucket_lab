const PubSub = require('../helpers/pub_sub.js');

const WishForm = function(form){
this.form = form;
};

WishForm.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

WishForm.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newWish = this.createWish(event.target);
  PubSub.publish('WishForm:wish-submitted', newWish);
  event.target.reset();
};

WishForm.prototype.createWish = function (form) {
  const newWish = {wish: form.wish.value};
  return newWish;
};


module.exports = WishForm;
