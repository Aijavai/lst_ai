/** 
 * chat 聊天
 * 
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions';

export const chat = async (
    messages, 
    api_url=DEEPSEEK_CHAT_API_URL, 
    api_key=import.meta.env.VITE_DEEPSEEK_API_KEY,
    model='deepseek-chat'
) => {
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model,
                messages,
                stream: false,
            })
        })
        
        // 检查HTTP状态码
        if (!response.ok) {
            if (response.status === 402) {
                // 返回模拟响应用于演示
                return {
                    code: 0,
                    content: '🎯 重庆旅游推荐（演示数据）:\n\n🏞️ **必游景点**\n• 洪崖洞 - 夜景绝美的吊脚楼建筑群\n• 解放碑 - 重庆地标性建筑\n• 磁器口古镇 - 体验巴渝文化\n• 长江索道 - 空中观赏两江美景\n\n🍲 **特色美食**\n• 重庆火锅 - 麻辣鲜香\n• 小面 - 重庆人的早餐\n• 酸辣粉 - 街头小吃经典\n• 毛血旺 - 川渝名菜\n\n🚇 **交通建议**\n• 轻轨2号线可达主要景点\n• 建议办理重庆交通卡\n• 打车软件在重庆很方便',
                    msg: '演示模式（API需要付费）'
                }
            }
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        return {
            code: 0,
            content: data.choices[0].message.content,
            msg: '成功'
        }
    } catch(err) {
        console.error('Chat API Error:', err);
        return {
            code: 1,
            content: '抱歉，AI服务暂时不可用。请稍后再试。',
            msg: '服务异常'
        }
    }
}

export const kimiChat = async (messages) => {
    const res = await chat(
        messages,
        KIM_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res;
}