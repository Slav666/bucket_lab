const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Wish = function(url){
this.url = 'http://localhost:3000/api/buckets'
this.request = new RequestHelper(this.url);
};

Wish.prototype.bindEvents = function () {
  PubSub.subscribe('WishForm:wish-submitted', event => {
    this.postWish(event.detail);
  });
};

Wish.prototype.postWish = function(data){
console.log(data);
this.request.post(data);
};

module.exports = Wish;
