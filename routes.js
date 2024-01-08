const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

module.exports = router;

router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send(post);
});

router.get("/posts/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.send(post);
});
