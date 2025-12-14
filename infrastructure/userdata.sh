#!/usr/bin/env bash
set -euxo pipefail

# log user-data execution
exec > /var/log/userdata.log 2>&1

# Amazon Linux 2023 uses dnf
dnf update -y
dnf install -y nodejs git

cd /home/ec2-user

git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git

cd nodejs-aws-devops/application

npm install

nohup node app.js &
