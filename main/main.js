'use strict';

function calculateProductsCount(productList) {

  let productInfoMap = new Map();
  productList.forEach(element => {
    if (productInfoMap.has(element)) {
      productInfoMap.set(element, productInfoMap.get(element) + 1);
    } else {
      productInfoMap.set(element, 1);
    }
  });

  let productInfoList = [];
  productInfoMap.forEach((value, key) => {
    productInfoList.push({ barcode: key, count: value });
  });
  return productInfoList;
}


function generateProductsReceipt(productInfoList) {
  let db = loadAllItems();
  let buyProductList = [];
  let sum = 0;

  productInfoList.forEach(product => {
    db.forEach(element => {
      if (element.barcode === product.barcode) {
        product.price = element.price;
        product.name = element.name;
        product.unit = element.unit;
        buyProductList.push(product);
        sum += (product.count * product.price);
        return false;
      }
    });
  });

  let receiptInfo = {};
  receiptInfo.buyProductList = buyProductList;
  receiptInfo.totlePrice = sum;

  return receiptInfo;
}

function formatReceiptInfo(receiptInfo) {
  let receipt = "***<没钱赚商店>收据***\n";
  let buyProductList = receiptInfo.buyProductList;
  for (let i = 0; i < buyProductList.length; i++) {
    let buyProduct = buyProductList[i];
    receipt += `名称：${buyProduct.name}，数量：${buyProduct.count}${buyProduct.unit}，单价：${buyProduct.price.toFixed(2)}(元)，小计：${(buyProduct.price * buyProduct.count).toFixed(2)}(元)` + "\n";
  }
  receipt += "----------------------\n";
  receipt += "总计：" + receiptInfo.totlePrice.toFixed(2) + "(元)\n";
  receipt += "**********************";
  return receipt;
}

function printReceipt(inputs) {
  let productInfoList = calculateProductsCount(inputs);
  let receiptInfo = generateProductsReceipt(productInfoList);
  let receipt = formatReceiptInfo(receiptInfo);
  console.log(receipt);
}