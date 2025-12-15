provider "aws" {
  region = var.region
}

resource "aws_instance" "app" {
  ami           = var.ami
  instance_type = "t2.micro"
  key_name      = var.key_name

  user_data = file("${path.module}/userdata.sh")

  tags = {
    Name = "Balaji-DevOps-EC2"
  }
}

output "public_ip" {
  value = aws_instance.app.public_ip
}

