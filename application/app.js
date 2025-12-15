const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1 style="color:#00eaff;">🚀 DevOps App</h1>
    <h2 style="color:#ffd369;">Built by Balaji</h2>
    <p>Express + Docker + Terraform + GitLab CI/CD</p>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
