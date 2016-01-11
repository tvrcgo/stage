
var WechatBizAPI = require('wechat-enterprise-api'),
    config = require('../config');

exports.push = function(opts, body, done){
    opts = opts || {};
    var api = new WechatBizAPI(config.weixin.biz.corpId, config.weixin.biz.secret, opts.appId||5);
    api.send({
        touser: [].concat(opts.touser).join('|'),
        totag: [].concat(opts.totag).join('|')
    }, {
        msgtype: "news",
        news: {
            articles: [].concat(body)
        },
        safe: "0"
    }, function(err, body, resp){
        done && done(err, body);
    })
}
