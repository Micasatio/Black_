let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ π΄π wa.me/595983186566*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ π· π΄π *

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 2 π΄π *

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 3 π΄π *

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²πΎπ»π°π±πΎππ°π³πΎππ° 4 π΄π *
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/Micasatio/Black_` },
'mimetype': `application/${document}`,
'fileName': `γ  Black=π©πΆπ» γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/DIEGO-OFC/DORRAT-BOT-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UC7NB_0XT0vlKom0M0aCrs5g' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'βοΈπΌπ΄π½πβοΈ'}, type: 1}, 
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'πΈπ½πππ°π»π°ππ±πΎππ '}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;πΏππππ€ π€ππ π;;;\nFN:πΏππππ€ π€ππ π\nORG:πΏππππ€ π€ππ π\nTITLE:\nitem1.TEL;waid=593959425714:+593 95 942 5714\nitem1.X-ABLabel:πΏππππ€ π€ππ π\nX-WA-BIZ-DESCRIPTION:[β] α΄α΄Ι΄α΄α΄α΄α΄α΄ α΄ α΄sα΄α΄ Ι΄α΄α΄ α΄α΄Κα΄ α΄α΄sα΄s Ιͺα΄α΄α΄Κα΄α΄Ι΄α΄α΄s.\nX-WA-BIZ-NAME:π©ππππ πΊππππππ π\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Diego ofc π', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
