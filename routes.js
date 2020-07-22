'use strict';

const express = require("express");
const Controllers = require("./Controllers");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Welcome to Chat App");
});

router.get("/chats", Controllers.ChatController.getChats);

router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

module.exports = router;
