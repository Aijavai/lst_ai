import Mock from 'mockjs'

export default [{
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response:(req, res) => {
        // ?keyword = 释小龙
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10);
        let list = [];
        for (let i = 0; i < num; i++) {
            // 随机内容
            const randomData = Mock.mock({
                title: '@ctitle'
            })
            console.log(randomData)
            list.push(`${randomData.title}${keyword}`)
        }

        return {
            code: 0,
            data: list
        }
    }
},
    {
        url: '/api/hotList',
        method: 'get',
        timeout: 1000,
        response: (req, res) => {
            return {
                code: 0,
                data: [
                    {
                        id: '101',
                        title: "北京热门景点"
                    }, 
                    {
                        id: '102',
                        title: "上海必游地"
                    },
                    {
                        id: '103',
                        title: "杭州西湖"
                    },
                    {
                        id: '104',
                        title: "成都美食"
                    }]
            }
        }
    },
    {
    url: "/api/detail/:id",
    method: "get",
    timeout: 1000,
    response: (req) => {
      const randomData = Mock.mock({
        title: "@ctitle(5,10)",
        price: "@integer(100, 500)",
        desc: "@cparagraph(1, 3)",
        images: [
          {
            url: "@image('300x200', @color, '#fff', 'png', '景点')",
            alt: "@ctitle(5,10)",
          },
          {
            url: "@image('300x200', @color, '#fff', 'png', '景点')",
            alt: "@ctitle(5,10)",
          },
          {
            url: "@image('300x200', @color, '#fff', 'png', '景点')",
            alt: "@ctitle(5,10)",
          },
          {
            url: "@image('300x200', @color, '#fff', 'png', '景点')",
            alt: "@ctitle(5,10)",
          },
        ],
      });
      return {
        code: 0,
        msg: "success",
        data: randomData,
      };
    },
  },
]