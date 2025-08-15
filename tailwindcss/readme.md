# tailwindcss 原子css

- 非常好用
- 几乎不用写css
- AI 生成代码 css 用的都是tailwindcsss
- 配置流程
    安装tailwindcss      
         pnpm i tailwindcss @tailwindcss/vite
    配置tailwindcss
    引入tailwindcss
- 有各种内置的css类名, 分门别类
- 1rem = 4 个单位

- 文字行数限制
    - webkit-line-clamp: 2; 不能独自生效
    - webkit 浏览器内核 Chrom + safari
    - mozilla 火狐浏览器内核代号
    实验阶段的属性 新的
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
