
/********************************************
*        Black-BOT-MD BY El negro-OFC        *
/********************************************/
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './galerรญa/menudorrat3.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply("โฑ๏ธ ๐๐๐๐๐๐๐๐ ๐๐๐๐...")
let str = `
*โโใ ๐ฅโก๐ฅโก๐ฅโก๐ฅใโโโโฎ*
*โ โข Black-๐๐๐-๐๐*
*โโโโโโโโโโโโโโโโโโโโโโโโ*
*โ โข โค๐๐๐๐, ${taguser}โค*
*โโโโโโโโโโโโโโโโโโโโโโโโ*
*โ โข ๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐: El negro* 
*โ โข ๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐: wa.me/595983186566 *
*โ โข ๐๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐: wa.me/595983186566 (๐๐๐๐๐๐๐ ๐๐ Black)*
*โ โข ๐๐๐๐๐๐๐ ยป ${vs}*
*โ โข ๐๐๐๐๐ ยป ${week}, ${date}*
*โ โข ๐๐๐๐๐๐ ๐๐๐๐๐๐ ยป ${uptime}*
*โ โข ๐๐๐๐๐๐๐ ยป ๐๐๐๐๐๐๐-๐๐*
*โ โข ๐๐๐๐๐๐๐๐ ยป ๐๐๐๐๐ฬ๐๐*
*โ โข ๐๐๐๐๐๐๐๐ ยป ${Object.keys(global.db.data.users).length}*
*โฐโโโก๐ฅโก๐ฅโก๐ฅโก๐ฅโโโโฏ*

*โญโใ INFORMACIรN DE Black-BOT ใโโฌฃ*
 โ ๐ฐ _${usedPrefix}grupos_
 โ ๐ฐ _${usedPrefix}estado_
 โ ๐ฐ _${usedPrefix}instalarbot_
 โ ๐ฐ _${usedPrefix}infobot_
 โ ๐ฐ _${usedPrefix}grouplist_
 โ ๐ฐ _${usedPrefix}owner_
 โ ๐ฐ _${usedPrefix}script_
 โ ๐ฐ _Bot_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
 *โฐโโโโโโโโโโโโโฌฃ*

*โญโใ REPORTAR COMANDO ใโโฌฃ*
โ *Reporta con este comando de haber*
โ *Fallas para poder Solucionar!!*
โโโโโโโโโโโโโโโโโโโ
โ ๐ _${usedPrefix}reporte *texto*_
โ ๐ _${usedPrefix}report *texto*_
*โฐโโโโโโโโโโโโโฌฃ*

โโโโโโโโโโโโโโโ
โ *<UNE UN BOT A TU GRUPO/>*
โโโโโโโโโโโโโโโโโโโโโโโโ
โฃ โฑ๐ค _${usedPrefix}join *link del grupo*_ 
โฃ โฑ๐ก๏ธ _*minimo 30 miembros*_
โโโโโโโโโโโโโโโ

โโโใ๐ฑ๐๐๐ใโ
โโข๐ชด${usedPrefix}aventura
โโข๐ชด${usedPrefix}balance
โโข๐${usedPrefix}claim
โโข๐ฑ${usedPrefix}top
โโข๐ฅ${usedPrefix}levelup
โโข๐${usedPrefix}myns
โโข๐ชด${usedPrefix}perfil
โโข๐${usedPrefix}work
โโข๐ฑ${usedPrefix}minar
โโข๐ฅ${usedPrefix}buy
โโข๐${usedPrefix}buyall
โโข๐ชด${usedPrefix}transfer <tipo> <cantidad> <@tag
โโข๐ฑ${usedPrefix}verificar
โโข๐ฑ${usedPrefix}unreg <numero de serie>
โโโโโืโืโืโืโโโ

โโโใ๐ฎ๐๐๐๐ใโ
โโข๐?${usedPrefix}suitpvp <@tag>
โโข๐ก${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
โโข๐ช${usedPrefix}ppt <papel / tijera /piedra
โโข๐พ${usedPrefix}prostituto <nombre / @tag
โโขโณ${usedPrefix}prostituta <nombre / @tag
โโขโ${usedPrefix}hetero <nombre / @tag
โโข๐ฅ${usedPrefix}gay2 <nombre / @tag
โโข๐ช${usedPrefix}lesbiana <nombre / @tag
โโข๐ซ${usedPrefix}pajero <nombre / @tag
โโข๐น๏ธ${usedPrefix}pajera <nombre / @tag
โโข๐งฉ${usedPrefix}puto <nombre / @tag
โโข๐ฎ${usedPrefix}puta <nombre / @tag
โโข๐ช${usedPrefix}manco <nombre / @tag
โโข๐ช${usedPrefix}manca <nombre / @tag
โโข๐ฑ${usedPrefix}rata <nombre / @tag
โโข๐ฏ${usedPrefix}love <nombre / @tag
โโข๐น${usedPrefix}doxear <nombre / @tag
โโข๐ฅ${usedPrefix}pregunta <texto
โโข๐น${usedPrefix}slot <apuesta
โโข๐ณ${usedPrefix}simi <texto
โโขโ๏ธ${usedPrefix}topgays
โโข๐${usedPrefix}topotakus
โโข๐ฒ${usedPrefix}formarpareja
โโข๐ฐ${usedPrefix}formarpareja5 
โโข๐ก๏ธ${usedPrefix}amistad
โโข๐ช${usedPrefix}verdad
โโข๐พ${usedPrefix}reto
โโโโโืโืโืโืโโโ

โใ๐๐๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐ ใ
โโขโ${usedPrefix}enable *welcome*_
โโขโ${usedPrefix}disable *welcome*_
โโขโ${usedPrefix}enable *modohorny*_
โโขโ${usedPrefix}disable *_modohorny*
โโขโ${usedPrefix}enable *antilink*_
โโขโ${usedPrefix}disable *antilink*_
โโขโ${usedPrefix}enable *antilink2*_
โโขโ${usedPrefix}disable *antilink2*_
โโขโ${usedPrefix}enable *detect*_
โโขโ${usedPrefix}disable *detect*_
โโขโ${usedPrefix}enable *audios*_
โโขโ${usedPrefix}disable *audios*_
โโขโ${usedPrefix}enable *autosticker*_
โโขโ${usedPrefix}disable *autosticker*_
โโขโ${usedPrefix}enable *antiviewonce*_ 
โโขโ${usedPrefix}enable *antitraba*_
โโขโ${usedPrefix}disable *antitraba*_
โโขโ${usedPrefix}enable *antiArab*_
โโขโ${usedPrefix}disable *antiArab*_
โโโโโืโืโืโืโโโ

โโใ๐ป๐๐๐๐๐๐๐๐๐๐ใ
โโข๐${usedPrefix}facebook <enlace / link / url
โโข๐๏ธ${usedPrefix}instagram <enlace / link / url
โโข๐๏ธ${usedPrefix}mediafire <enlace / link / url
โโข๐ฐ${usedPrefix}instagram <enlace / link / url
โโข๐${usedPrefix}gitclone <enlace / link / url
โโข๐${usedPrefix}tiktok <enlace / link / url
โโข๐๏ธ${usedPrefix}ytmp3 <enlace / link / url
โโข๐๏ธ${usedPrefix}ytmp4 <enlace / link / url
โโข๐ฐ${usedPrefix}play.1 <texto / enlace / link / url
โโข๐${usedPrefix}play.2 <texto / enlace / link / url
โโข๐${usedPrefix}play <texto
โโข๐๏ธ${usedPrefix}spotify <texto
โโข๐๏ธ${usedPrefix}imagen <texto
โโข๐ฐ${usedPrefix}pinteret <texto
โโข๐${usedPrefix}wallpaper <texto
โโข๐${usedPrefix}wallpaper2 <texto
โโข๐๏ธ${usedPrefix}pptiktok <nombre de usuario
โโข๐๏ธ${usedPrefix}igstalk <nombre de usuario
โโข๐ฐ${usedPrefix}tiktokstalk <nombre de usuario
โโโโโืโืโืโืโโ

โโโใ๐ข๐๐๐๐๐ใโ
โโข๐${usedPrefix}encuesta *<texto>
โโข๐${usedPrefix}votar *<texto>*
โโข๐${usedPrefix}listadv
โโข๐${usedPrefix}deladvertencia <@tag
โโข๐${usedPrefix}advertencia <@tag
โโข๐${usedPrefix}add <numero
โโข๐${usedPrefix}kick <@tag
โโข๐${usedPrefix}grupo <abrir / cerrar
โโข๐${usedPrefix}promote <@tag
โโข๐${usedPrefix}demote <@tag
โโข๐${usedPrefix}banchat
โโข๐${usedPrefix}unbanchat
โโข๐admins *<texto>_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โโข๐${usedPrefix}demote <@tag
โโข๐${usedPrefix}infogroup
โโข๐${usedPrefix}link
โโข๐${usedPrefix}setname <texto
โโข๐${usedPrefix}setdesc <texto
โโข๐${usedPrefix}invocar <texto
โโข๐${usedPrefix}setwelcome <texto
โโข๐${usedPrefix}setbye <texto
โโข๐${usedPrefix}hidetag <texto
โโข๐${usedPrefix}simular <welcome / bye / promote / demote>
โโข๐${usedPrefix}destraba 
โโโโโืโืโืโืโโโ

โโโใ๐ก๏ธ๐๐๐๐๐๐ใโ
โโข/instalarbot
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐๐๐๐๐๐๐๐๐ใ
โโข๐งง _${usedPrefix}togifaud *<responde a un video>*_
โโข๐งง _${usedPrefix}toimg *<responde a un sticker>*_
โโข๐งง _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
โโข๐งง _${usedPrefix}toptt *<responde a un video / audio>*_
โโข๐งง _${usedPrefix}tovideo *<responde a un sticker>*_
โโข๐งง _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
โโข๐งง _${usedPrefix}tts es *<texto>*_
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐ใโ
โโข๐${usedPrefix}logos <efecto <texto
โโข๐งง${usedPrefix}simpcard <@tag
โโข๐งจ${usedPrefix}hornycard <@tag
โโข๐${usedPrefix}lolice <@tag
โโข๐งง${usedPrefix}ytcomment <texto
โโข๐งจ${usedPrefix}itssostupid
โโข๐${usedPrefix}pixelar
โโข๐งจ${usedPrefix}blur
โโโโโืโืโืโืโโโ


โโโใ๐น๐๐ซ๐๐ฌ๐๐ฌ ๐ฒ ๐ญ๐๐ฑ๐ญ๐จ๐ฌใโ
โโข๐ฅ _${usedPrefix}consejo_
โโข๐ฅ _${usedPrefix}fraseromantica_
โโข๐ฅ _${usedPrefix}historiaromantica_
โโโโโืโืโืโืโโ

โโโใโฉ๏ธ๐๐๐๐๐๐ใโ
โโข๐${usedPrefix}cristianoronaldo
โโข๐${usedPrefix}messi
โโข๐${usedPrefix}meme
โโขโช${usedPrefix}itzy
โโข๐ฐ${usedPrefix}blackpink
โโข๐${usedPrefix}kpop <blackpink / exo / bts
โโข๐${usedPrefix}lolivid
โโขโฉ๏ธ${usedPrefix}loli
โโข๐${usedPrefix}navidad
โโข๐${usedPrefix}ppcouple
โโข๐${usedPrefix}neko
โโขโช${usedPrefix}waifu
โโข๐ฐ${usedPrefix}akira
โโข๐${usedPrefix}akiyama
โโข๐${usedPrefix}anna
โโขโฉ๏ธ${usedPrefix}asuna
โโข๐${usedPrefix}ayuzawa
โโข๐${usedPrefix}boruto
โโข๐${usedPrefix}chiho
โโขโช${usedPrefix}chitoge
โโข๐ฐ${usedPrefix}deidara
โโข๐${usedPrefix}erza
โโข๐${usedPrefix}elaina
โโขโฉ๏ธ${usedPrefix}eba
โโข๐${usedPrefix}emilia
โโข๐${usedPrefix}hestia
โโข๐${usedPrefix}hinata
โโขโช${usedPrefix}inori
โโข๐ฐ${usedPrefix}isuzu
โโข๐${usedPrefix}itachi
โโข๐${usedPrefix}itori
โโขโฉ๏ธ${usedPrefix}kaga
โโข๐${usedPrefix}kagura
โโข๐${usedPrefix}kaori
โโข๐${usedPrefix}keneki
โโขโช${usedPrefix}kotori
โโข๐ฐ${usedPrefix}kurumi
โโข๐${usedPrefix}madara
โโข๐${usedPrefix}mikasa
โโขโฉ๏ธ${usedPrefix}miku
โโข๐${usedPrefix}minato
โโข๐${usedPrefix}naruto
โโข๐${usedPrefix}nezuko
โโขโช${usedPrefix}sagiri
โโขโช${usedPrefix}sasuke
โโข๐${usedPrefix}sakura
โโข๐${usedPrefix}cosplay
โโโโโืโืโืโืโโโ

โโโโโืโืโืโืโโ

โโโใ๐๐๐๐๐ญ๐จ๐ฌ ๐๐ ๐๐ฎ๐๐ข๐จ๐ฌใ
โโข*- ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ ๐๐ฝ ๐ฐ๐๐ณ๐ธ๐พ ๐พ ๐ฝ๐พ๐๐ฐ ๐ณ๐ด ๐๐พ๐*
โโข๐ค _${usedPrefix}bass_
โโข๐ค _${usedPrefix}blown_
โโข๐ค _${usedPrefix}deep_
โโข๐ค _${usedPrefix}earrape_
โโข๐ค _${usedPrefix}fast_
โโข๐ค _${usedPrefix}fat_
โโข๐ค _${usedPrefix}nightcore_
โโข๐ค _${usedPrefix}reverse_
โโข๐ค _${usedPrefix}robot_
โโข๐ค _${usedPrefix}slow_
โโข๐ค _${usedPrefix}smooth_
โโข๐ค _${usedPrefix}tupai_
โโโโโืโืโืโืโโ

โใโพ๐๐ก๐๐ญ ๐๐ง๐จ๐ง๐ข๐ฆ๐จใ
โโข๐ณ _${usedPrefix}start_
โโข๐ณ _${usedPrefix}next_
โโข๐ณ_${usedPrefix}leave_
โโโโโืโืโืโืโโ

โใ๐๐๐ฎ๐ฌ๐๐๐ซใ
โโข๐ _${usedPrefix}covid <*paรญs*>
โโข๐ _${usedPrefix}playstore <*texto*>
โโข๐ _${usedPrefix}stickersearch *<texto>*_
โโข๐ _${usedPrefix}xnxxsearch *<texto>*_
โโข๐ _${usedPrefix}animeinfo *<texto>*_
โโข๐ _${usedPrefix}google *<texto>*_
โโข๐ _${usedPrefix}letra *<texto>*_
โโข๐ _${usedPrefix}wikipedia *<texto>*_
โโข๐ _${usedPrefix}ytsearch *<texto>*_
โโข๐ _${usedPrefix}apkdone *<texto>*_
โโข๐ _${usedPrefix}apkgoogle *<texto>*_
โโข๐ _${usedPrefix}apkmody *<texto>*_
โโข๐ _${usedPrefix}apkshub *<texto>*_
โโข๐ _${usedPrefix}happymod *<texto>*_
โโข๐ _${usedPrefix}hostapk *<texto>*_
โโข๐ _${usedPrefix}revdl *<texto>*_
โโข๐ _${usedPrefix}toraccino *<texto>*_
โโข๐ _${usedPrefix}uapkpro *<texto>*_
โโโโโืโืโืโืโโ

โใ๐ต๐๐๐๐๐๐ใ
โโขโ_๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ๐ป๐ฐ๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด๐ ๐ฟ๐ฐ๐ป๐ฐ๐ฑ๐๐ฐ๐ ๐พ ๐ต๐๐ฐ๐๐ด๐ ๐๐ธ๐ฝ ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐ฟ๐๐ด๐ต๐ธ๐น๐พ (#, /, *, .)
โโขโ_(๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)_
โโขโถ๏ธ _Quien es tu sempai botsito 7w7_
โโขโถ๏ธ _Te diagnostico con gay_
โโขโถ๏ธ _A nadie le importa_
โโขโถ๏ธ _Fiesta del admin_
โโขโถ๏ธ _Fiesta del administrador_ 
โโขโถ๏ธ _Vivan los novios_
โโขโถ๏ธ _Feliz cumpleaรฑos_
โโขโถ๏ธ _No digas mamadas Mariyein_
โโขโถ๏ธ _Noche de paz_
โโขโถ๏ธ _Buenos dias_
โโขโถ๏ธ _Cambiate a Movistar 
โโขโถ๏ธ _Bienvenido_
โโขโถ๏ธ _Calla fan de bts_
โโขโถ๏ธ _Las reglas del grupo_
โโขโถ๏ธ _Buenos tardes_
โโขโถ๏ธ _Buenos noches_
โโขโถ๏ธ _Audio hentai_
โโขโถ๏ธ _Chica lgante_
โโขโถ๏ธ _Feliz navidad_
โโขโถ๏ธ _Vete a la vrg_
โโขโถ๏ธ _Pasa pack Bot_
โโขโถ๏ธ _Atencion grupo_
โโขโถ๏ธ_Marica quien_
โโขโถ๏ธ _Murio el grupo_
โโขโถ๏ธ _Oh me vengo_
โโขโถ๏ธ _tio que rico_
โโขโถ๏ธ _Viernes_
โโขโถ๏ธ _Baneado_
โโขโถ๏ธ _Sexo_
โโขโถ๏ธ _Hola_
โโขโถ๏ธ _Un pato_
โโขโถ๏ธ_Nyanpasu_
โโขโถ๏ธ _Te amo_
โโขโถ๏ธ _Yamete_
โโขโถ๏ธ _Baรฑate_
โโขโถ๏ธ _Es puto_
โโขโถ๏ธ _La biblia_
โโขโถ๏ธ _Onichan_
โโขโถ๏ธ _Mierda de Bot_
โโขโถ๏ธ _Siuuu_
โโขโถ๏ธ _Epico_
โโขโถ๏ธ _Shitpost_
โโขโถ๏ธ _Rawr_
โโขโถ๏ธ _UwU_
โโขโถ๏ธ _:(
โโขโถ๏ธ _a_
โโโโโืโืโืโืโโ


โโโใ๐?๏ธ๐๐๐๐๐๐๐๐๐๐๐๐ใโ
โโข๐?๏ธ _${usedPrefix}horario_
โโข๐?๏ธ _${usedPrefix}encuestas texto|texto_
โโข๐?๏ธ _${usedPrefix}afk *<motivo>*_
โโข๐?๏ธ _${usedPrefix}ocr *<responde a imagen>*_
โโข๐?๏ธ _${usedPrefix}acortar *<enlace / link / url>*_
โโข๐?๏ธ _${usedPrefix}calc *<operacion math>*_
โโข๐?๏ธ _${usedPrefix}del *<respondre a mensaje del Bot>*_
โโข๐?๏ธ _${usedPrefix}whatmusic *<responde a un audio>*_
โโข๐?๏ธ _${usedPrefix}qrcode *<texto>*_
โโข๐?๏ธ _${usedPrefix}readmore *<texto1| texto2>*_
โโข๐?๏ธ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
โโข๐?๏ธ _${usedPrefix}styletext *<texto>*_
โโข๐?๏ธ _${usedPrefix}traducir *<texto>*_
โโข๐?๏ธ _${usedPrefix}nowa *<numero>*_
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐๐๐ใโ
โโข๐? _${usedPrefix}sticker *<responder a imagen o video>*_
โโข๐? _${usedPrefix}sticker *<enlace / link / url>*_
โโข๐? _${usedPrefix}s *<responder a imagen o video>*_
โโข๐? _${usedPrefix}s *<enlace / link / url>*_
โโข๐? _${usedPrefix}sfull *<responder a imagen o video>*_
โโข๐? _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
โโข๐? _${usedPrefix}scircle *<responder a imagen>*_
โโข๐? _${usedPrefix}sremovebg *<responder a imagen>*_
โโข๐? _${usedPrefix}semoji *<tipo> <emoji>*_
โโข๐? _${usedPrefix}attp *<texto>*_
โโข๐? _${usedPrefix}attp2 *<texto>*_
โโข๐? _${usedPrefix}attp3 *<texto>*_
โโข๐? _${usedPrefix}ttp *<texto>*_
โโข๐? _${usedPrefix}ttp2 *<texto>*_
โโข๐? _${usedPrefix}ttp3 *<texto>*_
โโข๐? _${usedPrefix}ttp4 *<texto>*_
โโข๐? _${usedPrefix}ttp5 *<texto>*_
โโข๐? _${usedPrefix}pat *<@tag>*_
โโข๐? _${usedPrefix}slap *<@tag>*_
โโข๐? _${usedPrefix}kiss *<@tag>*_
โโข๐? _${usedPrefix}dado_
โโข๐? _${usedPrefix}wm *<packname> <author>*_
โโข๐? _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
โโข๐? _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_ 
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐ ๐๐๐ใโ
โโข๐ > *<funcion>*
โโข๐ => *<funcion>*
โโข๐ $ *<funcion>*
โโข๐ _${usedPrefix}backup_
โโข๐ _${usedPrefix}cajafuerte_
โโข๐ _${usedPrefix}blocklist_
โโข๐ _${usedPrefix}enable *restrict*_
โโข๐ _${usedPrefix}disable *restrict*_
โโข๐ _${usedPrefix}enable *autoread*_
โโข๐ _${usedPrefix}disable *autoread*_
โโข๐ _${usedPrefix}enable *public*_
โโข๐ _${usedPrefix}disable *public*_
โโข๐ _${usedPrefix}enable *pconly*_
โโข๐ _${usedPrefix}disable *pconly*_
โโข๐ _${usedPrefix}enable *gconly*_
โโข๐ _${usedPrefix}disable *gconly*_
โโข๐ _${usedPrefix}enable *anticall*_
โโข๐ _${usedPrefix}disable *anticall*_
โโข๐ _${usedPrefix}enable *antiprivado*_
โโข๐ _${usedPrefix}disable *antiprivado*_
โโข๐ _${usedPrefix}msg *<texto>*_
โโข๐ _${usedPrefix}banchat_
โโข๐ _${usedPrefix}unbanchat_
โโข๐ _${usedPrefix}banuser *<@tag>*_
โโข๐ _${usedPrefix}unbanuser *<@tag>*_
โโข๐ _${usedPrefix}banuser *<@tag>*_
โโข๐ _${usedPrefix}bc *<texto>*_
โโข๐ _${usedPrefix}bcchats *<texto>*_
โโข๐ _${usedPrefix}bcgc *<texto>*_
โโข๐ _${usedPrefix}cleartpm_
โโข๐ _${usedPrefix}restart_
โโข๐ _${usedPrefix}update_
โโข๐ _${usedPrefix}traba1_ 
โโข๐ _${usedPrefix}addprem *<@tag>*_
โโข๐ _${usedPrefix}delprem *<@tag>*_
โโข๐ _${usedPrefix}listprem_
โโโโโืโืโืโืโโโ
 โโโโโโโโโโโโโโโโโโโโโโโโโ
โBlack-๐๐๐-๐๐ ๐๐ El negro-๐๐๐โ
 โโโโโโโโโโโโโโโโโโโโโโโโโ
`.trim()
let buttons = [
{ buttonId: '#grupos', buttonText: { displayText: '๐ฐ ๐ถ๐๐๐ฟ๐พ๐ ๐ฐ' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '๐คด ๐พ๐๐ฝ๐ด๐ ๐คด' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '๐ฆ ๐ธ๐ฝ๐ต๐พ๐ฑ๐พ๐ ๐ฆ' }, type: 1 }]
let buttonMessage = {
image: imagen4,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title:'๐ Black-๐๐๐-๐๐ ๐',
body: null,
thumbnail: null,
sourceUrl: `https://github.com/Micasatio/Black_`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[โ๐๐๐๐โ] ๐ด๐ป ๐ผ๐ด๐ฝ๐ ๐๐ธ๐ด๐ฝ๐ด ๐๐ฝ ๐ด๐๐๐พ๐ ๐ ๐ฝ๐พ ๐ต๐๐ด ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด ๐ด๐ฝ๐๐ธ๐ฐ๐๐ป๐พ, ๐๐ด๐ฟ๐พ๐๐๐ด๐ป๐พ ๐ฐ๐ป ๐ฟ๐๐พ๐ฟ๐ธ๐ด๐๐ฐ๐๐ธ๐พ ๐ณ๐ด๐ป ๐ฑ๐พ๐*', m)
}}
handler.command = /^(menucompleto|menu completo|allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
