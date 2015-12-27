'use strict';

var Job = require('../lib/job').Job;

module.exports = Job(function(){
    process.stdout.write('.')
});
