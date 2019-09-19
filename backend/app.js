/** MicroBlog express app. */

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const postsRoutes = require("./routes/posts");
const postCommentsRoutes = require("./routes/postComments");
const cors = require("cors");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// tells the Node backend to serve compiled FE code as static resource
app.use(express.static('../frontend/build'));

app.use("/api/posts/:post_id/comments", postCommentsRoutes);
app.use("/api/posts", postsRoutes);


/** 404 Not Found handler. */

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/** Generic error handler. */

app.use(function (err, req, res, next) {
  if (err.stack) console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message,
  });
});
// console.log(__dirname)
// app.get('/*', function (req, res) {
//   res.sendFile(path.join('../frontend/build', 'index.html'));
// });


module.exports = app;