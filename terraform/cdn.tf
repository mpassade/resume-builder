resource "aws_cloudfront_distribution" "s3" {
    origin {
        domain_name = aws_s3_bucket.website.bucket_domain_name
        origin_id = "S3-${var.bucket}"
        s3_origin_config {
            origin_access_identity = aws_cloudfront_origin_access_identity.origin.cloudfront_access_identity_path
        }
    }
    aliases = [var.domain]
    enabled = true
    is_ipv6_enabled = true
    default_root_object = "index.html"
    price_class = "PriceClass_All"
    default_cache_behavior {
        allowed_methods = ["GET", "HEAD"]
        cached_methods = ["GET", "HEAD"]
        target_origin_id = "S3-${var.bucket}"
        viewer_protocol_policy = "redirect-to-https"
        forwarded_values {
            query_string = false
            cookies {
                forward = "none"
            }
        }
    }
    viewer_certificate {
        acm_certificate_arn = aws_acm_certificate.cert.arn
        minimum_protocol_version = "TLSv1.2_2019"
        ssl_support_method = "sni-only"
    }
    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }
    tags = {
        Project = var.project
    }
}

resource "aws_cloudfront_origin_access_identity" "origin" {
}