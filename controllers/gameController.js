const Game = require("../models/game");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

exports.game_list = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find({}, "name").sort({ name: 1 }).exec();
  res.render("games", {
    title: "Games",
    games: allGames,
  });
});

exports.game_detail = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id).populate("category").exec();
  console.log(game);
  if (game === null) {
    const err = new Error("Game not found");
    err.status = 404;
    return next(err);
  }

  res.render("gamePage", {
    game: game,
  });
});

exports.game_edit_get = asyncHandler(async (req, res, next) => {
  const [game, categories] = await Promise.all([Game.find]);
});
