var parser = require('gcc-output-parser');
const getStdin = require('get-stdin');
const _ = require('underscore');


getStdin().then(str => {
  var parsed = parser.parseString(str);
  var merged = {};
  _.each(parsed, function(element, index, list) {
    if ('parentFunction' in element) {
      if (element['parentFunction'] in merged) {
	merged[element['parentFunction']].count++;
      } else {
        merged[element['parentFunction']] = element;
        merged[element['parentFunction']].count = 1;
      }
    } else {
      console.log(element);
    }
  });
  console.log(merged);
});

