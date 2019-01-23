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
this.request.post(data)
  .then((wishes) => {
    PubSub.publish('Wish:Data-loaded', wishes)
  })
};

Wish.prototype.getData = function(){
  this.request.get()
    .then((wishes) => {
      PubSub.publish('Wish:Data-loaded', wishes)
    })
}
module.exports = Wish;
