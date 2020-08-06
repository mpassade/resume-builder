provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    region  = "us-east-1"
    bucket  = "mpassade-resumebuilder-tfstate"
    key     = "state/resumebuilder.tfstate"
    encrypt = true
    acl     = "bucket-owner-full-control"
  }
}

