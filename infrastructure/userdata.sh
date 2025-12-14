#!/bin/bash -xe

# log everything
exec > /var/log/userdata.log 2>&1

# install node & git (AL2023 safe)
dnf install -y nodejs git

# go to home
cd /home/ec2-user

# clone repo
git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git

cd nodejs-aws-devops/application

# install dependencies
npm install

# start app in background (bulletproof)
nohup node app.js &
