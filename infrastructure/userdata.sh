#!/bin/bash

# Update the server
yum update -y

# Install Node.js and Git
yum install -y nodejs git

# Move to ec2-user home directory
cd /home/ec2-user

# Clone the application code from GitLab
git clone https://gitlab.com/YOUR_USERNAME/YOUR_PROJECT.git

# Go inside the app folder
cd YOUR_PROJECT/app

# Install Node.js dependencies
npm install

# Start the Node.js application
npm start
