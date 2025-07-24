 export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75, //
      propList: ['*'], // 所有属性都转换
      exclude: /node_modules/i, // 排除 node_modules 中的文件
    },
  },
}