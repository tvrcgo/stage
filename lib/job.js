'use strict';

var CronJob = require('cron').CronJob;

var Job = module.exports = function(tick, range){
    range = range || '*/5 * * * * *';
    return new CronJob(range, tick, null);
};
