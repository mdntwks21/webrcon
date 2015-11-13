"use strict";

var express = require('express'),
    app     = express(),
    path    = require('path');

app
    .use(express.static('./public'))
    .get('*', function(req, res){
        res.sendFile(path.resolve('public/main.html'));
    })
    .listen(3000);
