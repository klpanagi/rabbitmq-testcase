#!/usr/bin/env nodejs

var webstomp = require('webstomp-client');
var WebSocket = require('ws');

var host = process.env.RABBITMQ_HOST;
var port = process.env.RABBITMQ_WEBSTOMP_PORT;

var url = 'ws://' + host + ':' + port + '/ws';
var username = 'test';
var password = 'test';

var options = {debug: false, protocols: webstomp.VERSIONS.supportedProtocols()};

var client = webstomp.over(new WebSocket(url), options);

client.connect(username, password, function(){console.log('Connected')}, function(e){console.log(e)});
