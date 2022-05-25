const path = require('path')
const fs = require('fs')
const tape = require('tape')
const marky = require('./')

const fixturePath = path.join(__dirname, 'fixture.md')
const sampleMarkdown = fs.readFileSync(fixturePath, 'utf8')
const markdownWithHTML = `- Some list item <a href="item.html">here</a>`

tape('marky-markdown-lite', function(t){
  t.equal(typeof marky, 'function', 'is a function')

  var $ = marky(sampleMarkdown)
  t.equal($('h1').text(), 'I am a heading', 'accepts a markdown string as input')

  $ = marky(fixturePath)
  t.equal($('h1').text(), 'I am a heading', 'accepts a markdown filename as input')

  t.equal($('h1').attr('title'), 'I am a heading', 'sets heading titles to their textContent')

  t.equal($('h1').attr('id'), 'i-am-a-heading', 'adds slugified DOM ids to heading elements')

  t.comment('Accepts an object with markdown-it options like `{html:true}`')
  var $ = marky(markdownWithHTML, {html:true})
  t.equal($('ul li').text(), 'Some list item here', 'enable HTML tags in source (by not escaping them)')

  t.equal($('ul li a').attr('href'), 'item.html', 'let access to attributes in HTML tags')

  t.end()
})
