const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory data store
let posts = [];
let idCounter = 1;

// Routes
app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/new-post", (req, res) => {
  res.render("new");
});

app.post("/new-post", (req, res) => {
  const newPost = {
    id: idCounter++,
    title: req.body.title,
    content: req.body.content,
  };
  
  posts.push(newPost);
  res.redirect("/");
});

app.get("/edit-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  
  if (!post) {
    return res.status(404).send("Post not found");
  }
  
  res.render("edit", { post });
});

app.post("/edit-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
  }
  
  res.redirect("/");
});

app.post("/delete-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.redirect("/");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});