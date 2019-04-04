const fs = require("fs");
const app = require("express")();

module.exports = { path: "/api", handler: app };

app.get('/bloglist',(req,res) => {
  const blogs = fs.readdirSync('articles');

  res.send(blogs);
})