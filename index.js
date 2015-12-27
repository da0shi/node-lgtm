#!/usr/bin/env node
'use strict';

var
  clipboard = require('copy-paste'),
  request   = require('request');

var
  FAILURE_EXIT = 1,
  SUCCESS_EXIT = 1;

var options = {
  url: 'http://www.lgtm.in/g',
  method: 'GET',
  json: true
};

request(options, function (error, response, json) {
  if (error) {
    console.log("Error:", error);
    return 1;
  }
  var lgtm = "![LGTM]("+ json.imageUrl +")";
  console.log(lgtm);
  return clipboard.copy(lgtm);
});
