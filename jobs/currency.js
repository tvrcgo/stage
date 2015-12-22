'use strict';

var Job = require('../lib/job').Job,
    range = '*/2 * * * * *';

module.exports = Job(function(){
    console.log('currency...', +new Date)
}, range);
