import express from 'express';   // ✅ ESModule syntax
const router = express.Router();

router.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

export default router;
