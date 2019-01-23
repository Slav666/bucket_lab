const PubSub = require('../helpers/pub_sub.js');

const DisplayWish = function(container){
  this.container = container;
}

DisplayWish.prototype.bindEvents = function () {
  PubSub.subscribe('Wish:Data-loaded', event => {
    const data = event.detail;
    this.render(data);
  })
};

DisplayWish.prototype.render = function (dataArray) {
  this.dataArray = dataArray;
  this.container.innerHTML = '';

  const list = document.createElement('ul')
  this.container.appendChild(this.populateList(list));


};

DisplayWish.prototype.populateList = function (list) {
  this.dataArray.forEach( (wish) => {
    const listItem = document.createElement('li');
    console.dir(wish);
    listItem.textContent = `Before I die I want to ${wish.wish}`
    list.appendChild(listItem);
  });
  return list;
};



module.exports = DisplayWish
