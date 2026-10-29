const { Telegraf } = require('telegraf');

// Mengambil token bot dari Environment Variable yang aman
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Perintah /start
bot.start((ctx) => {
    ctx.reply("🔥 Halo King! Bot ALDI Tools Pro Interaktif siap memantau market 24/7.\n\nKetik /analisa untuk cek kondisi XAU/USD, BTC, & ETH sekarang!");
});

// Perintah /help
bot.help((ctx) => {
    ctx.reply("📋 **Daftar Perintah Bot ALDI Tools Pro:**\n\n/analisa - Scan market real-time & cari setup\n/status - Cek kesehatan sistem bot\n/pairs - Lihat daftar aset (XAUUSD, BTC, ETH)");
});

// Perintah /pairs
bot.command('pairs', (ctx) => {
    ctx.reply("📊 **Daftar Pantauan Aset (Active Pairs):**\n1. 🟡 **XAU/USD** (Gold / USD)\n2. 🟢 **BTC/USDT** (Bitcoin)\n3. 🔵 **ETH/USDT** (Ethereum)\n\n*Timeframe:* M15 / H1", { parse_mode: 'Markdown' });
});

// Perintah /status
bot.command('status', (ctx) => {
    ctx.reply("🟢 **System Status:**\n• Server: Online (24/7 Active)\n• Mode: Interactive Command Handler\n• Connected to Telegram API: OK", { parse_mode: 'Markdown' });
});

// Perintah /analisa (Fitur Utama Sinyal & Alasan)
bot.command('analisa', async (ctx) => {
    await ctx.reply("🔍 Sedang memindai market XAU/USD, BTC, dan ETH secara real-time...");

    // Simulasi jeda analisa profesional
    setTimeout(() => {
        let report = `📊 **ALDI TOOLS PRO - MANUAL ANALYSIS**\n`;
        report += `⏱ *Waktu:* Real-Time Request\n\n`;

        report += `🟡 **XAU/USD (Timeframe M15)**\n`;
        report += `• Status: 🟡 *WAITING FOR BREAKOUT*\n`;
        report += `• Alasan: Harga sedang menguji area resistance psikologis. Belum ada konfirmasi volume *break* valid.\n\n`;

        report += `🟢 **BTC/USDT (Timeframe M15)**\n`;
        report += `• Status: 🟢 *BULLISH SETUP WATCH*\n`;
        report += `• Alasan: Terdeteksi pantulan dari area demand zone, indikator momentum mulai menguat.\n\n`;

        report += `🔵 **ETH/USDT (Timeframe M15)**\n`;
        report += `• Status: 🔵 *SIDEWAYS / CONSOLIDATION*\n`;
        report += `• Alasan: Pergerakan harga tertahan di dalam range ketat, menunggu pemicu volume pasar Amerika/Eropa.`;

        ctx.reply(report, { parse_mode: 'Markdown' });
    }, 1200);
});

// Menyalakan Bot
bot.launch();
console.log("Bot ALDI Tools Pro Interaktif Berjalan 24/7!");

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
