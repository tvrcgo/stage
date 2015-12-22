'use strict';

var Job = require('../lib/job').Job;

module.exports = Job(function(){
    console.log('proxy...', +new Date)
});
