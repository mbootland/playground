var fs = require('fs');
fs.readFile('/etc/passwd', function (err, data) {
  if (err) return console.error(err);
  console.log(err);
  console.log(data);
});
