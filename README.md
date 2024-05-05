# The-Goose-Place
<img width="450" src="https://raw.githubusercontent.com/Lichat127/The-Goose-Place/main/public/logo.png">

## Sommaire
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Requirement](#requirement)
4. [Installation](#installation)

## Overview
>🚨 School Project 🚨

This project is a web application designed to manage an online address book. It allows users to save, edit, delete and view addresses in four main categories: bars, museums, parks and restaurants.

## Technologies

### Front-end frameworks and libraries :
- Next.js : React framework for server-side rendering and routing.
- React : JavaScript library for building user interfaces.
- Tailwind : CSS framework for building user interface.
- Formik : Form management library for React.
- Yup : Schema validation library for forms.

### Database and storage :
- MongoDB : NoSQL database management system.
- Mongoose: Node.js library for MongoDB data modeling.

### Tools and Utilities :
- Axios : Javascript library for making HTTP requests.
- Eslint : JavaScript linting tool to maintain clean and consistent code.
- Clsx : JavaScript utility to generate conditional class strings.
- Prettier : Code formatting tool to ensure style consistency.

## Requirement
Before you start using the project, make sure you configure access to the database.
To do this, go to **/src/api/mw.js** and modify this line (5) if necessary: 
```js
await mongoose.connect("mongodb://<IP DATABASE>:<PORT DATABASE>/locations")
```
For example : 
```js
await mongoose.connect("mongodb://127.0.0.1:27017/locations")
```

## Installation
1. Clone the github repository :
```
git clone git@github.com:Lichat127/The-Goose-Place.git
cd ./The-Goose-Place
```
2. Install the dependencies :
```
npm install
```
3. Launch the project :
```
npm run dev
```
4. Access the project : http://localhost:3000/
