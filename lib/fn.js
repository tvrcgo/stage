
var crypto = require('crypto');

function md5(str) {
    var md5 = crypto.createHash('md5');
    md5.update(str);
    return md5.digest('hex');
}

/**
 * 混合对象
 * @return {object} [description]
 */
function mix() {
    var objs = Array.prototype.slice.call(arguments);
    var base = objs[0] || {};
    for(var i=1; i<objs.length; i++) {
        var tar = objs[i] || {};
        for(var k in tar) {
            if (tar.hasOwnProperty(k)) {
                base[k] = tar[k];
            }
        }
    }
    return base;
}

/**
 * 排除指定字段
 * @param  {object} obj  [description]
 * @param  {array} keys [description]
 * @return {object}      [description]
 */
function exclude(obj, keys) {
    keys && keys.forEach(function(key){
        delete obj[key];
    })
    return obj;
}

exports.md5 = md5;
exports.mix = mix;
exports.exclude = exclude;
