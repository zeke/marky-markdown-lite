const path = require('path')
const fs = require('fs')
const isFile = require('is-file')
const cheerio = require('cheerio')
const markdown = require('markdown-it')

module.exports = function marky (input, opts) {
  opts = (typeof opts !== 'undefined') ?  opts : {}
  
  const md = markdown(opts)
    .use(require('markdown-it-named-headers'))

  if (isFile(input)) {
    input = fs.readFileSync(input, 'utf8')
  }
  const $ = cheerio.load(md.render(input))

  $('h1,h2,h3,h4,h5,h6').each(function (i, el) {
    $(el).attr('title', $(el).text())
  })

  return $
}
