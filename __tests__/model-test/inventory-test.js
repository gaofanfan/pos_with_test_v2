// jest.autoMockOff();
//
// var moment = require('moment');
// describe('Iventory', function () {
//   var Inventory = require('../../js/model/inventory');
//   var Cart = require('../../js/model/cart');
//   var StrategyOne = require('../../js/strategy/strategy-one');
//   var CartItem = require('../../js/model/cart-item');
//   var Item = require('../../js/model/item');
//   var cart = new Cart();
//
//   cart.cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
//                     new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
//                     new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
//                     new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 200)];
//
//   var inventory = new Inventory(cart);
//
//   describe('#toString()', function () {
//     it('should return string', function() {
//       var result = inventory.toString(strategy);
//       expect(result).toBe('***<没钱赚商店>购物清单***\n' +
//         '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n\n' +
//         '----------------------\n' +
//         '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
//         '名称：可口可乐550ml，数量：12瓶，单价：4.00(元)，小计：48.00(元)\n'+
//         '名称：康师傅方便面，数量：20袋，单价：4.50(元)，小计：90.00(元)\n' +
//         '名称：羽毛球，数量：200个，单价：1.00(元)，小计：200.00(元)\n\n' +
//         '----------------------\n' +
//         '优惠信息：\n' +
//         '名称：可口可乐品牌打折，金额：10.80元\n' +
//         '名称：满100减3，金额：6.00元\n\n' +
//         '----------------------\n' +
//         '总计：381.20(元)\n' +
//         '节省：16.80(元)\n' +
//         '**********************\n');
//     });
//   });
// });
