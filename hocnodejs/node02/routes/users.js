import express from "express";
import ordersRouter from "./orders.js";
const router = express.Router();

// -> /users
router.get('/', (req, res) => {
    const {status, keyword} = req.query;
    res.send(`
    <h1>Danh sách người dùng</h1>
    <h2>Status: ${status}</h2>
    <h2>Keyword: ${keyword}</h2>
    `);
});

// -> /users/add
router.get('/add', (req, res) => {
    res.send('<h1>Thêm người dùng</h1>');
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.send('<h1>Sửa người dùng: '+id+'</h1>')
})

router.use('/orders', ordersRouter);

export default router;