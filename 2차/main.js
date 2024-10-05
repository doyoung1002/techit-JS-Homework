'use strict';

const searchBtn = document.querySelector('#button');
const searchInput = document.querySelector('#input');
const articleTitle = document.querySelector('#articleTitle');
const articleAuthors = document.querySelector('#articleAuthors');
const articleContents = document.querySelector('#articleContents');

searchBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  const query = searchInput.value;
  xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&from=2024-09-05&sortBy=publishedAt&apiKey=5af6b8bf3e49410aaa0c64fa3a614b59`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const result = xhr.responseText;
      const resultObj = JSON.parse(result);
      const articles = resultObj.articles;
      let resultTxt = '';

      articles.slice(0, 3).forEach(article => {
        resultTxt += `
          <div class="l_wrapper">
        <article class="article-container" id="articleResult">
          <div class="article-textBox">
            <h2 class="article-title">${article.title}</h2>
              <h3 class="article-authors">${article.author} - ${article.publishedAt} <a class="learn-more" href=${article.url} target="_blank" rel="noopener noreferrer">Learn More</a></h3>
                <p class="article-contents">${article.description}</p>
                  </div>
          <div class="article-img">
            <img src="${article.urlToImage}" alt="${article.title}" />
              </div>
                </article>
                  </div>
                  `;
      });
      document.querySelector('#result').innerHTML = resultTxt;
    } else if (xhr.status === 400) {
      alert('잘못된 요청입니다. 검색어를 다시 입력해주세요.');
    } else if (xhr.status === 404) {
      alert('검색 결과를 찾을 수 없습니다.');
    } else {
      alert('서버 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
  xhr.onerror = function () {
    console.error('네트워크 오류');
  };

  xhr.send();
});