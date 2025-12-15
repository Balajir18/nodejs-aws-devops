const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Balaji | DevOps Project</title>

<style>
  body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(120deg, #ff416c, #ff4b2b, #1fa2ff, #12d8fa, #a6ffcb);
    background-size: 400% 400%;
    animation: gradientMove 10s ease infinite;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .card {
    background: rgba(0, 0, 0, 0.45);
    padding: 45px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 40px rgba(0,0,0,0.7);
    animation: fadeIn 1.5s ease;
    max-width: 600px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h1 {
    font-size: 48px;
    margin-bottom: 10px;
    color: #00eaff;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #ffd369;
  }

  p {
    font-size: 20px;
    margin: 8px 0;
  }

  .badge {
    margin-top: 25px;
    display: inline-block;
    padding: 12px 28px;
    background: linear-gradient(to right, #00f260, #0575e6);
    border-radius: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
  }
</style>
</head>

<body>
  <div class="card">
    <h1>🚀 DevOps Deployment Success</h1>
    <h2>Built by Balaji</h2>
    <p>Node.js (Express) Application</p>
    <p>Dockerized & Deployed on AWS EC2</p>
    <p>Terraform + GitLab CI/CD Automation</p>
    <div class="badge">LIVE • CLOUD • AUTOMATED</div>
  </div>
</body>
</html>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Express app by Balaji running on port 3000");
});
