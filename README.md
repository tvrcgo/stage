# stage
任务运行管理

## Deploy
```sh
cd /home/node
git clone git@github.com:tvrcgo/stage.git
```

## Usage
在 jobs 目录新建任务脚本，基本结构：
```js
var Job = require('../lib/job').Job;

module.exports = Job(function(){
    // tick run.
});
```
默认每隔 5s 运行一次。

#### 指定任务运行计划

每 2s 运行一次
```js
module.exports = Job(function(){

}, '*/2 * * * * *');
```

- 有关运行计划时间设置参考项目 [node-cron](https://github.com/ncb000gt/node-cron)

## License
MIT
