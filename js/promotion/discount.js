function Discount(discount, subtotal) {
  this.discount = discount;
  this.subtotal = subtotal;
}

Discount.prototype.buildPromotionName = function () {
  return '';
};

Discount.prototype.getPromotionMoney = function () {
  return 1 * (this.subtotal * (1 - this.dicount)).toFixed(2);
};

module.exports = Discount;
