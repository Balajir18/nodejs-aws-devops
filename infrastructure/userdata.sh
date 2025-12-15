#!/bin/bash

dnf install -y docker
systemctl start docker
systemctl enable docker

docker run -d -p 3000:3000 --name balaji-app \
  docker.io/YOUR_DOCKERHUB_USERNAME/balaji-express-app:latest
