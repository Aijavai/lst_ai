# 图片懒加载

- <img src=""/>
  - 浏览器的下载线程
  - src：基于http协议的底层 应用层协议
  - https://img.36krcdn.com/hsossms/20250313/v2_15ad8ef9eca34830b4a2e081bbc7f57a@000000_oswg172644oswg1536oswg722_img_000?x-oss-process=image/resize,m_mfit,w_960,h_400,limit_0/crop,w_960,h_400,g_center
    转变为ip地址
    - 域名解析：DNS
    - 建立连接：三次握手
    - 发送请求：HTTP
    - 服务器处理请求：应用层协议
    - 服务器响应请求：HTTP
    - 断开连接：四次挥手
- 发送网络带宽有限 公路
  并发 同时请求多个css,img支持的比较好
  http请求：请求行，请求头，请求体，响应行，响应头，响应体，http版本
  tcp协议：三次握手，四次挥手，
  三次握手：客户端发送请求，服务端发送响应，客户端发送响应
  四次挥手：客户端发送请求，服务端发送响应，服务端发送请求，客户端发送响应
  三次握手：客户端发送请求，服务端发送响应，客户端发送响应
  tcp/ip
- 为什么要对图片进行懒加载
-  网页（电商）图片太多了50+
-  滚动页面 加载
- 如果页面src一开始就全部加载，页面很可能会打不开

## 懒加载
怎么懒加载？
- 只加载需要加载的
  - 可视区
  - 滚动区域 scroll事件
- 不加载
  src 不能直接给，（img中只要看到了src就会下载），data-original ?
  - 为什么会是data-original?
  src? img的功能函数
  占位图: src="https://static.360buyimg.com/item/main/1.0.12/css/i/loading.gif"
  - 占位图的作用
    - 加载一个src，img应该要设置一个src  但不能请求原来图片的地址，否则会同时并发太多，图片太大
    - 给个占位图片 比较小 会缓存 只需请求一次
    - 占位图的作用就是一个过渡，让用户看到一个图片
- 等页面渲染完成后
  img 太多会严重影响页面的打开速度，第一重要的
  data-original中
  自定义属性 data- 数据属性
  图片的原地址是img 数据
  original 原来
- 性能问题
  - 解决了性能问题 首屏加载速度
  - onScroll 触发太频繁  JS 
  - forEach imgs 
- 防抖 节流