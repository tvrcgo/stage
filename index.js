'use strict';

var fs = require('fs'),
    path = require('path');

/**
 * Require jobs
 * @param {String} parent [Jobs root directory.]
 */
function Jobs(parent){
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

/**
 * Run Jobs
 */
Jobs().forEach(function(j){
    var job = require(path.join(__dirname, j));
    job.start();
})
