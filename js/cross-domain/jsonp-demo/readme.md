# 封装的JSONP

- 只能解决GET 请求的跨域问题   
    http://localhost:3000/say?callback=loveCallback&wd=likeyou
- 需要后端配合
    后端的输出的方式要加padding
- 不太安全
    因为是GET 请求，所以参数会暴露在URL 中 全局挂在了一个show callback 函数
