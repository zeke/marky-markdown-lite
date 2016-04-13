const marky = require('./')

// Give marky a markdown string:
var $ = marky('## Some Heading')

// Then use jQuery-style cheerio selectors:
$('h2.title').text()
$('h2').addClass('welcome')
$.html()

// You can also use a markdown filename...
var $ = marky('some/markdown/file.md')
