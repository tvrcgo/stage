'use strict';

var Job = require('../lib/job');

module.exports = Job(function(){
    console.log('proxy...', +new Date)
});
