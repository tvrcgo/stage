'use strict';

var path = require('path'),
    fs = require('fs'),

    CronJob = require('cron').CronJob;

/**
 * One job.
 * @param  {function} tick
 * @param  {string} range
 * @return {object}       job
 */
exports.Job = function(tick, range){
    range = range || '*/5 * * * * *';
    return new CronJob(range, tick, null);
};

/**
 * Traversal jobs
 * @param  {string} parent [jobs root]
 */
exports.Jobs = function(parent){
    parent = parent || './jobs';
    var files = [];
    var list = fs.readdirSync(parent);
    list.forEach(function(item){
        var uri = path.join(parent, item);
        if (fs.statSync(uri).isDirectory()) {
            files = files.concat(Jobs(uri));
        }
        else {
            files.push(uri);
        }
    })
    return files;
}
