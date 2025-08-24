# dns (Domain Name System 域名系统)
域名 => ip地址


- 把好理解和记忆的域名解析成IP地址的*分布式数据库*系统。
    浏览器在真正发起HTTP(s)请求前，通常都会做一次DNS 解析。
- 一条命令
    ping www.baidu.com 递归查找的过程，结果IP 

- dns 解析过程
    url 输入，到页面显示的第一个表达
    - 补充url 的完整性
    - dns 浏览器缓存
        chrome://net-internals/#dns
        第一次访问的，需要解析，否则使用缓存的
    - 操作系统dns缓存
        ipconfig /displaydns
    - hosts 文件配置
        指定域名 解析IP 手动配置
        加一行配置记录 指定ip 域名
        比如我们会将项目本地ip 配公司的域名，那么开发效果就可以和
        线上域名效果一样。更安全
        开发中经常用 

- 如果上面三者都没有，也没有命中缓存
    递归解析器查询。
    假设 www.baidu.com
    分布式数据库 key=>value key domain value ip
    dns 软件  13  祖根服务器的ip 地址和域名，
    写死的

    - 根域名服务器
        .com 的地址是多少？
    - 域名服务器
        baidu.com 服务器在哪？
    - 权威服务器
        IP地址 


    局域网 -》 城域网(电信或移动服务商) 

- 设备用ip 地址区三次握手，建立tcp 链接，使用http 请求，网页打开
了。

- dns优化
    dns-prefetch dns 预解析
    <link type="dns-prefetch" href="//g.alicdn.com">
    网络层的优化

- pre-connect
    tcp 连接提前 通道打开，多路复用


- CDN 服务器
    Content Delivery NetWork
    内容分布网络
    部署静态资源的
    访问内容分成两部分
    动态的，走中央服务器
    静态的，css/js/jpg，CDN 服务器
    

