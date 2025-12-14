\const express = require("express");
const app = express();

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Balaji | DevOps Project</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(270deg, #ff512f, #dd2476, #1fa2ff, #12d8fa, #a6ffcb);
      background-size: 1000% 1000%;
      animation: gradientBG 10s ease infinite;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .card {
      background: rgba(0,0,0,0.35);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 0 30px rgba(0,0,0,0.6);
      animation: pop 1s ease;
    }

    @keyframes pop {
      from { transform: scale(0.5); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    h1 {
      font-size: 46px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 15px;
      color: #ffd369;
    }

    p {
      font-size: 20px;
      margin: 6px 0;
    }

    .tag {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 22px;
      background: linear-gradient(to right, #00f260, #0575e6);
      border-radius: 50px;
      font-weight: bold;
      animation: glow 2s infinite alternate;
    }

    @keyframes glow {
      from { box-shadow: 0 0 10px #00f260; }
      to { box-shadow: 0 0 25px #0575e6; }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 DevOps Deployment Success</h1>
    <h2>Built by Balaji</h2>
    <p>Node.js running on AWS EC2</p>
    <p>Infrastructure by Terraform</p>
    <p>CI/CD with GitLab</p>
    <div class="tag">LIVE • CLOUD • AUTOMATED</div>
  </div>
</body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("🔥 Express DevOps app by Balaji running on port 3000");
});
