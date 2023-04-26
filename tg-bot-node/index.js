const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

const token = "6133587024:AAGDAe_O6YKhOIy0hy9LzRzgXPOTOATk8LQ";
const webAppUrl = "https://trixtertop.github.io/web-app-providers/";

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка, заполни форму", {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [[{ text: "Логин", web_app: { url: webAppUrl } }]],
      },
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => console.log("server active " + PORT));
