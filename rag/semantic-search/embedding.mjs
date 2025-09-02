// 负责 posts.json的模块化
// 支持了fs 的promise 版本
import fs from 'fs/promises';
// readFileSync 同步版本
// readFile() 异步版本
// fs 推出了promise 版本
import { client, model } from './llm.mjs';

const inputFilePath = './data/posts.json';
const outputFilePath = './data/posts_with_embedding.json';
// 最流行写法
const data = await fs.readFile(inputFilePath, 'utf-8');
console.log(data, '------');
// 向量化
const posts = JSON.parse(data);
const postsWithEmbedding = [];

for (const {title, category} of posts) {
    const response = await client.embeddings.create({
        model: model,
        input: `标题：${title}; 分类：${category}`
    })
    postsWithEmbedding.push({
        title,
        category,
        embedding: response.data[0].embedding
    })
}
// 保存到文件
await fs.writeFile(outputFilePath, JSON.stringify(postsWithEmbedding, null, 2), 'utf-8');
console.log('向量化完成');
