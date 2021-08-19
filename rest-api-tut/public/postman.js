var request = require('request');
var options = {
  'method': 'GET',
  'url': 'localhost:3000/sendmail',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "to": "dasvikas0071@gmail.com",
    "subject": "Query FlexBuild",
    "text": "Yeahhh, you're query has been sent to FLEXBUILD "
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
