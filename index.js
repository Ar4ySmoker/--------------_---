const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(`Сообщение от ${msg.from.username}: ${msg.text}`);
  bot.sendMessage(chatId, 'Я получил твоё сообщение!');
});
