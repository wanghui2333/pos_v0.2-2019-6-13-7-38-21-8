'use strict';

describe('pos', () => {

  it('should print text', () => {

    const inputs = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000001',
      'ITEM000001',
      'ITEM000004'
    ];

    spyOn(console, 'log');

    printReceipt(inputs);

    //calculateProductsCount
    // const expectText = [
    //   { barcode: 'ITEM000000', count: 5 },
    //   { barcode: 'ITEM000001', count: 2 },
    //   { barcode: 'ITEM000004', count: 1 }
    // ];

    //generateProductsReceipt
    // const expectText = {
    //   buyProductList: [
    //     { barcode: 'ITEM000000', count: 5, price: 3, name: '可口可乐', unit: '瓶' },
    //     { barcode: 'ITEM000001', count: 2, price: 3, name: '雪碧', unit: '瓶' },
    //     { barcode: 'ITEM000004', count: 1, price: 2, name: '电池', unit: '个' }
    //   ],
    //   totlePrice: 23
    // };

    const expectText = `***<没钱赚商店>收据***
    名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)
    名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)
    名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)
    ----------------------
    总计：23.00(元)
    **********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
