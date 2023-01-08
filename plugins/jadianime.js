import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime) throw 'Reply Gambar nya'
m.reply('Waitt, Watashi Akan Membuatkannya..')
let media = await q.download()
let url = await uploadImage(media)
await conn.sendFile(m.chat, await (await fetch(`https://restapi.frteam.xyz/toanime?img=${url}&apikey=AvjCslTR`)).buffer(), 'anime.jpg', '*DONE!*', m)
}
handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^(toanime|jadianime)$/i
handler.premium = true
handler.chat = true

export default handler