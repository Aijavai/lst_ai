 # 流式输出

 - 为什么会考这道题？
   25年大厂必考题
   - LLM 聊天机器人 (23年的AI爆款-》24年 推理-》 25年 AI Agent 年) AI产品
   -  流式输出属于用户体验，前端职责。

   - 为何需要流式输出？
     - 边生成边输出？
       后端、LLM API 方式提供给我们？
       AIGenerticContent 生成式的大模型 一个token一个token transform（google） 出来的
       当LLM生成文本时，它不是一次性输出整个响应，而是将生成的文本分成小的、连续的“块”或“token”（比如一个词、一个字符或一个标点符号），然后将这些小块实时地、渐进式地发送给客户端。
       “我是你的assistant,”   token开销付费的
       更快的看到响应
       减少用户的等待时间

 - 前端职责
   - 良好的用户体验
   - 尽快的返回结果
   障眼法  生成要花时间哦， 我愿意等  
   最懂用户心理的 

 - 步骤 
   - 前端能实现流式输出？
     setInterval  异步  事件机制  message   

   - 后端又怎么实现？ 
     socket 长链接
     http请求是基于请求响应式简单协议 关闭连接？
     http 2.0 server push 服务器端推送。

## 全栈能力
- npm init -y   node 后端
- npm i express 老牌的node 框架 