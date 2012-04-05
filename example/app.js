var ogp = require('ogp'),
    jsdom = require('jsdom'),
    url = 'http://www.imdb.com/title/tt0068646/'

jsdom.env({ html: url, done: function(error, window) {
	var ogData = ogp.parse(window)
	console.log('Open Graph data', ogData)
}})
