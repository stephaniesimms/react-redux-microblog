/** Server for microblog. */

const app = require("./app");

app.listen(process.env.PORT, function () {
  console.log("Server is starting");
});
