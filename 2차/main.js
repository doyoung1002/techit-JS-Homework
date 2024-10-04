'use strict';

const searchBtn = document.querySelector('#button');
const searchResult = document.querySelector('#result');

searchBtn.addEventListener('click', function () {

  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://newsapi.org/v2/everything?q=tesla&from=2024-09-04&sortBy=publishedAt&apiKey=5af6b8bf3e49410aaa0c64fa3a614b59', true)
  xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    const researchFields = ['title', 'content'];
    const article = data['articles'];
    const inputResult = document.getElementById('input').value.toLowerCase();
    let foundItems = article.filter(item =>
      researchFields.some(field => item[field] && item[field].toLowerCase().includes(inputResult))
    );
  }
})