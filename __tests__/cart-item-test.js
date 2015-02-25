jest.dontMock('../js/items');
jest.dontMock('../js/cart-item');

describe('CartItem', function() {

  var Item;
  var CartItem;
  var cartItem;

  beforeEach(function() {

    Item = require('../js/items');
    CartItem = require('../js/cart-item');

    cartItem = new CartItem(Item.all()[0], 30);
  });

  describe('#getBarcode', function () {

    it('should return a barcode', function () {
      var result = cartItem.getBarcode();
      expect(result).toBe('ITEM000000');
    });
  });

});
