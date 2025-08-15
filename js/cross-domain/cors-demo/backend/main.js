const http = require('http');

const server = http.createServer((req, res) => {
    

    if (req.url === '/api/test' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });


        res.end(JSON.stringify({
            msg: '跨域成功！！！'
        }));
    }

})

server.listen(8000, () => {
    console.log('CORS server running at http://localhost:8000')
})