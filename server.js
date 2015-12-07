"use strict";

var express = require('express'),
    app     = express(),
    path    = require('path'),
    os      = require('os'),
    swagger = require('swagger-tools'),
    swagDoc = require('./api/swagger.json'),
    options = require('./options.json');
    
options.isWin = /^win/.test(os.platform());
options.useStubs = process.env.NODE_ENV === 'development' ? true: false;

swagger.initializeMiddleware(swagDoc, function( middleware ) {
    app.use(middleware.swaggerMetadata());

    app.use(middleware.swaggerValidator());

    app.use(middleware.swaggerRouter(options));

    app.use(middleware.swaggerUi());

    app.listen(options.port);
});
