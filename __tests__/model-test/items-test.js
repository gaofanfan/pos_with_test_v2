jest.dontMock('../../js/model/item');

describe('.all()', function () {
  it('should return correct price', function () {
    var Item = require('../../js/model/item');

    var result = Item.all()[0];

    expect(result. price).toEqual(3.00);
    });
});
