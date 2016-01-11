'use strict';

function run(){
    process.stdout.write('.')
};

module.exports = {
    main: run,
    cron: '*/10 * * * * *'
}
