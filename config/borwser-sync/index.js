var watchFiles = require('./watchFiles');

module.exports = {
  // 使用本地主机地址或ip
  //proxy: "www.kyy.com",
  // 起始路径
  // startPath: "",
  // 监控的文件
  server: {
    baseDir: "./",
    index: "src/index.html"
  },
  files:watchFiles,
  //不显示在浏览器中的任何通知。
  notify: false,
  scrollProportionally: true, //视口同步到顶部位置
  browser: ["chrome","google-chrome"]
}
