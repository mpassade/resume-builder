resource "aws_s3_bucket" "website" {
    bucket = var.bucket
    website {
        index_document = "index.html"
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
    content_type = lookup(var.mime_types, split(".", each.value)[1])
    etag = filemd5("../static-content/${each.value}")
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_policy" "policy" {
    bucket = var.bucket
    policy = data.aws_iam_policy_document.s3.json
}
