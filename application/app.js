const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Balaji | DevOps Project</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2, #ff6a00);
          background-size: 400% 400%;
          animation: bgMove 8s ease infinite;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          background: rgba(0,0,0,0.35);
          padding: 40px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 0 25px rgba(0,0,0,0.6);
        }

        h1 {
          font-size: 48px;
          margin-bottom: 10px;
          color: #ffd369;
        }

        h2 {
          font-size: 26px;
          margin-bottom: 20px;
          color: #00eaff;
        }

        p {
          font-size: 20px;
          margin: 6px 0;
        }

        .badge {
          margin-top: 18px;
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(to right, #00f260, #0575e6);
          border-radius: 50px;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 DevOps Success</h1>
        <h2>Built by Balaji</h2>
        <p>Express.js Application</p>
        <p>Running inside Docker</p>
        <p>Deployed on AWS EC2</p>
        <p>CI/CD with GitLab</p>
        <div class="badge">LIVE • CLOUD • AUTOMATED</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Express app by Balaji running on port 3000");
});
