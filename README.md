# wechat-miniprogram-rate
微信小程序评分组件🌟

![预览图](https://raw.githubusercontent.com/simsir-lin/wechat-miniprogram-rate/master/screenshot.png "预览图")

### 下载
``` bash
git clone https://github.com/simsir-lin/wechat-miniprogram-rate.git
```

### 使用
1. 安装
```bash
npm install --save wechat-miniprogram-rate
```
2. 在你的页面json中添加
``` javascript
{
  "usingComponents": {
    "rate": "wechat-miniprogram-rate"
  }
}
```
3. 在wxml中即可使用组件
``` html
<rate></rate>
```

### 调试开发
1. 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 miniprogram_dev 目录
2. 安装依赖 `npm install`
3. 构建命令 `npm run dev`
4. 更多帮助信息查看[帮助文档](https://github.com/wechat-miniprogram/miniprogram-custom-component)

### 注意
* 小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始
* 初次引入需先执行开发者工具的 npm 构建，[微信官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

### Props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| value            |  选中的星星数                | Number    | 0        |
| placeholder             | 星星占位符                 | Number    | 0          |
| allowHalf             | 是否可半星                 | Boolean    | true          |
| disabled             | 是否禁用选择                 | Boolean    | false       |
| length             | 星星个数                 | Number    | 5       |

### events

| name     | description              | parameters     |
| :---------------- | :----------------------- | :------  |
| change            |  改变了星星                | 改变的数值    |

### 贡献
如果你有好的意见或建议，欢迎给我提issue!
