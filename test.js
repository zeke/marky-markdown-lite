const path = require('path')
const fs = require('fs')
const tape = require('tape')
const marky = require('./')

const fixturePath = path.join(__dirname, 'fixture.md')
const sampleMarkdown = fs.readFileSync(fixturePath, 'utf8')

tape('marky-markdown-lite', function(t){
  t.equal(typeof marky, 'function', 'is a function')

  var $ = marky(sampleMarkdown)
  t.equal($('h1').text(), 'I am a heading', 'accepts a markdown string as input')

  $ = marky(fixturePath)
  t.equal($('h1').text(), 'I am a heading', 'accepts a markdown filename as input')

  t.equal($('h1').attr('title'), 'I am a heading', 'sets heading titles to their textContent')

  t.equal($('h1').attr('id'), 'i-am-a-heading', 'adds slugified DOM ids to heading elements')

  t.end()
})
