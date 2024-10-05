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

      articles.forEach(article => {
        resultTxt += `
        <article class="article-container" id="articleResult">
          <div class="article-textBox">
            <h2 class="article-title">${article.title}</h2>
              <h3 class="article-authors">${article.author} - ${article.publishedAt} <a href=${article.url} target="_blank" rel="noopener noreferrer">Learn More</a></h3>
                <p class="article-contents">${article.description}</p>
                  </div>
          <div class="article-img">
            <img src="${article.urlToImage}" alt="${article.title}" />
              </div>
                </article>
                  `;
      });
      document.querySelector('#result').innerHTML = resultTxt;
    } else {
      console.error('API 호출 실패:', xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('네트워크 오류');
  };

  xhr.send();
});







// // 기사 영역의 요소들
// const articleTitles = [
//   document.querySelector('#articleTitle1'),
//   document.querySelector('#articleTitle2'),
//   document.querySelector('#articleTitle3')
// ];
// const articleAuthors = [
//   document.querySelector('#articleAuthor1'),
//   document.querySelector('#articleAuthor2'),
//   document.querySelector('#articleAuthor3')
// ];
// const articleContents = [
//   document.querySelector('#articleContent1'),
//   document.querySelector('#articleContent2'),
//   document.querySelector('#articleContent3')
// ];
// const articleImgs = [
//   document.querySelector('#articleImg1'),
//   document.querySelector('#articleImg2'),
//   document.querySelector('#articleImg3')
// ];

// searchBtn.addEventListener('click', function () {
//   const query = inputResult.value.toLowerCase();

//   fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-09-05&sortBy=publishedAt&apiKey=5af6b8bf3e49410aaa0c64fa3a614b59')
//     .then(response => response.json())
//     .then(data => {
//       const articles = data.articles;
//       const researchFields = ['title', 'content'];

//       let foundItems = articles.filter(item =>
//         researchFields.some(field => item[field] && item[field].toLowerCase().includes(query))
//       );

//       foundItems.slice(0, 3).forEach((article, index) => {
//         if (articleTitles[index] && articleAuthors[index] && articleContents[index] && articleImgs[index]) {
//           articleTitles[index].textContent = article.title;
//           articleContents[index].textContent = article.content || 'No content available';

//           const formattedTime = new Date(article.publishedAt).toLocaleString();
//           articleAuthors[index].innerHTML = `${article.author || 'Unknown Author'} - ${formattedTime} 
//             <a href="${article.url}" target="_blank" rel="noopener noreferrer">Learn More</a>`;

//           articleImgs[index].src = article.urlToImage || 'default-image.jpg';
//         } else {
//           alert('검색 결과가 없습니다.');
//         }
//       });
//     })
//     .catch(error => console.error('Error:', error));
// });
