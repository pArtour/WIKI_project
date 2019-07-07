;(function() {
  'use strict';
  const markdownResult = document.querySelector('#markdown-result'),
        lastArticlesListElement = document.querySelector("#last-articles"),
        allArticlesListElement = document.querySelector("#all-articles"),
        readArticleButton = document.querySelector("#read-article"),
        json = localStorage.getItem('articles'),
        articles = JSON.parse(json),
        article = articles[articles.length - 1];

  // 200 символов из последней статьи
  markdownResult.innerHTML = marked(article.content.substr(0, 200) + '...');
  // вЫВЕСТИ СПИСОК ВСЕХ СТАТЕЙ 
  let str = '';
  for (let i = 0; i < articles.length; i++) {
    const currentArticle = articles[i];
    str = str + `<li class="other-list__item"><a class="other-list__link" href="article.html?id=${currentArticle.id}">${currentArticle.title}</a></li>`;

  } 
  allArticlesListElement.innerHTML = str;
 
  //Вывести список 3-х последних статей
  str = '';
  for (let i = articles.length - 3; i < articles.length; i++) {
    const currentArticle = articles[i];
    str = str + `<li class="articles-list-item"><a href="article.html?id=${currentArticle.id}" class="articles-list-link">${currentArticle.title}</a></li>`
  }
  lastArticlesListElement.innerHTML = str;


  readArticleButton.addEventListener('click', function() {
    location.replace('article.html?id=' + article.id)
  })
})();