client = restify.createClient({
  url: 'http://127.0.0.1'
});

client.get('/str/mcavage', function(err, req) {
  assert.ifError(err); // connection error

  req.on('result', function(err, res) {
    assert.ifError(err); // HTTP status code >= 400

    res.body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      res.body += chunk;
    });

    res.on('end', function() {
      console.log(res.body);
    });
  });
});
