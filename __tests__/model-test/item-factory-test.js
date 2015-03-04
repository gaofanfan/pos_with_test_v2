jest.dontMock('lodash');
jest.dontMock('../../js/model/item-factory');
jest.dontMock('../../js/model/item');
jest.dontMock('../../js/model/cart-item');
jest.dontMock('../../js/model/cart');

describe('ItemFactory', function () {
  var ItemFactory = require('../../js/model/item-factory');
  var Cart = require('../../js/model/cart');

  describe('.createCartItems()', function () {
    var cart = new Cart();
    var countItems = [{'ITEM000000' : 20},
                      { 'ITEM000010' : 2 }];

    it('should return commodity count', function() {

      ItemFactory.createCartItems(cart, countItems);
      expect(cart.cartItems[0].count).toEqual(20);

    });
  });

});
