variable "project" {
  type = string
  default = "Resume Builder"
}
variable "bucket" {
  type = string
  default = "mpassade-resumebuilder"
}
variable "domain" {
  type = string
  default = "build-a-resume.com"
}
variable "mime_types" {
  type = map(string)
  default = {
    html = "text/html"
    css = "text/css"
    js = "application/javascript"
    png = "image/png"
  }
}