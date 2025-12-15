#!/bin/bash
dnf update -y
dnf install -y docker

systemctl start docker
systemctl enable docker

sleep 15

docker pull docker.io/balaji01817/balaji-express-app:latest

docker rm -f balaji-app || true

docker run -d \
  --restart always \
  -p 3000:3000 \
  --name balaji-app \
  docker.io/balaji01817/balaji-express-app:latest
