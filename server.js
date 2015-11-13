"use strict";

var express = require('express'),
    api     = require('./api'),
    app     = express(),
    path    = require('path');

app
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function(req, res){
        res.sendFile(path.resolve('public/main.html'));
    })
    .listen(3000);
