exports.parse = function(window) {
	var ns
	for (var i = 0; i < window.document.documentElement.attributes.length; ++i) {
		var attr = window.document.documentElement.attributes[i]
		if (attr.nodeValue.toLowerCase() !== 'http://opengraphprotocol.org/schema/') continue

		ns = attr.nodeName.substring(6)
		if (ns) break
	}

	if (!ns) return {}

	var result = {},
	    metaTags = window.document.getElementsByTagName('meta')

	for (var i = 0; i < metaTags.length; ++i) {
		var tag = metaTags[i],
		    propertyAttr = tag.attributes['property']

		if (!propertyAttr || propertyAttr.nodeValue.substring(0, ns.length) !== ns)
			continue

		var property = tag.attributes['property'].nodeValue.substring(ns.length+1),
		    content = tag.attributes['content'].nodeValue

		result[property] = content
	}

	return result
}
