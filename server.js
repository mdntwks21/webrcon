"use strict";

var express = require('express'),
    app     = express(),
    path    = require('path');
    os      = require('os');
    options = require('./options.json');
    
options.isWin = /^win/.test(os.platform());

app
    .use(express.static('./public'))
    .get('*', function(req, res){
        res.sendFile(path.resolve('public/main.html'));
    })
    .listen(3000);
