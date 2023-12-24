import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Học Express không khó</h1>');
});
router.get('/san-pham', (req, res) => {
    res.send('<h1>Sản phẩm</h1>');
});

export default router;