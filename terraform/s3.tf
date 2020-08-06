resource "aws_s3_bucket" "website" {
    bucket = var.bucket
    acl = "private"
    versioning {
        enabled = true
    }
    server_side_encryption_configuration {
        rule {
            apply_server_side_encryption_by_default {
                sse_algorithm = "AES256"
            }
        }
    }
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_public_access_block" "public" {
    bucket = var.bucket
    block_public_acls = true
    block_public_policy = true
    ignore_public_acls = true
    restrict_public_buckets = true
}

resource "aws_s3_bucket_object" "objects" {
    for_each = fileset("../static-content/", "*")
    bucket = var.bucket
    key = each.value
    source = "../static-content/${each.value}"
    server_side_encryption = "AES256"
    acl = "private"
    storage_class = "STANDARD"
    etag = filemd5("../static-content/${each.value}")
    tags = {
        Project = var.project
    }
}
