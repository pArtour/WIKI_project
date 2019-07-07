;(function() {
  'use strict';
  const id = parseInt(location.search.substr(4)),
        articleElement = document.querySelector('#article'),
        editArticleButtton = document.querySelector('#edit-article'),
        lastArticlesListElement = document.querySelector("#last-articles"),
        json = localStorage.getItem('articles'),
        articles = JSON.parse(json);

  let article = null;
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === id) {
        article = articles[i]
    }
  }
  articleElement.innerHTML = marked(article.content);
  let str = '';
  for (let i = articles.length - 3; i < articles.length; i++) {
    const currentArticle = articles[i];
    str = str + `<li class="articles-list-item"><a href="article.html?id=${currentArticle.id}" class="articles-list-link">${currentArticle.title}</a></li>`
  }
  lastArticlesListElement.innerHTML = str;
  
  editArticleButtton.addEventListener('click', function(){
    location.replace('new.html?id=' + id);
  });



})();
