const TelegramBot = require('node-telegram-bot-api');

const token = '7885239145:AAEqXltAezsrUPChLk-tTk4ozY6QjJBu6t8';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(`Сообщение от ${msg.from.username}: ${msg.text}`);
  bot.sendMessage(chatId, 'Я получил твоё сообщение!');
});
