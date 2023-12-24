//CommonJS
// const {getProduct, getPrice} = require('./utils/products');
// console.log(getProduct());
// console.log(getPrice());

// const http = require('http');
import http from "http";
import url from 'url';
const server = http.createServer((req, res) => {
    //Request
    const parse = url.parse(req.url);
    console.log(parse);
    const pathname = parse.pathname;
    let content = '';
    if (pathname === '/') {
        content = `<h1>Trang chủ</h1>`;
    } else if (pathname === '/gioi-thieu') {
        content = `<h1>Giới thiệu</h1>`;
    } else if (pathname === '/san-pham') {
        const searchParams = new URLSearchParams(parse.search);
        content = `
        <h1>Sản phẩm</h1>
        <h2>Status: ${searchParams.get('status')}</h2>
        <h2>Keyword: ${searchParams.get('keyword')}</h2>
        `
    } else {
        content = `<h1>Page Not Found</h1>`
        res.statusCode = 404;
    }
    const userAgent = req.headers['user-agent'];
    const method = req.method;
    const cookie = req.headers['cookie'];

    //Response
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('x-api-key', '123');
    res.setHeader('Set-Cookie', 'name=username;value=hoanganit19;path=/;max-age=3600;httpOnly');
    res.write(content);
    res.end();
});
server.listen(8080, 'localhost', () => {
    console.log(`Đã chạy server thành công: http://localhost:8080`);
})