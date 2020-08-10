const express = require("express");
const postRouter = require("./routes/weather");
const router = express.Router();
router.use("/post", postRouter);
module.exports = router;
