'use strict';

var Job = require('../lib/job');

module.exports = Job(function(){
    console.log('currency...', +new Date)
}, '*/2 * * * * *');
