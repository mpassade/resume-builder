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

resource "aws_s3_bucket_object" "html" {
    bucket = var.bucket
    key = var.html
    source = "../static-content/${var.html}"
    content_type = lookup(var.mime_types, split(".", var.html)[1])
    etag = filemd5("../static-content/${var.html}")
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_object" "css" {
    for_each = fileset("../static-content/css/", "*")
    bucket = var.bucket
    key = "css/${each.value}"
    source = "../static-content/css/${each.value}"
    content_type = lookup(var.mime_types, split(".", each.value)[1])
    etag = filemd5("../static-content/css/${each.value}")
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_object" "images" {
    for_each = fileset("../static-content/images/", "*")
    bucket = var.bucket
    key = "images/${each.value}"
    source = "../static-content/images/${each.value}"
    content_type = lookup(var.mime_types, split(".", each.value)[1])
    etag = filemd5("../static-content/images/${each.value}")
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_object" "javascript" {
    for_each = fileset("../static-content/javascript/", "*")
    bucket = var.bucket
    key = "javascript/${each.value}"
    source = "../static-content/javascript/${each.value}"
    content_type = lookup(var.mime_types, split(".", each.value)[1])
    etag = filemd5("../static-content/javascript/${each.value}")
    tags = {
        Project = var.project
    }
}

resource "aws_s3_bucket_policy" "policy" {
    bucket = var.bucket
    policy = data.aws_iam_policy_document.s3.json
}
