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

  describe('#getName', function () {

    it('should return a commodity name', function () {
      var result = cartItem.getName();
      expect(result).toBe('可口可乐350ml');
    });
  });

  describe('#getPrice', function () {

    it('should return a commodity price', function () {
      var result = cartItem.getPrice();
      expect(result).toBe(3.00);
    });
  });

  describe('#getBrand', function () {

    it('should return a commodity brand', function () {
      var result = cartItem.getBrand();
      expect(result).toBe('可口可乐');
    });
  });

  describe('#getUnit', function() {
    it('should return correct commodity unit', function() {
      var result = cartItem.getUnit();
      expect(result).toBe('瓶');
    });
  });
});
