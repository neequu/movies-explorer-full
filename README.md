# Movie Explorer 🎬

Веб-приложение MERN (MongoDB, Express, React, Node.js), которое позволяет пользователям искать фильмы, регистрироваться и входить в систему с аутентификацией JWT, а также ставить лайк своим любимым фильмам.

## Содержание

- [Особенности и функционал](#особенности-и-функционал)
- [Стек и инструменты](#стек-и-инструменты)
- [Внешний вид](#внешний-вид)
- [Установка](#установка)

## Особенности и функционал

- Регистрация и аутентификация пользователей с использованием JWT (JSON Web Tokens).
- Поиск фильмов по названию и фильтр по короткометражкам.
- Лайки фильмам для зарегистрированных пользователей с добавлением значний в базу данных.
- Редактирование профиля с валидацией полей на корректность + на различие с предыдущими значениями.
- Клик по фильму открывает ссылку на его трейлер.
- Пользовательский интерфейс создан с помощью React и Vite.
- Внутренний API создан с помощью Node.js и Express по архитектуре REST.
- Хранение и извлечение данных с помощью MongoDB.
- Пагинация - добавление новых фильмов на экран по нажатию кнопки. Количество добавленных фильмов зависит от разрешения экрана пользователя.

## Стек и инструменты

- **Frontend:**
  - React
  - React Router
  - CSS по БЭМ

- **Backend:**
  - Node.js
  - Express
  - MongoDB (+ Mongoose)
  - JSON Web Tokens (JWT) для авторизации
  - Подключено логирование
  - Настроен CORS
  - Созданы собственные классы ошибок

- **Deployment:**
  - Приложение было задеплоено на яндекс клауд через nginx.

## Внешний вид
<div align="center">
  
### Домашняя страница
![home](https://github.com/neequu/movies-explorer-full/assets/69749247/1d830450-2a38-4e11-b483-0086c2a9d77c)
### Адаптивность
![responsive](https://github.com/neequu/movies-explorer-full/assets/69749247/53bb30a0-a207-498a-a5f4-6c8d49bc8b7c)
### Поиск + фильтр + сохранение фильмов
![search+saved](https://github.com/neequu/movies-explorer-full/assets/69749247/b7b52b56-d40c-4337-a6ed-579a2891d67b)
### Пагинация
![infscroll](https://github.com/neequu/movies-explorer-full/assets/69749247/3d7bb087-29b6-4b0d-8ae6-61f73b6a7952)
### Редактирование информации профиля
![edit](https://github.com/neequu/movies-explorer-full/assets/69749247/8b11ff0e-9734-4553-96f7-e065f2947e92)

</div>

## Установка

1. Склонируйте репозиторий:

```bash 
git clone https://github.com/neequu/movies-explorer-full.git
```
3. Установите зависимости фронта и бэка:
```bash
  cd frontend
  npm install
  cd backend
  npm install
```

3. Запустите dev сервер для фронта и бэка:

Frontend:
``` bash
cd frontend
npm run dev
```
   
Backend:
``` bash
cd backend
npm run dev
```

Бэкенд должен запуститься по адресу http://localhost:3000, Фроентед по адресу http://localhost:5173
