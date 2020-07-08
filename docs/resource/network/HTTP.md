### 基础

### 问题

- 从 URL 在浏览器被被输入到页面展现的过程中发生了什么？

- 现代浏览器在与服务器建立了一个 TCP 连接后是否会在一个 HTTP 请求完成后断开？什么情况下会断开？

- 默认情况下建立 TCP 连接不会断开，只有在请求报头中声明 Connection: close 才会在请求完成后关闭连接。(HTTP/1.1 之后默认开启长连接)

- 一个 TCP 连接可以对应几个 HTTP 请求？

- 一个 TCP 连接是可以发送多个 HTTP 请求

- 一个 TCP 连接中 HTTP 请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？

- HTTP/1.1 存在一个问题，单个 TCP 连接在同一时刻只能处理一个请求，意思是说：两个请求的生命周期不能重叠，任意两个 HTTP 请求从开始到结束的时间在同一个 TCP 连接里不能重叠。

  虽然 HTTP/1.1 规范中规定了 Pipelining 来试图解决这个问题，但是这个功能在浏览器中默认是关闭的。

- 为什么有的时候刷新页面不需要重新建立 SSL 连接？

- 浏览器对同一 Host 建立 TCP 连接到数量有没有限制？