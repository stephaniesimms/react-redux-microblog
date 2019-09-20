# Microblog

A blogging app built with React and Redux. Incorporates Redux-Thunk to handle asychronous actions and React Router for client-side routing.

Check out the live deployment: https://stephaniesimms-microblog.herokuapp.com/

Backend code in Express and Postgres provided by [Rithm School](https://www.rithmschool.com/). Pair programmed with [Hekmat Kudrat](https://github.com/hekmatkudrat).

## Installation

1. Clone this repository
2. cd into the backend directory, install required packages, create and seed database, and start the server

```
cd backend
npm install
createdb microblog
psql microblog < data.sql
npm start 
```
This will start the server on port 3001

3. cd into the frontend directory, install required packages, then start the app

```
cd frontend
npm install
npm start
```
This will run the app on http://localhost:3000

## Running Tests
```
createdb microblog-test
cd backend
jest

cd frontend
npm test
```

## Features
* Create, edit, delete blog posts
* Add and delete comments on posts
* Up- and down-vote posts

### Component Architecture
```
App
├─┬ components/Home
│ └── containers/TitleList
├─┬ containers/NewPost
│ └── components/PostForm
└─┬ containers/Post
  ├── components/CommentForm
  ├── components/CommentList
  ├── components/PostDisplay
  └── components/PostForm
```
