const Game = require("../models/game");
const asyncHandler = require("express-async-handler");

exports.game_list = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find().sort({ name: 1 }).exec();
  res.render("games", {
    title: "Games",
    games: allGames,
  });
});
