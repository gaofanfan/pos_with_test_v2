jest.dontMock('../js/items');

describe('.all()', function () {
  it('should return array', function () {
    var Item = require('../js/items');

    var result = Item.all()[0];

    expect(result. price).toEqual(3.00);
    });
});
