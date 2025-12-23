# End-to-End CI/CD Pipeline with Docker, GitLab & AWS

## 📌 Project Overview
This project demonstrates an end-to-end CI/CD pipeline for deploying a
Node.js (Express) web application on AWS EC2 using Docker, GitLab CI/CD,
and Terraform.

The workflow automates infrastructure provisioning, server configuration,
application build, and deployment.

--------------------------------------------------

## 🛠️ Technologies Used
- Cloud: AWS (EC2)
- Infrastructure as Code: Terraform
- CI/CD: GitLab CI/CD
- Containerization: Docker
- Application: Node.js (Express)
- Operating System: Amazon Linux
- Container Registry: Docker Hub

--------------------------------------------------

## 🏗️ Architecture Overview
1. Source code is hosted in GitLab.
2. GitLab CI/CD pipeline is triggered automatically on every code push.
3. The pipeline builds a Docker image and pushes it to Docker Hub.
4. Terraform provisions an AWS EC2 instance.
5. EC2 User Data installs Docker, pulls the Docker image from Docker Hub,
   and runs the application container.
6. The application is accessed using the EC2 public IP address.

--------------------------------------------------

## 🔄 CI/CD Workflow
- Code is pushed to the GitLab repository
- GitLab CI/CD pipeline is triggered automatically
- Docker image is built from the application source code
- Docker image is pushed to Docker Hub
- Terraform provisions the AWS EC2 instance
- EC2 User Data installs Docker and runs the application container

--------------------------------------------------

## 🚀 Key Features
- Fully automated CI/CD pipeline
- Infrastructure provisioning using Terraform (IaC)
- Automated server configuration using EC2 User Data
- Docker-based application deployment
- Consistent and repeatable deployments

--------------------------------------------------

## 📁 Project Structure

```text
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


--------------------------------------------------

## ▶️ How to Run (High Level)
1. Clone the repository.
2. Configure GitLab CI/CD variables
   (AWS credentials and Docker Hub credentials).
3. Push code changes to the GitLab repository.
4. GitLab CI/CD pipeline automatically builds, pushes,
   and deploys the application.
5. Access the application using the EC2 public IP address.

--------------------------------------------------

## 🎯 Learning Outcomes
- Hands-on experience with CI/CD automation
- Practical understanding of Infrastructure as Code (Terraform)
- Docker-based application deployment
- Real-world DevOps workflow using AWS and GitLab

--------------------------------------------------

## 👤 Author
Balaji
DevOps & Cloud Enthusiast

--------------------------------------------------

## 📎 Note
This project is created for learning and interview demonstration purposes
and follows DevOps best practices.