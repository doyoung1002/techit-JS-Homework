'use strict';

const resultElement = document.querySelector('#result');
const formContainer = document.querySelector('#form');
const productList = document.querySelector('#product-list')
const productSelect = document.querySelector('#product-select');
const productTotal = document.querySelector('#product-total');
const productButton = document.querySelector('#product-btn');

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product('대뱃살', 3000),
  new Product('목살', 5000),
  new Product('배꼽살', 4000),
  new Product('중뱃살', 1000),
]

const addPayment = function () {
  window.open('payment.html', '_blank', 'left=100, top=100, width=500, height=300');
}

const totalPriceData = function () {
  localStorage.setItem('totalPrice', totalPrice)
}

let totalPrice = 0;

const productAllList = function () {
  products.forEach(product => {
    const option = document.createElement('option');
    option.textContent = `${product.name} - ${product.price}`;
    option.value = JSON.stringify(product);
    productList.appendChild(option);
  })
}

const updateProduct = function () {
  productList.addEventListener('change', function () {
    const selectList = Array.from(productList.selectedOptions).map(option => JSON.parse(option.value));
    productSelect.innerHTML = '';
    totalPrice = 0;

    selectList.forEach(product => {
      productSelect.classList.remove('hidden');
      const buyList = document.createElement('li');
      buyList.textContent = `${product.name} - ${product.price}`;
      productSelect.appendChild(buyList);
      totalPrice += product.price;
    })

    productTotal.textContent = `총액 ${totalPrice}원`;
  });
}

productButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (totalPrice === 0) {
    alert('구매할 상품을 선택하세요');
  } else {
    totalPriceData();
    addPayment();
  }
})

const init = function () {
  productAllList();
  updateProduct();
}

init()