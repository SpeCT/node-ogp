#node-ogp
Easy way to access OpenGraph meta tags from jsdom parsed web page

## Installation
Via [npm](http://search.npmjs.org/#/ogp):

    $ npm install ogp

As a submodule of your project

    $ git submodule add http://github.com/SpeCT/node-ogp.git ogp
    $ git submodule update --init


## Usage

```javascript
// 1. load node-ogp
var ogp = require('ogp')

// 2. parse DOM using jsdom
var jsdom = require('jsdom'),
    url = 'http://www.imdb.com/title/tt0068646/'

jsdom.env({ html: url, done: function(error, window) {
  // 3. pass window as the only argument to ogp.parse method
  var ogData = ogp.parse(window)

  // ogp.parse can also parse Open Graph properties for any namespaces desired.
  //
  // To match og and fb namespaces the following could be done:
  //   var ogData = ogp.parse(window, 'og fb')
  // or:
  //   var ogData = ogp.parse(wondow, ['og', 'fb'])

  // 5. Profit!
  console.log('Open Graph data', ogData)
}})
```

This will put next structure into stdout:

```javascript
{ 'og:url': 'http://www.imdb.com/title/tt0068646/',
  'og:title': 'The Godfather (1972)',
  'og:type': 'video.movie',
  'og:image': 'http://ia.media-imdb.com/images/M/MV5BMTIyMTIxNjI5NF5BMl5BanBnXkFtZTcwNzQzNDM5MQ@@._V1._SX97_SY140_.jpg',
  'og:site_name': 'IMDb' }
```

In case if some of OpenGraph tags were presented multiple times (few image tags for example, output structure field related to that tag will be converted into array:

```javascript
{ 'og:image': ['image1.png', 'image2.png']}
```

## Credits

Written and maintained by [Yury Proshchenko](mailto:spect.man@gmail.com).

Multiple namespace support by [Cody Craven](http://github.com/codycraven).

## License

The MIT License

Copyright (c) 2011 Yury Proshchenko (spect.man@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
