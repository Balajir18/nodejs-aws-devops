#!/usr/bin/env bash

dnf install -y nodejs git

cd /home/ec2-user
git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git
cd nodejs-aws-devops/application

npm install
nohup node app.js &
