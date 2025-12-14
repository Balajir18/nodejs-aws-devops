#!/bin/bash
set -e

yum update -y

curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs git

cd /home/ec2-user

git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git

cd nodejs-aws-devops/application

npm install

nohup node app.js > /home/ec2-user/app.log 2>&1 &
