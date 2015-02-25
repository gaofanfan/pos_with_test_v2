function CartItem(item, count) {
  this.item = item;
  this.count = count;
}

CartItem.prototype.getBarcode = function () {
  return this.item.barcode;
};

CartItem.prototype.getName = function () {
  return this.item.name;
};

CartItem.prototype.getPrice = function () {
  return this.item.price;
};

CartItem.prototype.getBrand = function () {
  return this.item.brand;
};

CartItem.prototype.getUnit = function () {
  return this.item.unit;
};

CartItem.prototype.getSubtotal = function () {
  return this.getPrice() * this.count;
};

module.exports = CartItem;
