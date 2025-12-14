provider "aws" {
  region = var.region
}

resource "aws_instance" "node_app" {
  ami           = var.ami_id
  instance_type = "t2.micro"
  key_name      = var.key_name

  user_data = file("${path.module}/userdata.sh")

  tags = {
    Name = "NodeApp-Server"
  }
}
