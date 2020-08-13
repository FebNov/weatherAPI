const express = require("express");
const weatherRouter = require("./routes/weather");
const router = express.Router();
router.use("/try", weatherRouter);
module.exports = router;
