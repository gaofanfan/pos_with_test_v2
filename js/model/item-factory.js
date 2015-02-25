var _ = require('lodash');
var Cart = require('./cart');

function ItemFactory() {

}

ItemFactory.createCartItems = function (cart, countItems) {

  _.forEach(countItems, function(countItem) {
    cart.addCartItem(countItem);
  });
};

module.exports = ItemFactory;
