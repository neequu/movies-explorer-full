# Movie Explorer 🎬

Веб-приложение MERN (MongoDB, Express, React, Node.js), которое позволяет пользователям искать фильмы, регистрироваться и входить в систему с аутентификацией JWT, а также ставить лайк своим любимым фильмам.

## Содержание

- [Особенности и функционал](#особенности-и-функционал)
- [Стек и инструменты](#technologies-used)
- [Структура проекта](#структура-проекта)
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

## Структура проекта
/client: Frontend React application.
/server: Backend Node.js and Express application.
/server/models: MongoDB models for data.
/server/routes: API routes.
/server/config: Configuration files, including JWT secret keys.
/server/controllers: Controllers for handling requests.
Feel free to modify the project structure as needed.


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

1. Clone this repository:
   ```bash
   
   git clone https://github.com/yourusername/movie-app.git
   
   ```
2. Change to the project directory:
  ```bash
  cd movie-app

  ```
3. Install dependencies for both the frontend and backend:
  ```bash

  cd client
  npm install
  cd ../server
  npm install

 ```
4. Set up your MongoDB database and configure the environment variables.

5. Run the development server for both the frontend and backend:

Frontend:

bash
Copy code
cd client
npm start
Backend:

``` bash
cd server
npm start
```
Your app should now be running. Access it in your browser at http://localhost:3000.
