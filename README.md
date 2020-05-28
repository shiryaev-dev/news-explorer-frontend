# Яндекс.Практикум: дипломная работа

Описание:
---
Этап 3: инфраструктура и вёрстка

* Выполнена верстка в соответствии с макетом https://bit.ly/2EYiGeF
* JS не используется
* Сверстаны 4 страницы, чтобы показать все элементы, присутствующие в макете
* Для открытия/закрытия попапов в консоли надо ввести:
    - `document.querySelector('.popup__login').classList.toggle('popup_is-opened')` - попап входа;
    - `document.querySelector('.popup__registration').classList.toggle('popup_is-opened')` - попап регистрации;
    - `document.querySelector('.popup__success').classList.toggle('popup_is-opened')` - попап успешной регистрации;
      
      Попапы не открываются на странице сохраненные статьи.

Стек:
---
* HTML,CSS
* Webpack
* Git

Сборка и запуск проекта:
---
- Склонировать репозиторий:
    
    
    git clone https://github.com/slam235/news-explorer-frontend.git
    
    конкретно ветку level-2 
    git clone --branch=level-2 https://github.com/slam235/news-explorer-frontend.git

- Установить необходимые пакеты:
    
    
    npm install
    
- Для запуска на локальном сервере выполнить команду:


    npm run dev

- Для получения готовой сборки:

    
    npm run build


