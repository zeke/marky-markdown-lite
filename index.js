const path = require('path')
const fs = require('fs')
const isFile = require('is-file')
const cheerio = require('cheerio')
const markdown = require('markdown-it')()
  .use(require('markdown-it-named-headers'))

module.exports = function marky (input) {
  if (isFile(input)) {
    input = fs.readFileSync(input, 'utf8')
  }
  return cheerio.load(markdown.render(input))
}
