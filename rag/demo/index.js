const fs = require('fs');  // fs 帮助我们读取文件
const path = require('path');  // path 帮助我们处理路径
const { OpenAI } = require('openai');
const dotenv = require('dotenv').config();
// 模型 ollama
// 给它喂私有知识库，不怕私有被外界大模型训练了
// 安全
const openai = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: process.env.DEEPSEEK_BASE_URL
})


const testQuestion="有多少们课程？"

function readCourseInfo() {
    try {
        const filePath = path.join(__dirname, "lesson.txt");
        console.log(filePath, '------');
        return fs.readFileSync(filePath, 'utf-8');
    } catch(error) {
        console.error('读取课程信息失败', error);
        return null;
    }
}

async function answerQuestion(question) {
    // 检索
    const courseInfo = readCourseInfo();
    console.log(courseInfo, '------');
    if (!courseInfo) {
        return '读取课程信息失败, 请确保文件存在且有内容';
    }
    try {
        const prompt = `
        你是一个课程顾问，请根据以下课程信息回答问题。
        只回答与课程信息相关的内容。如果内容与课程无关，
        请礼貌地说明你只能回答与课程相关的内容。

        课程信息：
        ${courseInfo}

        问题：${question}
        `

        const response = await openai.chat.completions.create({
            model: 'deepseek-chat',
            messages: [
                {
                     role: 'system',
                     content: prompt
                },
                {
                    role: 'user',
                    content: question
                },
            ],
            temperature: 0.1,
        });
        return response.choices[0].message.content;
    } catch(error) {
        console.error('回答问题失败', error);
        return '回答问题失败, 请稍后再试';
    }
}

answerQuestion(testQuestion) 
    .then(answer => {
        console.log("问题：", testQuestion);
        console.log("回答：", answer);
    })