const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Mengambil token dari Environment Variable atau fallback langsung ke tokenmu
const token = process.env.TELEGRAM_BOT_TOKEN || "9122156814:AAGktKUhTUT08iMafcdHqSa0Jp7SjcWGyvI";
const bot = new TelegramBot(token, { polling: true });

console.log("Bot Telegram XAU, BTC, & ETH sedang berjalan...");

// Perintah awal /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Halo King! 👑 Bot Scanner XAU/USD, BTC/USDT, & ETH/USDT aktif 24/7.\n\nKetik /price untuk cek harga terbaru.");
});

// Perintah cek harga /price
bot.onText(/\/price/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Sedang mengambil data pasar terbaru...");

    try {
        bot.sendMessage(chatId, 
            "📊 **MARKET UPDATE (24/7)**\n\n" +
            "🟡 **XAU/USD (Gold):** Memuat data...\n" +
            "🪙 **BTC/USDT:** Memuat data...\n" +
            "💎 **ETH/USDT:** Memuat data..."
        );
    } catch (error) {
        bot.sendMessage(chatId, "Gagal mengambil data market, King.");
    }
});
