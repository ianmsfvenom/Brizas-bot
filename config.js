const ownerNumber = ["593962681710@s.whatsapp.net"] 
//solo cambia el número y no tomes el @ s.whatsapp.net
const OriginalOwner = '593962681710' 
// cambia a tu número

var gimagenotregister = false
// cuando no hay ningún comando registrado, el bot busca la imagen de Google

var sgooglenotregister = false
// cuando no hay ningún comando registrado, el bot busca la imagen de Google

const antinewchatmsg = 'El antinewchatmsg está habilitado y usted no es mi propietario, por lo que se bloqueará pronto'
//mensaje antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// enlace directo desde la URL de audio

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensaje antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tiempo de retardo antispamcmd (medido en segundos)

const msgwelcomeimg = (número, nombre de grupo) => {
    return `Bienvenido $ {número} \ n \ nEscribe el menú $ {prefijo} en la lista de comandos`
   
}
//Texto de bienvenida en la imagen cuando la bienvenida está activada
//Nota: no pongas el texto largo para que la imagen no desaparezca

const byemsgimg = const byemsgimg = (número, nombre de grupo) => {
    return `Adiós $ {número}`
    
}
//Texto de bienvenida en la imagen cuando la bienvenida está activada
//Nota: no pongas el texto largo para que la imagen no desaparezca

const menumsgimg = (número, nombre de grupo, batería) => {
    volver `MENÚ BRIZAS-BOT CON 434 COMANDOS, BATERÍA: $ {batería}`
    
}
//Texto de bienvenida en la imagen cuando la bienvenida está activada
//Nota: no pongas el texto largo para que la imagen no desaparezca

const titlemenumsgimg = 'BIENVENIDO'
//Texto de bienvenida en la imagen cuando la bienvenida está activada
//Nota: no pongas el texto largo para que la imagen no desaparezca

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Enlace directo desde la imagen de fondo TAMAÑO RECOMENDADO: 1280x720
//Nota: no pongas el texto largo para que la imagen no desaparezca

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Fondo de pantalla de bienvenida enlace directo TAMAÑO RECOMENDADO: 1280x720
//Nota: no pongas el texto largo para que la imagen no desaparezca

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Fondo de pantalla de bienvenida enlace directo TAMAÑO RECOMENDADO: 1280x720
//Nota: no pongas el texto largo para que la imagen no desaparezca

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// su clave imgbb para activar antiporn y algunos comandos más que necesita para descargar la imagen

const cr = '☄️✨𝑩𝑹⃟𝑰𝒁𝑨𝑺 𝑶⃟𝑹𝑰𝑶𝑵✨☄️\n' 
// texto de símbolo marcado

const prefix = '!,*,.' 
// prefijos

const blockedmsg = '* 😜 Tu número está bloqueado, lo que significa que no te escucho 😜 *'
// mensaje cuando alguien bloqueado solicita un comando

const blockedcmdmsg = '* 🚫Este comando está bloqueado, comuníquese con el propietario del bot para averiguar por qué🚫 *'
// mensaje cuando alguien solicita un comando bloqueado

// MENSAJES DE BAN

const banmsgtype = '* Ejecutar miembro común, la prohibición está cerrada *'
// prohibir el mensaje en tipos anti-mensaje

const adminmsgtype =  '* Eres adm entrado, te prohibiré enviar un tipo de mensaje prohibido *'
// mensaje cuando adm envía tipos de mensajes prohibidos

const banmsgporn =  'Hmmm porno con antiporn habilitado, lo sabes bien ...'
// prohibir mensaje en antiporn

const adminmsgporn = '* Eres administrador, no te prohibiré enviar pornografía *'
// mensaje cuando el administrador envía pornografía con antiporn habilitado

const banmsglink =  'Ejecutar miembro ordinario, la prohibición está cerca ...'
// prohibir mensaje en antienlace

const adminmsglink =  'Este es un enlace de amigo ... oh, eres tú, es adm ent can kkkk 🙃'
// mensaje cuando el administrador envía el enlace

const adminmsgpalavra = 'esto está en la lista de palabras prohibidas por el bot'
// mensaje cuando adm envía una palabra prohibida por el bot

const banmsgpalavra = '¿Palabra prohibida? Ya lo sabes, verdad '
// mensaje de prohibición al enviar una palabra prohibida por el bot

const qnttravahardroleta = 2
// número de cerraduras que gobiernan la ruleta rusa dura
// Nota: el valor se multiplica por 12 ent ten cuidado

// BUENOS DÍAS MENSAJES BUENAS TARDES Y BUENAS NOCHES

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo goimasu, Onii-chan 👉👈'
// enlace y mensaje de buenos días

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, acepta este café ☕`
// enlace y mensaje de buenas tardes

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que hayas tenido un buen día ☺️'
// enlace y mensaje de buenas noches

// ERROR DE MENSAJES

const msgerr =  'Hubo un error, inténtelo de nuevo: /'
// mensaje de error

const notregister = `* Comando no registrado, escriba $ {prefijos} menú para ver la lista de comandos *`

// MENSAGES DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Pareces un cangrejo, un cangrejo aplastado 😡'
const cadebot =  '¿Me llamaste onii-chan 👉👈?'
const botfdp =  'Vete a la mierda chico, acuéstate cuando estés durmiendo'
const botgostoso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor =  'Invité a tu flaca a mi red base, cornudo'
const botcorno =  'Vete a la mierda, jugador de ff, comprador de paquete de pies'
const botputa = 'tu señora madre 😡'
const botgay = 'hablo el homosexual 😡'
const botviado = Manja rola hablado 😡'
const numbotfeio = 'si soy tu copia 🤡'
// LLAVES

// MENSAJES EXCLUSIVOS
let mess = {
    wait:  '⌛ Espera un momento ... ⌛',
    success:  '✔️ ¡Éxito! ✔️ ',
    error: {
        stick: '❌ Falló, hubo un error al convertir la imagen en una pegatina ❌',
        Iv:  '❌ Enlace no válido ❌'
    },
    only: {
        group:  '❌ ¡Este comando solo se puede usar en grupos! ❌ ',
        ownerG: '❌ ¡Este comando solo puede ser utilizado por el grupo propietario! ❌ ',
        ownerB: '❌ ¡Este comando solo puede ser utilizado por el número de propietario! ❌ ',
        admin: '❌ SILENCE COMMON MIEMBRO NO TIENE MORAL PARA USAR ESTE COMANDO ❌',
        Badmin:  '❌ ¡Este comando solo se puede usar cuando el bot se convierte en administrador! ❌ '
    }
}

// CONTACTO DEL CREADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
+ 'END:VCARD'
//vcard del propietario, cambie los números de acuerdo con el formato que
//le concuerda


// No te atrevas a mudarte aquí si no quieres cometer un error
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
