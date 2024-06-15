const express = require("express");
const router = express.Router();
const gameContoller = require("../controllers/gameController");
router.get("/", gameContoller.game_list);

module.exports = router;
