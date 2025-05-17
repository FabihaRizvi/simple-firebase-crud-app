# Firebase CRUD React App

This is a simple React application that performs **CRUD (Create, Read, Delete)** operations on articles using **Firebase Firestore**. It is for learning university assignment or practice project.


##  Features

- Create new articles (title & body)
- Display a list of recent articles (most recent first)
- Delete articles
- Firebase Firestore backend
- Clean and centralized styling with `app.css`

---

##  Folder Structure
- ├── src/
- │ ├── components/
- │ │ ├── ArticleForm.jsx
- │ │ └── ArticleList.jsx
- │ │
- │ ├── services/
- │ │ └── articleService.js
- │ │
- │ ├── firebaseConfig.js
- │ ├── App.jsx
- │ ├── main.jsx
- │ └── app.css
- │
- ├── .gitignore
- ├── package.json
- ├── README.md
- └── vite.config.js

Install dependencies:
```bash
    npm install
    npm run dev
