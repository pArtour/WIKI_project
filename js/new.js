;(function() {
  'use strict';

  const markdownSource = document.querySelector('#markdown-source'),
        markdownResult = document.querySelector('#markdown-result'),
        articleTitleEelement = document.querySelector('#article-title'),
        saveButton = document.querySelector('#save-article-button');
  const id = parseInt(location.search.substr(4)),
        json = localStorage.getItem('articles'),
        articles = JSON.parse(json);

  if(id) {
    let article = null;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        article = articles[i]
      }
    }
    markdownSource.value = article.content;
    articleTitleEelement.value = article.title;

    const result = marked(markdownSource.value);
    markdownResult.innerHTML = result;
  }
      
    markdownSource.addEventListener('keyup', function (event) { 
    const result = marked(this.value);
    markdownResult.innerHTML = result;
  })

  saveButton.addEventListener('click', function() {
    if (id) {
      for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === id) {
          articles[i].title = articleTitleEelement.value;
          articles[i].content = markdownSource.value;
        }
      }
    } else {
      const newArticle = {
        id: 0,
        title: articleTitleEelement.value,
        content: markdownSource.value
      }
      newArticle.id = articles.length + 1;
      articles.push(newArticle);
    }
    localStorage.setItem('articles', JSON.stringify(articles));
    if (id) {
      location.replace('article.html?id=' + id);
    } else {
      location.replace('article.html?id=' + articles[articles.length - 1].id);
    }
  });
})();
//markdown-result
//markdown-source





// Работа  с markdown, localstorage, location(search, replace), JSON, базовый синтакс JS