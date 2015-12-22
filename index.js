'use strict';

var fs = require('fs'),
    path = require('path'),

    jobs = fs.readdirSync('./jobs');

jobs.forEach(function(f){
    var job = require(path.join(__dirname, './jobs', f));
    job.start();
})
