const express = require('express');
const router = new express.Router();

const CreateShortenUrl = (req, res, next) => {
    res.send("Hello from CreateShortenUrl");
}

router.get('/createtinyurl', CreateShortenUrl);

module.exports = router;