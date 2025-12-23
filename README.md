# End-to-End CI/CD Pipeline with Docker, GitLab & AWS

## 📌 Project Overview
This project demonstrates an **end-to-end CI/CD pipeline** for deploying a **Node.js (Express) web application** on **AWS EC2** using **Docker, GitLab CI/CD, and Terraform**.  
The workflow automates infrastructure provisioning, server configuration, application build, and deployment.

---

## 🛠️ Technologies Used
- **Cloud:** AWS (EC2)
- **Infrastructure as Code:** Terraform
- **CI/CD:** GitLab CI/CD
- **Containerization:** Docker
- **Application:** Node.js (Express)
- **OS:** Linux
- **Registry:** Docker Hub

---

## 🏗️ Architecture Overview
1. Source code is hosted in **GitLab**.
2. **GitLab CI/CD pipeline** triggers automatically on every code push.
3. Pipeline builds a **Docker image** and pushes it to **Docker Hub**.
4. **Terraform** provisions the AWS EC2 instance.
5. **EC2 User Data** installs Docker and starts the application container.
6. Application is accessed via the **EC2 public IP**.

---

## 🔄 CI/CD Workflow
- Code push to GitLab repository
- Automated Docker image build
- Image pushed to Docker Hub
- Application deployed on AWS EC2 using Docker

---

## 🚀 Key Features
- Fully automated **CI/CD pipeline**
- **Infrastructure provisioning** using Terraform
- **Automated server setup** using EC2 User Data
- **Docker-based application deployment**
- Consistent and repeatable deployments

---

## 📁 Project Structure

nodejs-aws-devops/
├── application/
│   ├── app.js          # Node.js (Express) application
│   ├── package.json    # Dependencies
│   └── Dockerfile      # Docker image build instructions
├── infrastructure/
│   ├── main.tf         # EC2 creation
│   ├── variables.tf   # Input variables
│   ├── output.tf      # Public IP output
│   └── userdata.sh    # EC2 startup automation
└── .gitlab-ci.yml     # GitLab CI/CD pipeline



---

## ▶️ How to Run (High Level)
1. Clone the repository.
2. Configure GitLab CI/CD variables (AWS credentials and Docker Hub credentials).
3. Apply Terraform to provision the EC2 instance.
4. Push code changes to GitLab to trigger the CI/CD pipeline.
5. Access the application using the EC2 public IP.

---

## 🎯 Learning Outcomes
- Hands-on experience with **CI/CD automation**
- Practical understanding of **Infrastructure as Code**
- Docker-based application deployment
- Real-world DevOps workflow using AWS and GitLab

---

## 👤 Author
**Balaji**  
DevOps & Cloud Enthusiast

---

## 📎 Note
This project is created for learning and interview demonstration purposes and follows DevOps best practices.
