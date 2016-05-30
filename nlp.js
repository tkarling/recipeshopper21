"use strict";
var express = require('express');
var natural = require('natural');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var classifier = {};

natural.BayesClassifier.load('classifier.json', null, function (err, theClassifier) {
  if (err) {
    classifier = new natural.BayesClassifier();
  } else {
    classifier = theClassifier;
  }
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Copyright @2016 Pisara, Inc.');
});

app.get('/all', function (req, res) {
  res.send(classifier.getClassifications());
});

app.post('/train', function (req, res) {
  console.log(req.body);
  classifier.addDocument(req.body.text, req.body.aisle);
  classifier.train();
  classifier.save('classifier.json', function (err, classifier) {
    console.log("Classifier updated.");
  });
  res.json({status: "OK"});
});

app.use('/nlp/:txt', function (req, res, next) {
  console.log('Request Type:', req.method, 'Request Text:', req.params.txt);
  var ret = [];
  if (req.params.txt) {
    ret.push(classifier.classify(req.params.txt));
  }
  res.send(JSON.stringify(ret));
});

app.listen(3000, function () {
  console.log('Nlp Server listening on port 3000!');
});
