#! /usr/bin/env node
const userArgument = process.argv.slice(2);

const Category = require("./models/category");
const Game = require("./models/game");

const categories = [];
const games = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgument[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("about to connect");
  await mongoose.connect(mongoDB);
  console.log("should be connected");
  await createCategories();
  await createGames();
  console.log("about to disconnect");
  mongoose.connection.close();
}

async function createCategory(index, name, description) {
  const category = new Category({ name: name, description: description });
  await category.save();
  categories[index] = category;
  console.log(`Added genre: ${name}`);
}

async function createGame(
  index,
  name,
  synopsis,
  category,
  rating,
  price,
  release_date
) {
  const game = new game({
    name: name,
    synopsis: synopsis,
    category: category,
    rating: rating,
    price: price,
    release_date: release_date,
  });
  await game.save();
  games[index] = game;
  console.log(`Added game: ${name}`);
}

async function createCategories() {
  console.log("adding categories");
  await Promise.all([
    createCategory(
      0,
      "FPS",
      "An FPS game is a type of action game where the player views everything from a first-person perspective. Such video games are typically characterized by a high level of violence, and a focus on the use of handheld ranged weapons."
    ),
    createCategory(
      1,
      "Tactical role-playing game",
      "Tactical role-playing games, also known as strategy role-playing games and in Japan as simulation RPGs, are a video game genre that combines core elements of role-playing video games with those of tactical strategy video games."
    ),
    createCategory(
      2,
      "MMO",
      "Massively Multiplayer Online (MMO) games are large-scale online games where thousands of players interact in a persistent virtual world."
    ),
  ]);
}
async function createGames() {
  console.log("adding games");
  await Promise.all([
    createGame(
      0,
      "CS2",
      "Counter-Strike 2 (CS2) is a tactical first-person shooter game where two teams, Terrorists and Counter-Terrorists, compete in various objective-based missions.",
      categories[0],
      9,
      0,
      "27/09/2023"
    ),
    createGame(
      1,
      "League of legends",
      "League of Legends (LoL) is a multiplayer online battle arena (MOBA) game where two teams of five players compete to destroy the opponent's Nexus. ",
      categories[2],
      9,
      0,
      "27/10/2009"
    ),
  ]);
}
