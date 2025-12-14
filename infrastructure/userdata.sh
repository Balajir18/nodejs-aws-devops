#!/usr/bin/env bash
set -eux

dnf install -y nodejs git

cd /home/ec2-user
git clone https://gitlab.com/cloudinfra1/nodejs-aws-devops.git
cd nodejs-aws-devops/application

nohup node app.js > /home/ec2-user/node.log 2>&1 &
