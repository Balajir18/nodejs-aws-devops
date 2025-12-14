#!/bin/bash
set -e

# Update system
yum update -y

# Install Node.js properly (IMPORTANT)
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs git

# Move to ec2-user directory
cd /home/ec2-user

# Clone your repository
git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git

# Move to application folder
cd nodejs-aws-devops/application

# Install dependencies
npm install

# Start app in background (AUTOMATION FIX)
nohup node app.js > /home/ec2-user/app.log 2>&1 &
disown
