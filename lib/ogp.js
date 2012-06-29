exports.parse = function(window, namespaces) {
  var result = {},
      metaTags = window.document.getElementsByTagName('meta'),
      propertyRegex = /^([a-z]+):/;

  // If undefined set as "og" namespace (OGP default).
  if (!namespaces)
    namespaces = ['og'];
  // If string convert to an array, accepts comma separated.
  else if (typeof namespaces === 'string') {
    namespaces = namespaces.split(' ');
  }

  for (var i = 0; i < metaTags.length; ++i) {
    var tag = metaTags[i],
        propertyAttr = tag.attributes['property']

    // All OG meta tags contain property attribute.
    if (!propertyAttr) {
      continue
    }
    else {
      var matches = propertyRegex.exec(propertyAttr.nodeValue);
      // Verify OG property is found in our acceptable namespaces.
      if (!matches[1] || namespaces.indexOf(matches[1]) == -1)
        continue
    }

    var property = tag.attributes['property'].nodeValue,
        content = tag.attributes['content'].nodeValue

    // If the property does not already exist, assign it.
    if (!result[property])
      result[property] = content
    // Else if result[property] is already an array then push it.
    else if (result[property].push)
      result[property].push(content)
    // Else convert string to array.
    else
      result[property] = [result[property], content]
  }

  return result
}
