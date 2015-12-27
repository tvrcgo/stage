'use strict';

var path = require('path'),
    Jobs = require('./lib/job').Jobs;

/**
 * Run Jobs
 */
Jobs().forEach(function(j){
    var job = require(path.join(__dirname, j));
    job.start();
})
