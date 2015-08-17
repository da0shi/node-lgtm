#!/usr/bin/env node
'use strict';

var
  request   = require('request'),
  clipboard = require('copy-paste');

var options = {
  url: 'http://www.lgtm.in/g',
  method: 'GET'
};

request(options, function (error, response, body) {
  console.log('Error:', error);
  console.log('Response:', response);
  console.log('Body:', body);
});
