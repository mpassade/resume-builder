resource "aws_acm_certificate" "cert" {
    domain_name = var.domain
    validation_method = "DNS"
    lifecycle {
        create_before_destroy = true
    }
    tags = {
        Name = var.project
    }
}

resource "aws_acm_certificate_validation" "verify" {
    certificate_arn = aws_acm_certificate.cert.arn
    validation_record_fqdns = [
        for record in aws_route53_record.cert_validation : record.fqdn
    ]
    timeouts {
        create = "10m"
    }
}