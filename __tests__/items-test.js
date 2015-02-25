jest.dontMock('../js/model/items');

describe('.all()', function () {
  it('should return correct price', function () {
    var Item = require('../js/model/items');

    var result = Item.all()[0];

    expect(result. price).toEqual(3.00);
    });
});
