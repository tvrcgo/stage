'use strict';

var path = require('path'),
    Job = require('./lib/job').Job,
    Jobs = require('./lib/job').Jobs;

/**
 * Run Jobs
 */
Jobs('./jobs').forEach(function(j){
    var jobConf = require(path.join(__dirname, j));
    if (jobConf && jobConf.main && jobConf.main.constructor === Function) {
        var job = Job(jobConf.main, jobConf.cron);
        job.start();
    }
})
