;(function() {
  'use strict';

  const articles = [
    {
      id: 1,
      title: 'Какой-нибудь заголовок',
      content: `# Заголовок статьи 1
Далеко - далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты.Использовало однажды гор семь, снова раз.Города большой безорфографичный меня.
Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна ? Свой заголовок свое, он.##Заголовок второго уровня
Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой.Города силуэт, заглавных всеми, свою прямо но!
Текстов которой вскоре журчит рекламных свою, сбить на берегу рот.Великий страну проектах знаках над что путь языком, подпоясал, свой они!
## Заголовок третьего уровня 
Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали.Букв строчка вскоре продолжил, страна злых раз страну.
Букв переписали, продолжил.Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.`
    },
    {
      id: 2,
      title: 'Еще какой-нибудь заголовок',
      content: `# Заголовок статьи 2
Далеко - далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты.Использовало однажды гор семь, снова раз.Города большой безорфографичный меня.
Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна ? Свой заголовок свое, он.##Заголовок второго уровня
Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой.Города силуэт, заглавных всеми, свою прямо но!
Текстов которой вскоре журчит рекламных свою, сбить на берегу рот.Великий страну проектах знаках над что путь языком, подпоясал, свой они!
## Заголовок третьего уровня 
Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали.Букв строчка вскоре продолжил, страна злых раз страну.
Букв переписали, продолжил.Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.`
    },
    {
      id: 3,
      title: 'Еще какой-нибудь заголовок номер 3 ',
      content: `# Заголовок статьи 3
Далеко - далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты.Использовало однажды гор семь, снова раз.Города большой безорфографичный меня.
Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна ? Свой заголовок свое, он.##Заголовок второго уровня
Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой.Города силуэт, заглавных всеми, свою прямо но!
Текстов которой вскоре журчит рекламных свою, сбить на берегу рот.Великий страну проектах знаках над что путь языком, подпоясал, свой они!
## Заголовок третьего уровня 
Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали.Букв строчка вскоре продолжил, страна злых раз страну.
Букв переписали, продолжил.Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.` 
    },
    {
      id: 4,
      title: 'Еще какой-нибудь заголовок номер 4',
      content:`# Заголовок статьи 4
Далеко - далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты.Использовало однажды гор семь, снова раз.Города большой безорфографичный меня.
Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна ? Свой заголовок свое, он.##Заголовок второго уровня
Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой.Города силуэт, заглавных всеми, свою прямо но!
Текстов которой вскоре журчит рекламных свою, сбить на берегу рот.Великий страну проектах знаках над что путь языком, подпоясал, свой они!
## Заголовок третьего уровня 
Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали.Букв строчка вскоре продолжил, страна злых раз страну.
Букв переписали, продолжил.Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.`
    }
  ];

  if (!localStorage.getItem('articles')) {
    localStorage.setItem('articles', JSON.stringify(articles));
  }
})();