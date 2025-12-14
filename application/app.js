const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My DevOps Project</title>
        <style>
          body {
            background: linear-gradient(to right, #667eea, #764ba2);
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          h1 {
            font-size: 50px;
          }
          p {
            font-size: 22px;
          }
          .box {
            background: rgba(0, 0, 0, 0.3);
            padding: 30px;
            margin: auto;
            width: 60%;
            border-radius: 15px;
          }
        </style>
      </head>
