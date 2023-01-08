let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'fangzbot_091' || args[0] == 'followfangz_' || args[0] == 'BloowwXx' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'giftkey01389320007' || args[0] == 'OwnerBerhatiMulia🦄') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n999999999999999 XP ✨\n 999999999999999 Limit! 🎫\n999999999999999 Money 💹\n999999999999999 Potion 🥤', m)
    global.db.data.users[m.sender].exp += 999999999999999
    global.db.data.users[m.sender].limit += 999999999999999
    global.db.data.users[m.sender].money +=999999999999999
    global.db.data.users[m.sender].potion += 999999999999999
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler 
