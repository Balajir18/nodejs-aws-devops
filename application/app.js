const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1 style="color:green;">🚀 Node.js App Running Successfully</h1>
    <p>AWS EC2 | Terraform | GitLab CI/CD</p>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
