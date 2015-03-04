jest.dontMock('../../js/promotion/brand-discount');
jest.dontMock('../../js/promotion/discount');

describe('BrandDiscount', function () {

  var BrandDiscount = require('../../js/promotion/brand-discount');
  var discount = new BrandDiscount(0.95, 50.9, '苹果');

  describe('#buildPromotionName()', function () {

    it('should return Promotion information', function () {

      var result = discount.buildPromotionName();
      expect(result).toBe('苹果品牌打折');

    });
  });

  describe('#getPromotionMoney()', function () {

    it('should return Promotion money', function () {

      var result = discount.getPromotionMoney();
      expect(result).toBe(2.55);

    });
  });
});
