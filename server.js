var express = require('express'),
    app = express(),
    engines = require('consolidate'); // management of view engines

// Set views engine
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', './server/views');

// Set static directories
app.use('/', express.static('./dist'));

// Server
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Deploying nodejs application with gulp and Elastic Beanstalk'
  });
});

// ingress  localhost:3000 for listening the server
app.listen(3000, function() {
  console.log('Listening on localhost:3000');
});
