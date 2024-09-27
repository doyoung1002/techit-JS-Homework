'use strict';

const resultElement = document.querySelector('#result');
const formContainer = document.querySelector('#form');
const productList = document.querySelector('#product-list')
const productSelect = document.querySelector('#product-select');


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

// products.length 만큼 반복문 돌려서 상품 list 출력
products.forEach(product => {
  const option = document.createElement('option');
  option.textContent = `${product.name} - ${product.price}`;
  option.value = `${product.name} - ${product.price}`
  productList.appendChild(option);
})

productList.addEventListener('change', function () {
  const selectedOptions = productList.selectedOptions;

  productSelect.classList.remove('hidden');
  const buyList = document.createElement('li');
  buyList.textContent = productList.value;
  productSelect.appendChild(buyList);
})

// const productText = document.createElement('li');
// productText.setAttribute('class', 'select-result');
// productText.appendChild(document.createTextNode(productList.options[productList.selectedIndex].text));
// productSelect.appendChild(productText);