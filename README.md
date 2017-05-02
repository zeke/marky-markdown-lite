# marky-markdown-lite

A version of marky-markdown that does less.

This little module converts markdown to HTML with [markdown-it](https://github.com/markdown-it/markdown-it) (a fast and CommonMark compliant parser), then parses that HTML into a queryable DOM object using [cheerio](https://github.com/cheeriojs/cheerio).

This module is inspired by [marky-markdown](https://github.com/npm/marky-markdown), and has a very similar API. It does less, but has a much smaller dependency footprint because it doesn't rely on any native C++ modules. If you need syntax highlighting, sanitized HTML, short emoji support, etc, use underlying `markdown-it` [options](https://markdown-it.github.io/markdown-it/), see below.

## Installation

```sh
npm install marky-markdown-lite --save
```

## Usage

```js
const marky = require('marky-markdown-lite')

// Give marky a markdown string:
var $ = marky('## Some Heading')

// Then use jQuery-style cheerio selectors:
$('h2.title').text()
$('h2').addClass('welcome')
$.html()

// You can also use a markdown filename...
var $ = marky('some/markdown/file.md')

```

## Tests

```sh
npm install
npm test
```

## markdown-it options example

```js
var opts = {
  html: true
}

var $ = marky('- Some list item <a href="item.html">item</a>', opts)

```
For all `markdown-it` [options](https://markdown-it.github.io/markdown-it/).

## Dependencies

- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [is-file](https://github.com/jsdevel/node-is-file): Tests if a given path resolves to a file.
- [markdown-it](https://github.com/markdown-it/markdown-it): Markdown-it - modern pluggable markdown parser.

## Dev Dependencies

- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
