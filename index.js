/*
🚫 AVISO IMPORTANTE! 🚫

Olá! Eu sou o Vitu, criador do Shadow e venho, por meio desta mensagem, informar que a venda e o compartilhamento da Base/Cases do mesmo estão estritamente proibidas.
Esta medida visa garantir que as informações permaneçam confidenciais e utilizadas apenas para fins autorizados. Não gaste dinheiro atoa apenas para vazar o Bot, pois isso é tolice!

Peço a sua colaboração para respeitar esta diretriz e evitar qualquer tipo de infração. Agradeço pela compreensão e respeito ao meu trabalho.
Obs: Se você adquiriu a Base por meio de terceiros, esteja ciente de que você NÃO terá direito à suporte caso ocorra algum problema. Eu sei cada um que comprou comigo, então nem perca o seu tempo!
(¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.->ツ<¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.--.¸¸.·´¯`·.¸¸.·´¯)
ATENCIOSAMENTE: KAYSER/VITU-KJK
*/

//=======(CONSTS AQUI)=============\\

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, prepareWAMessageMedia, proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys');

// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, RSM_FUNC, infoSystem, Youtube, x2, os, arcloud, translate, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, ytdl, sendButton } = require('./exports.js');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { linguagem, inform, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, muted, rg_aluguel, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, anotar, akinator, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, EnvBotao } = require('./exports.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { forwarding, crtt, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6, modoaluguel, autototext, autogpt, site, valor1, valor2, valor3, valor4, valor5, dias1, dias2, dias3, dias4, dias5 } = require("./settings/nescessario.json");

var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, imgtrai, imgfiel } = require("./settings/links_img.json");

var { NomeDoBot, NickDono, prefix, API_KEY_SHADOW, SHADOW_CONSULTAS } = require("./settings/settings.json");

const { configbot } = require("./settings/lib/configurar.js");

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarKAY() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function iniciarVitu() {

module.exports = KAY = async(vitu, folderUserAuth) => {
module.exports = upsert = async(upsert, vitu) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(vitu, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(fs.existsSync(`./database/grupos/activation_gp/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if (fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].x9 && info.messageStubType) {
    switch (info.messageStubType) {
        case 29:  // Promoção para admin
            await delay(1000);
            await vitu.sendMessage(info.key.remoteJid, {
                text: `⚡ _*Opa, parece que @${info.messageStubParameters[0].split("@")[0]} foi promovido(a) à admin do grupo por: @${info.participant.split("@")[0]}⁩*_ ⚡`,
                contextInfo: {
                    mentionedJid: [info.messageStubParameters[0], info.participant], // Passar menções diretamente no contextInfo
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363308605625483@newsletter",
                        newsletterName: "acesse o canal"
                    }
                }
            });
            break;
        case 30:  // Rebaixamento para membro comum
            await delay(1000);
            await vitu.sendMessage(info.key.remoteJid, {
                text: `⚡ _*Opa, parece que @${info.messageStubParameters[0].split("@")[0]} foi rebaixado(a) à membro comum do grupo por: @${info.participant.split("@")[0]}⁩*_ ⚡`,
                contextInfo: {
                    mentionedJid: [info.messageStubParameters[0], info.participant], // Passar menções diretamente no contextInfo
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363308605625483@newsletter",
                        newsletterName: "acesse o canal"
                    }
                }
            });
            break;
    }
}

if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushTestName = info.pushName ? info.pushName : 'Usiário';
if(visualizarmsg) {
await vitu.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

const body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");


//======================================\\

try {var groupMetadata = isGroup ?  await vitu.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await vitu.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender)

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\
const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit || issupre || ischyt

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//=========(funções de Mercado Pago)=============\\

const { payment } = require("./mercado-pago-API/index.js")

const dataMP = JSON.parse(fs.readFileSync(`./settings/mercado pago.json`))

const MercadoPagoKey = dataMP.token

const sendHours = (formato) => {moment.locale("pt")
return moment.tz('America/Sao_Paulo').format(formato)}

//=========(funções de casamento)=============\\

const casamento1 = JSON.parse(fs.readFileSync("./database/func/casamento1.json"))

const casamento2 = JSON.parse(fs.readFileSync("./database/func/casamento2.json"))

//========(Função do Akinator)===========\\

const { Aki } = require('aki-api')
const jogo = { jogador: '', now: true }
const akinatorjson = './armor/games/akinator.json';
const akinator = JSON.parse(fs.readFileSync('./armor/games/akinator.json'));

//========(totext)===========\\
    
const AssemblyAI = require("assemblyai");

//========(Função de aluguel)===========\\

const aluguel = JSON.parse(fs.readFileSync("./database/func/aluguel/aluguel.json"))

const grupos = JSON.parse(fs.readFileSync("./database/func/aluguel/grupos.json"))

const chaves = JSON.parse(fs.readFileSync("./database/func/aluguel/chaves.json"))

const isJsonIncludes = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const alerandom = (nmr) => {
return Math.floor(Math.random()*nmr)
}
//=========(vip de grupo)======\\

const premiumgp = JSON.parse(fs.readFileSync("./settings/media/premiumgp.json"))
const { enviar, sortear } = require('./settings/message.js'); 

//=================> Funções de Grupo 🥋

const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiimg2: false, antivideo2: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, autogpt: false,
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, autototext: false,
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [],  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.numerodono+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isPremium = JSON.stringify(premium).includes(sender) || JSON.stringify(premiumgp).includes(from) || SoDono

//const isPremium = premium.includes(sender) || JSON.stringify(premiumgp).includes(from) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial || isnit || issupre || ischyt

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isVerificado = nescessario.verificado

const isAudioMenu = nescessario.menu_audio

const isAntiPv2 = nescessario.banChats

const isConsole = nescessario.consoleoff

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAntiPv = nescessario.antipv

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isModRent = nescessario.modoaluguel

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//============(FUNÇÕES)============\\

const isModoVip = isGroup ? dataGp[0].modovip : undefined

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiImg2 = isGroup ? dataGp[0].antiimg2 : undefined

const isGptAudio = isGroup ? dataGp[0].autogpt : undefined

const isTotext = isGroup ? dataGp[0].autototext : undefined

const isAntiVid2 = isGroup ? dataGp[0].antivideo2 : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isModoPuxada = isGroup ? dataGp[0].puxadas : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

//const isAntiSpam = isGroup ? dataGp[0].antispam : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

var comandosVP = nescessario.cmd_premium

//=======================================\\

//==========(VERIFICADO)===============\\

if(!isVerificado) {
var vitin = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "557999398421-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `Usuário:` } } }
} else {
var vitin = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

const pushnames = JSON.parse(fs.readFileSync("./database/func/pushnames.json"))

const pushname = JSON.stringify(pushnames).includes(sender) ? pushnames[pushnames.map(i => i.id).indexOf(sender)].nick : pushTestName

const sendName = (nmr) => {

txt = JSON.stringify(pushnames).includes(nmr) ? pushnames[pushnames.map(i => i.id).indexOf(nmr)].nick : "usuário"

  return txt

}

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return


/*const reply = (texto) => {
vitu.sendMessage(from, { text: texto }, {quoted: vitin}).catch(e => {
 reply("Erro..");
})
}
*/

const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return vitu.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

const msgSemQuoted = (content, type, options = {}) => {
const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return vitu.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
vitu.sendMessage(from, {sticker: {url: fileName}}, {quoted: vitin})
}

const sendImage = (ytb) => {
vitu.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
vitu.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? vitu.sendMessage(from, {text: teks.trim(), mentions: memberr}) : vitu.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
vitu.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
vitu.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
vitu.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
vitu.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await vitu.onWhatsApp(sla)
if(result == undefined) {
reply("*rapaz ele tá sem zap...*")
} else {
reply(`${sla} número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
vitu.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
vitu.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
vitu.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
vitu.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
vitu.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    


try {
    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
    var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;

    if (boij && args.length == 0) {
        // Caso seja uma imagem
        rane = 'bruxo.' + await getExtension(boij.mimetype);
        buffimg = await getFileBuffer(boij, 'image');
        fs.writeFileSync(rane, buffimg);
        const media = rane;
        rano = getRandom('.webp');

        await ffmpeg(media)
            .input(media)
            .on('start', function(cmd) {
                console.log(`Started: ${cmd}`);
            })
            .on('error', function(err) {
                console.log(`Error: ${err}`);
                exec(`webpmux -set exif ${addMetadata('Karen-Bot','Sr.LC')} ${rano} -o ${rano}`, async (error) => {
                    fs.unlinkSync(media);
                });
            });

        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
            fs.unlinkSync(media);
            buffer = fs.readFileSync(rano);
            vitu.sendMessage(from, {
                sticker: buffer
            }, {
                quoted: info
            });
            fs.unlinkSync(rano);
        });
    } else if (boij2 && args.length == 0 && boij2.seconds < 11) {
        // Caso seja um vídeo com menos de 11 segundos
        rane = 'bruxo.' + await getExtension(boij2.mimetype);
        buffimg = await getFileBuffer(boij2, 'video');
        fs.writeFileSync(rane, buffimg);
        const media = rane;
        rano = getRandom('.webp');

        await ffmpeg(media)
            .inputFormat(media.split('.')[1])
            .on('start', function(cmd) {
                console.log(`Started: ${cmd}`);
            })
            .on('error', function(err) {
                console.log(`Error: ${err}`);
                exec(`webpmux -set exif ${addMetadata('Karen-Bot', 'Sr.LC')} ${rano} -o ${rano}`, async (error) => {
                    fs.unlinkSync(media);
                    tipe = media.endsWith('.mp4') ? 'video' : 'gif';
                   
                });
            });

        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
            fs.unlinkSync(media);
            buffer = fs.readFileSync(rano);
            vitu.sendMessage(from, {
                sticker: buffer
            }, {
                quoted: info
            });
            fs.unlinkSync(rano);
        });
    }
} catch (e) {
    reply('Ocorreu um erro');
    console.log(e);
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}


var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
vitu.sendMessage(from, {text: `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde o Horário: ${tabelin.Ausente_Desde}\n\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`}, {quoted: vitin})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(`*Registro de Ausência* - O adminstrador "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n\n☇ Mensagem: ${blak.msg}`)
}

if(isBotGroupAdmins && isGroupAdmins && budy2.toLowerCase() === "apaga" || budy2.toLowerCase() === "Apaga")
{
if(!menc_prt) return
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(!isPremium && isGroup && !isGroupAdmins && isCmd && isModoVip && !SoDono) return reply(`*${tempo} ${pushname}, o Modo-Vip está ativado neste grupo. Ou seja: Apenas usuários Vips tem a permissão de utilizar os meus comandos.*\n\n*Se você deseja adquirir o Vip, basta entrar em contato com o meu proprietário. Número dele: wa.me/${nmrdn}*`.replace("@s.whatsapp.net", ""))

if(!isPremium && !SoDono && comandosVP.includes(command)) return reply(enviar.msg.premium)
    
//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return


let isCmdKey = Array('alugarbot', 'loja', 'dono', 'criador').some(item => item === command)//esses são os comandos que irão funcionar mesmo com o grupo bloqueado
if(isGroup && isCmd && isModRent && !SoDono && !isCmdKey) {
  if(!JSON.stringify(grupos).includes("shadowcu")) {
    grupos.push({id: "shadowcu", gps: []})
    fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
  }
  if(!JSON.stringify(grupos).includes(from)) {
    grupos.push({id: from, limite: 5, validado: false})
    fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
  }
  AB = grupos.map(i => i.id).indexOf(from)
  if(grupos[AB].validado == false) {
    if(grupos[AB].limite <= 1) {
      grupos.splice(AB, 1)
      fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      reply(`Parece que ninguém se interessou em adquirir uma Key... Sendo assim, eu irei sair do grupo! Caso mudem de ideia, basta chamar o meu dono._\n\nLink para adquirir a Key: https://wa.me/${nmrdn.split('@')[0]}?text=Ol%C3%A1,%20gostaria%20de%20alugar%20o%20Shadow%20Bot`)
      await sleep(3000)
      return vitu.groupLeave(from)
    } else {
      grupos[AB].limite -= 1
      fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      return reply(`_Boa noite, *${pushname}.* Parece que o grupo *"${groupName}"* ainda não foi registrado..._\n_Caso queira *Alugar,* será necessário o uso de uma *Chave De Acesso* para ativar os comandos._\n\n_Caso já tenha uma, basta reenvia-la aqui *Neste Grupo* e, caso não tenha, digite o comando_\n_*${prefix}alugarbot* para adquirir uma._`)
    }
  }
}


//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
vitu.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: vitin}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('Comando bloqueado.')

////FIMMMMMMMMMMMMMM/////

const { color, bgcolor } = require('./armor/js/color')

const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'

 if (!isGroup && isCmd) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(NomeDoBot, 'cyan'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','yellow'),color(budy, 'cyan'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'cyan'),'\n',
color('⪼ DAТA:','yellow'),color(date,'cyan'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(NomeDoBot, 'cyan'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','yellow'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'cyan'),'\n',
color('⪼ DATA:','yellow'),color(date,'cyan'),'\n')

if (isCmd && isGroup) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(NomeDoBot, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'cyan'),'\n',
color('⪼ COMANDO:','yellow'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'cyan'),'\n',
color('⪼ DATA:','yellow'),color(date,'cyan'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(NomeDoBot, 'cyan'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'cyan'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'cyan'),'\n',
color('⪼ MENSAGEM:','yellow'),color(budy,'cyan'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'cyan'),'\n',
color('⪼ DATA:','yellow'),color(date,'cyan'),'\n')
  

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

vitu.sendMessage(from, {text: chatWon}, {quoted: vitin,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
} 
}

// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./armor/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { vitu.sendMessage(from, {text: `*Parabéns ${pushname}. Você acertou! 🥳🥳*\n*Palavra original:* ${dataAnagrama.original}\n*Iniciando o proximo jogo em 5 segundos...*`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./armor/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/games/anagrama/${from}.json`))
vitu.sendMessage(from, {text:`╭━━ ⪩ 「 Descubra a palavra 」
▢ ⌁ ⚠︎ Anagrama: ${dataAnagrama2.embaralhada}
▢ ⌁ ⚠︎ Dica: ${dataAnagrama2.dica}
╰━━━ ⪨
`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./armor/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
vitu.sendMessage(from,{text: `*Parabéns ${pushname}. Você acertou! 🥳🥳*\n*Nome do Animal:* ${dataAnagramaa.original}\n*Iniciando o proximo jogo em 5 segundos...*`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/games/quiz-animais/${from}.json`))
imagemtexto =`╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ Jogador: ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await vitu.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: vitin})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./armor/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./armor/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
vitu.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./armor/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}

❓️ - *não sabe a resposta?* peça ao adm do grupo para usar o comando *${prefix} _revelar_resposta* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await vitu.sendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: vitin})
}, 5000)
}
}


if(isGroup && fs.existsSync(`./armor/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./armor/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
vitu.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./armor/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:

${dataEnigmadataEnigma333.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await vitu.sendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: vitin})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()
    
if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await vitu.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// BOTÕES
var sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessagse = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
vitu.sendMessage(id, buttonMessagse, {quoted: vr})
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`*Tá falando merda aí, né? Agora vai tomar pra ficar de exemplo 🤨*!`)
setTimeout(async () => {
    vitu.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

/*
if (isCmd) {
if (isFiltered(sender)) {
if(!SoDono && !isPremium)
return reply(`_*Para evitar Spam, você deve aguardar ~15 Segundos~ para executar um comando novamente. Ou você pode adquirir o ~Vip~ e ignorar o tempo de espera.*_`)
} else {
addFilter(sender)
}
}
*/
 const VerificarJSON = (json, user) => {
JSON.stringify(json).includes(user)
}
    
//========(CONTADOR-DE-MENSAGENS)========\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return vitu.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return vitu.sendMessage(from, {text: bang}, {quoted: vitin})
}

vitu.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//==========================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
vitu.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-IMAGEM 2)========\\
if(isAntiImg2 && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
vitu.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
vitu.sendMessage(from, {text: `Mensagem proibida detectada, banindo o infrator...`}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
vitu.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play', 'play_audio', 'play_video', 'playmix', 'play2', 'play3').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await vitu.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}
{
reply(`*❗] Link detectado, irei te remover do grupo*`)
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return vitu.sendMessage(from,{text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
vitu.sendMessage(from, {text: `Mensagem proibida detectada, banindo o infrator...`}, {quoted: info})
} else {
vitu.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Mensagem proibida detectada, porém é admin logo a punição será anulada.`}, {quoted: info})
vitu.sendMessage(from, {text: `Mensagem proibida detectada, banindo o infrator...`}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}

//=========(ANTI-PV-QUE-BLOQUEIA)==========\\
if (isAntiPv && !['responder_1', 'responder_2', 'responder_3', 'alugarbot', 'menu', 'akinator_sim', 'akinator_nao', 'akinator_naosei', 'akinator_prov_s', 'akinator_prov_n', 'akinator_final_sim', 'akinator_final_nao', 'menuvip', 'menuporno', 'menulogos', 'games', 'menuadm', 'alteradores', 'efeitos', 'menudono', 'pesquisas', 'downloads', 'menusticker', 'criador', 'dono', 'menu-diverso', 'ping', 'play-bt', 'playvid-bt', 'loja', 'alugarbot'].includes(command)) {
    if (!isGroup && !SoDono && !isnit && !isPremium) {
        await sleep(2500);
        msgpvblock = `./database/func/pv-msg_block-${sender}.json`;
        fs.writeFileSync(msgpvblock, JSON.stringify(
            `Olá, o *Anti Pv* está ativo no momento, ou seja: Estou recebendo as ordens de bloquear os usuários que mandam mensagem no meu privado. Qualquer dúvida, entre em contato com o meu criador, número dele: wa.me/${nmrdn}`.replace("@s.whatsapp.net", "")
        ), null, 2);
        msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock));
        reply(msgmsglbl);
        DLT_FL(msgpvblock);
        setTimeout(async () => {
            await vitu.updateBlockStatus(sender, 'block');
        }, 2000);
        return;
    }
}
    
//========(ANTI_LIGAR)========\\
if(!isGroup && isAnticall) {
vitu.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(`Olá! O Anti-Ligar está ativo no momento, ou seja, estou recebendo as ordens de bloquear aqueles que efetuarem ligações para mim.\n\nQualquer dúvida, contate o meu criador. Número dele: wa.me/${nmrdn}`.replace("@s.whatsapp.net", "")), null, 2)
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
vitu.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
vitu.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}
//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
vitu.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTI-PV2-QUE-SÓ-FALA)==========\\
if (isAntiPv2 && !['responder_1', 'responder_2', 'responder_3', 'alugarbot', 'menu', 'akinator_sim', 'akinator_nao', 'akinator_naosei', 'akinator_prov_s', 'akinator_prov_n', 'akinator_final_sim', 'akinator_final_nao', 'menuvip', 'menuporno', 'menulogos', 'games', 'menuadm', 'alteradores', 'efeitos', 'menudono', 'pesquisas', 'downloads', 'menusticker', 'criador', 'dono', 'menu-diverso', 'ping', 'play-bt', 'playvid-bt', 'loja', 'alugarbot'].includes(command)) {
    // Se o comando não for um dos específicos, aplicar a lógica do AntiPV2 normalmente.
    if (!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt) {
        reply(`Olá! Eu sou um *BOT PROGRAMADO* para realizar ações feitas por *Administradores de Grupos* entre outras coisas.\n\nSinto em te dizer mas, eu *NÃO* estou liberado para ser usado no *PV*. Para saber mais, contate o meu criador! Número dele: wa.me/${nmrdn}`.replace("@s.whatsapp.net", ""));
        return;
    }
}

//======================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)
var idusu = numbersIds?.indexOf(sender)
if(isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {
try {
var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
} catch {
var qnt_msg = 0  
}
}
    
if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
vitu.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
vitu.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isBanned) return BannedExpired(ban)

var palavrasfr = JSON.parse(fs.readFileSync("./database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

let numberOfRemovals = 2;
let counter = 0;

   
const Spotify = require('spotify-finder');
const SpotifyDL = require('spotifydl-core').default;

//Tokens do Spotify
const client = new Spotify({
	consumer: {
		key: '271f6e790fb943cdb34679a4adcc34cc', // chave do consumidor (consumer key)
		secret: 'c009525564304209b7d8b705c28fd294', // segredo do consumidor (consumer secret)
	},
});

const cliente = new SpotifyDL({
	clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
	clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
});

// Fim dos Tokens

const spotifydl = (url) =>
	new Promise(async (resolve, reject) => {
		try {
			let result = {};
			result = await cliente.getTrack(url);
			result.mp3 = (await cliente.downloadTrack(url)).toString('base64');
			resolve(result);
		} catch (e) {
			reject(e);
		}
	});

async function spotify(query) {
	const dataSptf = await client.search({
		q: query,
		type: 'track',
		limit: 1,
	});

	const track = dataSptf.tracks.items[0];
	const artists = track.artists.map((artist) => ({
		name: artist.name,
		url: artist.external_urls.spotify,
	}));

	return {
		name: track.name,
		album: track.album.name,
		artist: artists,
		release_date: track.album.release_date,
		popularity: track.popularity,
		track: track.external_urls.spotify,
		thumbnail: track.album.images[0].url,
	};
}
    
//========(função do Akinator)=========\\
if (akinator && Array.isArray(akinator) && akinator.length > 0 && JSON.stringify(akinator).includes(from)) {
 const AB = akinator.findIndex(i => i.id === from && i.jogador === sender);
 if (AB !== -1) {
 const currentAkinator = akinator[AB];
 if (currentAkinator.termino > 0) {
 if (["sim", "s", "provavelmente sim", "provavelmente s"].includes(budy.toLowerCase())) {
 akinator.splice(AB, 1);
 fs.writeFileSync(akinatorjson, JSON.stringify(akinator, null, 2));
 reply('*_Sabia kkk, eu sou muito foda mlk_* 😎');
 } else if (["nao", "n", "provavelmente nao", "provavelmente n"].includes(budy.toLowerCase().replace("ã", "a"))) {
 akinator.splice(AB, 1);
 fs.writeFileSync(akinatorjson, JSON.stringify(akinator, null, 2));
 reply('🧙‍♂️ *_Putz... não consegui acertar agora mais na próxima eu acerto Ok!_*');}
 } else {
 if (aki.guess !== undefined) {
 console.log('Akinator guess:', aki.guess);
 const result = aki.guess;
 currentAkinator.termino += 1;
 fs.writeFileSync(akinatorjson, JSON.stringify(akinator, null, 2));
 await vitu.sendMessage(from, {image: {url: result.photo }, caption: `👤 *NOME:* ${result.name_proposition}\n*DESCRIÇÃO:* ${result.description_proposition}\n\n🧙🏼‍♂️ Hmm, acho que o seu personagem é esse aqui, Acertei ?\n*responda com "sim" ou "não"*\n_(sem as aspas)_`}, {quoted: info});
} else {
const percentage = Math.min(aki.progress, 100);
const filledSize = Math.min(Math.floor((percentage / 100) * 10), 10);
const progressBar = `[${"█".repeat(filledSize).padEnd(10, "░")}]`;
const per = `*${percentage.toFixed(1)}% - ${progressBar}*`;
const currentAkinator = akinator.find(i => i.id === from && i.jogador === sender);
if (currentAkinator && currentAkinator.termino <= 0 && Number(currentAkinator.dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) {
if (["sim", "s", "nao", "n", "nao sei", "n sei", "provavelmente", "provavelmente sim", "provavelmente s", "provavelmente nao", "provavelmente n"].includes(budy.toLowerCase().replace("ã", "a"))) {
if (["sim", "s"].includes(budy.toLowerCase())) {
await aki.step("0");
} else if (["nao", "n"].includes(budy.toLowerCase().replace("ã", "a"))) {
await aki.step("1");
} else if (["nao sei", "n sei"].includes(budy.toLowerCase().replace("ã", "a"))) {
await aki.step("2");
} else if (["provavelmente", "provavelmente sim", "provavelmente s"].includes(budy.toLowerCase())) {
await aki.step("3");
 } else if (["provavelmente nao", "provavelmente n"].includes(budy.toLowerCase().replace("ã", "a"))) {
await aki.step("4");
}
reply(`ㅤㅤㅤㅤ🔮 *_AKINATOR_* 🔮

🧙‍♂️ Pergunta *#${aki.currentStep + 1}:* ${aki.question}

*ᴘʀᴏɢʀᴇssᴏ:*
${per}`);}}}}}}
    
//========(função de editar a mensagem das consultas By: Vitukjk)=========\\
async function puxadasFds() {
vituPuxadas = await fetchJson(`http://node-br1.starhosting.com.br:22539/premium/consultas?type=${command}&query=${q}&apitoken=`+SHADOW_CONSULTAS)
var vitukjk = [
`*Puxando dados, aguarde*`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`*Puxando dados, aguarde*\n‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ㅤ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎🎲....🚣‍♂️`,
`${vituPuxadas.resultado}\n\n*BY: ${NomeDoBot}*\n*${NickDono} DOMINA*`
]
const EmojiPuxada = ["🔍"];
for (const emoji of EmojiPuxada) {
await vitu.sendMessage(from, {react: {text: emoji, key: info.key}});
let { key } = await vitu.sendMessage(from, {text: `*Puxando dados, aguarde*`})
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], edit: key});
}
const EmojiVrfPuxada = ["✅"];
for (const emoji of EmojiVrfPuxada) {
await vitu.sendMessage(from, {react: {text: emoji, key: info.key}});
}
}

//=======(Função de editar a mensagem com comando shadow sem prefixo By: Vitukjk)============\\
async function shadowMsg() {
const { openai } = require('betabotz-tools');
const traduzirgpt1 = require('translate-google');
const results1 = await openai(q);
if (results1 && results1.result) {
const respostaIngles1 = results1.result;
const respostaPortugues1 = await traduzirgpt1(respostaIngles1, { to: 'pt' });
//reply(respostaPortugues1)
var vitukjk = [
`*Shadow Bot está digitando..*`,
`*Shadow Bot está digitando...*`,
`*Shadow Bot está digitando.*`,
`*Shadow Bot está digitando..*`,
`*Shadow Bot está digitando...*`,
`*Shadow Bot está digitando.*`,
`*Shadow Bot está digitando..*`,
`*Shadow Bot está digitando...*`,
`${respostaPortugues1}`.replace("BetaBotz-Ai", "Shadow Bot")
]
let { key } = await vitu.sendMessage(from, {text: `*Shadow Bot está digitando.*`, mentions: [sender_ou_n]}, {quoted: info})
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], edit: key});
}
}

    
const sendTimeDay = (nmr) => {
  if(Number(nmr) > 1) {
    return `${Number(nmr)} dias`
  } else {
    hh = Number(moment.tz('America/Sao_Paulo').format('HH'))
    mm = Number(moment.tz('America/Sao_Paulo').format('mm'))
    ss = Number(moment.tz('America/Sao_Paulo').format('ss'))
    txt = `${ss} segundo${ss < 59 ? 's' : ''}`
    if(mm < 59) txt = `${60 - mm} minutos`
    if(hh < 23) txt = `${24 - hh} horas`
    return txt
  }
}

const sendTimeCort = (nmr) => {
  if(Number(nmr) > 1) {
    return `${Number(nmr)} horas`
  } else {
    hh = Number(nmr)
    mm = Number(moment.tz('America/Sao_Paulo').format('mm'))
    ss = Number(moment.tz('America/Sao_Paulo').format('ss'))
    txt = `${60 - ss} segundo${ss < 59 ? 's' : ''}`
    if(mm < 59) txt = `${60 - mm} minutos`
    return txt
  }
}
    
//=====(função grupo vip)======\\
async function vipTime() {
  if(premium.length > 0) {
    for( y of premium ) {
      if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
        y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./settings/media/premium.json", JSON.stringify(premium))
        if(y.infinito == false) {
          if(y.dias > 1) {
            y.dias -= 1
            fs.writeFileSync("./settings/media/premium.json", JSON.stringify(premium))
          } else {
            AB = premium.map(b => b.id).indexOf(y.id)
            premium.splice(AB, 1)
            fs.writeFileSync("./settings/media/premium.json", JSON.stringify(premium))
          }
        }
      }
    }
  }
}

vipTime();
    
//=====(função grupo vip)======\\
async function vipGpTime() {

  if(premiumgp.length > 0) {

    for( y of premiumgp ) {

      if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {

        y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))

        fs.writeFileSync("./settings/media/premiumgp.json", JSON.stringify(premiumgp))

        if(y.infinito == false) {

          if(y.dias > 1) {

            y.dias -= 1

            fs.writeFileSync("./settings/media/premiumgp.json", JSON.stringify(premiumgp))

          } else {

            vitu.sendMessage(y.id, {text: `O tempo VIP deste grupo terminou... Caso ainda se vejam interessados, favor contactar meu dono 🥸`})

            AB = premiumgp.map(b => b.id).indexOf(y.id)

            premiumgp.splice(AB, 1)

            fs.writeFileSync("./settings/media/premiumgp.json", JSON.stringify(premiumgp))

          }

        }

      }

    }

  }

}

vipGpTime();    

// Função para enviar mensagens
async function sendMessage(chatId, text) {
    // Lógica de envio de mensagem pelo seu bot
    console.log(`Mensagem para ${chatId}: ${text}`);
}

    
// CONST PROS COMANDOS POR FIGURINHAS \\
    
const vitinhufds = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""
const contextInfo = info.message?.extendedTextMessage?.contextInfo 
|| info.message?.buttonsResponseMessage?.contextInfo
|| info.message?.imageMessage?.contextInfo
|| info.message?.videoMessage?.contextInfo
|| info.message?.documentMessage?.contextInfo
|| info.message?.stickerMessage?.contextInfo;

// INICIO DAS CASES / COMANDOS POR FIGURINHA --- DEIXE ACIMA DO >SWITCH(COMMAND) {< E NÃO APAGUE O MESMO, NÃO SEJA ANIMAL \\ 

switch(vitinhufds){ // as cases vão abaixo dessa merda aqui blz?
   
case '194,95,13,163,19,87,55,60,232,68,230,32,172,107,177,210,91,61,8,27,218,109,60,21,219,134,168,172,98,199,44,156':
        if (!isBotGroupAdmins) {
            return
        }
        if (!isGroupAdmins) {
            return
        }
        if (!contextInfo?.stanzaId) {
            return
        }
            reply("⚡ *_Usuário rebaixado com sucesso_* ⚡");
        vitu.groupParticipantsUpdate(from, [contextInfo.participant], "demote");  
break
        
case '208,43,183,51,231,177,173,186,61,95,122,250,45,197,148,24,100,135,238,188,194,47,223,186,189,30,147,211,201,39,124,205':
        if (!isBotGroupAdmins) {
            return
        }
        if (!isGroupAdmins) {
            return
        }
        if (!contextInfo?.stanzaId) {
            return
        }
            reply("⚡ *_Usuário promovido com sucesso_* ⚡");
        vitu.groupParticipantsUpdate(from, [contextInfo.participant], "promote");  
break
 
case '178,140,83,125,160,176,242,130,240,226,33,100,149,91,133,19,154,97,211,113,59,61,27,130,75,165,71,99,72,98,180,207':
        if (!isBotGroupAdmins) {
            return
        }
        if (!isGroupAdmins) {
            return
        }
        if (!contextInfo?.stanzaId) {
            return
        }
       vitu.sendMessage(from, {
            delete: {
                remoteJid: from, 
                fromMe: false, 
                id: contextInfo.stanzaId, 
                participant: contextInfo.participant 
            }
        }).then(() => {
            reply("⚡ *_Usuário banido com sucesso_* ⚡");
        }).catch(err => {
            console.log("Erro ao apagar a mensagem:", err);
        });
        vitu.groupParticipantsUpdate(from, [contextInfo.participant], "remove");  
break
        
case '158,12,71,49,185,229,105,16,185,202,81,222,117,135,37,20,1,93,81,212,176,105,0,93,190,171,74,255,221,126,18,223': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`*Grupo fechado pelo adm ${pushname}, acabou a baderna* ⚠️`)
vitu.groupSettingUpdate(from, 'announcement')
break
        
case '54,93,231,15,16,36,116,25,169,152,115,109,7,237,130,138,103,152,75,194,250,112,210,145,109,93,112,23,45,173,22,97': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`*Grupo aberto pelo adm ${pushname}, agora todos podem falar ✅*`)
vitu.groupSettingUpdate(from, 'not_announcement')
break
        
case '150,59,83,133,248,120,250,186,186,61,94,79,187,47,199,105,218,142,231,189,48,206,251,206,102,84,8,197,209,194,85,218':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n💬 *Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break
  
        
} // DEIXA ESSA CHAVE SEMPRE ABAIXO DO BREAK DA ULTIMA CASE, NÃO SEJA IDIOTA DE BOTAR A CASE ABAIXO DELA PQ VAI DAR ERRO
    
    
// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){

case 'valor1':
if (args.length < 1) return reply("Por favor, insira o valor e os dias no formato: !valor1 <preço>/<dias>");
if (!SoDono && !isnit && !issupre && !ischyt) {
return reply(enviar.msg.donosmt);
}
const [preco1, dias1] = q.trim().split("/");
if (!preco1 || !dias1) {
return reply("Erro: Ambos o preço e a duração em dias devem ser fornecidos no formato: !valor1 <preço>/<dias>");
}
nescessario.valor1 = {
preco: parseFloat(preco1).toFixed(2),
dias: parseInt(dias1)
};
valor1 = nescessario.valor1;
setNes(nescessario);
reply(`Primeiro valor do Aluguel alterado para: R$ ${nescessario.valor1.preco}, Duração: ${nescessario.valor1.dias} dias`);
break;

case 'valor2':
if (args.length < 1) return reply("Por favor, insira o valor e os dias no formato: !valor2 <preço>/<dias>");
if (!SoDono && !isnit && !issupre && !ischyt) {
return reply(enviar.msg.donosmt);
}
const [preco2, dias2] = q.trim().split("/");
if (!preco2 || !dias2) {
return reply("Erro: Ambos o preço e a duração em dias devem ser fornecidos no formato: !valor2 <preço>/<dias>");
}
nescessario.valor2 = {
preco: parseFloat(preco2).toFixed(2),
dias: parseInt(dias2)
};
valor2 = nescessario.valor2;
setNes(nescessario);
reply(`Segundo valor do Aluguel alterado para: R$ ${nescessario.valor2.preco}, Duração: ${nescessario.valor2.dias} dias`);
break;

case 'valor3':
if (args.length < 1) return reply("Por favor, insira o valor e os dias no formato: !valor3 <preço>/<dias>");
if (!SoDono && !isnit && !issupre && !ischyt) {
return reply(enviar.msg.donosmt);
}
const [preco3, dias3] = q.trim().split("/");
if (!preco3 || !dias3) {
return reply("Erro: Ambos o preço e a duração em dias devem ser fornecidos no formato: !valor3 <preço>/<dias>");
}
nescessario.valor3 = {
preco: parseFloat(preco3).toFixed(2),
dias: parseInt(dias3)
};
valor3 = nescessario.valor3;
setNes(nescessario);
reply(`Terceiro valor do Aluguel alterado para: R$ ${nescessario.valor3.preco}, Duração: ${nescessario.valor3.dias} dias`);
break;

case 'valor4':
if (args.length < 1) return reply("Por favor, insira o valor e os dias no formato: !valor4 <preço>/<dias>");
if (!SoDono && !isnit && !issupre && !ischyt) {
return reply(enviar.msg.donosmt);
}
const [preco4, dias4] = q.trim().split("/");
if (!preco4 || !dias4) {
return reply("Erro: Ambos o preço e a duração em dias devem ser fornecidos no formato: !valor4 <preço>/<dias>");
}
nescessario.valor4 = {
preco: parseFloat(preco4).toFixed(2),
dias: parseInt(dias4)
};
valor4 = nescessario.valor4;
setNes(nescessario);
reply(`Quarto valor do Aluguel alterado para: R$ ${nescessario.valor4.preco}, Duração: ${nescessario.valor4.dias} dias`);
break;

case 'valor5':
if (args.length < 1) return reply("Por favor, insira o valor e os dias no formato: !valor5 <preço>/<dias>");
if (!SoDono && !isnit && !issupre && !ischyt) {
return reply(enviar.msg.donosmt);
}
const [preco5, dias5] = q.trim().split("/");
if (!preco5 || !dias5) {
return reply("Erro: Ambos o preço e a duração em dias devem ser fornecidos no formato: !valor5 <preço>/<dias>");
}
nescessario.valor5 = {
preco: parseFloat(preco5).toFixed(2),
dias: parseInt(dias5)
};
valor5 = nescessario.valor5;
setNes(nescessario);
reply(`Quinto valor do Aluguel alterado para: R$ ${nescessario.valor5.preco}, Duração: ${nescessario.valor5.dias} dias`);
break;

        
case 'linksite':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.site = q.trim()
site = nescessario.site
setNes(nescessario)
reply(`Link do Site alterado para: ${q}`)
break
       
case 'menu':
    const cellVerif = `${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iOS' : 'WhatsWeb'}`;
    dataFds = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
    horaFds = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    if (cellVerif === 'Android') {
        const menuIMG = {
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: vitu.waUploadToServer })),
                hasMediaAttachment: true,
                title: `*"A força não provém da capacidade física. Provém de uma vontade indomável."* - _Mahatma Gandhi_\n------------------------------------------------\nᬊ͜͡⚡𝐃𝐀𝐓𝐀: _${dataFds}_\nᬊ͜͡⚡𝐇𝐎𝐑𝐀: _${horaFds}_\nᬊ͜͡⚡𝐍𝐈𝐂𝐊: _${pushname}_\nᬊ͜͡⚡𝐁𝐎𝐓: _${NomeDoBot}_\nᬊ͜͡⚡𝐃𝐎𝐍𝐎: _${NickDono}_`
            }),
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝙰𝚋𝚛𝚒𝚛 𝙻𝚒𝚜𝚝𝚊",
                            sections: [
                                {
                                    title: `𝐵𝑒𝑚-𝒱𝑖𝑛𝑑𝑜(𝑎) 𝑎 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠`,
                                    rows: [
                                        { title: `ᬊ͜͡⚡𝐈𝐍𝐅𝐎𝐒 𝐃𝐎 𝐂𝐑𝐈𝐀𝐃𝐎𝐑`, description: `${NomeDoBot}`, id: `${prefix}criador` },
                                        { title: `ᬊ͜͡⚡𝐈𝐍𝐅𝐎𝐒 𝐃𝐎 𝐃𝐎𝐍𝐎`, description: `${NomeDoBot}`, id: `${prefix}dono` }
                                    ]
                                },
                                {
                                    title: `𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝐷𝑖𝑣𝑒𝑟𝑠𝑜𝑠`,
                                    rows: [
                                        { title: `ᬊ͜͡⚡𝐃𝐈𝐕𝐄𝐑𝐒𝐈𝐃𝐀𝐃𝐄𝐒`, description: `${NomeDoBot}`, id: `${prefix}menu-diverso` },
                                        { title: `ᬊ͜͡⚡𝐏𝐈𝐍𝐆 𝐃𝐎 𝐁𝐎𝐓`, description: `${NomeDoBot}`, id: `${prefix}ping` }
                                    ]
                                },
                                {
                                    title: `𝑀𝑒𝑛𝑢𝑠 𝑑𝑜 𝐵𝑜𝑡`,
                                    rows: [
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐕𝐈𝐏`, description: `${NomeDoBot}`, id: `${prefix}menuvip` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐏𝐎𝐑𝐍𝐎`, description: `${NomeDoBot}`, id: `${prefix}menuporno` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒`, description: `${NomeDoBot}`, id: `${prefix}menulogos` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐆𝐀𝐌𝐄𝐒`, description: `${NomeDoBot}`, id: `${prefix}games` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐀𝐃𝐌`, description: `${NomeDoBot}`, id: `${prefix}menuadm` },
                                        { title: `ᬊ͜͡⚡𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒`, description: `${NomeDoBot}`, id: `${prefix}alteradores` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐄𝐅𝐄𝐈𝐓𝐎𝐒`, description: `${NomeDoBot}`, id: `${prefix}efeitos` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎`, description: `${NomeDoBot}`, id: `${prefix}menudono` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒`, description: `${NomeDoBot}`, id: `${prefix}pesquisas` },
                                        { title: `ᬊ͜͡⚡𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒`, description: `${NomeDoBot}`, id: `${prefix}downloads` },
                                        { title: `ᬊ͜͡⚡𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒`, description: `${NomeDoBot}`, id: `${prefix}menusticker` }
                                        
                                    ]
                                },
                            ]
                        })
                    }
                ],
                messageParamsJson: ""
            }
        };
        let shadow_buttons = generateWAMessageFromContent(from, {
            interactiveMessage: {
                contextInfo: {
                    participant: sender,
                    mentionedJid: [sender, "5521971983758@s.whatsapp.net"],
                    quotedMessage: info.message
                },
                carouselMessage: {
                    cards: [menuIMG],
                    messageVersion: 1,
                }
            }
        }, {});
        vitu.sendMessage(from, {text: `*${tempo}, @${sender.split('@')[0]}.*\n*Estou enviando a lista de comandos no seu privado...*`, contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363308605625483@newsletter",
                        newsletterName: "acesse o canal"
                    }
                    }
                })
        await vitu.relayMessage(sender, shadow_buttons.message, { messageId: shadow_buttons.key.id });

    } else if (cellVerif === 'WhatsWeb' || cellVerif === 'iOS') {
        await vitu.sendMessage(from, { text: `⚡ _*${tempo}, ${pushname}. Parece que você está usando o WhatsApp pelo celular iOS ou pelo Computador, estou enviando o menu sem os botões para evitar quaisquer problemas*_ ⚡` }, { quoted: info });
        let menuSemBotao = `
┎┅┅┅┅━═⋅═━━━━═⋅═━┅┅┅┅☾⋆
┖╮⚡𝑺𝒆𝒋𝒂 𝑩𝒆𝒎-𝑽𝒊𝒏𝒅𝒐 (𝒂)!🛸
┇├┉━┅━┅━┅━┅━┅━┅━⋅≎⋆ᐧ
┇ |
┇ |⚡⋆͜͡҈➳ Bot:* ${NomeDoBot}
┇ |⚡⋆͜͡҈➳ *Usuário:* @${sender.split("@")[0]}⁩ 
┇ |
┇╰┉━┅━┅━┅━┅━┅━┅━⋅≎⋆ᐧ
╰┮╼╼╼╼╼╍⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╍╾╾╾╾☾⋆
▹▫◃
┎┶┅┅┅━═⋅═━━━━═⋅═━┅┅┅┅☾⋆
┖╮
╭┤ˑ࣪    ִ .̇  ۫  ̣ ֽ֗🛸 𝐌𝐄𝐍𝐔𝐒 🛸·๋  ִ֗  ᐧ ֶּ֓ ˑ࣪ 
┇├┉━┅━┅━┅━┅━┅━┅━⋅≎⋆ᐧ
┇ |⚡⋆͜͡҈➳ *${prefix}menuvip*
┇ |⚡⋆͜͡҈➳ *${prefix}menuporno*
┇ |⚡⋆͜͡҈➳ *${prefix}menulogos*
┇ |⚡⋆͜͡҈➳ *${prefix}games*
┇ |⚡⋆͜͡҈➳ *${prefix}menuadm*
┇ |⚡⋆͜͡҈➳ *${prefix}alteradores*
┇ |⚡⋆͜͡҈➳ *${prefix}efeitos*
┇ |⚡⋆͜͡҈➳ *${prefix}menudono*
┇ |⚡⋆͜͡҈➳ *${prefix}pesquisas*
┇ |⚡⋆͜͡҈➳ *${prefix}downloads*
┇ |⚡⋆͜͡҈➳ *${prefix}menusticker*
┎┶┅┅┅━═⋅═━━━━═⋅═━┅┅┅┅☾⋆
┖╮
╭┤ˑ࣪    ִ .̇  ۫  ̣ ֽ֗🛸 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒-𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒 🛸·๋  ִ֗  ᐧ ֶּ֓ ˑ࣪ 
┇├┉━┅━┅━┅━┅━┅━┅━⋅≎⋆ᐧ
┇ |⚡⋆͜͡҈➳ *${prefix}totext*
┇ |⚡⋆͜͡҈➳ *${prefix}alugarbot*
┇ |⚡⋆͜͡҈➳ *${prefix}minhaskey*
┇ |⚡⋆͜͡҈➳ *${prefix}suicidio*
┇ |⚡⋆͜͡҈➳ *${prefix}sugestao*
┇ |⚡⋆͜͡҈➳ *${prefix}idiomas*
┇ |⚡⋆͜͡҈➳ *${prefix}bug*
┇ |⚡⋆͜͡҈➳ *${prefix}avaliar*
┇ |⚡⋆͜͡҈➳ *${prefix}ping*
┇ |⚡⋆͜͡҈➳ *${prefix}noticias*
┇ |⚡⋆͜͡҈➳ *${prefix}cnnbrasil*
┇ |⚡⋆͜͡҈➳ *${prefix}globo*
┇ |⚡⋆͜͡҈➳ *${prefix}poder360*
┇ |⚡⋆͜͡҈➳ *${prefix}uol*
┇ |⚡⋆͜͡҈➳ *${prefix}corretor*
┇ |⚡⋆͜͡҈➳ *${prefix}legenda-foto*
┇ |⚡⋆͜͡҈➳ *${prefix}jovempan*
┇ |⚡⋆͜͡҈➳ *${prefix}falar*
┇ |⚡⋆͜͡҈➳ *${prefix}emoji*
┇ |⚡⋆͜͡҈➳ *${prefix}emojimix*
┇ |⚡⋆͜͡҈➳ *${prefix}tagme*
┇ |⚡⋆͜͡҈➳ *${prefix}perfil*
┇ |⚡⋆͜͡҈➳ *${prefix}nick*
┇ |⚡⋆͜͡҈➳ *${prefix}tabela*
┇ |⚡⋆͜͡҈➳ *${prefix}ptvmsg*
┇ |⚡⋆͜͡҈➳ *${prefix}traduzir*
┇ |⚡⋆͜͡҈➳ *${prefix}calcular*
┇ |⚡⋆͜͡҈➳ *${prefix}simi*
┇ |⚡⋆͜͡҈➳ *${prefix}cantadas*
┇ |⚡⋆͜͡҈➳ *${prefix}atividade*
┇ |⚡⋆͜͡҈➳ *${prefix}rankativo*
┇ |⚡⋆͜͡҈➳ *${prefix}checkativo*
┇ |⚡⋆͜͡҈➳ *${prefix}donos*
┇ |⚡⋆͜͡҈➳ *${prefix}dono*
┇ |⚡⋆͜͡҈➳ *${prefix}criador*
┇ |⚡⋆͜͡҈➳ *${prefix}fatos*
┇ |⚡⋆͜͡҈➳ *${prefix}lerfoto*
┇ |⚡⋆͜͡҈➳ *${prefix}correio*
┇ |⚡⋆͜͡҈➳ *${prefix}repetir*
┇ |⚡⋆͜͡҈➳ *${prefix}printsite*
┇ |⚡⋆͜͡҈➳ *${prefix}memes*
┇ |⚡⋆͜͡҈➳ *${prefix}dado*
┇ |⚡⋆͜͡҈➳ *${prefix}contar*
┇╰┉━┅━┅━┅━┅━┅━┅━⋅≎⋆ᐧ
╰╼╼╼╼╼╍⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╍╾╾╾╾☾⋆
`;
await vitu.sendMessage(from, { image: { url: logoslink.logo }, caption: menuSemBotao, mentions: [sender] }, { quoted: info });
}
break;
        
case 'criador':
    let messagea = await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/08d3ed31d74439b75ae76.jpg" } }, { upload: vitu.waUploadToServer });

    const criadorBT = [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "Número",
                url: "https://wa.me/5521971983758",
                merchant_url: "https://wa.me/5521971983758"
            }),
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "Canal",
                url: "https://youtu.be/zaWtqK-xW90?si=buhu9XlxmEkStUIY",
                merchant_url: "https://youtu.be/zaWtqK-xW90?si=buhu9XlxmEkStUIY"
            }),
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "Site",
                url: "https://kayserapis.com",
                merchant_url: "https://kayserapis.com"
            }),
        }
    ];

    const cardImage = {
        header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/08d3ed31d74439b75ae76.jpg" } }, { upload: vitu.waUploadToServer })),
            hasMediaAttachment: true,
            title: `🎲 *Criador OFC: @Vitukjk*\n------------------------------------\n_"Um sábio rei não almeja uma guerra, mas passa a vida inteira se preparando para ela"_ ~ Odin`,
        }),
        nativeFlowMessage: {
            buttons: criadorBT,
            messageParamsJson: "",
        },
    };

    let criador_buttons = generateWAMessageFromContent(from, {
        interactiveMessage: {
            contextInfo: {
                participant: sender,
                quotedMessage: info.message,
            },
            carouselMessage: {
                cards: [cardImage],
                messageVersion: 1,
            }
        }
    }, {});

    await vitu.relayMessage(from, criador_buttons.message, { messageId: criador_buttons.key.id });
break;

 
case 'pinterest':
async function loadPin() {
var vitukjk = [
`*Pesquisando por imagem com o tema: ~_${q}_~*\n《 █▒▒▒▒▒▒▒▒▒▒▒》10%\n*Aguarde um momento...*`,
`*Pesquisando por imagem com o tema: ~_${q}_~*\n《 ████▒▒▒▒▒▒▒▒》30%\n*Aguarde um momento...*`,
`*Pesquisando por imagem com o tema: ~_${q}_~*\n《 ███████▒▒▒▒▒》50%\n*Aguarde um momento...*`,
`*Pesquisando por imagem com o tema: ~_${q}_~*\n《 ██████████▒▒》80%\n*Aguarde um momento...*`,
`*𝙸𝚖𝚊𝚐𝚎𝚖 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚍𝚊 𝚌𝚘𝚖 𝚜𝚞𝚌𝚎𝚜𝚜𝚘* ✅`
];
        let { key } = await vitu.sendMessage(sender, { text: vitukjk[0] });
        for (let i = 1; i < vitukjk.length; i++) {
            await vitu.sendMessage(sender, { text: vitukjk[i], edit: key });
        }
    }
    if (!q) return reply(`Digite o nome da imagem que você quer buscar\nExemplo: ${prefix + command} wallpaper do rick and morty`);
       vitu.sendMessage(from, {text: `*${tempo}, @${sender.split('@')[0]}.*\n*Estou enviando a imagem sobre "${q}" no seu privado...*`, contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363308605625483@newsletter",
                        newsletterName: "acesse o canal"
                    }
                    }
                })
    await loadPin();
    blap = await getBuffer(`${site}/api/pinterest?text=${q}&apikey=`+API_KEY_SHADOW);
    const botoes = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "PRÓXIMO",
                id: `${prefix+command} ${q}`
            })
        }
    ];
    const pinIMG = {
        header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: blap }, { upload: vitu.waUploadToServer })),
            hasMediaAttachment: true,
            title: `_*Pesquisa Pinterest:*_\n╰┈➤ _*~${q.toUpperCase()}~*_\n-ˋˏ✄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
♕ 𝚂𝚎𝚖 𝚏𝚞𝚐𝚒𝚛 𝚍𝚊 𝚐𝚞𝚎𝚛𝚛𝚊, 𝚖𝚊𝚜 𝚚𝚞𝚎𝚛𝚎𝚗𝚍𝚘 𝚙𝚊𝚣.
ツ・・・・・・・・・・・・・ツ\n\n\n-----------------------------------------------\nClique no botão abaixo para escolher outra imagem ↓↓↓↓↓↓↓↓↓↓↓`,
        }),
        nativeFlowMessage: {
            buttons: botoes,
            messageParamsJson: ""
        }
    };

    // Envia a mensagem interativa
    let botaoPin = generateWAMessageFromContent(from, {
        interactiveMessage: {
            contextInfo: {
                participant: sender,
                mentionedJid: [sender, "5521971983758@s.whatsapp.net"],
                quotedMessage: info.message
            },
            carouselMessage: {
                cards: [pinIMG],
                messageVersion: 1
            }
        }
    }, {});
    await vitu.relayMessage(sender, botaoPin.message, { messageId: botaoPin.key.id });
break;
        
case 'loading': //by: vitukjk      
async function loading() {
var vitukjk = [
"ʟ",
"ʟᴏ",
"ʟᴏᴀ",
"ʟᴏᴀᴅ",
"ʟᴏᴀᴅɪ",
"ʟᴏᴀᴅɪɴ",
"ʟᴏᴀᴅɪɴɢ",
"ʟᴏᴀᴅɪɴɢ.",
"ʟᴏᴀᴅɪɴɢ..",
"ʟᴏᴀᴅɪɴɢ...",
"ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒▒▒》30%",
"ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒▒▒》50%",
"ʟᴏᴀᴅɪɴɢ\n《 ██████████▒▒》80%",
"ʟᴏᴀᴅɪɴɢ\n《 ████████████》100%",
"DOWNLOAD COMPLETED ✅"
]

const VituEmojiAguarde = ["⏳"];
// BY: VITUKJK
for (const emoji of VituEmojiAguarde) {
await vitu.sendMessage(from, {react: {text: emoji, key: info.key}});//primeira mensagem
let { key } = await vitu.sendMessage(from, {text: 'Aguarde...'})
await sleep(2000)
    
//aqui é onde esta a magia
const VituEmojiBaixando = ["📶"];
// BY: VITUKJK
for (const emoji of VituEmojiBaixando)
await vitu.sendMessage(from, {react: {text: emoji, key: info.key}});
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], edit: key });
}
await sleep(1000)
    
const VituEmojiVerif = ["✅"];
// BY: VITUKJK
for (const emoji of VituEmojiVerif) {
await vitu.sendMessage(from, {react: {text: emoji, key: info.key}});
}
await sleep(5000)
}
loading()
break    

case "tmgp": 
case "tmgrupo": {
if (!SoDono) return reply(enviar.msg.donosmt)
if (!args.join(" ")) return reply(`Cadê o texto? Eu não posso realizar uma transmissão vazia...`)
const tm = args.join(' ')
let getGroups = await vitu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Realizando A Transmissão Para ${anu.length} Grupos`)
Rin = `https://chat.whatsapp.com/BrpPTyBijucGbc7SveTbjC`
for (let i of anu) {
await delay(1500)
templateButtons = [
{index: 1, urlButton: {displayText: 'Criador', url: Rin}},
{index: 2, urlButton: {displayText: 'Dono', url: Rin}},
]
templateMessago = {
image: {url: `https://telegra.ph/file/12270445a497e5730f534.jpg`,
quoted: info},
caption: tm,
footer: 'transmissão',
}
vitu.sendMessage(i,templateMessago)
}
reply("Transmissão Realizada Sem Erros.")
}
break

case 'antiimg2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg2) return reply('O recurso de anti imagem 2 já está ativado.')
dataGp[0].antiimg2 = true
setGp(dataGp)
reply('✔ Ativou com sucesso o recurso de anti imagem 2 neste grupo, a partir de agora eu irei apagar todas as imagens porém não irei banir o usuário.')
} else if(Number(args[0]) === 0) {
if(!isAntiImg2) return reply('O recurso de anti imagem 2 já está desativado.')
dataGp[0].antiimg2 = false
setGp(dataGp)
reply('✔ Desativou com sucesso o recurso de anti imagem 2 neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break
        
case 'fechargp': case 'abrirgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q.includes("/") && !q.length <= 17) return reply(`Olá, você tem que determinar os 2 tempos pra o bot fechar o grupo e abrir, por exemplo..\n${prefix}fechar-gp 1m/2m\n\nEle fechará o grupo depois de um minuto, e depois abre após 2 minutos....`)
qtext = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("30m", "1800000").replace("1h", "3600000").replace("2h", "7200000").replace("7h", "25200000")
text1 = qtext.split("/")[0]
text2 = qtext.split("/")[1]
var fcgp = {tempo1: text1, tempo2: text2, grupo: from}
if(!fs.existsSync(`./database/func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./database/func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./database/func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./database/func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./database/func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..`)
const tempodttl = JSON.parse(fs.readFileSync(`./database/func/fechar-abrir-gp-${from}.json`)); 
setTimeout(async () => {
reply("Grupo fechado com sucesso no horário progamado..")
await vitu.groupSettingUpdate(from, 'announcement') 
}, `${tempodttl.tempo1}`)
setTimeout(async () => {
reply("Grupo aberto com sucesso no horário programado..")
await vitu.groupSettingUpdate(from, 'not_announcement')
}, `${tempodttl.tempo2}`)
break
                      
case 'addrent': case 'rgrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Apenas números pfvr`)
shadowcu = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await vitu.onWhatsApp(shadowcu.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${shadowcu.split('@')[0]} não é válido no whatsapp`)
}
if(Number(dias) <= 0) return reply(`É necessário ao menos 1 dia de aluguel né`)
if(dias.includes('.')) return reply("Não use números decimais")
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: shadowcu, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`*Grupo adicionado ao aluguel com sucesso* ✅`)
} else {
if(!Number(args[0])) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo...`)
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`+${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo`)
}
break

case 'tirarrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!Number(args[0])) return reply(`Apenas números pfvr`)
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo`)
break

case 'delrent': case 'rmrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Registro desse grupo deletado com sucesso 📍`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Registro desse grupo deletado com sucesso 📍`)
}
break

case 'cortesia24':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(JSON.stringify(aluguel).includes(from)) return reply(`Grupo já registrado`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`💵 Cartão verde validado ✅
24h liberadas neste grupo contando a partir de agora ⏲️`)
break

case 'listrent': case 'lista-aluguel':
if(!SoDono) return reply(enviar.msg.grupo)
if(aluguel.length > 0) {

//salvar o nome dos grupos
var getGroups = await vitu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
shadowcu = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[shadowcu].nome = ingfoo[g].subject
fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}

//enviar o nome dos grupos
txt = `⏤͟͟͞͞ ꦿ𝙻𝚒𝚜𝚝𝚊 𝙳𝚎 𝙶𝚛𝚞𝚙𝚘𝚜 𝙰𝚕𝚞𝚐𝚊𝚍𝚘𝚜 ↴
▧⃯⃟𝚃𝚘𝚝𝚊𝚕〘 ${aluguel.length} 〙
________________________________________\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `『 ${i + 1} 』
⏤͟͟͞͞ ꦿ𝙶𝚛𝚞𝚙𝚘: ${aluguel[i].nome}\n`
if(aluguel[i].cortesia == false) {
txt += `ㅤㅤ⏤͟͟͞͞ ꦿ𝚃𝚎𝚖𝚙𝚘 𝚁𝚎𝚜𝚝𝚊𝚗𝚝𝚎: ${hmm} dia${hmm > 1 ? 's' : ''}
ㅤ⸺͟͞ꪶ𝙲𝚕𝚒𝚎𝚗𝚝𝚎: wa.me/${aluguel[i].cliente.split('@')[0]}
________________________________________\n`
} else {
txt += `🔌 ＣＡＲＴÃＯ ＣＯＲＴＥＳＩＡ 🖲️
________________________________________\n`
}
}
reply(txt)
} else {
reply(`Nenhum grupo adicionado`)
}
break

case 'lastrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(aluguel.length > 0) {
shadowcu = aluguel.map(i => i)
rank = shadowcu.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "```⏤͟͟͞͞ ꦿTop 3 grupos com o aluguel mais próximo de acabar:```\n________________________________________\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `『 ${i + 1} 』
⏤͟͟͞͞ ꦿ𝙶𝚛𝚞𝚙𝚘: ${rank[i].nome}
ㅤㅤ⏤͟͟͞͞ ꦿ𝚃𝚎𝚖𝚙𝚘 𝚁𝚎𝚜𝚝𝚊𝚗𝚝𝚎: ${hmm} dia${hmm > 1 ? 's' : ''}
ㅤ⸺͟͞ꪶ𝙲𝚕𝚒𝚎𝚗𝚝𝚎: wa.me/${rank[i].cliente.split('@')[0]}
________________________________________\n`
}
}
reply(txt)
} else {
reply(`Nenhum grupo adicionado`)
}
break

case 'calendario':
if(!isPremium) return reply(enviar.msg.premium)
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await vitu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:mm')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM')
day = `
 *${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA:* ${date16}
⏰ *HORA:* ${hora16}H
🤖 *BOT:* ${NomeDoBot}
👑 *DONO:* ${NickDono}

📠 _Operando em ${ingfoo.length} grupos_
`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) shadowcu = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) shadowcu = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) shadowcu = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) shadowcu = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) shadowcu = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) shadowcu = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) shadowcu = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) shadowcu = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) shadowcu = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) shadowcu = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) shadowcu = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  vituFds = `\n»⟩ `
  if(aluguel[AB].cortesia == false) {
    vituFds += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`
  } else {
    vituFds += hmm > 1 ? `${hmm} horas` : `Alguns minutos`
  }
  vituFds += ` até o fim do contrato ⟨«`
} else {
  vituFds = ``
}
day += `🔋 *Bateria restante para uso ↴*
-> ${shadowcu} ${vituFds}
`
}
reply(`${day}`)
break

case 'alugarbot': case 'loja': {
    const sendHours = (formato) => {
        moment.locale("pt");
        return moment.tz('America/Sao_Paulo').format(formato);
    };
    const valores = [
        Number(nescessario.valor1.preco),
        Number(nescessario.valor2.preco),
        Number(nescessario.valor3.preco),
        Number(nescessario.valor4.preco),
        Number(nescessario.valor5.preco)
    ];
    const diasVipPorValor = {
        [Number(nescessario.valor1.preco)]: nescessario.valor1.dias,
        [Number(nescessario.valor2.preco)]: nescessario.valor2.dias,
        [Number(nescessario.valor3.preco)]: nescessario.valor3.dias,
        [Number(nescessario.valor4.preco)]: nescessario.valor4.dias,
        [Number(nescessario.valor5.preco)]: nescessario.valor5.dias
    };
    const nmr = parseFloat(q);
    if (!valores.includes(nmr)) {
        moneybot = `*👑 ${tempo}, ${pushname}. 👑*
*Veja abaixo os valores do Aluguel*
╼╼╼╼╼╼╼╼⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╼╼╼╼╼╼╼╼
🪙 _R$${nescessario.valor1.preco} = ${nescessario.valor1.dias} dias_
💵 _R$${nescessario.valor2.preco} = ${nescessario.valor2.dias} dias_
💳 _R$${nescessario.valor3.preco} = ${nescessario.valor3.dias} dias_
💰 _R$${nescessario.valor4.preco} = ${nescessario.valor4.dias} dias_
💎 _R$${nescessario.valor5.preco} = ${nescessario.valor5.dias} dias_
╼╼╼╼╼╼╼╼⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╼╼╼╼╼╼╼╼
*Exemplo: ${prefix+command} 38.90*`;
        return vitu.sendMessage(from, {text: moneybot, contextInfo: {
            externalAdReply: {
                title: `👑⟩ ${NickDono}`,
                body: `🤖⟩ ${NomeDoBot}`,
                thumbnail: await getBuffer(`https://telegra.ph/file/ea8fa55015b65409347d4.jpg`),
                renderLargerThumbnail: true,
                mediaType: 1,
                showAdAttribution: true,
                sourceUrl: `https://whatsapp.com/channel/0029VampJ9I2Jl8G4rWw6l2u`
            }
        }}, {quoted: vitin});
    }
    let pagament = new payment(MercadoPagoKey);
    try {
        let inf = await pagament.create_payment(nmr);
        if (!inf || !inf.copy_paste) {
            console.log(colors.red(`[⚠] Erro ao gerar o pagamento.`));
            return vitu.sendMessage(sender, { text: "Erro ao gerar o pagamento. Tente novamente mais tarde." });
        }
        if (isGroup) reply('Por segurança, irei te enviar os dados no PV...');
        await sleep(1000);
        const pixCopyButton = [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "Copiar Pix",
                id: "copiar_pix",
                copy_code: inf.copy_paste
            })
        }];
        const pixCarousel = {
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: vitu.waUploadToServer })),
                hasMediaAttachment: true,
                title: `*💠 Pix copia e cola:*\n\n_${inf.copy_paste}_`
            }),
            nativeFlowMessage: {
                buttons: pixCopyButton,
                messageParamsJson: ""
            }
        };
        let pixButtons = generateWAMessageFromContent(from, {
            interactiveMessage: {
                contextInfo: { participant: sender },
                carouselMessage: {
                    cards: [pixCarousel],
                    messageVersion: 1,
                }
            }
        }, {});
        vitu.relayMessage(sender, pixButtons.message, { messageId: pixButtons.key.id });
        await sleep(3000);
        vitu.sendMessage(sender, { text: `Você tem 10 minutos para efetuar o pagamento.` });
        let check = await pagament.check_payment();
        while (check.status == 'pending') {
            check = await pagament.check_payment();
        }
        if (check.status == "approved") {
            const diasVip = diasVipPorValor[nmr] || 0;
            const addVip = (numero, dias) => {
                let shadowcu = numero.includes('@') ? numero : numero + "@s.whatsapp.net";
                shadowcu = shadowcu.replace(/[()+\- ]/g, "");
                let dvip = moment.tz('America/Sao_Paulo').format('DD');
                let vipExistente = premium.find(i => i.id === shadowcu);
                if (vipExistente) {
                    vipExistente.dias += dias;
                    fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium, null, 2));
                    return `👑 ${dias} dia${dias > 1 ? "s" : ""} adicionados ao usuário @${shadowcu.split("@")[0]}`;
                } else {
                    premium.push({ id: shadowcu, dias, save: Number(dvip), infinito: false });
                    fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium, null, 2));
                    return `_*👑 @${shadowcu.split("@")[0]} foi adicionado à lista VIP por ${dias} dia${dias > 1 ? "s" : ""}.*_`;
                }
            };
            const mensagemVip = addVip(sender, diasVip);
            vitu.sendMessage(from, { text: mensagemVip, mentions: [sender] }, { quoted: vitin });
            const keyId = `G${diasVip}-`;
            const uniqueCode = `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`;
            const timestamp = `${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}`;
            const generatedKey = `${keyId}${uniqueCode}M${diasVip}H-${timestamp}B`;
            chaves.push({ key: generatedKey, tipo: 1, dias: diasVip, cliente: sender, valor: nmr });
            fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2));
            const keyCopyButton = [{
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Copiar Key",
                    id: "copiar_key",
                    copy_code: generatedKey
                })
            }];
            const keyCarousel = {
                header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: vitu.waUploadToServer })),
                    hasMediaAttachment: true,
                    title: `*✅Key gerada com sucesso✅*\n\n_🔑${generatedKey}_\n\n╼╼╼╼╼╼╼╼⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╼╼╼╼╼╼╼╼\n📆Quantidade: ${diasVip > 0 ? `${diasVip} dia${diasVip > 1 ? 's' : ''}` : `∞ INFINITO`}\n👤Número do cliente: ~${sender.split('@')[0]}~\n╼╼╼╼╼╼╼╼⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╼╼╼╼╼╼╼╼\n*🧠Tutorial:*\n_Clique em "Copiar Key" e me adicione no seu grupo._\n_Logo após, cole a Key no seu grupo e pronto, meus comandos serão liberados para todos do Grupo._`
                }),
                nativeFlowMessage: {
                    buttons: keyCopyButton,
                    messageParamsJson: ""
                }
            };
            let keyButtons = generateWAMessageFromContent(from, {
                interactiveMessage: {
                    contextInfo: { participant: sender },
                    carouselMessage: {
                        cards: [keyCarousel],
                        messageVersion: 1,
                    }
                }
            }, {});
            vitu.relayMessage(sender, keyButtons.message, { messageId: keyButtons.key.id });
        } else {
            reply("Pagamento expirado ヅ");
        }
    } catch (e) {
        console.log(e);
        reply("Sistema instável. Tente mais tarde.");
    }
}
break;    
        
case 'minhaskey':
txt = `*_SUAS KEYs_*`
nmr = 0

for(i of chaves) {
  if(i.cliente == sender) {
    txt += `\n• ${i.key}`
    nmr += 1
  }
}
if(nmr <= 0) return reply(`Você não possui keys, digite *${prefix}alugarbot* para adquirir uma`)
reply(isGroup ? "Te enviei PV" : "Enviando")
sendMess(sender, txt)
break

case 'keys':
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `*_KEYs_*`
caixa = []

for(i of chaves) {
  nmr = i.dias
  txt += `\n\n${"- ".repeat(40)}
• Key: ${i.key}
• Cliente: @${i.cliente.split('@')[0]}
• Validade: ${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}`
  caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Você não possui keys")
reply(isGroup ? "Te enviei PV" : "Enviando")
vitu.sendMessage(sender, {text: txt, mentions: caixa})
break

case 'gerarkeygp':
    if (!SoDono) return reply(enviar.msg.donosmt);
    barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/');
    var [v1, v2] = barra.split('/');
    if (!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
    ${prefix + command} ${nmrdn.split('@')[0]}/30`);
    shadowcu = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const [checkkeygp] = await vitu.onWhatsApp(shadowcu.split('@')[0]);
    if (checkkeygp == undefined) {
        return reply(`O número ${shadowcu.split('@')[0]} não é válido no WhatsApp`);
    }
    nmr = Number(v2) > 0 ? Number(v2) : 0;
    idks = `G${v2}-`;
    idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(shadowcu.slice(2, 8))}`;
    idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`;
    chaves.push({ key: idks, tipo: 1, dias: nmr, cliente: shadowcu, valor: 0 });
    fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2));
    const botões = [
        {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "Copiar Key",
                id: "copiar_key",
                copy_code: idks
            })
        }
    ];
    const keyIMG = {
        header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: vitu.waUploadToServer })),
            hasMediaAttachment: true,
            title: `Chave gerada com sucesso ✅\n\n${idks}\n\n*Descrição:*\n• Quantidade: ${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}\n• Número do cliente: ${shadowcu.split('@')[0]}`
        }),
        nativeFlowMessage: {
            buttons: botões,
            messageParamsJson: ""
        }
    };
    let keyButtons = generateWAMessageFromContent(from, {
        interactiveMessage: {
            contextInfo: {
                participant: sender,
                mentionedJid: [shadowcu],
                quotedMessage: info.message
            },
            carouselMessage: {
                cards: [keyIMG],
                messageVersion: 1,
            }
        }
    }, {});
await vitu.relayMessage(from, keyButtons.message, { messageId: keyButtons.key.id });
break;
     
case 'gerarkeycort':
if(!SoDono) return reply(enviar.msg.donosmt)
reagir(from, "😀")

cort = 24
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Cortesia: 24h`)
break

case 'rmkey':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(chaves).includes("shadowcu")) return reply(`Não há keys registradas`)
if(!q) return reply(`KD a key que vc deseja apagar?`)
if(!JSON.stringify(chaves).includes(q)) return reply("Chave não encontrada ou inexistente...")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`A Key ${q} foi deletada do sistema com sucesso ✅`)
break
        
case 'legenda-foto':
try {
var [txt1, txt2] = q.split("/")
if(!q.includes("/")) return reply(`Ops, parece q você esqueceu algo...\n\nExemplo: ${prefix+command} ${NomeDoBot}/2024`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(`Adicionando a legenda "${q}" na imagem, aguarde...`.replace("/", " "))
vitu.sendMessage(from, {image: {url: `${site}/api/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=`+API_KEY_SHADOW}}, {quoted: vitin}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
return reply('ERROR!!')
}
break
        
case 'resetlink':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await vitu.groupRevokeInvite(from)
reply('LINK DO GRUPO REDEFINIDO')
} catch(e) {
console.log(e)
enviar(`ERRO MAN`)
}
break
        
case 'addvipgp':
reagir(from, "🤑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Coloque a quantidade de dias que será adicionado o VIP aos membros desse grupo
Ex: ${prefix+command} 30`)
dvip = moment.tz('America/Sao_Paulo').format('DD')
if(JSON.stringify(premiumgp).includes(from)) {
AB = premiumgp.map(i => i.id).indexOf(from)
if(premiumgp[AB].infinito == true) return reply(`Não será possível adicionar dias ao VIP deste grupo, pois o mesmo possui o _"INFINITY VIP"_`)
i = Number(args[0])
if(!i) return reply(args[0]+" não é número...")
if(i <= 0) return reply("Retorne um número maior que zero...")

premiumgp[AB].dias += i
fs.writeFileSync('./settings/media/premiumgp.json', JSON.stringify(premiumgp))
reply(`+${i} dia${i > 1 ? "s" : ""} adicionado${i > 1 ? "s" : ""} ao VIP deste grupo 👑`)
} else {
mega = Number(args[0]) > 0 ? false : true
premiumgp.push({id: from, dias: Number(args[0]) > 0 ? Number(args[0]) : 0, save: Number(dvip), infinito: mega})
fs.writeFileSync('./settings/media/premiumgp.json', JSON.stringify(premiumgp))
reply(`O grupo ${groupName} acaba de se tornar VIP ${Number(args[0]) > 0 ? ` por ${Number(args[0])} dia${Number(args[0]) > 1 ? "s" : ""}` : " infinitamente"} 👑`)
}
break
        
case 'delvipgp':
reagir(from, "😑")
if(!SoDono) return reply(enviar.msg.donosmt)
matty = q.length > 5 ? q : from
if(!JSON.stringify(premiumgp).includes(matty)) return reply("*Este grupo não está incluso na lista premium..*")
AB = premiumgp.map(i => i.id).indexOf(matty)
premiumgp.splice(AB, 1)
fs.writeFileSync('./settings/media/premiumgp.json', JSON.stringify(premiumgp))
reply(`Coroa VIP retirada deste grupo 🥲`)
break      
        
case 'suicidio':
reply(`*É uma pena que tenha tomado essa decisão ${pushname}, vamos sentir saudades... 😕*`)
setTimeout(async() => { 
vitu.groupParticipantsUpdate(from, [sender], "remove")  
}, 2000)
setTimeout(async() => {
reply(`*Ainda bem que morreu, não aguentava mais essa praga kkkkkk*`)
}, 3000)
break

case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await vitu.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break     
  
case 'add':
if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await vitu.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await vitu.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
vitu.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
vitu.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
vitu.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
vitu.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
vitu.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break  
        
case 'audiomeme':
if(!q) return reply(` *Exemplo:* ${prefix+command} Lula`);
await vitu.sendMessage(from, {text: `*_${tempo}, ${pushname}._*\n*Estou enviando o seu audio sobre _~"${q}",~_ aguarde um momento.*`, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363308605625483@newsletter", newsletterName: "acesse o canal"}}}, {quoted: info})
bla = await fetchJson(`${site}/api/audiomeme?query=${q}&apikey=`+API_KEY_SHADOW)
teks = pickRandom(bla.resultado)
vitu.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg"}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break;

case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(enviar.msg.donosmt)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`)
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Esta palavra já foi adicionada...")
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra adicionada ao jogo da forca com sucesso...")
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(enviar.msg.donosmt) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra tirada do jogo da forca com sucesso...")
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].forca_inc == false) return reply(`O jogo não foi iniciado. Digite: ${prefix}iniciar_forca`)
rv_forca()
reply(`O jogo da forca foi resetado com sucesso... Para iniciar novamente é só usar o comando: ${prefix}inciar_forca`)
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
if(dataGp[0].forca_inc) return reply(mess.forcaInProgress(prefix))
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(`Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n|________\n       _¦_\n\n\n\n\n\n\n${linha_fr}\n\n_______________________________\n\n_- JOGO INICIADO COM SUCESSO! -_\nPara responder, use: ${prefix}r-f letra que talvez exista por sua observação ou ${prefix}r-f nome todo\n_______________________________`) 
}
} catch (e) {
console.log(e)
}
break

case 'blockspam':
if(!SoDono) return reply("n pode kk")
if (!q) return vitu.sendMessage(from, {text: 'Cadê a quantidade poha'})
for (let i = `${q}`;i !== 0; i -=1){
vitu.groupSettingUpdate(from, "announcement")
vitu.groupSettingUpdate(from, "not_announcement")
}
break
   
case 'r-forca':
case 'r-f':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!dataGp[0].forca_inc) return reply(`O jogo não foi iniciado. Digite: ${prefix}iniciar_forca`)
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} > irei resetar o jogo..`:`Você acertou uma letra e ganhou continue assim..`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(`Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n__________-_\n         _|_\n\n        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}\n\n${linha_fr}\n\n___-________-_____\n\nLetras ja utilizadas: ${letra_ut}\n___-________-_____`)
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 erros e perdeu, irei resetar o jogo..` : `Você errou e perdeu 😥..`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break
        
case 'stickerid': // serve pra pegar o id da figurinha, faça pergunta idiota não pfv
if (isQuotedSticker) {
const stickerId = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex').toUpperCase();
reply(`O ID da figurinha é: ${stickerId}`);
} else {
reply('Marque uma figurinha para mostrar o ID.');
}
break

case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foram removidos ou saíram do grupo, foram tirados do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(enviar.msg.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break
        
case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
vitu.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: vitin}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
vitu.sendMessage(from, {image: {url: q}}, {quoted: vitin}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} Virgem`);
signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes", "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
if(!signos.includes(q_2)) return reply("Este signo não existe...")
ABC = await fetchJson(`${site}/api/horoscopo/v2?signo=${q}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: {url: ABC.resultado.imagem}, caption: `Signo: ${q}\n${ABC.resultado.inform}`}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
} catch (e) {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'getlinha':
if(!SoDono) return reply(enviar.msg.donosmt)
const arquivo = fs.readFileSync("index.js", "utf-8")
const localCase = arquivo.indexOf(`case '${q}'`)
if (localCase === -1) return reply('Comando não encontrado.')
reply(`O comando '${q}' está na linha: ` + arquivo.substr(0, localCase).split("\n").length)
break 
     
        
case 'menu-diverso':
vitu.sendMessage(from, {image: {url: logoslink.logo},
caption: linguagem.menu(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break

case 'menuporno':
vitu.sendMessage(from, {image: {url: logoslink.logo},
caption: linguagem.menuporno(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break
  
case 'igstalk':
  const username = q;
  if (!q) return reply(`_*Cadê o nome de usuário do Instagram?*_\n\n_*EXEMPLO: ~${prefix + command} pozevidalouca~*_`);
  reply(`*Buscando informações sobre o usuário: ~_${q}_~ no Instagram.*`);
  const formatNumber = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num;
  };
  const getInstagramInfo = async (username) => {
    const { data } = await axios.get(`https://igram.world/api/ig/userInfoByUsername/${username}`, {
      headers: { "User-Agent": "PostmanRuntime/7.37.0" }
    });
    if (data && data.result && data.result.user) {
      const userInfo = data.result.user;
      const image = userInfo.hd_profile_pic_url_info.url;
      const followersFormatted = formatNumber(userInfo.follower_count);
      const followingFormatted = formatNumber(userInfo.following_count);
      const botões = [{
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "IR PARA O PERFIL",
          url: `https://www.instagram.com/${userInfo.username}/`
        })
      }];

      const cardImage = {
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: image } }, { upload: vitu.waUploadToServer })),
          hasMediaAttachment: true,
          title: `⚡ *[USUÁRIO ENCONTRADO]* ⚡
*Nome de Usuário:* 
╰┈➤ _${userInfo.username}_
*Nome:* 
╰┈➤ _${userInfo.full_name}_
*Seguidores:* 
╰┈➤ _${followersFormatted}_
*Seguindo:* 
╰┈➤ _${followingFormatted}_
*Total de Posts:* 
╰┈➤ _${formatNumber(userInfo.media_count)}_
*Conta Privada:* 
╰┈➤ _${userInfo.is_private ? '✅' : '❌'}_
*Conta Verificada:* 
╰┈➤ _${userInfo.is_verified ? '✅' : '❌'}_
---------------------------------------------
${userInfo.biography}`,
        }),
        nativeFlowMessage: {
          buttons: botões,
          messageParamsJson: ""
        }
      };
      let botaoIgstalk = generateWAMessageFromContent(from, {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            mentionedJid: [sender, "5521971983758@s.whatsapp.net"],
            quotedMessage: info.message
          },
          carouselMessage: {
            cards: [cardImage],
            messageVersion: 1,
          }
        }
      }, {});
      vitu.relayMessage(from, botaoIgstalk.message, { messageId: botaoIgstalk.key.id });
    }
  };
await getInstagramInfo(username);
break;      
        
case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply(`O verificado foi desativado, ou seja: o selo foi retirado de todos os meus comandos! Para reativar o verificado, use o comando novamente.`)
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja: o selo foi colocado em todos os meus comandos! Para desativar, basta digitar o comando novamente.`) 
}
break

case 'console':   
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado com sucesso. Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi desativado com sucesso. Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser ativar - Só digitar o comando novamente`) 
}
break

case 'logos':
case 'menulogo':
case 'menulogos':  
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.menulogos(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 

case 'pesquisas':  
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.pesquisas(prefix, NomeDoBot, sender, tempo),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 
        
case 'menusticker':  
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.menusticker(prefix, NomeDoBot, sender, tempo),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 
        
case 'menuadm': 
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.menuadm(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break
        
case 'menudono':
case 'donomenu':
vitu.sendMessage(from, {image: {url: logoslink.logo},
caption: linguagem.menudono(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 
        
case 'fakemsg':
tp = args.join(" ")
if(tp.includes(`${prefix}`) || tp.includes(`&`) || tp.includes(`/`) || tp.includes(`#`) || tp.includes(`+`) || tp.includes(`.`))return reply(`_*Ei, ${pushname}. Você não pode usar comandos neste comando*_ 🤨`)  
if(!isPremium) return reply(enviar.msg.premium)
if(!isGroup) return reply(enviar.msg.grupo);
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
vitu.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Crie mensagens FAKES com qualquer um! Exemplo: ${prefix}fakemsg *@pessoa|msg dele|sua msg*`);
}
break
        
case 'remove-bg':
case 'r-fundo':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(`*[ ! ] Removendo o fundo da imagem, aguarde! Não vai demorar muito...️*`);
try {
link = await upload(base64);
let imageUrl = `https://api.lolhuman.xyz/api/removebg?apikey=haikalgans&img=${link}`;

let response = await axios.get(imageUrl, {
responseType: 'arraybuffer'
});
let imageBuffer = Buffer.from(response.data, 'binary');
// Enviando a imagem como documento
await vitu.sendMessage(from, {image: imageBuffer, fileName: 'removed_bg.png', mimetype: 'image/png'}, {quoted: vitin});
} catch (e) {
reply(`*⚠ Erro ao enviar a imagem: ${e.message}*`);
}
} else {
reply(`*⚠ Selecione uma imagem para remover o fundo.*`);
}
break;
        
case 'efeitos': 
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.efeitos(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break

case 'ususticker': case 'us':
    if (!isGroup) return reply(`Este comando só pode ser utilizado em grupos`);
    let userId = args.length ? args.join(" ").replace(/\D/g, '') : info.message.extendedTextMessage.contextInfo.participant;
    if (!userId) {
        userId = sender_ou_n.split('@')[0];
    }
    try {
        fotinhaSDW = await vitu.profilePictureUrl(`${userId}@c.us`, 'image');
    } catch {
        return reply("Usuário está sem foto de perfil ❌");
    }
    try {
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${fotinhaSDW}`);
        vituShadow = shortpc.data;
    } catch {
        return reply("Falha ao tentar converter ❌");
    }
    reply(`_*${tempo}, ${pushname}... Estou convertendo a foto de perfil para figurinha, aguarde.*_`);
    sendStickerFromUrl(from, vituShadow);
break;

case 'figusrc': 
    const google = require("googlethis");;
   const figArgs = q.trim().split('/');
    if (figArgs.length !== 2) return reply(`Insira o tema e a quantidade no formato: tema/quantidade (exemplo: ${prefix+command} Messi/5)`);
    const searchQuery = figArgs[0].trim();
   const quantity = Number(figArgs[1].trim());
   if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) return reply(`Digite uma quantidade válida de figurinhas que deseja que eu envie... (entre 1 e 10)`);
    if (searchQuery.length < 1) return reply(`Digite um tema válido para buscar figurinhas.`);
    await vitu.sendMessage(from, {text: `*_${tempo}, ${pushname}._*\n*Estou enviando ${q.split('/')[1]} figurinhas sobre _"${q.split('/')[0]}"_ no seu privado, Aguarde um momento.*`, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363308605625483@newsletter", newsletterName: "canal shadow-bot"}}}, {quoted: info})
    try {
        const ABC = await google.image(searchQuery, { safe: false });
        const imageUrls = ABC.slice(0, Math.min(quantity, ABC.length)).map(image => image.url);
        for (const imageUrl of imageUrls) {
            try {
                const response = await axios.get(imageUrl);
                if (response.status !== 200) {
                    console.error(`URL inválida ou inacessível: ${imageUrl}`);
                    continue;
                }
                const stickerPath = await sendStickerFromUrl(sender, imageUrl);
                await sleep(450);
                if (fs.existsSync(stickerPath)) {
                    fs.unlink(stickerPath, (err) => {
                        if (err) console.error(`Erro ao apagar o arquivo: ${err}`);
                    });
                }
            } catch (innerError) {
                console.error(`Erro ao processar a URL: ${imageUrl}, erro: ${innerError.message}`);
            }
        }
    } catch (e) {
        console.error(`Erro geral: ${e.message}`);
        return reply(`erro: Ocorreu um problema ao processar sua solicitação.`);
    }
break;
        
case 'dono':
numerodn = numerodono_ofc
await vitu.sendMessage(from, {text: `
╭━─━─━─≪ ⚡ ≫─━─━─━╮
┃⚡ 𝙳𝙾𝙽𝙾 *↴*
┃ㅤㅤ➠ _*${NickDono}*_
┃
┃⚡ 𝙽𝚄́𝙼𝙴𝚁𝙾 *↴*
┃        ➠ ${nmrdn.split('@')[0]}
┃
┃⚡ 𝙱𝙾𝚃 *↴*
┃ㅤㅤ➠ _*${NomeDoBot}*_
┃
┃⚡ 𝙿𝚁𝙴𝙵𝙸𝚇𝙾 *↴*
┃ㅤㅤ➠ _*[ ${prefix} ]*_ 🤖
┃
╰━─━─━─≪ ⚡ ≫─━─━─━╯`,
contextInfo: { mentionedJid: [sender],
externalAdReply: { showAdAttribution: true,
mediaType: 1,
body: `${tempo}`,
title: `》ｃｌｉｃｋ ａｑｕｉ《`,
sourceUrl: `https://chat.whatsapp.com/IaYPtaiwE6gCikO795iCTO`,
thumbnail: await getBuffer(`https://telegra.ph/file/ea8fa55015b65409347d4.jpg`),
renderLargerThumbnail: true}}},
{ quoted: vitin })
break

case 'alteradores':
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.alteradores(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 

case 'downloads':
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.menudownload(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 
        
case 'games': 
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.brincadeiras(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 

case 'menuvip': 
vitu.sendMessage(from, {image: {url: logoslink.logo}, 
caption: linguagem.menuprem(prefix, NomeDoBot, sender),
contextInfo: { mentionedJid: [sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: `🍁 ${NomeDoBot} 🍁\n》ｃｌｉｃｋ ａｑｕｉ《`, body: null, sourceUrl: `https://www.youtube.com/@zkayser`, thumbnail: fs.readFileSync(`./settings/logo.jpg`)}}}, { quoted: vitin })
break 

case 'configurar-bot':
vitu.sendMessage(from, {text: configbot(prefix)}, {quoted: vitin})
break

        
case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
vitu.sendMessage(from, {text: destrava(prefix)}, {quoted: vitin})
break 

case 'perfil':
try {
ppimg = await vitu.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
const { frases } = require("./database/frases.js");
var frasinhas = frases[Math.floor(Math.random() * frases.length)];
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
vitu.sendMessage(from, {text: `🔎「 *INFORMAÇÕES - PERFIL* 」👤\n\n╭╼╼╼╼╼╼╍⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╍╾╾╾╾⋆\n┇👤⋆͜͡҈➳ *Usuário:* ${pushname}\n┇🤖⋆͜͡҈➳ *Bot:* ${NomeDoBot}\n┇📲⋆͜͡҈➳ *Conectado em:* ${info.key.id.length > 21 ? 'Android': info.key.id.substring(0, 2) == '3A' ? 'iOS': 'WhatsApp Web'}\n┇😈⋆͜͡҈➳ *Nível de prostituição:* ${putar}${putar2}%\n┇😋⋆͜͡҈➳ *Nível de gostosura:* ${gostosurar}${gostosurar2}%\n┇🐂⋆͜͡҈➳ *Nível do gadometro:* ${nivelgador}${nivelgado2r}%\n┇💸⋆͜͡҈➳ *Valor do programa:* R$${programa}\n╰╼╼╼╼╼╼╍⋅⊹⋅⋅⦁ ⚡ ⦁⋅⋅⊹⋅╍╾╾╾╾⋆\n_~"${frasinhas}~"_`, headerType: 4, contextInfo: { externalAdReply: { title: `${pushname}`, body: ``, showAdAttribution: true, thumbnail: await getBuffer(ppimg), mediaType: 2, mediaUrl: `https://wa.me/${sender.split("@")[0]}`, sourceUrl: `https://wa.me/${sender.split("@")[0]}`}}})
} catch (e) {
console.log(e)
}
break

case 'cantadas':
case 'cantada':  
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
vitu.sendMessage(from, {text: cantadasText}, {quoted: vitin, contextInfo: {"mentionedJid": cantadasText}})
break

case 'fatos':
case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
vitu.sendMessage(from, {text: fatosText}, {quoted: vitin, contextInfo: {"mentionedJid": fatosText}})
break

case 'tabela':
vitu.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: vitin})
break 

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
vitu.sendMessage(from, {text: destrava2 (prefix)}, {quoted: vitin})
break 

case 'tradutor':
case 'traduzir':
try {
if(!q) return reply(`Exemplo: ${prefix + command} pt|Dog`)
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [idioma, texto] = txt.split("|")
if(!q.includes("|")) return reply(`Está faltando a |, *use como exemplo:* ${prefix + command} pt|Dog`)
bla = await fetchJson(`${site}/api/info/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=`+API_KEY_SHADOW)
reply(`Seu texto foi traduzido com sucesso: ${bla.result}`).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
})
} catch (e) {
if(String(e).includes(API_KEY_SHADOW)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
}
}
break

case 'idiomas':
case 'idioma':
vitu.sendMessage(from, {text: `Neste link, você pode ver a lista de idiomas disponíveis para usar no tradutor ou gtts (comando !falar):\n https://cloud.google.com/translate/docs/languages\n\n*Exemplificando o uso das funções:*\n\n↳ *Comando:* ${prefix}falar pt eu te amo\n*[pt]* - _Idioma, ou seja: O áudio será reproduzido na lingua Portuguesa._\n*[eu te amo]* - _O que vai falar no áudio que você solicitou._\n\n↳ *Comando:* ${prefix}traduzir pt|I love you\n*[pt]* - _O idioma que vai traduzir a palavra ou texto que você atribuiu ao comando._\n*[I love you]* - _O texto que ele vai traduzir._`}, {quoted: vitin})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'lerfoto':
  if (isMedia || isQuotedImage) {
    const post = isQuotedImage
      ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage
      : info.message.imageMessage;
    var imagem = await downloadContentFromMessage(post, 'image');
    let base64 = Buffer.from([]);
    for await (const chunk of imagem) {
      base64 = Buffer.concat([base64, chunk]);
    }
    reply(`*Lendo a imagem, aguarde...*`);
    const { data } = await require('tesseract.js').recognize(base64, 'por');
    reply(`"${data.text}"`);
  } else {
    reply(`*Por favor, envie uma imagem para que eu possa transcrever o texto presente nela.*`);
  }
break;

case 'listavip':
if(!isPremium) reply(enviar.msg.premium)
reagir(from, "👑")
tkks = '『 👑 *LISTA VIP* 👑 』\n'
for (let V of premium) {
tkks += `⇒ @${V.id.split('@')[0]}
${V.infinito == false ? sendTimeDay(V.dias) : `∞ *INFINITY [ VIP ]*`}\n`
}
total = premium.length
if(JSON.stringify(premiumgp).includes(from)) {
  AB = premiumgp.map(i => i.id).indexOf(from)
  for(i of groupMembers) {
    if(i.id != botNumber && !JSON.stringify(premium).includes(i.id)) {
      tkks += `⇒ @${i.id.split('@')[0]}
${premiumgp[AB].infinito == false ? sendTimeDay(premiumgp[AB].dias) : `∞ *INFINITY [ VIP ]*`}\n`
total += 1
    }
  }
}
tkks += `ㅤ *TOTAL〘* ${total} *〙*\n\n⏤͟͟͞͞ ꦿ${tempo}`
mention(tkks)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
vitu.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: vitin})
break

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`use ${prefix + command} 21`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
vitu.sendMessage(from, {text: dddlist}, {quoted: vitin})	
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
vitu.groupUpdateSubject(from, `${blat}`)
vitu.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: vitin})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
vitu.groupUpdateDescription(from, `${blabla}`)
vitu.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: vitin})
break

case 'requestgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const req = await vitu.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await vitu.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Seja bem-vindo(a) ao grupo @${args[1].split(' ')[0]}, sua aprovação foi aceita pelo adm.`)
await vitu.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`)
ABC = `( Total: ${totalRequest} ) - Lista de pessoas que desejam entrar no grupo:\n\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\nNúmero solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `\n`
}
mention(ABC)
}
break;

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
vitu.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if (!isGroup) return enviar(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
 let metadata = await vitu.groupMetadata(from)
linkgc = await vitu.groupInviteCode(from)
reply(`[👥] 𝗠𝗘𝗠𝗕𝗥𝗢𝗦: ${metadata.participants.length ? metadata.participants.length : "undefined"}\n[📝] 𝗚𝗥𝗨𝗣𝗢: ${groupMetadata.subject}\n[📌] 𝗟𝗜𝗡𝗞: https://chat.whatsapp.com/`+linkgc)
break
        
case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await vitu.groupInviteCode(from)
vitu.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break
     
case 'grupo': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
reply(`*o grupo foi aberto pelo adm ${pushname}, agora todos podem falar ✅*`)
vitu.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`*o grupo foi fechado pelo adm ${pushname}, acabou a baderna ⚠️*`)
vitu.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'autototext':
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isGroupAdmins) return reply(enviar.msg.adm);
    if (args.length < 1) return reply(`Use 1 para ativar, 0 para desativar o recurso Auto-Transcrever.`);

    if (Number(args[0]) === 0) {
        if (!dataGp[0].autototext) return reply(`O modo Auto-Transcrever já está desativado neste grupo!`);
        dataGp[0].autototext = false;
        setGp(dataGp);
        reply(`_*✖ Desativou com sucesso o Auto-Transcrever neste grupo, agora o bot não irá transcrever os áudios enviados.*_`);
    } else if (Number(args[0]) === 1) {
        if (dataGp[0].autototext) return reply(`O modo Auto-Transcrever já está ativado neste grupo!`);
        dataGp[0].autototext = true;
        setGp(dataGp);
        reply(`_*✔ Ativou com sucesso o Auto-Transcrever neste grupo, agora o bot irá transcrever todos os áudios enviados.*_`);
    } else {
        reply(`Use 1 para ativar, 0 para desativar o recurso Auto-Transcrever.`);
    }
break;

case 'autogpt':
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!isGroupAdmins) return reply(enviar.msg.adm);
    if (args.length < 1) return reply(`Use 1 para ativar, 0 para desativar o recurso Auto-Gpt-Audio.`);

    if (Number(args[0]) === 0) {
        if (!dataGp[0].autogpt) return reply(`O modo Auto-Gpt-Audio já está desativado neste grupo!`);
        dataGp[0].autogpt = false;
        setGp(dataGp);
        reply(`_*✖ Desativou com sucesso o Auto-Gpt-Audio neste grupo, agora o bot não irá responder os áudios enviados.*_`);
    } else if (Number(args[0]) === 1) {
        if (dataGp[0].autogpt) return reply(`O modo Auto-Gpt-Audio já está ativado neste grupo!`);
        dataGp[0].autogpt = true;
        setGp(dataGp);
        reply(`_*✔ Ativou com sucesso o Auto-Gpt-Audio neste grupo, agora o bot irá responder todos os áudios enviados.*_`);
    } else {
        reply(`Use 1 para ativar, 0 para desativar o recurso Auto-Gpt-Audio.`);
    }
break;
     
case 'totext':
try {
if (!isQuotedAudio) return reply(`*_Por favor, mencione um áudio para realizar a transcrição do áudio._*`)
if (info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply(`*_Só realizo a transcrição de áudio de até "2MB", envie um arquivo menor._*`)
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
reply(`*_Transcrevendo o áudio. Por favor, aguarde._*`)
fs.writeFileSync(`./armor/src/totext-${sender}.mp3`, getBufferAudio)
let client = new AssemblyAI({apiKey: "2bdbb9a9046a4a938677122e7cf2dbd2"}) 
const dataTxt = await client.transcripts.create({audio_url: `./armor/src/totext-${sender}.mp3`, language_code: "pt"})
if (dataTxt.words.length == 0) return reply(`*_Não foi possível transcrever seu áudio. Por favor, tente com outro._*`)
vitu.sendMessage(from, {text: `> ${dataTxt.text}`}, {quoted: vitin});
fs.unlinkSync(`./armor/src/totext-${sender}.mp3`)
} catch(e) {
console.log(e)
}
break
        
case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
try {
var ppUrl = await vitu.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
vitu.sendMessage(from, {image: {url: ppUrl}, caption: `*Nome:* ${groupName}\n*Quantidade - Adminstradores:* ${groupAdmins.length}\n*Quantidade - Participantes:* ${groupMembers.length}\n\n💬 *Descrição:* ⬇️\n\n${groupDesc}`, thumbnail: null}, {quoted: vitin})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação Do Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
vitu.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n💬 *Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
vitu.sendMessage(from, {text: teks}, {quoted: vitin})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
vitu.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'sairgp':
if(isGroup && !SoDono) return reply("*sai tu, poha 🤨*")
try {
vitu.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("*Daqui a pouco tá querendo ser o Batman também, né 🤦🏽‍♂*")
vitu.sendMessage(from, {text: `*Pronto, ${pushname}. Agora você é adm do grupo 👀*`})
vitu.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("*Rapaz, ele tá sem zap...*")
vitu.sendMessage(from, {text: `*Pronto, ${pushname}. Agora você é membro comum novamente...*`})
vitu.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("*Enlouqueceu? Vc não pode me advertir... 🙄*");
if(menc_os2 == nmrdn) return reply("*Enlouqueceu? Vc não pode advertir o meu dono... 🙄*");
if(groupAdmins.includes(menc_os2)) return reply("*Enlouqueceu? Vc não pode advertir um adm... 🙄*");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*Vou advertir quem...*")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {vitu.sendMessage(from, {text: `Adeus @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do ocorrido.`})
await sleep(1500)
vitu.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!marc_tds) return reply("Cadê o alvo que você deseja retirar a advertência")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Não há advertências neste usuário")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("Advertência retirada")
break
//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await vitu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
vitu.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
vitu.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto, saí do grupo que você pediu, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'linkdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar qual grupo deseja pegar o link, e veja a numeração dele\nExemplo: ${prefix+command} 0\nesse comando é para o bot pegar o link do grupo que deseja..`)
var getGroups = await vitu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
var linkdogp = await vitu.groupInviteCode(ingfoo[q].id)
vitu.sendMessage(from, {text: `*${tempo} ${pushname} aqui está o link do grupo número ${q}: _https://chat.whatsapp.com/${linkdogp}_*`})
break
        
case 'listagp':
if(!SoDono && !isnit) return reply('```SOMENTE O MEU DONO```')
var getGroups = await vitu.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await vitu.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await vitu.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `Participante: @${uscnt.id.split('@')[0]}\nComandos usados: ${uscnt.cmd_messages}\nMensagens enviadas: ${uscnt.messages}\nUsuário conectado em: ${uscnt.aparelho}\nFigurinhas enviadas: ${uscnt.figus}\n\n`
}
mention(teks)
} else return reply('*nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `( ${ac +1} ) - Usuário: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'repetir':
reply(`${q}`)
break
        
case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply(enviar.msg.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
vitu.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
{
txt = args.join(" ");
if (!txt) return reply(`Para usar o correio elegante ou não.. 😬\n\nVocê deve primeiramente copiar o número da pessoa que você deseja enviar a mensagem, após isso, pense em uma mensagem.\n\n*Exemplo:* ${prefix}correio +55 21 00000-0000/Eu te amo`);
    let txt1 = txt.split("/")[0].replace(/\D/g, '');
    let txt2 = txt.split("/")[1];
    if (!txt1) return reply('*Cadê o número do destinatário?*');
    if (!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*');
    let [result] = await vitu.onWhatsApp(txt1);
    if (!result || !result.jid) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`);
    sendMsg = await vitu.sendMessage(from, { react: { text: `💌`, key: info.key } });
    reply(`✅ _O correio foi enviado para o destinatário com sucesso._`);
    let imageUrl = 'https://i.imgur.com/0DJZjFv.jpeg';
    let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    let imageBuffer = Buffer.from(response.data, 'binary');
    let messageCorreio = await prepareWAMessageMedia({ image: imageBuffer }, { upload: vitu.waUploadToServer });
    const botões = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Quem é você? 🤔",
                id: `${prefix}responder_1 ${result.jid}`
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Obrigado pela mensagem 😁",
                id: `${prefix}responder_2 ${result.jid}`
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Não estou interessado(a)",
                id: `${prefix}responder_3 ${result.jid}`
            }),
        }
    ];
    const cardImage = {
        header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: vitu.waUploadToServer })),
            hasMediaAttachment: true,
            title: `📪 _*~(CORREIO ${NomeDoBot})~*_\n╭━─━━─━━─≪ツ≫─━━─━━─━╮\n_*Você recebeu uma mensagem de*_\n_*uma pessoa misteriosa.*_\n╰━─━━─━━─≪ツ≫─━━─━━─━╯\n📝 Texto enviado: _*~"${txt2}"~*_\n• - - - - - - - - - - - -⚡- - - - - - - - - - - - •\nRESPONDA A PESSOA QUE TE ENVIOU ESTA MENSAGEM\n⬇️⬇️⬇️⬇️⬇️⬇️`,
        }),
        nativeFlowMessage: {
            buttons: botões,
            messageParamsJson: ""
        }
    };
    let correioBT = generateWAMessageFromContent(from, {
        interactiveMessage: {
            contextInfo: {
                participant: sender,
                mentionedJid: [sender, "5521971983758@s.whatsapp.net"],
                quotedMessage: info.message
            },
            carouselMessage: {
                cards: [cardImage],
                messageVersion: 1,
            }
        }
    }, {});
    await vitu.relayMessage(result.jid, correioBT.message, { messageId: correioBT.key.id });
    global.correioRemetente = sender;
} 
break;

        
case 'responder_1':
case 'responder_2':
case 'responder_3':
{
    let predefinedResponses = {
        'responder_1': 'Quem é você? 🤔',
        'responder_2': 'Obrigado pela mensagem 😁',
        'responder_3': 'Não estou interessado(a).'
    };
    let responseText = predefinedResponses[command];
    if (!global.correioRemetente) return reply('Erro: Não há um remetente para responder.');
    await vitu.sendMessage(global.correioRemetente, { text: `📩 Você recebeu uma resposta de: @${sender.split('@')[0].replace("s.whatsapp.net", " ")}\n\n` + "```" + responseText + "```", mentions: [sender]}, {quoted: vitin});
    reply('✅ _Sua resposta foi enviada com sucesso._');
}
break
        
case 'nome-bot':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit) return reply(enviar.msg.donosmt)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para: ${q}`)  
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot':
case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
const { imgur: imgurUpload } = require('./armor/funcoes/upload.js');
    if (!SoDono) return reply(enviar.msg.donosmt);
    if (!isQuotedImage && !(isMedia && info.message.imageMessage)) {
        return reply("Marque uma imagem ou envie uma imagem.");
    }
    try {
        reply("Opa, cria! Já estou trocando a foto do menu para você...");
        boij = isQuotedImage 
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage 
            : info.message.imageMessage;
        console.log("Imagem marcada/enviada detectada:", boij);
        owgi = await getFileBuffer(boij, 'image');
        console.log("Buffer da imagem gerado:", owgi);
        res = await imgurUpload(owgi);
        console.log("Imagem enviada para o imgur:", res);
        logoslink.logo.splice([]);
        fs.writeFileSync('./settings/logos.json', JSON.stringify(logoslink, null, 2));
        setTimeout(() => {
            logoslink.logo.push(res);
            fs.writeFileSync('./settings/logos.json', JSON.stringify(logoslink, null, 2));
            reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`);
        }, 1000);
    } catch (e) {
        console.log("Erro:", e);
        reply(`Ocorreu um erro ao processar a imagem: ${e.message}`);
    }
break;
        
case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(`• ${prefix}privphotobot - Minha foto de perfil visível a todos que entrarem em contato comigo.\n\n• ${prefix}privphotobot cntt - Minha foto de perfil visível somente aos meus contatos salvos.\n\n• ${prefix}privphotobot ngm - Ninguém verá a minha foto de perfil, ou seja: Estará oculta a todos.\n\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`)
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await vitu.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await vitu.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await vitu.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(`• ${prefix}privaddgroup all - Todos os contatos e números que salvarem o número do bot poderam adicionar em grupo.\n\n• ${prefix}privaddgroup cntt - Somente os contatos salvos em seu dispositivo poderam adicionar em grupos.\n\n• ${prefix}privaddgroup ngm - Ninguém poderá me adicionar em grupo, somente enviando convite e vossa senhoria aceitando manualmente.\n\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`)
if (args[0] === 'all') {
reply(`- Pronto, agora todos podem me adicionar em grupo normalmente.`)
await vitu.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos podem me adicionar em grupo.`)
await vitu.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await vitu.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
vitu.groupUpdateSubject(from, `${body.slice(9)}`)
vitu.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: vitin})
break

case 'fotobot':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
vitu.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*Exemplo:* clone @')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await vitu.profilePictureUrl(id)
buffer = await getBuffer(pp)
vitu.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('deu erro, a pessoa deve estar sem foto')
}
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
vitu.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
vitu.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\nNúmero: wa.me/${sender.split('@')[0]}\nMensagem: ${body.slice(6)}`})
}
reply('Transmissão enviada..')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\nNúmero: wa.me/${sender.split('@')[0]}\nMensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono1 = q.trim()
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono2 = q.trim()
dono2 = nescessario.dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono3 = q.trim()
dono3 = nescessario.dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono4 = q.trim()
dono4 = nescessario.dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono5 = q.trim()
dono5 = nescessario.dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono6 = q.trim()
dono6 = nescessario.dono6
setNes(nescessario)
reply(`Agora contem um sexto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(`Lista de proprietários do bot: [ ${NomeDoBot} ]\n\nDono Oficial do Bot: ${numerodono_ofc}\n\n- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`)
break
        
case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela':
case 'criartbl':
case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./database/func/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp':
case 'tabeladogp':
case 'tabelinha': 
if(!fs.existsSync(`./database/func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo: ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./database/func/tabela/tabela-${from}.json`)); 
mention(`Nome do Grupo:* ${groupName}\n\n*Horário que criou a tabela:* ${tabelagpofc.Horario}\n*Data que criou a tabela:* ${tabelagpofc.Data}\n\n*Tabela:* ${tabelagpofc.Tabela}`)
break

case 'ativo':
case 'on':
case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'rvisu':
case 'revelarvisu':
if(!isPremium) return reply(enviar.msg.vip)
if(!isQuotedVisuU || !isQuotedVisuU2) return reply(`marque uma foto/video em visualização unica`)
try{
reagir(from, "👁️")
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += "👁️ *REVELANDO ONE VISION* 👁️"
vitu.sendMessage(from, viewVideo)
} else {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: viewImage.url}
viewImage.caption += "👁️ *REVELANDO ONE VISION* 👁️"
vitu.sendMessage(from, viewImage)
}
} catch(e){
	reply(`Erro`)
	}
break      
        
case 'ausente':
case 'off':
case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\n\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'servip':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(JSON.stringify(premium).includes(sender)) return reply(`Ei, ${pushname}. parece que você já possui Vip... 🤔`)
premium.push({id: sender, dias: 0, save: 0, infinito: true})
fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium, null, 2))
mention(`_*Pronto, @${sender.split('@')[0]} agora você possui o Vip infinito. Aproveite 🥳*_`)
break
        
case 'addvip':
reagir(from, "👑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return reply(`Coloque o número do indivíduo e uma barra logo depois (/), após isso, coloque a quantidade de dias que este será Vip...
Ex: ${prefix+command} ${nmrdn.split('@')[0]}/30`)
shadowcu = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(shadowcu)
if(bla) {
AB = premium.map(i => i.id).indexOf(shadowcu)
if(premium[AB].infinito == true) return reply(`Não será possível adicionar dias ao VIP deste usuário, pois o mesmo possui o _"VIP INFINITO"_`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium))
vitu.sendMessage(from, {text: `👑 ${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${shadowcu.split("@")[0]}`, mentions: [shadowcu]}, {quoted: vitin})
} else {
premium.push({id: shadowcu, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium, null, 2))
vitu.sendMessage(from, {text: `${Number(tempo50) > 0 ? `👑 @${shadowcu.split("@")[0]} foi adicionado à lista Vip com sucesso...` : `_*Parabéns, @${shadowcu.split("@")[0]}. Você acaba de se tormar Vip por tempo ilimitado, isso significa que nunca irá acabar 🥳*_`}`, mentions: [shadowcu]}, {quoted: vitin})
}
break

case 'delvip':
reagir(from, "👋")
if(!SoDono) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque a pessoa que deseja tirar da lista Vip`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply(`*Este número não está incluso na lista Vip..*`)
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./settings/media/premium.json', JSON.stringify(premium, null, 2))
vitu.sendMessage(from, {text: `Sinto muito, @${marc_tds.split("@")[0]}. Você acaba de deixar de ser Vip... Caso queira voltar para a lista, favor renovar o contrato`, mentions: [marc_tds]}, {quoted: vitin})
break
        
case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
vitu.sendMessage(from, {text: clear}, {quoted: vitin, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!isPremium)
if(!q) return reply(`exemplo${sprd}500${sprd}apk\n\nos tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {
document: fs.readFileSync('./database/assets/docf.txt'),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}
}
vitu.sendMessage(from, Messagemdoc, {quoted: vitin})
} catch (err) {
console.log(err)
reply(`ops, ocorreu um erro`)
}
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
setNes(nescessario)
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
setNes(nescessario)
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break
        
case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`o anti-ligar foi ativado com sucesso. caso alguém efetue uma ligação para o bot, será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('o anti-ligar foi desativado com sucesso.')
}
break
        
case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`O Anti-Pv foi ativado com sucesso. caso alguém envie mensagem para o bot, será bloqueado!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('O Anti-Pv foi desativado com sucesso.')
}
break

case 'antipv2':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
nescessario.banChats = true
setNes(nescessario)
reply("O Anti-Pv 2 foi ativado com sucesso, porém eu não irei bloquear quem mandar mensagem.")
} else if(isAntiPv2) {
nescessario.banChats = false
setNes(nescessario)
reply("O Anti-Pv 2 foi desativado com scuesso.")
}
break

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear ou digite o número...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já está bloqueado.*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
vitu.sendMessage(from, {text: `@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot.`})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear ou digite o número...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está bloqueado.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
vitu.sendMessage(from, {text: `@${blcp.split('@')[0]} foi desbanido e poderá usar novamente os comandos do bot.`})
break

case 'blocklist':
jrc = '*Lista de Usuários Bloqueados:*\n\n'
for (let benn of ban) {
jrc += `@${benn.split('@')[0]}\n`
}
jrc += `Total de bloqueados: ${ban.length}`
vitu.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return vitu.sendMessage(from, {text: `root@vitu-BOT:~ ${err}`}, {quoted: vitin})
if(stdout) {
vitu.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
vitu.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break
        
case 'ping': {
vitu.sendMessage(from, { react: { text: `🏃🏻‍♀️`, key: info.key }})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
await vitu.sendMessage(from, { image: { url: `https://wipsione.sirv.com/shadow.ping/shadow/ping.jpg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=24%32&text.0.size=50&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=north&text.1.position.y=29%32&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: `${tempo} @${sender.split("@")[0]}\n\n⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}`.trim(), mentions: [sender]}, {quoted: vitin}) 
}
break
        
case 'falar':
try {
if (args.length < 1) return vitu.sendMessage(from,{text: `Cadê o texto?, digite algo Exemplo:\n${prefix}falar PT Oi`}, {quoted: vitin})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return vitu.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: vitin})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
vitu.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'gta':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!q) return reply(`_*${tempo}, ${pushname}... Não está faltando nada aí não?*_ 🤔\n_*Parece que você esqueceu de colocar o texto.*_\n_*Exemplo de como usar*_\n⬇️⬇️⬇️\n\n_*${prefix+command} ~Mission Passed/Shadow-Bot~*_`)
shadowzinho = await getBuffer(`https://api.lolhuman.xyz/api/gtapassed?apikey=gataDios&text1=${txt1}&text2=${txt2}`)
bass64 = `data:image/jpeg;base64,${shadowzinho.toString('base64')}`
vitu.sendMessage(from, {text: `_*${tempo}, ~@${sender.split("@")[0]}~...*_\n_*Estou criando a sua figurinha do GTA*_\n\n_*1º Nome: ~"${q.split("/")[0].toUpperCase()}"~*_\n_*2º Nome: ~"${q.split("/")[1].toUpperCase()}"~*_`, mentions: [sender]}, {quoted: info})
mantap = await convertSticker(bass64, `📍 Criado por: ${NomeDoBot}`, `Usuário: ${pushname}`)
shadowGTA = new Buffer.from(mantap, 'base64');
vitu.sendMessage(from, {sticker: shadowGTA}, {quoted: info})
break

case 'hd':
const { imgur: uploadHD } = require('./armor/funcoes/upload.js');
try {
if (isMedia || isQuotedImage) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(`Alterando a qualidade da foto para *HD*, aguarde um pouco!`);
const link = await uploadHD(base64);
const { remini } = require('betabotz-tools');
const results = await remini(link);
if (!link || typeof link !== 'string') {
  return reply('O link da imagem não foi gerado corretamente.');
}
if (results && results.image_data) {
  const imageUrl = results.image_data;
  if (!imageUrl.startsWith('http')) {
    return reply('A URL da imagem retornada é inválida.');
  }
  await vitu.sendMessage(from, { image: { url: imageUrl } }, { quoted: info });
} else {
  return reply('(Sem resposta do módulo para melhorar a imagem)');
}
} else {
reply('Selecione uma imagem para melhorar a qualidade.');
}
} catch (e) {
console.error(e);
return reply('(Erro interno do servidor. Por favor, tente novamente mais tarde.)');
}
break
        
case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break
        
case 'blockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`enlouqueceu?, quer bloquear o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('este comando já está bloqueado.')
addComandos(from, args[0])
reply(`o comando ${args[0]} foi bloqueado.`)
break

case 'unblockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} foi desbloqueado.`)
break

case 'listacomandos':
if(!SoDono) return reply(enviar.msg.donosmt)
tkks = '╭─「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│ ✰ ➛ Comando: ${V}\n`
}
tkks += `│ ✰ ➛ Total : ${getComandoBlock(from).length} comandos.\n╰──「 *${NomeDoBot}* 」───`
vitu.sendMessage(from, {text: tkks.trim()}, {quoted: vitin})
break

case 'modo-vip':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoVip) return reply('O modo Vip já está ativado neste grupo!')
dataGp[0].modovip = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de modo Vip neste grupo, agora apenas usuários Vips podem usar os meus comandos aqui.')
} else if(Number(args[0]) === 0) {
if(!isModoVip) return reply('O modo Vip não está ativado neste grupo!')
dataGp[0].modovip = false
setGp(dataGp)
reply('O modo Vip foi desativado, agora os usuários comuns do grupo podem usar os meus comandos sem nenhuma restrição.')
} else {
reply('1 para ativar, 0 para desativar este recurso.')
}
break        
        
case 'addcmdvip':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`enlouqueceu? não tem como adicionar o mesmo comando.`)
if(comandosVP.includes(args[0]))return reply('este comando já está incluso na lista de comandos vip, verifique.')
comandosVP.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`o comando ${args[0]} foi adicionado na lista de comandos vip.`)
break

case 'delcmdvip':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`enlouqueceu? não tem como deletar o mesmo comando.`)  
if(!comandosVP.includes(args[0]))return reply('este comando já foi excluído da lista de comandos vip.')
var i = comandosVP.indexOf(args[0])
comandosVP.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`o comando ${args[0]} foi tirado da lista de comandos vip.`)
break

case 'listacmdvip':
if(!SoDono) return reply(enviar.msg.donosmt)
tkks = '╭─「 *COMANDOS VIPS* 」\n'
for (let V of comandosVP) {
tkks += `│ ✰ ➛ Comando: ${V}\n`
}
tkks += `│ ✰ ➛ Total : ${comandosVP.length} comandos \n╰──「 *${NomeDoBot}* 」───`
vitu.sendMessage(from, {text: tkks.trim()}, {quoted: vitin})
break

case 'avaliar':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`exemplo: ${prefix+command} "bot muito bom, parabéns. "`)
if(args.length >= 400) return vitu.sendMessage(from, {text: 'máximo 400 caracteres'}, {quoted: vitin})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
vitu.sendMessage(nmrdn, {text: tdptls}, {quoted: vitin})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break
 
case 'zombie':
try {
if (isMedia || isQuotedImage) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);}
reply(`Transformando, aguarde! Não vai demorar muito...️`);
const link = await upload(base64);
const { tozombie } = require('betabotz-tools');
const results = await tozombie(link);
if (results && results.image_data) {
const imageUrl = results.image_data;
await vitu.sendMessage(from, { image: { url: imageUrl } }, { quoted: info });
} else {
return reply('(Sem resposta do módulo para transformar a imagem em zumbi)');}
} else {
reply('Selecione uma imagem para transformar em zumbi.');}
} catch (e) {
console.error(e);
return reply('(Erro interno do servidor. Por favor, tente novamente mais tarde.)');}
break
        
case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return vitu.sendMessage(from, {text: 'máximo 800 caracteres'}, {quoted: vitin})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
vitu.sendMessage(nmrdn, {text: teks1}, {quoted: vitin})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoeira, você será banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`exemplo: ${prefix}sugestao "opa, crie um comando tal, que ele funcione de tal maneira."`)
if(args.length >= 800) return vitu.sendMessage(from, {text: 'máximo 800 caracteres'}, {quoted: vitin})
var nomor = info.participant
sug = `[ Sugestões de Novos Comandos ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
vitu.sendMessage(nmrdn, {text: sug}, {quoted: vitin})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'gimage': {
    const axios = require("axios");
    if (!q) return reply(`Por favor, forneça um tema da pesquisa.`);
    try {
        await vitu.sendMessage(from, {
            text: `*_${tempo}, ${pushname}._*\n*Estou enviando os resultados da pesquisa: _~"${q}"~_, Aguarde um momento.*`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363308605625483@newsletter",
                    newsletterName: "canal shadow-bot"
                }
            }
        }, {quoted: info});
        const google = require("googlethis");
        let imageUrls = [];
        let maxAttempts = 3;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const ABC = await google.image(q, { safe: false, limit: 10 });
                let allUrls = ABC.map(img => img.url);
                for (const url of allUrls) {
                    try {
                        await axios.get(url, { timeout: 3000 });
                        imageUrls.push(url);
                        if (imageUrls.length === 5) break;
                    } catch {
                        console.log(`URL inválida ou inacessível: ${url}`);
                    }
                }
                if (imageUrls.length === 5) break;
            } catch (err) {
                console.log("Erro ao buscar imagens, tentativa", attempt, err);
                await new Promise(res => setTimeout(res, 1000));
            }
        }
        if (imageUrls.length < 5) {
            return reply(`Não foi possível encontrar imagens suficientes para o tema "${q}".`);
        }
        let push = [];
        for (let index = 0; index < imageUrls.length; index++) {
            const imageUrl = imageUrls[index];
            const { imageMessage } = await prepareWAMessageMedia({
                image: { url: imageUrl },
                jpegThumbnail: null,
                mimetype: 'image/jpeg'
            }, { upload: vitu.waUploadToServer });
            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `_*ARRASTE PARA O LADO ➡️*_`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: `${NomeDoBot}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Imagem ${index + 1}`,
                    hasMediaAttachment: true,
                    imageMessage
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: []
                })
            });
        }
        const bot = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `IMAGENS DA PESQUISA\n━━━━━━━━━⚡━━━━━━━━`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `Pedido por: ${pushname}\nResultados: 5\nDono do Bot: ${NickDono}`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [...push]
                        })
                    })
                }
            }
        }, { quoted: info });
        await vitu.relayMessage(from, bot.message, { messageId: bot.key.id });
    } catch (error) {
        console.error("Erro ao processar a solicitação de imagens:", error);
        reply(`Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.`);
    }
}
break;

case 'kwai':
    (async () => {
        try {
            const kwaiData = await fetchJson(`${site}/api/download/kwai?query=${q}&apikey=kaisi`);
            if (!kwaiData || !kwaiData.resultado || !kwaiData.resultado.dl) {
                throw new Error("Link de download do vídeo não encontrado.");
            }
            const videoUrl = kwaiData.resultado.dl;
            const videoBuffer = await axios.get(videoUrl, {
                responseType: 'arraybuffer',
                httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
            }).then(res => res.data);
            vitu.sendMessage(from, {
                video: videoBuffer,
                caption: `🎬 *Descrição do Vídeo*: ${kwaiData.resultado.description}\n👤 *Perfil*: ${kwaiData.resultado.profile.name}}`
            });
        } catch (error) {
            console.error("Erro ao baixar vídeo do Kwai:", error);
            vitu.sendMessage(from, "❌ Não foi possível baixar o vídeo do Kwai. Tente novamente mais tarde.");
        }
    })();
break;
        
case 'printsite':
reply('aguarde um pouco, entrando no site solicitado...')
if(!q) return reply(`cadê o link do site o qual você deseja visualizar?`)
try {
img = await getBuffer(`${site}/api/ssweb?link=${q}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: img, caption: `- *Site:* ${q}`}, {quoted: vitin})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️️ erro ao entrar no site desejado. tente novamente mais tarde!')
}
}
break

case 'memes':
try {
reply(enviar.espere)
res = await axios.get(`${site}/api/memes?apikey=`+API_KEY_SHADOW);
teks = pickRandom(res.data.pesquisa.resultado)
await vitu.sendMessage(from, {image: await getBuffer(teks.imagem), caption: `*Descrição* - ${teks.titulo}\n*Link -* ${teks.link}`}, {quoted: vitin}).catch(() => {
return reply("❌️ *erro ao fornecer o resultado da sua pesquisa.* tente novamente mais tarde!");
})
} catch (e) {
return reply("❌️ *erro ao fornecer o resultado da sua pesquisa.* tente novamente mais tarde!");
}
break;

case 'globo':
case 'poder360':
case 'jovempan':
case 'uol':
case 'cnnbrasil':
try {
res = await axios.get(`${site}/api/noticias/${command}?apikey=`+API_KEY_SHADOW);
teks = pickRandom(res.data.pesquisa.resultado)
await vitu.sendMessage(from, {image: await getBuffer(teks.imagem), caption: `*Notícia* - ${teks.noticia}\n*Link da Notícia* - ${teks.link}`}, {quoted: vitin}).catch(() => {
return reply("❌️ Erro!");
})
} catch (e) {
return reply("❌️ Erro!");
}
break;

case 'noticias': 
try {
if (!q) return reply(`informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
msgSemQuoted(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break

case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("nenhuma case encontrada.") } }
vitu.sendMessage(from, { text: listCases() }, { quoted: vitin });
} catch (e) {
console.log(e)
reply('ocorreu um erro ao obter as cases.') }
break

case 'gerarlink': 
const { imgur } = require('./armor/funcoes/upload.js');
try {
    if ((isMedia && info.message.imageMessage) || isQuotedImage) { 
        boij = isQuotedImage 
            ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage 
            : info.message.imageMessage;
        owgi = await getFileBuffer(boij, 'image');
        UploadServer = await imgur(owgi);
        await reply(`*Link da Imagem criado com sucesso, aqui está:* _~${UploadServer}~_`);
    } 
    else if ((isMedia && info.message.videoMessage && info.message.videoMessage.seconds < 30) || 
             (isQuotedVideo && info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 60)) { 
        boij = isQuotedVideo 
            ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage 
            : info.message.videoMessage;
        owgi = await getFileBuffer(boij, 'video');
        UploadServer = await imgur(owgi);
        await reply(`*Link do Vídeo criado com sucesso, aqui está:* _~${UploadServer}~_`);
    } 
    else {
        await reply(`*Envie ou responda uma _~Imagem/Vídeo~_ com o comando _~${prefix+command}~_*`);
    }
} catch (e) {
    console.log(e);
    await reply(`Erro: ${e.message}. Tente novamente.`);
}
break
        
// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado.imageUrl)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break  

case 'gameplay':
case 'ffbanner':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
if(!textin.includes("/")) return reply(`cade a / precisa dela para a separação..\nexemplo: ${prefix + command} Vitu/Domina`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado.imageUrl)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case 'cria': 
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break

case 'ff1':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
vitu.sendMessage(from, { image: venomk }, {quoted: vitin })
break	

case 'game':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break

case 'ff2':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break	

case 'entardecer':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break

case 'indian':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break 

case 'ffrose':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break	

case 'ffgren':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break		

case 'wolf':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break	

case 'dragonred':
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = body.slice(7)
if (teks.length > 10) return reply('o texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
vitu.sendMessage(from, { image: venomk }, { quoted: vitin })
break	

case 'purple':              
if (args.length < 1) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
teks = `${body.slice(8)}`
if (teks.length > 10) return vitu.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: vitin})
reply(enviar.espere)
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
vitu.sendMessage(from, { image: venomk }, {quoted: vitin, caption: `${teks}`})			     	
break

case 'avatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
if(!textin.includes("/")) return reply(`cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Vitu/Domina`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/mascoteavatar?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado.imageUrl)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin}).catch(e =>{
reply("E)erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
if(!textin.includes("/")) return reply(`cadê a / precisa dela para a separação..\nexemplo: ${prefix + command} Vitu/É/Brabo`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado.imageUrl)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':
case 'thorstyle':  
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`cade a /\nexemplo: ${prefix + command} vitu/domina`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case 'videogame':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`cade a /\nexemplo: ${prefix + command} Vitu/Domina`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/video-game-classic?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("erro ao criar sua logo! tente novamente mais tarde.")  
}
}
break

case 'pubg':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`cade a /\nexemplo: ${prefix + command} Vitu/Domina`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: bla}, {quoted: vitin})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("erro ao criar sua logo! tente novamente mais tarde.")  
}
}
break

case 'glitchtiktok':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`cade a /\nexemplo: ${prefix + command} Vitu/Domina`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/glitchtiktok?texto=${texto1}&texto2=${texto2}`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("erro ao criar sua logo! tente novamente mais tarde.")  
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case '3ddragon':
case 'esmeralda':
case 'break':  
case 'cartoon':  
case 'hologram':  
case 'deepsea':
try {
reply(enviar.espere)
texto = args.join(" ")
if(!texto) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
bla = await fetchJson(`${site}/api/${command}?texto=${texto}&apikey=`+API_KEY_SHADOW)
blabla = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: blabla}, {quoted: vitin})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("erro ao criar sua logo! tente novamente mais tarde.")  
}
}
break

case "watercolor":
case "1917":
case "multicolor":
case "generator":
case "naturalleaves":
case "candycane":
case "christmas":
case "merrychristmas":
case "3ddeep":
case "drug":
case "americanflag":
case "scifi":
case "wonderful":
case "holiday":
case "technology":
case "winter":
case "sandsummer":
case "sandwriting":
case "sandengraved":
case "summerysand":
case "glue":
case "dark":
case "galaxystyle":
case "minion":
case "horrorgift":
case "holographic":
case "deluxe":
case "glossyblue":
case "deluxegold":
case "glossycarbon":
case "fabric":
case "neontext":
case "halloweenfire":
case "metaldark":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "steeltext":
case "goldfoil":
case "ultragloss":
case "denimtext":
case "stargreen":
case "captain":
case "toxic":
case "ninjalogo":
case "rainbowequalizer":
case "peridot":
case "rock":
case "purpleshiny":
case "robotr2":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case "logoneon":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/neon?texto=${textin}&apikey=`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case "green-horror":
case "chocolate-cake":
case "3dboxtext":
case "strawberry":
case "sweet-candy":
case "flower-typography":
case "berry":
case "shadow-sky":
case "magma":
case "logobear":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/${command}?texto=${textin}`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: bla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case "illuminated-metallic":
case "metallic":
case "harry-potter":
case "butterfly":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: bla}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break

case "carved-wood":
case "flaming":
case "night-sky":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: bla}, {quoted: vitin}).catch(e => {
reply("erro ao criar sua logo! tente novamente mais tarde.")  
})
break
        
case "orangejuice":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/3d-orange-juice?texto=${textin}&apikey=`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin}).catch(e =>{
reply("erro ao criar sua logo! tente novamente mais tarde.")   
})
break

case "neonlight":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await fetchJson(`${site}/api/textpro/3d-neon-light?texto=${textin}&apikey=`+API_KEY_SHADOW)
dllink = await getBuffer(bla.resultado)
vitu.sendMessage(from, {image: dllink}, {quoted: vitin}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "brilhante":
case "vietnam":
case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: bla}, {quoted: vitin}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "desfocado":
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/ephoto/blur?texto=${textin}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: bla}, {quoted: vitin}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pubgv':
case 'natalmsg':
case 'anonovo':
case 'trigrev':
textin = args.join(" ")
if(!textin) return reply(`Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`)
reply(enviar.espere)
bla = await getBuffer(`${site}/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {video: bla}, {quoted: vitin}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break
  
case 'qc':
if(!q) return reply(`exemplo de uso deste comando:\n ${prefix+command} ${NomeDoBot}`)
reply(enviar.espere)
const text = `${q}`
const username2 = `${pushname}`
try {
ppimg = await vitu.profilePictureUrl(sender, 'image')
} catch {
ppimg = 'https://telegra.ph/file/cde0d7f5862fb5a6d8f24.jpg'
}
const { writeExifImg } = require('./armor/sticker/exif')
vitu.sendImageAsSticker = async (jid, path, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }
        await vitu.sendMessage(jid, { sticker: { url: buffer }, ...options})
        return buffer
    }
const avatar = `${ppimg}`
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username2,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
 response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
        vitu.sendImageAsSticker(from, buffer, { packname: `${NomeDoBot}`, author: `${pushname}` })
       })
break



        
// Pesquisa

case 'playstore':
try {
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`use como exemplo: *${prefix+command} minecraft*`);
AB = await fetchJson(`${site}/api/playstore?nome=${q}&apikey=`+API_KEY_SHADOW)
ABC = `🔍 *Pesquisa:* ${q} - *[ PlayStore ]*\nTotal de aplicativos encontrados: ${AB.pesquisa.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.pesquisa.resultado) {
ABC += `*🔹️ Aplicativo:* ${i.nome}\n*👩🏻‍💻 Desenvolvedor do App:* ${i.desenvolvedor}\n*⭐️ Avaliação do Aplicativo:* ${i.estrelas}\n*🔗 Link do Aplicativo:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
vitu.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'pensador':
try {
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Use como exemplo: *${prefix+command} Amor*`);
AB = await fetchJson(`${site}/search/pensador?query=${q}&apikey=`+API_KEY_SHADOW)
ABC = `🔍 *Pesquisa:* ${q} - *[ Pensador ]*\nTotal de frases encontradas: ${AB.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.resultado) {
ABC += `📨 *Frase:* "${i.frase}"\n`;
ABC += `${"-\t".repeat(24)}\n`
}
reply(ABC)
} catch (e) {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

// Pesquisa de Produtos:
case 'submarino':
var { SubmarinoSearch } = require('./armor/funcoes/scraper/pesquisas.js')
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Use como exemplo: *${prefix+command} iPhone*`)
SubmarinoSearch(q).then(async ({resultado: res}) => {
await vitu.sendMessage(from, {image: {url: res[0].imagem}, caption: res.map(a => `🛍️ *Produto:* ${a.produto}\n🈳️ *Preço:* ${a.valor}\n🔗 *Link:* ${a.link}\n`).join(`${"-\t".repeat(24)}\n`)})
}).catch((e) => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'americanas':
var { AmericanasSearch } = require('./armor/funcoes/scraper/pesquisas.js')
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Use como exemplo: *${prefix+command} iPhone*`)
AmericanasSearch(q).then(async ({resultado: res}) => {
  await vitu.sendMessage(from, {image: {url: res[0].imagem}, caption: res.map(a => `🛍️ *Produto:* ${a.produto}\n🈳️ *Preço:* ${a.valor}\n🔗 *Link:* ${a.link}\n`).join(`${"-\t".repeat(24)}\n`)})
}).catch((e) => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'mlsrc':
try {
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Use como exemplo: ${prefix+command} iPhone`);
AB = await fetchJson(`${site}/api/mercadolivre?nome=${q}&apikey=`+API_KEY_SHADOW)
ABC = `.`
for (var i of AB.pesquisa.resultado) {
ABC += `🛍️ *Produto:* ${i.produto}\n🈳️ *Preço:* ${i.valor}\n🔗 *Link:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
vitu.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'amazon':
try {
if(!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Use como exemplo: ${prefix+command} iPhone`);
AB = await fetchJson(`${site}/api/amazon?nome=${q}&apikey=`+API_KEY_SHADOW)
ABC = `.`
for (var i of AB.pesquisa.resultado) {
ABC += `🛍️ *Produto:* ${i.titulo}\n🈳️ *Preço:* ${i.valor}\n🔗 *Link:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
vitu.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'encurtalink':
case 'tinyurl':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kayserbot.wpp`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`✅️ *Link encurtado com sucesso, aqui está:* ${anu.data}`)
} catch (e) {
emror = String(e)
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'encurtalink2':
case 'tinyurl2':  
try {
if(!isPremium) return reply(enviar.msg.premium)
texto = args.join(' ')
texto1 = texto.split('+')[0] || 'Indefinido'
texto2 = texto.split('+')[1] || 'Indefinido'
if(!texto.includes("+")) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kayserbot.wpp+InstagramDoKayserBot`)
bla = await axios.get(`https://free-api.herokuapp.com/api/linkshort/tinyurlwithalias?link=${texto1}&alias=${texto2}&apikey=`+API_KEY_SHADOW)
reply(`✅️ *Link encurtado com sucesso, aqui está:* ${bla.data.result}`)
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('o nome solicitado, já existe ou tem alguma restrição ao criar!')
}
}
break

case 'encurtarlink3':
case 'cuttly':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kayserbot.wpp`)
try {
link = args[0]
anu = await axios.get(`https://free-api.herokuapp.com/api/linkshort/cuttly?link=${link}&apikey=`+API_KEY_SHADOW)
reply(`✅️ *Link encurtado com sucesso, aqui está:* ${anu.data.result}`)
} catch (e) {
emror = String(e)
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'encurtarlink4':
case 'bitly':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/kayserbot.wpp`)
try {
link = args[0]
anu = await axios.get(`https://free-api.herokuapp.com/api/linkshort/bitly?link=${link}&apikey=`+API_KEY_SHADOW)
reply(`✅️ *Link encurtado com sucesso, aqui está:* ${anu.data.result}`)
} catch (e) {
emror = String(e)
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

case 'celular': 
try {
if(!isPremium) return reply(enviar.msg.premium)
if (!q) return reply(`Qual celular você deseja pesquisar as informações sobre?`)
smartInfo = await fetchJson(`${site}/api/info_celular?celular=${q}&apikey=`+API_KEY_SHADOW)
msgSemQuoted(`*Smartphone:* ${smartInfo.resultado.nomeCelular}\n*Resumo:* ${smartInfo.resultado.informações}\n\n*Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`)
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);
}
break;

case 'play':
    const { frases } = require("./database/frases.js");
    var frasinhas = frases[Math.floor(Math.random() * frases.length)];

    if (!q) return reply(`Exemplo: ${prefix + command} Poze Desabafo`);

    const api = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW);
    capimg = await getBuffer(api.resultado[0].image);

    bla = `_*${api.resultado[0].title}*_

    *0:00 ❍──────── -${api.resultado[0].timestamp}*
                     *↻ ⊲ Ⅱ ⊳ ↺*

    ------------------------------------------------`;

    let messagecoisas = await prepareWAMessageMedia({ image: { url: `${api.resultado[0].image}` } }, { upload: vitu.waUploadToServer });

    const playBotao = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "𝐀𝐔𝐃𝐈𝐎⚡",
                id: `${prefix}play-bt ${api.resultado[0].url}`,
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "𝐕𝐈𝐃𝐄𝐎⚡",
                id: `${prefix}playvid-bt ${api.resultado[0].url}`,
            }),
        }
    ];

    const playIMG = {
        header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: { url: `${api.resultado[0].image}` } }, { upload: vitu.waUploadToServer })),
            hasMediaAttachment: true,
            title: `${bla}\n"${frasinhas}"`,
        }),
        nativeFlowMessage: {
            buttons: playBotao,
            messageParamsJson: "",
        },
    };

    let playShadow = generateWAMessageFromContent(from, {
        interactiveMessage: {
            contextInfo: {
                participant: sender,
                quotedMessage: info.message,
            },
            carouselMessage: {
                cards: [playIMG],
                messageVersion: 1,
            },
        },
    }, {});
  vitu.sendMessage(from, {text: `*${tempo}, @${sender.split('@')[0]}.*\n*Estou enviando o play no seu privado...*`, contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363308605625483@newsletter",
                        newsletterName: "acesse o canal"
                    }
                    }
                })
await vitu.relayMessage(sender, playShadow.message, { messageId: playShadow.key.id });
break        
        
    
case 'play2':
try {
if(!q) return reply(`Exemplo: ${prefix+command} poze desabafo`);
await reply(`Estou atendendo seu pedido [ ${pushname} ]`)
const api = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
const buffer = await getBuffer(api.resultado[0].image)
dataAudio = await fetchJson(`${site}/api/dl/ytaudio?url=${api.resultado[0].url}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {audio: {url: dataAudio.resultado.dl_link }, mimetype: "audio/mpeg",
headerType: 4,
contextInfo: {
externalAdReply: {
title: `${NomeDoBot}`,
body: `${api.resultado[0].title}`,
showAdAttribution: true,
thumbnail: await getBuffer(`${api.resultado[0].image}`),
mediaType: 2,
mediaUrl: `instagram.com`,
sourceUrl: `https://www.youtube.com/@zkayser`}}},
{quoted: info}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
} catch (erro) {
console.log(erro)
}
break
  
case 'playvid-bt':
if(!q) return reply(`Por favor, coloque um nome de uma música para obter sucesso ao resultado.`)
const apiPlayMp4 = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
videoUrl = await fetchJson(`${site}/api/dl/ytvideo?url=${apiPlayMp4.resultado[0].url}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {video: {url: videoUrl.resultado.dl_link}}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break
        
case 'playmp4':
if(!q) return reply(`Por favor, coloque um nome de uma música para obter sucesso ao resultado.`)
reply(enviar.espere)
const apiMp4 = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
videoUrl = await fetchJson(`${site}/api/dl/ytvideo?url=${apiMp4.resultado[0].url}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {video: {url: videoUrl.resultado.dl_link}}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break
        
case 'play-bt':
if(!q) return reply(`Exemplo: ${prefix+command} Poze desabafo`)
apiBT = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
dataAudio = await fetchJson(`${site}/api/dl/ytaudio?url=${apiBT.resultado[0].url}&apikey=`+API_KEY_SHADOW);
await vitu.sendMessage(from, {audio: {url:  dataAudio.resultado.dl_link }, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break
        
case 'playmix':
case 'play_mix':
if(!q) return reply(`Exemplo: ${prefix+command} Poze do Rodo`)
const dataPmix = await fetchJson(`${site}/api/ytsrc/videos?q=${q}&apikey=`+API_KEY_SHADOW)
capimg = await getBuffer(dataPmix.resultado[0].image)
bla = `*🔎『𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎』🔍*
_*➩「Pedido por: ${pushname}」*_

*1° -* _*《${dataPmix.resultado[0].title}》*_
*0:00 ❍──────── -${dataPmix.resultado[0].timestamp} ↻ ⊲ Ⅱ ⊳ ↺*
${dataPmix.resultado[0].url}
*2° -* _*《${dataPmix.resultado[1].title}》*_
*0:00 ❍──────── -${dataPmix.resultado[1].timestamp} ↻ ⊲ Ⅱ ⊳ ↺*
${dataPmix.resultado[1].url}
*3° -* _*《${dataPmix.resultado[2].title}》*_
*0:00 ❍──────── -${dataPmix.resultado[2].timestamp} ↻ ⊲ Ⅱ ⊳ ↺*
${dataPmix.resultado[2].url}
*4° -* _*《${dataPmix.resultado[3].title}》*_
*0:00 ❍──────── -${dataPmix.resultado[3].timestamp} ↻ ⊲ Ⅱ ⊳ ↺*
${dataPmix.resultado[3].url}
*5° -* _*《${dataPmix.resultado[4].title}》*_
*0:00 ❍──────── -${dataPmix.resultado[4].timestamp} ↻ ⊲ Ⅱ ⊳ ↺*
${dataPmix.resultado[4].url}` 
vitu.sendMessage(from,{image: capimg, caption: bla}, {quoted: info}).catch(e => {
reply(`Não foi possível puxar as informações do mix`)
})
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${dataPmix.resultado[0].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"})
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${dataPmix.resultado[1].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"})
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${dataPmix.resultado[2].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"})
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${dataPmix.resultado[3].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"})
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${dataPmix.resultado[4].url}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break   
       
case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
ABC = await fetchJson(`${site}/api/dl/gdrive?url=${q}&apikey=`+API_KEY_SHADOW)
reply(enviar.espere)
vitu.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`) 
})
break;

case 'igdl':
if(q.length < 5) return reply('Por favor, adicione um link do Instagram post/reel.');
try {
const { instagram } = require('betabotz-tools');
const url = `${q};`
const results = await instagram(url);
if (results.result && results.result.length > 0 && results.result[0]._url) {
const videoUrl = results.result[0]._url;
await vitu.sendMessage(from, { video: { url: videoUrl }, mimetype: "video/mp4" }, { quoted: info });
} else {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);
}
} catch (error) {
console.error(error);
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);
}
break;

case 'dicionario': 
if (!q) return reply(`Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave?`+`Exemplo: ${prefix+command} [palavra]`)
ABC = await fetchJson(`${site}/api/dicionario?q=${q}&apikey=`+API_KEY_SHADOW)
reply(`${ABC.significado}`).catch(e => {
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);
})
break;

case 'rastrear':
if (!q) return reply(`• Coloque o código da encomenda fornecido pelo Correios:\n-\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n    • O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n    • Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`)
if (q.length < 13 || q.length > 13) return reply(`• *Código inválido ou nenhum resultado foi retornado.* Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n    • Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`)
const dataRast = await fetchJson(`${site}/api/rastreio?code=${q}&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {text: `• N° de Rastreio: *${q}*\n-\n📌 *Último Status:*\n-\n${dataRast.resultado.lastStatus}\n-\n📦 *Histórico* - Informações detalhadas sobre o trajeto do objeto: ${dataRast.resultado.pathObject}`}, {quoted:info}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break
        
case 'animeia':
  try {
    if (isMedia || isQuotedImage) {
      post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
      imagem = await downloadContentFromMessage(post, 'image');
      base64 = Buffer.from([]);
      for await ( const send of imagem ) {
        base64 = Buffer.concat([base64, send]);
      }
      reply('*[ ! ] Criando seu avatar, aguarde! Não vai demorar muito...️*');
      const link = await upload(base64);
      const { toanime } = require('betabotz-tools');
      const results = await toanime(link);
      if (results && results.image_data) {
        const imageUrl = results.image_data;

        await vitu.sendMessage(from, { image: { url: imageUrl } }, { quoted: info });
      } else {
        return reply('(Sem resposta do módulo para transformar a imagem em personagem de anime)');
      }
    } else {
      reply('Selecione uma imagem para transformar em um personagem de anime.');
    }
  } catch (e) {
    console.error(e);
    return reply('(Erro interno do servidor. Por favor, tente novamente mais tarde.)');
  }
break;

case 'deezer':
if(!q) return reply(`Exemplo: ${prefix+command} Ela não é santa`)
musicFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
if (musicFind.length == 0) return reply(`Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`)
vitu.sendMessage(from, { text: `*Nome da Música* - ${theMusicD.title}\n*Link da Música* - ${theMusicD.link}\n*Duração da Música* - ${theMusicD.duration} segundos.\n*Nome do Artista* - ${theMusicD.artist.name}\n*Link do Perfil* - ${theMusicD.artist.link}\n*Música explícita?* - ${theMusicD.explicit_lyrics ? 'Sim' : 'Não'}\n*Nome do Album* - ${theMusicD.album.title}\n*Link do Album* - ${theMusicD.album.tracklist.replace('api.', '')}\n\nAbaixo foi enviado uma preview, para obter a completa use o ${prefix}Play ou baixe o Deezer em sua loja de apps.`})
vitu.sendMessage(from, {audio: {url: musicFind.data[0].preview}, mimetype: 'audio/mpeg'}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'movie':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(`Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`)
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
vitu.sendMessage(from, {image: fotoFilme, caption: `*Nome do Filme:* ${movieInfo.data.results[0].title}\n*Nome original:* ${movieInfo.data.results[0].original_title}\n*Data de Lançamento:* ${movieInfo.data.results[0].release_date}\n*Avaliações:* ${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${movieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${movieInfo.data.results[0].original_language}\n\n*Sinopse:* ${movieInfo.data.results[0].overview}`}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break
        
case 'serie':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(`Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`)
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)
vitu.sendMessage(from, {image: fotoSerie, caption: `*Nome da Série:* ${serieInfo.data.results[0].name}\n*Nome original:* ${serieInfo.data.results[0].original_name}\n*Data de Lançamento:* ${serieInfo.data.results[0].first_air_date}\n*Avaliações:* ${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${serieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${serieInfo.data.results[0].original_language}\n\n*Sinopse:* ${serieInfo.data.results[0].overview}`}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp`)
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(`Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`);
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer(),
vitu.sendMessage(from, {image: phAptoide, caption: `*Aplicativo:* ${getApk.name}\n*Package:* ${getApk.package}\n*Tamanho do Aplicativo:* ${sizeApk} MB\n*Versão do Aplicativo:* ${getApk.file.vername}\n\n*Download Primário:* ${getApk.file.path}\n*Download Secundário:* ${getApk.file.path_alt}`,}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break;

case 'soundcloud':
case 'scdl':
if(!q) return reply(`Tá faltando aí! Cadê o link da música no SoundCloud, hein? 😴`)
reply(enviar.espere)
const dataSoundCl = await fetchJson(`${site}/api/soundcloud?url=${q}&apikey=`+API_KEY_SHADOW) 
tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${dataSoundCl.resultado.link_dl}`)
vitu.sendMessage(from, {image: {url: dataSoundCl.resultado.capa}, caption: `*Música:* ${dataSoundCl.resultado.titulo}\n*Total de Downloads:* ${dataSoundCl.resultado.total_downloads}\n\nCaso o áudio não seja encaminhado, baixe através do link: ${tinyUrl.dataSoundCl}`}, {quoted: vitin})
vitu.sendMessage(from, {audio: {url: dataSoundCl.resultado.link_dl },mimetype: 'audio/mpeg',contextInfo: {externalAdReply: {title: `Música: ${dataSoundCl.resultado.titulo}`, body: `Total de Downloads: ${dataSoundCl.resultado.total_downloads}`, mediaType: 2, thumbnail: await(await fetch(dataSoundCl.resultado.capa)).buffer(), mediaUrl: `${dataSoundCl.resultado.link_dl}`, sourceUrl: `${dataSoundCl.resultado.link_dl}`}}, quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break 
  
case 'tiktok':
try {
reply(enviar.espere)
require('./armor/funcoes/scraper/tiktok.js').tikmate(q).then( data => {
vitu.sendMessage(from, { video: { url: data.video.noWatermark }, caption: `_*Aqui está o seu vídeo do TikTok:*_\n*Pedido por:* _${pushname}_\n*Baixado por:* _${NomeDoBot}_`}, { quoted: vitin })})} catch {
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`) }
break

case 'mediafire':
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${site}/api/mediafire?url=${q}&apikey=`+API_KEY_SHADOW)
encurt = await axios.get(`https://tinyurl.com/api-create.php?url=${ABC.resultado[0].link}`)
msgSemQuoted(`*「 MediaFire Downloader 」*\n\n*Nome do Arquivo:* ${ABC.resultado[0].nama}\n*Tamanho:* ${ABC.resultado[0].size}\n\n- Aguarde um momento, estou enviando o arquivo! Caso demore mais de *2min* dependendo do tamanho do arquivo, realize o download por meio do link: ${encurt.data}`)
vitu.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)  
})
break;

case 'letra':
case 'lyrics':
case 'letramusic':
if (!q) return reply(`e o nome da música? Exemplo: ${prefix+command} eu me sinto abençoado - poze`);
const { Lyrics, aliexpress } = require("./armor/funcoes/scraper/ali+lyric.js")
const ly = new Lyrics(q)
ly.get().then((data) => {
const wxt_info = `*Titulo:* ${data.name}\n*Artista:* ${data.byArtist.name}\n*Genero:* ${data.byArtist.genre}\n*Descrição:* ${data.description}\n*URL:* ${data.url}\n\n「𝗟𝗘𝗧𝗥𝗔 𝗗𝗔 𝗠𝗨𝗦𝗜𝗖𝗔」\n\n${data.lyricOriginal}`
vitu.sendMessage(from, { image: { url: `${data.image}` }, caption: wxt_info }, { quoted: info }).catch((error) => {
console.error(error);
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);}); }).catch((error) => {
console.error(error);
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);});
break;

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
vitu.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: vitin }).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)  
})
break

case 'ytmp4': case 'ytvideo':
if(!q) return reply(`Cadê o link do vídeo para eu baixar?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reagir(from, "🆙")
reply(enviar.espere)
vitu.sendMessage(from, {video: {url: `${site}/api/dl/ytvideo?url=${q}&apikey=`+API_KEY_SHADOW}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'ytaudio': case 'ytmp3':
if(!q) return reply(`Cadê o link do vídeo para eu baixar no formato de áudio?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reagir(from, "🆙")
reply(enviar.espere)
vitu.sendMessage(from, {audio: {url: `${site}/api/dl/ytaudio?url=${q}&apikey=`+API_KEY_SHADOW}, mimetype: "audio/mpeg"}).catch(err => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
break

case 'bc':
case 'bcgroup':
case 'transmitir':
case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Vitu O Mais Brabo`)
let getGroups = await vitu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
vitu.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
vitu.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está lotado...')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️✔️ Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break
        
case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de antilink de grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado ou promovido a adm 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento.. ️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('✔️ Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('✔️ Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply(' - Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Desativou o recurso de Só ADM utiliar comandos neste grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('✔️ Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️✔️ Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de antifake neste grupo.')
} else if(Number(args[0]) === 0) {
if(isAntifake) return reply('O recurso de antifake já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de antifake neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName}\n\n`
for ( i of dataGp[0].prefixos) {
bla += `Prefixo: ${i}\n\n`
}
reply(bla)
break

case 'figurinhas':
try {
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
if (isGroup) reply(`As figurinhas estão sendo enviadas no pv por motivo de segurança e flood em grupos, aguarde um pouco.`)
reply(enviar.espere)
async function figus() {
bala = await getBuffer(`${site}/figu?apikey=`+API_KEY_SHADOW)
bass64 = `data:image/jpeg;base64,${bala.toString('base64')}`
mantap = await convertSticker(bass64, `${pushname}`, `${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
vitu.sendMessage(sender, {sticker: imageBuffer})
}
for ( i = 0; i < q; i++) {
await sleep(2000)
figus()
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro ao enviar as figurinhas!")  
}
}
break

case 'figaleatoria':
reply(`- Estou gerando sua figurinha, aguarde um pouco...`)
bla = await getBuffer(`${site}/figu?apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {sticker: bla})
break

case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar a responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'gethtml':
res = await axios.get(url)
reply(res.data)
break

case 'ephemeral': case 'msgtemp': { 
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira os valores de ativação/desativação`)
if (args[0] === '1') {
reply(`✅️ As mensagens temporárias ativada com sucesso.`)
await vitu.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === '0') {
reply(`❌️ As mensagens temporárias desativada com sucesso.`)
await vitu.sendMessage(from, { disappearingMessagesInChat: false })
}
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await vitu.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await vitu.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await vitu.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Ja esta Desativado')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
//if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
//if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'dado':
const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./armor/funcoes/dado/' + dadu + '.webp')
vitu.sendMessage(from, {
sticker: dador
}, {
quoted: info
})
break
        
case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'contar':
if (args.length == 0) return reply(`vou contar oq aí, animal`)
const count = body.slice(8).length
if (count === 1) {
reply(`o texto possui ${count} letra.`)
} else if (count > 1) {
reply(`o texto possui ${count} letras.`)
}
break
        
case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum número foi adicionado*')
teks = '*Números que vão de ralo se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer o ban 🥵*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(`O bot precisa ser adm pra executar essa ação.`)
if(numerodono.includes(menc_os2)) return reply(`*não pode mutar o dono do bot*`)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('*Marque o número que deseja desmutar*')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `o usuário @${_.split('@')[0]} foi mutado pelo adm: [ ${pushname} ]`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\ncaso você der um piu, você vai ser banido do grupo.'
mentions(teks, mentioned, true)
} else {
 const dataMt = {
jid: from,
numbers: mentioned
}
muted.push(dataMt)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `o usuário @${_.split('@')[0]} foi mutado pelo adm: [ ${pushname} ]`
}
teks += '\ncaso você der um piu, você vai ser banido do grupo.'
mentions(teks, mentioned, true)
}
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('*Marque o número que deseja desmutar*')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `o usuário @${_.split('@')[0]} foi desmutado pelo adm: [ ${pushname} ]`
}
teks += '\nagr você pode falar a vontade no grupo!'
mentions(teks, mentioned, true)
} else {
const dataDsmt = {
jid: from,
numbers: []
}
muted.push(dataDsmt)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `o usuário @${_.split('@')[0]} foi desmutado pelo adm: [ ${pushname} ]`
}
teks += '\nagr você pode falar a vontade no grupo!'
mentions(teks, mentioned, true)
}
break
        
case 'roletarussa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("Não existe *membros comuns* no grupo, somente admins.")
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 === `${dono1}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 ===  `${dono2}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 ===  `${dono3}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 ===  `${dono4}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 === `${dono5}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
else if(C2 === sender || C2 === `${dono6}@s.whatsapp.net`) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(() => {
mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true)
}, 5000)
setTimeout(() => {
vitu.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break
        
case 'imagine':
if (!q) return reply(`O que você deseja criar?\nExemplo: ${prefix+command} Macaco voando`);
reply(`*Criando imagem sobre _~${q.toUpperCase()}~_*\n*Aguarde...*`);
try {
const response = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${encodeURIComponent(q)}`);
const imageUrl = response.url;
const imageBuffer = await getBuffer(imageUrl);
vitu.sendMessage(from, { image: imageBuffer, caption: `*Resultado para: _~${q.toUpperCase()}~_*` });
} catch (error) {
console.log(error);
reply(`erro`);
}
break;

case 'gpt':
case 'chatgpt':
try {
if (!q) return reply(`*Faça uma pergunta!*\n\nExemplo: ${prefix+command} mande uma receita de bolo`);
const { openai } = require('betabotz-tools');
const traduzirgpt = require('translate-google');
const results = await openai(q);
if (results && results.result) {
const respostaIngles = results.result;
const respostaPortugues = await traduzirgpt(respostaIngles, { to: 'pt' });
reply(`*${respostaPortugues}*`)
} else {
return reply('(Sem resposta da OpenAI)');}
} catch (e) {
console.log(e);
return reply('(Erro interno do servidor. Por favor, tente novamente mais tarde.)');}
break

case 'gemini':
if (!q) return reply(`Faça uma pergunta para que o Gemini possa ajudar, você também pode mencionar uma imagem com o comando e fazer uma pergunta ao gemini sobre a imagem.\n\n*• Exemplo:* ${prefix+command} Olá tudo bem?`)
try {
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('AIzaSyAA9rJnbWVd0MRzhAiK7GTSxPrl4-cuA0E');
const modelText = genAI.getGenerativeModel({ model: 'gemini-pro' });
const modelImage = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
let imageData;
let textResponse;
const prompt = q;
if (isQuotedImage || isMedia) {
let post;
if (isQuotedImage) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
} else if (isMedia) {
post = info.message.imageMessage;}
const imagem = await downloadContentFromMessage(post, 'image');
if (!imagem || imagem.length === 0) {
return reply("_Erro ao processar a imagem. Por favor, tente novamente._");}
let base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);}
imageData = {
inlineData: {
data: base64.toString("base64"),
mimeType: "image/png",},};
const imageName = `gemini_${Date.now()}.png`;
fs.writeFileSync(`./src/${imageName}`, base64);
fs.unlinkSync(`./src/${imageName}`);
const result = await modelImage.generateContent([prompt, imageData]);
textResponse = result.response.text();
reply(textResponse)
} else {
const { response } = await modelText.generateContent(`${encodeURIComponent(q)}`);
textResponse = response.text();
reply(textResponse)}
} catch (e) {
console.error(e);
return reply(`erro`);}
break;
        
case 'wikipedia':
case 'wiki':
try {
if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(`${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`)
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break

case 'corretor':
case 'corrigir':
if(!q) return reply(`Ops, você não digitou o texto o qual deseja corrigir. Utiliza esse comando com alguma palavra ou texto!\n❓️ *Exemplo:* ${prefix}${command} Eu te mamo`)
try {
reply(`Verificando os erros ortográficos em seu texto ou palavra... *Aguarde!*`)
anu1 = await fetchJson(`${site}/api/open-ai_txt?TOKEN_GPT=${TOKEN_GPT}&q=Corrija gramaticalmente uma frase para o português brasileiro tradicional: ${q}`)
msgSemQuoted(`📖 *Texto corrigido:* ${anu1.resultado}`)
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
}
break
        
case 'nasa':
try {
if (!q) return reply(`Exemplo: ${prefix}${command} 05-07-2003`)
dataKay = await fetchJson(`${site}/api/nasaphoto?data=${q}&apikey=`+API_KEY_SHADOW)
resultExp = await fetchJson(`${site}/api/info/translate?texto=${dataKay.nasa.explanation}&ling=pt&apikey=`+API_KEY_SHADOW)
vitu.sendMessage(from, {image: {url: dataKay.nasa.hdurl }, caption: `🔭 Título - ${dataKay.nasa.title}\n\n🌐📝 Explicação - ${resultExp.result}`})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(`❌️ Erro identificado no servidor! ❌️`);
}
break;

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} diario de um banana`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)				
vitu.sendMessage(from, {image: bookImage, caption: `*Titulo:* ${getBook.data.volumeInfo.title}\n*Autor do Livro:* ${getBook.data.volumeInfo.authors[0]}\n*Publicado em:* ${getBook.data.volumeInfo.publishedDate}\n*Publicado por:* ${getBook.data.volumeInfo.publisher}\n*Quantidade de Paginas:* ${getBook.data.volumeInfo.pageCount}\n\n*Descrição:* ${getBook.data.volumeInfo.description}\n\n👓 *Ler:* ${getBook.data.accessInfo.webReaderLink}\n➕ *Saiba mais:* ${getBook.data.volumeInfo.canonicalVolumeLink}`}).catch(e => {console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
}
break

case 'cotacao': {
if (!isPremium) return reply(enviar.msg.premium)
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
msgSemQuoted(`🏦 COTAÇÃO - Últimas 24h: 💱\n- Moeda: ${resposta.name}\n- Valor mais alto: ${Number(resposta.high).toFixed(2)}\n- Valor mais baixo: ${Number(resposta.low).toFixed(2)}\n- Valor atual: ${Number(resposta.bid).toFixed(2)}`);
}).catch((response) => {
reply("❌️ Erro ao obter informações! ❌️");
});
}
break;

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Brasilia`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
vitu.sendMessage(from, {image: wttrImage, caption: `⚠️️ Sobre o clima de agora no local.\n\n→ *Local:* ${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+j.region[i].value+', '+j.country[i].value).flat().join(' | ')}\n→ *Temperatura atual:* ${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]\n→ *Sensação térmica:* ${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%\n→ *Chuva em polegadas:* ${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}\n→ *Nivel de visibilidade:* ${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]\n→ *Descrição do clima:* ${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]\n→ *Direção do vento:* ${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]\n→ *Pressão do ar:* ${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]\n\n️🏘 Algumas informações do local.\n\n→ *Tipo de requisição:* ${wttrin.request.map(j => j.type).flat().join(' | ')}\n→ *Local da requisição:* ${wttrin.request.map(j => j.query).flat().join(' | ')}\n→ *Local mais aproximado:* ${wttrin.nearest_area.map(j => j.latitude).flat().join(' | ')} Lat. | ${wttrin.nearest_area.map(j => j.longitude).flat().join(' | ')} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}\n→ *Data agora no local:* ${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}\n→ *Tempo de observação:* ${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}`}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
}
break

case 'modoaluguel': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isModRent) {
nescessario.modoaluguel = true
setNes(nescessario)
reply(`_*✔ Modo aluguel ativado com sucesso. A partir de agora, eu irei me retirar de todos os grupos que não estiverem em meus registros*_`)
} else if(isModRent) {
nescessario.modoaluguel = false
setNes(nescessario)
reply(`_*✖ Modo aluguel desativado com sucesso. A partir de agora, eu irei continuar nos grupos mesmo que não estejam nos meu registros*_`) 
}
break
        
case 'simi':
if(!isGroup) return reply(enviar.msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('✔️ Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('✔️ Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('✔️ Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('✔️ Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autoresp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modo-gamer':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo gamer já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o Modo Gamer neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo Gamer já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o Modo Gamer neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso, agora os membros não podem utilizar os meus comandos.`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case '+18':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo +18 já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo +18 já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anti palavras hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anti palavra harcore neste grupo. 📝️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão':
case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`✔️ O recurso limite de caracteres foi ativado nesse grupo 📝`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var dataLmt = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(dataLmt, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'reiniciar':
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("*Opa! Estou reiniciando... Em 5 segundos, eu volto.*")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`*Exemplo:* ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("Emoji não encontrado.. Tente com outro emoji para ver está funcionando..")
})
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 😪+🤣`)
try {
reply(enviar.espere)
sendStickerFromUrl(from, `${site}/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_SHADOW)
} catch (e) {
if(String(e).includes(API_KEY_SHADOW)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('Ops não foi possivel fazer esse mix de emoji ou pode ter ocorrido algum problema no sistema..')
}
}
break

case 'ssf': case 'sfundo':
const RemoverFundo = require('./armor/sticker/removebg.js');
const { Sticker: Sfundo } = require('./armor/sticker/sticker.js');
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {  
var propertyMessage  = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || info.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessage?.message?.imageMessage;
await reply(`*_Criando a figurinha sua figurinha sem fundo. Por favor, aguarde_*`);
owgi = await getFileBuffer(propertyMessage, 'image');
resultadoFundo = await RemoverFundo(owgi)
const sticker = new Sfundo()
sticker.addFile(resultadoFundo.resultado); 
sticker.options.metadata = {author: `📌 Criado(a) por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await sticker.start();
await vitu.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
} else {
return await reply(`Responda uma imagem ou adicione na legenda da imagem o comando, lembre-se, o efeito de remoção de fundo só funciona em imagens.`);
}
} catch(error) {
await reply(`erro`);
}
break

case 'rbale':
const { Sticker: StickerRename } = require('./armor/sticker/sticker.js');
if (!isQuotedSticker) return await reply(`Responda um *STICKER* com *${prefix+command}*`);
try {
    const pack = `Usuário: ${pushname}`;
    const autor = `📍Criado por: ${NomeDoBot}`;
    zzbuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    const _sticker = new StickerRename();
    _sticker.addFile(zzbuffer); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    const resultadoSt = await _sticker.start();
    await vitu.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info});
    await fs.unlinkSync(resultadoSt[0].value);
} catch (e) {
    console.log(e);
    await reply(`Ocorreu um erro ao renomear o sticker.`);
}
break;
        
case 'rename':
case 'roubar':
const { Sticker } = require('./armor/sticker/sticker.js');
if(!isQuotedSticker) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor`);
try {
let [pack, autor] = q.split('/');
if(!pack || !autor) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor`)
zzbuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
const _sticker = new Sticker()
_sticker.addFile(zzbuffer); 
_sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await _sticker.start();
await vitu.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
await fs.unlinkSync(resultadoSt[0].value)
} catch(e) {
console.log(e)
await reply(`erro`);
}
break
        
case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(vitu, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(vitu, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem ou vídeo/gif com legenda \n${prefix+command} (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'figu':
if(fs.existsSync(DF_TJ)) return reply("Aguarde um momento, e realize o pedido novamente, não seja tão rápido...")
var DF_TJ = "./database/data/CVF.json"
fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ?  info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
var DFN = PUXJ[0]
DFN.sticker = {url: DFN.url}
await delay(1200)
DLT_FL(DF_TJ)
vitu.sendMessage(from, DFN)
break       
 
case 's':
case 'sticker':
try {
    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
    var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;
    if (boij && args.length == 0) {
        rane = 'bruxo.' + await getExtension(boij.mimetype);
        buffimg = await getFileBuffer(boij, 'image');
        fs.writeFileSync(rane, buffimg);
        const media = rane;
        rano = getRandom('.webp');
        await ffmpeg(`./figu/${media}`)
            .input(media)
            .on('start', function(cmd) {
                console.log(`Started : ${cmd}`);
            })
            .on('error', function(err) {
                console.log(`Error : ${err}`);
                exec(`webpmux -set exif ${addMetadata('Karen-Bot','Sr.LC')} ${rano} -o ${rano}`, async (error) => {
                    fs.unlinkSync(media);
                });
            });
        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
            fs.unlinkSync(media);
            buffer = fs.readFileSync(rano);
            vitu.sendMessage(from, {
                sticker: buffer
            }, {
                quoted: info
            });
            fs.unlinkSync(rano);
        });
    } else if (boij2 && args.length == 0 && boij2.seconds < 11) {
        rane = 'bruxo.' + await getExtension(boij2.mimetype);
        buffimg = await getFileBuffer(boij2, 'video');
        fs.writeFileSync(rane, buffimg);
        const media = rane;
        rano = getRandom('.webp');
        await ffmpeg(`./figu/${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function(cmd) {
                console.log(`Started : ${cmd}`);
            })
            .on('error', function(err) {
                console.log(`Error : ${err}`);
                exec(`webpmux -set exif ${addMetadata('Karen-Bot', 'Sr.LC')} ${rano} -o ${rano}`, async (error) => {
                    fs.unlinkSync(media);
                    tipe = media.endsWith('.mp4') ? 'video' : 'gif';
                    reply(`Falha na conversão de ${tipe} para sticker`);
                });
            });
        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
            fs.unlinkSync(media);
            buffer = fs.readFileSync(rano);
            vitu.sendMessage(from, {
                sticker: buffer
            }, {
                quoted: info
            });
            fs.unlinkSync(rano);
        });
    } else {
        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`);
    }
} catch (e) {
    reply('Ocorreu um erro');
    console.log(e);
}
break;
      
case 'toimg':
if(!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
vitu.sendMessage(from, {image: buff}, {quoted: vitin}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
reply('ERRO!!')
})
} catch {
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
}
break

//=============(LOGOS)=============\\

case 'comunismo':
case 'bolsonaro':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
vitu.sendMessage(from, {image: {url:`${site}/api/canvas/${command}?link=${link}&apikey=`+API_KEY_SHADOW}}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
} else {
reply('Selecione uma imagem para transformar. ')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_SHADOW)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro ao editar a imagem!")  
}
}
break
        
case 'lgbt':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
vitu.sendMessage(from, {image: {url:`${site}/api/canvas/gay?link=${link}&apikey=`+API_KEY_SHADOW}}, {quoted: vitin}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)
})
} else {
reply('Selecione uma imagem para transformar. ')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_SHADOW)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro ao editar a imagem!")  
}
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
vitu.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: vitin})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
vitu.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: vitin})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('- Calma ae amigo(a), já estou enviando o comando / case para você..')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
reply('❌️ Comando não encontrado! ❌️')
}
break

case 'figuemoji':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figufigun() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_emoji?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
figufigun()
}
break

case 'figuflork':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figsupup() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_flork?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
figsupup()
}
break

case 'figumemes':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function nometoque() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_memes?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
nometoque()
}
break

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidolovepartido() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_bebe?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidolovepartido()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoee() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_coreana?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoee()
}
break

case 'figufunny':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundobom() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_engracada?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundobom()
}
break

case 'figuanimais':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruim() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_animais?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruim()
}
break

case 'figudesenho':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruimeitamundoruim() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_desenho?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruimeitamundoruim()
}
break

case 'figuraiva':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorm() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_raiva?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'figuroblox':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundom() {
vitu.sendMessage(sender, { sticker: { url: `${site}/sticker/figu_roblox?apikey=`+API_KEY_SHADOW } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundom()
}
break

case 'ban': case 'banir': case 'kick': case 'b': // CASE GIGANTE NÉ? KKKKKK FODASEEEEE
    if (!isGroupAdmins && !SoDono) return reply(enviar.msg.adm);
    if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);
    let mentionedJid = menc_jid2[0];
    const messageContent = body.split(' ');
    const motivo = messageContent.slice(2).join(' ') || 'Motivo não especificado';
    if (!mentionedJid) {
        if (info.message && info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo) {
            const contextParticipant = info.message.extendedTextMessage.contextInfo.participant;
            if (contextParticipant) {
                mentionedJid = contextParticipant;
                const originalMotivo = q ? q : 'Motivo não especificado';
                const banMessage = `_*Usuário banido:*_ @${mentionedJid.split('@')[0]}\n_*Banido por:*_ @${sender.split('@')[0]}\n_*Motivo:*_ ${originalMotivo}`;
                await vitu.sendMessage(from, {
                    text: banMessage,
                    mentions: [mentionedJid, sender]
                });
                const messageId = info.message.extendedTextMessage.contextInfo.stanzaId;
                await vitu.sendMessage(from, {
                    delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: messageId,
                        participant: mentionedJid
                    }
                });
                await vitu.groupParticipantsUpdate(from, [mentionedJid], "remove");
                await vitu.sendMessage(mentionedJid, {
                    text: `${tempo} @${mentionedJid.split('@')[0]}\n\n\nParece que você foi banido(a) do grupo ${groupName} pelo(a) admin ${pushname}\nMotivo: ${originalMotivo}\n\nSe você acha que foi um mal entendido, chame o número: ${sender.split('@')[0]}\nE lembre-se: seguir as regras do grupo é essencial para evitar punições e garantir uma boa convivência com os demais`,
                    mentions: [mentionedJid]
                });
                return;
            } else {
                return reply(`*Vou remover quem, animal? Marca a mensagem da pessoa ou o @...*`);
            }
        } else {
            return reply(`*Vou remover quem, animal? Marca a mensagem da pessoa ou o @...*`);
        }
    }
    if (premium.includes(mentionedJid)) return reply(`*Não pode banir usuários vip...*`);
    if (!JSON.stringify(groupMembers).includes(mentionedJid)) return reply(`*Vou banir alguém que não tá no grupo? KKKKK*`);
    if (JSON.stringify(numerodono).indexOf(mentionedJid) >= 0) {
        vitu.groupParticipantsUpdate(from, [sender], "demote");
        reply(`*Quer banir o meu dono mesmo? Pois vai perder o adm pra deixar de ser trouxa* 😤`);
    } else if (botNumber.includes(mentionedJid)) {
        vitu.groupParticipantsUpdate(from, [sender], "demote");
        reply(`*Quer me banir mesmo? Pois vai perder o adm pra deixar de ser trouxa* 😤`);
    } else {
        const banMessage = `_*Usuário banido:*_ @${mentionedJid.split('@')[0]}\n_*Banido por:*_ @${sender.split('@')[0]}\n_*Motivo:*_ ${motivo}`;
        await vitu.sendMessage(from, {
            text: banMessage,
            mentions: [mentionedJid, sender]
        });
        if (info.message && info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo) {
            const messageId = info.message.extendedTextMessage.contextInfo.stanzaId;
            await vitu.sendMessage(from, {
                delete: {
                    remoteJid: from,
                    fromMe: false,
                    id: messageId,
                    participant: mentionedJid
                }
            });
        }
        await vitu.groupParticipantsUpdate(from, [mentionedJid], "remove");
        await vitu.sendMessage(mentionedJid, {
            text: `${tempo} @${mentionedJid.split('@')[0]}\n\n\nParece que você foi banido(a) do grupo ${groupName} pelo(a) admin ${pushname}\nMotivo: ${motivo}\n\nSe você acha que foi um mal entendido, chame o número: ${sender.split('@')[0]}\nE lembre-se: seguir as regras do grupo é essencial para evitar punições e garantir uma boa convivência com os demais`,
            mentions: [mentionedJid]
        });
    }
break;
      
case 'promover': case 'p':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply(`*Vou promover quem, animal? Marca a mensagem da pessoa ou o @...*`)
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply(`*Vou promover alguém q não tá no grupo? KKKKK*`)
vitu.sendMessage(from, {text: `*Parabéns @${menc_os2.split("@")[0]} agora você é adm do grupo 🥳*`, mentions: [menc_os2]})
vitu.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': case 'r':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(premium.includes(menc_os2)) return reply(`*Não pode rebaixar usuários vip...*`)
if(!menc_os2 || menc_jid2[1]) return reply(`*Vou rebaixar quem, animal? Marca a mensagem da pessoa ou o @...*`)
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply(`*Vou rebaixar alguém q não tá no grupo? KKKKK*`)
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) {
vitu.groupParticipantsUpdate(from, [sender], "demote")
reply(`*Quer tirar o adm do meu dono mesmo? Pois vai ficar sem pra deixar de ser trouxa* 😤`)
} else if(botNumber.includes(menc_os2)) {
vitu.groupParticipantsUpdate(from, [sender], "demote")
reply(`*Quer tirar o meu adm mesmo? Pois vai ficar sem pra deixar de ser trouxa* 😤`)
} else {
vitu.sendMessage(from, {text: `*Ala @${menc_os2.split("@")[0]} kkkkkk virou membro comum*`, mentions: [menc_os2]})
vitu.groupParticipantsUpdate(from, [menc_os2], "demote")
}
break
 
case 'getfile':
if (!SoDono) return reply(enviar.msg.donosmt)
const arquivoTipo = args[0].split('.').pop()
const NomeArquivo = args[0].split('/').pop()
if (!q) return reply('Adicione o local do arquivo ex: ./index.js');
reply(`Ok, irei enviar o arquivo ${q} no seu privado.`)
try {
vitu.sendMessage("5521971983758@s.whatsapp.net", { document: fs.readFileSync(args[0]), fileName: NomeArquivo, mimetype: arquivoTipo }, { quoted: info })
} catch (error) {
reply('Ocorreu um erro ao ler o arquivo.')  }
break
        
case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `*🎉Parabéns, por ganhar o sorteio*\n\nPremio: ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `Vencedor: @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
vitu.sendMessage(from, {text: `${teks}`, mentions: [d]})
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
vitu.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'sorteionumero':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//==========(TTPS/ATTP)============\\

case 'ttp':
if (!q) return reply(`Coloque o texto que você quiser!\n- Por exemplo: ${prefix + command} Shadow Domina`)
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `${site}/api/ttp?texto=${string}&apikey=`+API_KEY_SHADOW
sendStickerFromUrl(from, post, {quoted: vitin}).catch(e => {
reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`)  
})
break

case 'attp':
if(!q.trim()) return reply(`Cadê o texto para eu criar a figurinha?\n\n*Exemplo: ${prefix+command} ${NickDono} Domina*`);
reply(enviar.espere)
vitu.sendMessage(from, {sticker: {url: `${site}/api/attp?texto=${q}&apikey=`+API_KEY_SHADOW}}, {quoted: info}).catch(e => {
return reply(`Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`);
})
break;
//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!isPremium) return reply(enviar.msg.premium)
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas.\n*Exemplo:* ${prefix+command} Shadow Bot`);
axios.get(`${site}/api/fazernick?nome=${nick}&apikey=`+API_KEY_SHADOW)
.then(dados => {
var emoji = `🔮`
nicks = dados.data
txt = '💈 Nicks Gerados Com Sucesso!💈\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Acho que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas!") 
}
}
break

case 'chance':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)  
var avb = body.slice(7)
if(args.length < 1) return vitu.sendMessage(from, {text: `*Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Brasil ser Hexa*`}, {quoted: vitin})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
vitu.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: vitin})
break

case 'nazista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function nazistaMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é nazista?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de nazista é: ❰ ${random}% ❱*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de nazista: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
nazistaMsg()
break
        
case 'infiel':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function InfielMsg() {
random = `${Math.floor(Math.random() * 110)}`
traic = random
infiel = random
if(infiel <= 15 ) {var trai = 'Parabéns, você é fiel 👏👏'}
else if(infiel == 16 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 17 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 18 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 19 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 20 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 21 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 22 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 23 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 24 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 25 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 26 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 27 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 28 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 29 ) {var trai = 'tenho minha desconfiança 🤨'}
else if(infiel == 30 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 31 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 32 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 33 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 34 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 35 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 36 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 37 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 38 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 39 ) {var trai = 'você é infiel as vezes...😶'}
else if(infiel == 40 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 41 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 42 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 43 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 44 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 45 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 46 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 47 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 48 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 49 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 50 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 51 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 52 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 53 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 54 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 55 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 56 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 57 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 58 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 59 ) {var trai = 'você é viciado(a) em trair 🫣'}
else if(infiel == 60 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 61 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 62 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 63 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 64 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 65 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 66 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 67 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 68 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 69 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 70 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 71 ) {var trai = 'que isso, quer bater o record de traição? 😳'}    
else if(infiel == 72 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 73 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 74 ) {var trai = 'que isso, quer bater o record de traição? 😳'}     
else if(infiel == 75 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 76 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 77 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 78 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 79 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 80 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 81 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 82 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 83 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel == 84 ) {var trai = 'que isso, quer bater o record de traição? 😳'}
else if(infiel >= 85 ) {var trai = 'vish... você é tão fiel quanto o neymar...'}
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é infiel?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de infiel é: ❰ ${random}% ❱*\n\n*${trai}*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de infiel: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
InfielMsg()
break
        
case 'gay':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function gayMsg() {
random = `${Math.floor(Math.random() * 110)}`
boiolakjk = random
boiola = random
if(boiola <= 15 ) {var bo = 'hmm... você é hetero 🤷‍♂️'}
else if(boiola == 16 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 17 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 18 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 19 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 20 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 21 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 22 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 23 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 24 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 25 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 26 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 27 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 28 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 29 ) {var bo = 'tenho minha desconfiança... 🤔'}
else if(boiola == 30 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 31 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 32 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 33 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 34 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 35 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 36 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 37 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 38 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 39 ) {var bo = '+/- boiola 🤭'}
else if(boiola == 40 ) {var bo = 'você é né? 😏'}
else if(boiola == 41 ) {var bo = 'você é né? 😏'}
else if(boiola == 42 ) {var bo = 'você é né? 😏'}
else if(boiola == 43 ) {var bo = 'você é né? 😏'}
else if(boiola == 44 ) {var bo = 'você é né? 😏'}
else if(boiola == 45 ) {var bo = 'você é né? 😏'}
else if(boiola == 46 ) {var bo = 'você é né? 😏'}
else if(boiola == 47 ) {var bo = 'você é né? 😏'}
else if(boiola == 48 ) {var bo = 'você é né? 😏'}
else if(boiola == 49 ) {var bo = 'você é né? 😏'}
else if(boiola == 50 ) {var bo = 'você é né? 😏'}
else if(boiola == 51 ) {var bo = 'você é né? 😏'}
else if(boiola == 52 ) {var bo = 'você é né? 😏'}
else if(boiola == 53 ) {var bo = 'você é né? 😏'}
else if(boiola == 54 ) {var bo = 'você é né? 😏'}
else if(boiola == 55 ) {var bo = 'você é né? 😏'}
else if(boiola == 56 ) {var bo = 'você é né? 😏'}
else if(boiola == 57 ) {var bo = 'você é né? 😏'}
else if(boiola == 58 ) {var bo = 'você é né? 😏'}
else if(boiola == 59 ) {var bo = 'você é né? 😏'}
else if(boiola == 60 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 61 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 62 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 63 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 64 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 65 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 66 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 67 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 68 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 69 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 70 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 71 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 72 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 73 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 74 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 75 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 76 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 77 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 78 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 79 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 80 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 81 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 82 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 83 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola == 84 ) {var bo = 'é gay, mas a família não aceita 😬🌈'}
else if(boiola >= 85 ) {var bo = 'gay assumido, vive soltando a franga por todo lugar que passa 💃🏳️‍🌈'}
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é gay?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de gay é: ❰ ${random}% ❱*\n\n*${bo}*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de gay: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
gayMsg()
break

case 'gostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function gostosoMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é gostoso?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de gostoso é: ❰ ${random}% ❱*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de gostoso: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
gostosoMsg()
break
   
case 'feio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function feioMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é feio?*\n\n*「 @${sender_ou_n.split("@")[0]} 」seu nível de feio é: ❰ ${random}% ❱*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de feio: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
feioMsg()
break

case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function gostosaMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é gostosa? 😏*\n\n*「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de gostosa: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
gostosaMsg()
break
        
case 'corno':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function cornoMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é corno?*\n\n*「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de corno: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
cornoMsg()
break

case 'gado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
async function gadoMsg() {
random = `${Math.floor(Math.random() * 110)}`
var vitukjk = [
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ▒▒▒▒▒▒▒▒▒▒》0%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █▒▒▒▒▒▒▒▒▒》10%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██▒▒▒▒▒▒▒▒》20%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███▒▒▒▒▒▒▒》30%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████▒▒▒▒▒▒》40%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████▒▒▒▒▒》50%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ██████▒▒▒▒》60%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ███████▒▒▒》70%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 ████████▒▒》80%*`,
`*𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊𝚗𝚍𝚘...*\n*《 █████████▒》90%*`,
`*𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘*\n*《 ██████████》100%*`,
`*O quanto você é gado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂*`
]
let { key } = await vitu.sendMessage(from, {text: `*❰Pesquisando a sua ficha de gado: 「 @${sender_ou_n.split("@")[0]} 」 aguarde...  ❱*`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], mentions: [sender_ou_n], edit: key });
}, 1500)
}
gadoMsg()
break

case 'morte':
case 'death':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if (args.length == 0) return await reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com o nome “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
vitu.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: vitin})
break;						
				
case 'matar':
case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
vitu.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: vitin})
break 

case 'beijo': case 'beijar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
vitu.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso em @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: vitin})
break

case 'biografia':
try {
var status = await (await vitu.fetchStatus(sender_ou_n)).status
} catch {
var status = "Privado ou inexistente."
}
reply(status)
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('*marque alguém que você quer da um tapa na raba, a mensagem ou o @*')
vitu.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você Acabou de da um tapa na raba de😏 @${menc_os2.split('@')[0]} 🔥`, mentions: [menc_os2]}, {quoted: vitin})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar um chute, a mensagem ou o @')
vitu.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você Acabou de dar um chute em @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2]}, {quoted: vitin})
break

case 'shippar':
if(!menc_jid2) return reply('Marque uma pessoa do grupo para encontrar o par dela')
mention(`*Hmmm.... @${menc_os2.split("@")[0]} eu shipo você com:* @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}`)
break

case 'casal':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ne esse\n2= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ncom uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `
*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `
*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}
Mensagens encaminhadas: ${blue[i].messages}
Comandos executados: ${blue[i].cmd_messages}

Figurinhas enviadas: ${blue[i].figus}\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\nMensagens enviadas: ${bule[i].messages}\nComandos executados: ${bule[i].cmd_messages}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]} no grupo: ${groupName}\n\nMensagens encaminhadas: ${RSM_CN.messages}\nComandos executados: ${RSM_CN.cmd_messages}\nFigurinhas encaminhadas: ${RSM_CN.figus}`, [menc_os2], true)
} else {
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]} no grupo: ${groupName}\n\nMensagens enviadas no grupo: 0\nComandos executados no grupo: 0\nFigurinhas enviadas no grupo: 0`, [menc_os2], true)
}
break

case 'rankgay':
case 'rankgays':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `*🤖RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ]🏳‍🌈*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `RANK DOS 5 MAIS CORNO DO GRUPO 🐂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
ABC = `RANK DOS 5 MAIS GOSTOSOS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
ABC = `RANK DAS 5 MAIS GOSTOSAS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostosa);
break;

case 'ranknazista':
case 'ranknazistas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku':
case 'rankotakus':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modo-gamer 1 ativado, para desativar só basta utilizar ${prefix}modo-gamer 0`)
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`
TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até `, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳"]
for (var i = 0; i < 5; i++) {
ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta\nExemplo: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return reply(enviar.msg.modobn)
d = []
teks = `- Estou mencionando quem é *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
vitu.sendMessage(from, {text: chatMove}, {quoted: vitin,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = `Vitória do ${pushname}`
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\n${pushname} jogou: ${args}\n\n${tes}`)
break

case 'anagrama':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('Use 1 para ativar / 0 para desativar')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/games/anagrama/${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/games/anagrama/${from}.json`))
reply(`O jogo já foi iniciado neste grupo:
Anagrama: ${dataAnagrama2.embaralhada}
Uma dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./armor/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
vitu.sendMessage(from, {text: `╭━━ ⪩「 Descubra a palavra 」
▢ ⌁ ⚠︎ Anagrama: ${palavrasANA[anaaleatorio].embaralhada}
▢ ⌁ ⚠︎ Dica: ${palavrasANA[anaaleatorio].dica}
╰━━━ ⪨`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/games/anagrama/${from}.json`)) return reply('Não tem como desativar o jogo do anagrama pois ele não foi ativado')
fs.unlinkSync(`./armor/games/anagrama/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'quizanimais':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply('Use 1 para ativar / 0 para desativar')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./armor/games/quiz-animais/${from}.json`))
imagemtexto = `╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ *Jogador:* ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${superrttrr.foto}`)   
await vitu.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: vitin})
} else {
fs.writeFileSync(`./armor/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto = `╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ *Jogador:* ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)  
await vitu.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: vitin})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/games/quiz-animais/${from}.json`)) return reply('Não tem como desativar o jogo pois ele não foi ativado')
fs.unlinkSync(`./armor/games/quiz-animais/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma': // Victor Developer - vitu
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar / 0 para desativar')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./armor/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${SAB_SAB_ENI.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await vitu.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: vitin})
} else {
fs.writeFileSync(`./armor/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await vitu.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: vitin})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pois ele não foi ativado.')
fs.unlinkSync(`./armor/games/enigma/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'revelarresposta': 
case 'revelar_resposta':  
if (!isGroupAdmins) return reply('Somente adms!')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/games/gartic/${from}.json`))
reply(`👤 Olá *${pushname}*, a resposta correta da afirmação era: ${dataAnagramaa.resposta}
📍 Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
case 'revelar_enigma':  
if (!isGroupAdmins) return reply('Somente adms!')
let enifmaaaaaa = JSON.parse(fs.readFileSync(`./armor/games/enigma/${from}.json`))
reply(`👤 Olá *${pushname}*, a resposta correta do enigma era: ${enifmaaaaaa.respostaEne}
📍 Envie a resposta apresentada acima para passar a próxima..`)
break

case 'cassino':
const soto = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍇 : 🍇 : 🍇', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🍊', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']		  
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "*Uhul, você ganhou! Que sorte, hein? Que tal jogar mais uma vez?*"
} else {
var Vitória = "*Que pena, você perdeu... Mas não desista, você pode tentar novamente.*"
}
async function loadcass() {
var vitukjk = [
`🍊 : 🍒 : 🍒`, //by: vitu
`🔔 : 🔔 : 🍇`,
`🍊 : 🍋 : 🍒`, //by: vitu
`🔔 : 🔔 : 🍇`,
`🍐 : 🔔 : 🔔`, //by: vitu
`🍇 : 🍇 : 🍇`,
`🍊 : 🍒 : 🍒`, //by: vitu
`🍊 : 🍋 : 🔔`,
`🔔 : 🍐 : 🍇`, //by: vitu
`🍊 : 🍋 : 🍒`,
`🍌 : 🍌 : 🍌`, //by: vitu
`🔔 : 🔔 : 🍇`,
`🍊 : 🍋 : 🍒`, //by: vitu
`🍊 : 🍒 : 🍐`,
`🍋 : 🍋 : 🍌`, //by: vitu
`🍐 : 🔔 : 🔔`,
`🍒 : 🍒 : 🍒`, //by: vitu
`🍐 : 🍒 : 🍋`,
`🍌 : 🍒 : 🔔`, //by: vitu
`🍒 : 🔔 : 🍊`,
`🍊 : 🍋 : 🍒`, //by: vitu
`🍐 : 🔔 : 🔔`,
`*➬ Resultado da Roleta -* ${somtoy2}\n\n${Vitória}`
]
let { key } = await vitu.sendMessage(from, {text: '*🍊 : 🍒 : 🍐*'})
for (let i = 0; i < vitukjk.length; i++) 
await vitu.sendMessage(from, {text: vitukjk[i], edit: key });
}
loadcass()
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = await fetch(qviado).then(v => v.buffer())
vitu.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
break

//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
vitu.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
vitu.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: vitin })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
vitu.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: vitin })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
vitu.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: vitin})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break



//==========(EFEITOS-MARCAR)==========\\


case 'togif': 
if(!isQuotedSticker) return reply("voce precisa marcar uma figurinha animada para que eu possa converter ela em gif...")
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./armor/sticker/convert.webp", getBufferWebP);
const { FiguMp4OuGif } = require('./armor/sticker/togif.js');
outputFile = "./armor/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile)
reply(`Convertendo a figurinha para o formato gif, aguarde.`)
await vitu.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: `sticker.gif`}, {quoted: vitin}).catch(async(error) => {
await reply("Ocorreu um erro. Por favor, tente novamente")
await DLT_FL(outputFile);
console.log(error)
});
}} catch(error) {
await reply("Ocorreu um erro. Por favor, tente novamente");
console.log(error)
};
break
        
case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
vitu.sendMessage(nmrdn, {text: `Foi enviado um convite para o bot entrar neste grupo.\nNúmero dele(a) : wa.me/${sender.split("@")[0]}\n\nLink-Grupo: ${cnvt}\n\nPara me autorizar a entrar no grupo, use o seguinte comando: ${prefix}entrar e o link do grupo enviado em cima.\nExemplo : ${prefix}entrar ${cnvt}\n\nPara recursar ou avisar o usuário que enviou o link que o convite foi recusado, use: ${prefix}recusar e número do usuário.\nExemplo : ${prefix}recusar ${sender.split("@")[0]}`})
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
vitu.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá! Sinto muito dizer mas, seu convite foi recusado.`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
vitu.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está lotado')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break   
        
case 'nome':
case 'nome2':
case 'cpf':
case 'tel':
case 'tel2':
case 'placa': 
case 'placa2':
case 'score':
if(!isModoPuxada) return reply(`O modo puxadas precisa estar ativo para usar este comando`)
if(!isPremium) return reply(enviar.msg.premium)
if (!q) return reply('TIPO DE CONSULTA INVÁLIDA!')
try {
puxadasFds()
} catch {
reply(`_*❌️ Erro ao consultar. ❌*_\n\n*Talvez a api tenha caído ou acabou os requests... tente novamente mais tarde*`)
}
break
        
case 'gerar-cc':
if(!isPremium) return reply(enviar.msg.premium)
if (!q) return reply(`Epa! Como eu vou gerar os cartões sem uma Bin?`)
try {
vituPuxadas = await fetchJson(`http://br1.bronxyshost.com:4244/api/gerar-cc?query=${q}&apitoken=`+SHADOW_CONSULTAS)
reply(vituPuxadas.resultado)
} catch {
reply(`_*❌️ Erro ao consultar. ❌*_\n\n*Talvez a api tenha caído ou acabou os requests... tente novamente mais tarde*`)
}
break
        
case 'modopuxadas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModoPuxada) return reply('O modo puxadas já está ativo.')
dataGp[0].puxadas = true
setGp(dataGp)
reply('✔️ Ativou com sucesso o recurso de Modo Puxadas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModoPuxada) return reply('O modo Puxadas já está desativado.')
dataGp[0].puxadas = false
setGp(dataGp)
reply('✔️ Desativou com sucesso o recurso de Modo Puxadas neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break
        
case 'cep': case 'scep':
if(!isPremium) return reply(enviar.msg.premium) 
var query = args.join(" ")
if (!query) return reply(`Cadê o cep?`)
try {
res = await fetchJson(`${site}/api/cep?code=${query}&apikey=`+API_KEY_SHADOW)
reply(`🏠 *Consulta CEP:*\n\n*Número informado:* ${res.cep}\n*Logradouro:* ${res.street}\n*Complemento:* Não encontrado.\n*Código do DDD:* ${res.ddd}\n*Bairro:* ${res.neighborhood}\n*Cidade/Estado:* ${res.city} - ${res.state}\n*Código do IBGE:* ${res.ibge}\n*Código do Siafi:* ${res.siafi}`)
} catch {
reply(`_*❌️ Erro ao consultar. ❌*_`)
}
break

case 'cnpj':
if(!isPremium) return reply(enviar.msg.premium) 
if (q.length < 14 || q.length > 14) return reply(`O cnpj informado está inválido, insira um com o máximo de 14 dígitos.`)
if (!q) return reply(`*Exemplo:* ${prefix+command} 27865757000102`)
reply(`*Estou realizando a consulta de dados*, aguarde um momento daqui uns segundos estarei enviando o resultado.`)
try {
anu = await fetchJson(`${site}/puxar?type=api_${command}&q=${q}&apikey=`+TOKEN_CONSULTAS)
reply(anu.resultado)
} catch {
reply(mess.error)
}
break

case 'bin':
if(!isPremium) return reply(enviar.msg.premium) 
if (q.length < 6 || q.length > 6) return reply(`O bin informado está inválido, insira um com o máximo de 6 dígitos.`)
if (!q) return reply(`*Exemplo:* ${prefix+command} 000000`)
reply(`*Estou realizando a consulta de dados*, aguarde um momento daqui uns segundos estarei enviando o resultado.`)
try {
anu = await fetchJson(`${site}/puxar?type=api_bin&q=${q}&apikey=`+TOKEN_CONSULTAS)
reply(anu.resultado)
} catch {
reply(mess.error)
}
break  
        
case 'gbuzon':
if(!isPremium) return reply(enviar.msg.premium)
textobuzon = "• ```Números gerados com sucesso:```\n*Obs:* Os números são gerados de forma aleatória, então alguns não podem estar disponíveis no WhatsApp.\n–\n"
for (let i = 0; i < args[1]; i++) {
const numerobuzon = args[0].replace(/x/g, () => Math.floor(Math.random() * 10));
textobuzon += "   ```Número:``` wa.me/"+numerobuzon+"\n–\n"
}
await reply(textobuzon)
break
        
case 'casar':
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isPremium) return reply(enviar.msg.premium)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque a pessoa que você quer pedir em casamento, a mensagem ou o @')
if(!SoDono && menc_os2.includes(botNumber)) return reply("*Eu sou um robô. Eu não caso, idiota kkkk*")
//usuário marcado foi pedido em casamento por outra pessoa
if(JSON.stringify(casamento2).includes(menc_os2)) {
  L1 = casamento2.map(i => i.id).indexOf(menc_os2)
  L2 = casamento1.map(i => i.usu1).indexOf(`${casamento2[L1].pedido}@s.whatsapp.net`)
  if(casamento1[L2].casados == false) {
    casamento1.splice(L2, 1)
    fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
  }
  casamento2.splice(L1, 1)
  fs.writeFileSync("./database/func/casamento2.json", JSON.stringify(casamento2, null, 2))
}
//usuário marcado pediu alguém em casamento
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == false) return reply(`Essa pessoa já pediu alguém em casamento... Sinto muito ${pushname} 😕`)
//usuário marcado já está casado
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == true) { reply(`Não será possível pedir essa pessoa em casamento... Pois a mesma é casada`)
return vitu.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, {text: `Oh, uma pessoa no grupo ${groupName} chamada @${sender.split(`@`)[0]} tá querendo te talaricar... Se eu fosse você, teria uma conversa muito séria com @${menc_os2.split("@")[0]} 😶`, mentions: [`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, sender, menc_os2]})
}
//pedido em andamento
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == false) return mention(`Você já pediu para se casar com @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}... Aguarde retorno ou use ${prefix}cancelar`)
//se o usuário já estiver casado
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == true) { mention(`Você já se casou com @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2} 🤨`)
return vitu.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}@s.whatsapp.net`, {text: `Aí, queria falar nada não mas... @${sender.split('@')[0]} tá pedindo @${menc_os2.split("@")[0]} em casamento no grupo ${groupName} kkkk avalia esse chifre aí`, mentions: [sender, menc_os2]})
}
casamento1.push({
usu1: sender,
usu2: menc_os2.split('@')[0],
casados: false,
idgp: from,
contS: 0,
contM: 0,
hora: 0,
minuto: 0,
segundo: 0,
dia: 0,
contD1: 0,
contD2: 0,
mês: 0,
contM1: 0,
contM2: 0,
ano: 0,
contA1: 0,
contA2: 0
})
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./database/func/casamento2.json", JSON.stringify(casamento2))
vitu.sendMessage(from, {audio: {url:'./database/audios/casal.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
vitu.sendMessage(from, {video: {url: `https://telegra.ph/file/75499a498bfe8b03fab0e.mp4`}, gifPlayback: true, caption: ` ${tempo.toUpperCase()}
⇒ @${menc_os2.split('@')[0]}

${pushname} está te pedindo em casamento... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar 🫴🏽💍`, mentions: [menc_os2]})
break

case 'cancelar':
if(!JSON.stringify(casamento1).includes(sender)) return reply("Não há pedido de casamento para cancelar...")
C13 = casamento1.map(i => i.usu1).indexOf(sender)
C15 = casamento2.map(i => i.id).indexOf(casamento1[C13].usu2 + "@s.whatsapp.net")
if(casamento1[C13].casados == true) return reply(`Não é possível cancelar o pedido de casamento depois de aceito...\n\nMas você pode se divorciar usando ${prefix}divorciar`)
casamento1.splice(C13, 1)
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C15, 1)
fs.writeFileSync("./database/func/casamento2.json", JSON.stringify(casamento2))
reply("Pedido de casamento cancelado com sucesso 😕")
break

case 'divorcio':
case 'divorciar':
if(!JSON.stringify(casamento1).includes(sender)) return reply(`Você ainda não se casou com ninguém... Sinto muito 😕`)
if(Number(args[0]) === 1) {
D1 = casamento1.map(i => i.usu1).indexOf(sender)
D2 = casamento1.map(i => i.usu1).indexOf(casamento1[D1].usu2 + "@s.whatsapp.net")
if(casamento1[D1].casados == false) return reply(`Você não se casou com ninguém ainda... Mas pode usar ${prefix}cancelar caso tenha pedido alguém em casamento e deseja cancelar o pedido`)
casamento1.splice(D2, 1)
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento1.splice(D1, 1)
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
reply(`Divórcio efetuado com sucesso... 💔`)
} else {
reply(`Tem certeza disso ${pushname}? Se estiver mesmo disposto a terminar com seu par, use ${prefix+command} 1`)
}
break
        
case 'dupla':
if(!JSON.stringify(casamento1).includes(sender)) return reply(`Você ainda não se casou com ninguém... Mas pode usar ${prefix}casar @pessoa para se casar com alguém`)
reagir(from, "❤️‍🩹")
D1 = casamento1.map(i => i.usu1).indexOf(sender)
if(casamento1[D1].casados == false) return reply(`A pessoa quem você pediu em casamento, não aceitou o pedido ainda... Portanto, não é possível consultar os dados da dupla, até que a mesma aceite o pedido 😶‍🌫️`)
vitu.sendMessage(from, {audio: {url:'./database/audios/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
hc = moment.tz('America/Sao_Paulo').format('HH')
mc = moment.tz('America/Sao_Paulo').format('mm')
sc = moment.tz('America/Sao_Paulo').format('ss')
dc = moment.tz('America/Sao_Paulo').format('DD')
mmc = moment.tz('America/Sao_Paulo').format('MM')
ac = moment.tz('America/Sao_Paulo').format('YY')
if(casamento1[D1].contS < 60) tempoC = `aproximadamente ${casamento1[D1].contS} segundo${casamento1[D1].contS > 1 ? "s" : ""}`
if(casamento1[D1].contS >= 60) tempoC = `aproximadamente ${Number(casamento1[D1].contS / 60).toFixed(0)} minuto${casamento1[D1].contS > 120 ? "s" : ""}`
if(casamento1[D1].contS >= 3600) tempoC = `aproximadamente ${Number(casamento1[D1].contS / 3600).toFixed(0)} hora${casamento1[D1].contS > 7200 ? "s" : ""}`
if(casamento1[D1].contD1 >= 1) tempoC = `${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
if(casamento1[D1].contM1 >= 1) tempoC = `${casamento1[D1].contM1} m${casamento1[D1].contM1 > 1 ? "eses" : "ês"}`
if(casamento1[D1].contA1 >= 1) tempoC = `${casamento1[D1].contA1} ano${casamento1[D1].contA1 > 1 ? "s" : ""}`
try {
logocasal = await vitu.profilePictureUrl(`${casamento1[D1].usu2}@c.us`, 'image')
} catch {
logocasal = `https://telegra.ph/file/80629b945151f15851196.jpg`
}
if(casamento1[D1].contD1 > 0) {
if(casamento1[D1].contM1 > 0) {
if(casamento1[D1].contA1 > 0) {
dataespecial = tempoC + `, ${casamento1[D1].contM1} m${casamento1[D1].contM1 > 1 ? "eses" : "ês"} e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
} else {
dataespecial = tempoC + ` e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
}
} else {
dataespecial = `${tempoC} ${casamento1[D1].contA1 > 0 ? `e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}` : ``}`
}
} else {
dataespecial = tempoC
}
if(casamento1[D1].contM1 > 0) {
if(Number(casamento1[D1].dia) === Number(dc)) {
if(Number(casamento1[D1].mês) === Number(mmc) && casamento1[D1].contA1 > 0) {
birthday = `💖😍 Feliz aniversário\n`
} else {
birthday = `✨🥳 Feliz aniversário\n`
}
} else {
birthday = ``
}
} else {
birthday = ``
}
txt = `
💕 Matrimônio entre ↴
『😍』@${casamento1[D1].usu1.split('@')[0]}
 &
〘❤️‍🩹〙@${casamento1[D1].usu2}
Casados a ${dataespecial}
${birthday}
---------------------------------------------------------
📆⃤ Casados em ${casamento1[D1].dia < 10 ? `0${casamento1[D1].dia}` : casamento1[D1].dia}/${casamento1[D1].mês < 10 ? `0${casamento1[D1].mês}` : casamento1[D1].mês}/20${casamento1[D1].ano}
`
mencionarIMG(txt, logocasal)
break
        
case 'amador':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { amador } = require("./Shadow_Nsfw/AmadorVideo/Amador.js")
var Shadow_Nsfw = amador[Math.floor(Math.random()*amador.length)]
vitu.sendMessage(sender, {video: {url: Shadow_Nsfw}, caption: `*🔞Vídeo Amador🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
   
case 'onlyfans':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { onlyfans } = require("./Shadow_Nsfw/OnlyVideo/Onlyfans.js")
var Shadow_Nsfw = onlyfans[Math.floor(Math.random()*onlyfans.length)]
vitu.sendMessage(sender, {video: {url: Shadow_Nsfw}, caption: `*🔞Onlyfans Vídeo🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
     
case 'porno':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { PornoVid } = require("./Shadow_Nsfw/PornoVideo/PornoVid.js")
var Shadow_Nsfw = PornoVid[Math.floor(Math.random()*PornoVid.length)]
vitu.sendMessage(sender, {video: {url: Shadow_Nsfw}, caption: `*🔞Pornô Vídeo🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
     
case 'egirlvideo':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { EgirlVid } = require("./Shadow_Nsfw/EgirlVideo/EgirlVid.js")
var Shadow_Nsfw = EgirlVid[Math.floor(Math.random()*EgirlVid.length)]
vitu.sendMessage(sender, {video: {url: Shadow_Nsfw}, caption: `*🔞Egirl Vídeo🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'aline':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Aline } = require("./Shadow_Nsfw/AlineFaria/Aline.js")
var Shadow_Nsfw = Aline[Math.floor(Math.random()*Aline.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Aline Faria🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'alifox':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { AlineFx } = require("./Shadow_Nsfw/AlineFox/AlineFx.js")
var Shadow_Nsfw = AlineFx[Math.floor(Math.random()*AlineFx.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Aline Fox🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
    
case 'alycia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Alycia } = require("./Shadow_Nsfw/AlyciaRibeiro/Alycia.js")
var Shadow_Nsfw = Alycia[Math.floor(Math.random()*Alycia.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Alycia Ribeiro🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'amichan':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Amiichan } = require("./Shadow_Nsfw/Amiichan/Amiichan.js")
var Shadow_Nsfw = Amiichan[Math.floor(Math.random()*Amiichan.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Amiichan🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'aninha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Aninha } = require("./Shadow_Nsfw/AninhaLopes/Aninha.js")
var Shadow_Nsfw = Aninha[Math.floor(Math.random()*Aninha.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Aninha Lopes🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
  
case 'victoria':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Victoria } = require("./Shadow_Nsfw/VictoriaMatoso/Victoria.js")
var Shadow_Nsfw = Victoria[Math.floor(Math.random()*Victoria.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Victoria Matoso🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'belle':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Belle } = require("./Shadow_Nsfw/BelleDelphine/Belle.js")
var Shadow_Nsfw = Belle[Math.floor(Math.random()*Belle.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Belle Delphine🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'brenda':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Brenda } = require("./Shadow_Nsfw/BrendaTrindade/Brenda.js")
var Shadow_Nsfw = Brenda[Math.floor(Math.random()*Brenda.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Brenda Trindade🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
  
case 'cami':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Cami } = require("./Shadow_Nsfw/CamiBrito/Cami.js")
var Shadow_Nsfw = Cami[Math.floor(Math.random()*Cami.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Cami Brito🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
   
case 'clowniac':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Clowniac } = require("./Shadow_Nsfw/Clowniac/Clowniac.js")
var Shadow_Nsfw = Clowniac[Math.floor(Math.random()*Clowniac.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Clowniac🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'feh':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Feh } = require("./Shadow_Nsfw/FehGalvao/Feh.js")
var Shadow_Nsfw = Feh[Math.floor(Math.random()*Feh.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Feh Galvão🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
  
case 'giovanna':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Giovanna } = require("./Shadow_Nsfw/GiovannaCampomar/Giovanna.js")
var Shadow_Nsfw = Giovanna[Math.floor(Math.random()*Giovanna.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Giovanna Campomar🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
        
case 'isadora':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Isadora } = require("./Shadow_Nsfw/IsadoraMartinez/Isadora.js")
var Shadow_Nsfw = Isadora[Math.floor(Math.random()*Isadora.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Isadora Martinez🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'isa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Isa } = require("./Shadow_Nsfw/IsaWaifu/Isa.js")
var Shadow_Nsfw = Isa[Math.floor(Math.random()*Isa.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Isa Waifu🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'lay':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Lay } = require("./Shadow_Nsfw/LayMuniz/Lay.js")
var Shadow_Nsfw = Lay[Math.floor(Math.random()*Lay.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Lay Muniz🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'leticia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Leticia } = require("./Shadow_Nsfw/LeticiaShirayuki/Leticia.js")
var Shadow_Nsfw = Leticia[Math.floor(Math.random()*Leticia.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Letícia Shirayuki🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'marina':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Marina } = require("./Shadow_Nsfw/MarinaMui/Marina.js")
var Shadow_Nsfw = Marina[Math.floor(Math.random()*Marina.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Marina Mui🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
     
case 'maru':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Maru } = require("./Shadow_Nsfw/MaruKarv/Maru.js")
var Shadow_Nsfw = Maru[Math.floor(Math.random()*Maru.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Maru Karv🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
    
case 'princesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Princesa } = require("./Shadow_Nsfw/McPrincesa/Princesa.js")
var Shadow_Nsfw = Princesa[Math.floor(Math.random()*Princesa.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Mc Princesa🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break   
     
case 'meladinha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Me1adinha } = require("./Shadow_Nsfw/Meladinha/Meladinha.js")
var Shadow_Nsfw = Me1adinha[Math.floor(Math.random()*Me1adinha.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Me1adinha🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'nath':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Nath } = require("./Shadow_Nsfw/NathBister/Nath.js")
var Shadow_Nsfw = Nath[Math.floor(Math.random()*Nath.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Nath🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break

case 'nega':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Nega } = require("./Shadow_Nsfw/NegaBarbie/Nega.js")
var Shadow_Nsfw = Nega[Math.floor(Math.random()*Nega.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Nega Barbie🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
       
case 'polonesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Polonesa } = require("./Shadow_Nsfw/PolonesaDoHype/Polonesa.js")
var Shadow_Nsfw = Polonesa[Math.floor(Math.random()*Polonesa.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Polonesa Do Hype🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
        
case 'rute':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Rute } = require("./Shadow_Nsfw/RuteRocha/Rute.js")
var Shadow_Nsfw = Rute[Math.floor(Math.random()*Rute.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Rute Rocha🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
        
case 'celestine':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Celestine } = require("./Shadow_Nsfw/VitaCelestine/Celestine.js")
var Shadow_Nsfw = Celestine[Math.floor(Math.random()*Celestine.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Vita Celestine🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
     
case 'carnie':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { Carniello } = require("./Shadow_Nsfw/Carniello/Carniello.js")
var Shadow_Nsfw = Carniello[Math.floor(Math.random()*Carniello.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Carniello🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
        
case 'gotica':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
if(!isPremium) return reply(enviar.msg.premium)
reagir(from, "😈")
reply(`${isGroup ? "*Olha o PV rsrs...*" : "Enviando"} 👀🔥`)
const { GoticaFT } = require("./Shadow_Nsfw/GoticaFoto/Gotica.js")
var Shadow_Nsfw = GoticaFT[Math.floor(Math.random()*GoticaFT.length)]
vitu.sendMessage(sender, {image: {url: Shadow_Nsfw}, caption: `*🔞Gótica Foto🔞*\n*By: ${NomeDoBot} And ${NickDono}*`}, {quoted: info})
break
        
case 'phsearch':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "🫣")
if(!q) return reply(`*${tempo}, ${pushname}... você esqueceu de colocar o tema da pesquisa*\n~Exemplo: ${prefix+command} orgasmo~`)
if (!isPremium) return reply(enviar.msg.premium)
try {
const response = await fetch(`http://node-br1.starhosting.com.br:22539/api/pornhubsearch?q=${q}&apitoken=`+SHADOW_CONSULTAS);
const consRes = await response.json();
let message = '';
for (let i = 0; i < 10; i++) {
const titulo = consRes.resultado[i].titulo;
const duracao = consRes.resultado[i].duração;
const link = consRes.resultado[i].link;
message += `📝 *Título:* _${titulo}_\n⏳ *Duração:* _${duracao}_\n🔗 *Link:* _${link}_\n\n`;
}
reply(`${isGroup ? `_*Pesquisando por "${q}", aguarde...*_\n~Obs: O resultado será enviado no seu privado.~` : `Enviando`} 👀🔥`)
vitu.sendMessage(sender, {text: message}, {quoted: info});
} catch(e) { 
reply(`Erro`);
}
break

case 'akinator':
try {
currentAkinator = akinator.find(i => i.id === from);
if (currentAkinator && currentAkinator.jogador === sender) { return reply(`🧙‍♂️ você já iniciou uma partida do Akinator.`)}
existingSession = akinator.find(i => JSON.stringify(i).includes(from) && akinator.length > 0 && Number(i.dia) === Number(moment.tz('America/Sao_Paulo').format('DD')));
if (existingSession) { return mention(`🧙‍♂️ *_Olá_* @${sender.split("@")[0]}, *_o usuário_* @${existingSession.jogador.split('@')[0]} *_Esta jogando agora, espere ele(a) terminar a partida_*`)}
jogo.now = true;
if (akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) akinator.shift();
if (!currentAkinator) { reply (`🧙‍♂️ - *_Olá ${pushname}, irei iniciar o jogo do Akinator_*\n\n*Responda as Perguntas com:*\n• Sim\n• Não\n• Não sei\n• Provavelmente sim\n• Provavelmente não\n*—*\n*• OBS:* Para resetar o jogo, digite: *${prefix}resetaki*\n_(Só pode ser resetado por um ADM ou o jogador que iniciou a partida.)_`);
akidata = moment.tz('America/Sao_Paulo').format('DD');
let startAki = async () => {
global.aki = new Aki({ region: 'pt', childMode: false, proxy: undefined });
await aki.start()}
await startAki();
jogo.now = false;
jogo.jogador = sender;
akinator.push({ id: from, jogador: sender, termino: 0, dia: akidata });
fs.writeFileSync(akinatorjson, JSON.stringify(akinator, null, 2));
reply(`ㅤㅤㅤㅤ🔮 *_AKINATOR_* 🔮

🧙‍♂️ Pergunta *#${aki.currentStep + 1}:* ${aki.question}`)}
} catch (e) {
console.log(e);
reply(`erro`)}
break

case 'resetaki':
try {
nosei = isGroup ? 0 : akinator.findIndex(i => i.id === from);
if (nosei !== -1 && (akinator[nosei].jogador === sender || isGroupAdmins || isGroup)) {
jogo.now = true;
akinator.splice(nosei, 1);
fs.writeFileSync(akinatorjson, JSON.stringify(akinator, null, 2));
reply('🧙🏼‍♂️ *_Akinator resetado com sucesso_*');
} else {
reply('🧙‍♂️ *_somente admins do grupo ou a pessoa que iniciou o jogo podem finalizar o akinator_*')}
} catch (e) {
reply('🧙‍♂️ *_Não tem ninguém Jogando no Momento_*')}
break


//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS: VITU)==\\

        
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return vitu.sendMessage(from, {text: `Uma dessas opções está ativada, mas por você ser adm, não será removido _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
vitu.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
vitu.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
vitu.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) {
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(`Muitos caracteres enviados, isto é contra as normas do grupo, por precaução, eu irei remover.`)
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
vitu.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
        
//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}
        
const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
vitu.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
vitu.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
vitu.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
vitu.sendMessage(from, {audio: buffer, ptt:true}, {quoted: vitin})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm');

EnvAudio2_GTTS("pt", `${tempo} ${pushname}, são ${hora_sla} da ${tempo.split(" ")[1]}`, "que horas sao?")

if(budy2 === "prefixo"){
if(isBanchat) return
await vitu.sendMessage(from, {react: {text: `🤖`, key: info.key}})
reply(`*${tempo}, ${pushname}... Eu sou o ${NomeDoBot} e este é o meu Prefixo: [ ${prefix} ]*`)
}
   
//------------------------------------------------------------------------\\
//                       FUNÇÃO DO AUTO-TOTEXT                             \\
//                        FEITO PELO: VITUKJK                               \\
//---------------------------------------------------------------------------\\

if (type === 'audioMessage') {
    if(isBanchat) return
    if (isTotext) {
        try {
            let audioMessage = info.message.audioMessage || info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
            let getBufferAudio = await getFileBuffer(audioMessage, 'audio');
            fs.writeFileSync(`./armor/src/totext-${sender}.mp3`, getBufferAudio);
            let client = new AssemblyAI({ apiKey: "2bdbb9a9046a4a938677122e7cf2dbd2" });
            const dataTxt = await client.transcripts.create({ audio_url: `./armor/src/totext-${sender}.mp3`, language_code: "pt" });
            if (dataTxt.words.length == 0) {
            }
            vitu.sendMessage(from, { text: `> ${dataTxt.text}` }, { quoted: vitin });
            fs.unlinkSync(`./armor/src/totext-${sender}.mp3`);
        } catch (e) {
            console.log(e);
        }
    }
//------------------------------------------------------------------------\\
//                       FUNÇÃO DO AUTO-GPT                                \\
//                      FEITO PELO: VITUKJK                                 \\
//---------------------------------------------------------------------------\\
if (isGptAudio) {
            const fs = require('fs');
            const { AssemblyAI } = require('assemblyai');
            const { openai } = require('betabotz-tools');
            const traduzirgpt = require('translate-google');
        try {
            let audioMessage = info.message.audioMessage || info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
            let getBufferAudio = await getFileBuffer(audioMessage, 'audio');
            fs.writeFileSync(`./armor/src/totext-${sender}.mp3`, getBufferAudio);
            let client = new AssemblyAI({ apiKey: "2bdbb9a9046a4a938677122e7cf2dbd2" });
            const dataTxt = await client.transcripts.create({ audio_url: `./armor/src/totext-${sender}.mp3`, language_code: "pt" });
            if (dataTxt.words.length === 0) {
                return reply(`*_Não foi possível transcrever seu áudio. Por favor, tente com outro._*`);
            }
            const transcribedText = dataTxt.text;
            if (!transcribedText) {
                return reply(`*_Não foi possível entender o áudio. Por favor, tente novamente._*`);
            }
            const responseFromGPT = await openai(transcribedText);
            const respostaIngles = responseFromGPT.result;
            const respostaPortugues = await traduzirgpt(respostaIngles, { to: 'pt' });
            await vitu.sendMessage(from, { text: `> ${respostaPortugues}` }, { quoted: vitin });
            fs.unlinkSync(`./armor/src/totext-${sender}.mp3`);
        } catch (e) {
            console.log(e);
            return reply('(Erro interno do servidor. Por favor, tente novamente mais tarde.)');
        }
    }
}
//-------------------------------------------------------------------\\
// A VINGANÇA, NUNCA É PLENA. MATA A ALMA E A ENVENENA! ~Seu Madruda. \\
//---------------------------------------------------------------------\\

if(budy2.startsWith("shadow")){
    if(isBanchat) return
if(!isPremium) return
if(!q) return reply(`${tempo} ${pushname}, gostaria de fazer alguma pergunta?`)
await vitu.sendMessage(from, {react: {text: `🧠`, key: info.key}})
shadowMsg()
}       
        
if(budy2.includes("www.instagram.com/reel/")){
if(isBanchat) return
const { instagram } = require('betabotz-tools');
const results = await instagram(budy);
if (results.result && results.result.length > 0 && results.result[0]._url) {
const videoUrl = results.result[0]._url;
await vitu.sendMessage(from, { video: { url: videoUrl }, mimetype: "video/mp4" }, { quoted: info });
}}

if(isAutorepo) {

if (budy2.includes("bom dia")) {
setTimeout(() => { reagir(from, "☕"); }, 300);
vitu.sendMessage(from, { text: `⚡ _*Olá, ${pushname}. Como vai?*_ 😁\n_*Tenha um Ótimo Dia.*_ 🐔☕` }, { quoted: info });
}

if (budy2.includes("boa tarde")) {
setTimeout(() => { reagir(from, "🌤"); }, 300);
vitu.sendMessage(from, { text: `⚡ _*Olá, ${pushname}. Como vai?*_ 😁\n_*Tenha uma Ótima Tarde.*_ 🍃🌤` }, { quoted: info });
}

if (budy2.includes("boa noite")) {
setTimeout(() => { reagir(from, "🌕"); }, 300);
vitu.sendMessage(from, { text: `⚡ _*Olá, ${pushname}. Como vai?*_ 😁\n_*Tenha uma Ótima Noite.*_ 🦉🌕` }, { quoted: info }); 
}


    
if(budy2 === "bot") {
  const response = [
    `Olá ${pushname}, em que posso ajudar?`, 
    `Olá, tudo bem?`,
    `${tempo} ${pushname}, em que posso ajudar você?`,
    `Por qual motivo você me chamas? 🤔💭`
   ] 
   buffer = response[Math.floor(Math.random() * response.length)]
   return buffer 
reply(`${buffer}`)
}
 
if(budy2.includes("bot corno")){
reply("Corno é você, animal")
}
        
if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
vitu.sendMessage(from, {text: adivinha}, {quoted: vitin})
}   
}

if(budy2.includes("kayser")){
if(!isGroup) return reply(enviar.msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
}
        
        
 //início das funções do casamento
        
        
//contar segundos, minutos e horas
async function secondCasa() {
  if(casamento1.length != 0) {
    setTimeout(async() => {
      for( x of casamento1 ) {
        if(x.contS < 86400 && x.casados == true) {
          x.contS += 1
          fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
        }
      }
    }, 1000)
  }
}

secondCasa();

//contar primeiro dia
async function diaPrimeCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.contD2 != Number(moment.tz('America/Sao_Paulo').format('DD')) && Number(moment.tz('America/Sao_Paulo').format('HH')) >= x.hora && x.contD1 < 1 && x.casados == true) {
        x.contD1 += 1
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
      }
    }
  }
}

diaPrimeCasa();

//contar dia normal
async function diaCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.contD2 != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.contD1 >= 1 && x.casados == true) {
        x.contD1 += 1
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
      }
    }
  }
}

diaCasa();

//contar mês
async function meixxCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.dia == Number(moment.tz('America/Sao_Paulo').format('DD')) && x.contM2 != Number(moment.tz('America/Sao_Paulo').format('MM')) && x.casados == true) {
        if(x.contA1 <= 0 && x.contM1 < 11) {
          vitu.sendMessage(x.usu1, {text: `🎉 Felicidades, hj é um dia muito especial para você... Porque hj vc comemora ${x.contM1+1} m${x.contM1 > 2 ? "eses" : "ês"} de matrimônio com o/a @${x.usu2}`, mentions: [x.usu2 + "@s.whatsapp.net"]})
        }
        x.contD1 = 0
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        x.contM1 += 1
        x.contM2 = Number(moment.tz('America/Sao_Paulo').format('MM'))
        fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
      }
    }
  }
}

meixxCasa();

//contar ano
async function anoCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.dia == Number(moment.tz('America/Sao_Paulo').format('DD')) && x.mês == Number(moment.tz('America/Sao_Paulo').format('MM')) && x.contA2 != Number(moment.tz('America/Sao_Paulo').format('YY')) && x.contM1 >= 12 && x.casados == true) {
        x.contD1 = 0
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        x.contM1 = 0
        x.contM2 = Number(moment.tz('America/Sao_Paulo').format('MM'))
        x.contA1 += 1
        x.contA2 = Number(moment.tz('America/Sao_Paulo').format('YY'))
        fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
        vitu.sendMessage(x.usu1, {text: `😍🎉 Parabéns, parace que você e sua dupla estão completando ${x.contA1} ano${x.contA1 > 1 ? "s" : ""} de matrimônio 💖`})
      }
    }
  }
}

anoCasa();

//aceitar casamento
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(casamento2).includes(sender) && casamento2[casamento2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
hc = moment.tz('America/Sao_Paulo').format('HH')
mc = moment.tz('America/Sao_Paulo').format('mm')
sc = moment.tz('America/Sao_Paulo').format('ss')
dc = moment.tz('America/Sao_Paulo').format('DD')
mmc = moment.tz('America/Sao_Paulo').format('MM')
ac = moment.tz('America/Sao_Paulo').format('YY')
C14 = casamento2.map(i => i.id).indexOf(sender)
C12 = casamento1.map(i => i.usu1).indexOf(casamento2[C14].pedido + "@s.whatsapp.net")
casamento1[C12].casados = true
casamento1[C12].contS = 0
casamento1[C12].hora = Number(hc)
casamento1[C12].minuto = Number(mc)
casamento1[C12].segundo = Number(sc)
casamento1[C12].dia = Number(dc)
casamento1[C12].contD1 = 0
casamento1[C12].contD2 = Number(dc)
casamento1[C12].mês = Number(mmc)
casamento1[C12].contM1 = 0
casamento1[C12].contM2 = Number(mmc)
casamento1[C12].ano = Number(ac)
casamento1[C12].contA1 = 0
casamento1[C12].contA2 = Number(ac)
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento1.push({
usu1: sender,
usu2: casamento2[C14].pedido,
casados: true,
idgp: from,
contS: 0,
hora: Number(hc),
minuto: Number(mc),
segundo: Number(sc),
dia: Number(dc),
contD1: 0,
contD2: Number(dc),
mês: Number(mmc),
contM1: 0,
contM2: Number(mmc),
ano: Number(ac),
contA1: 0,
contA2: Number(ac)
})
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C14, 1)
fs.writeFileSync("./database/func/casamento2.json", JSON.stringify(casamento2))
mention(`Felicitações @${casamento1[C12].usu1.split('@')[0]}, parece que o/a @${sender.split('@')[0]} aceitou o seu pedido de casamento...
Seu matrimônio pode ser consultado em ${prefix}minhadupla`)
}
}

//recusar casamento
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(casamento2).includes(sender) && casamento2[casamento2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = casamento2.map(i => i.id).indexOf(sender)
C12 = casamento1.map(i => i.usu1).indexOf(`${casamento2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${casamento1[C12].usu1.split('@')[0]}, parece que o/a @${sender.split('@')[0]} não aceitou o seu pedido de casamento...`)
casamento1.splice(C12, 1)
fs.writeFileSync("./database/func/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C14, 1)
fs.writeFileSync("./database/func/casamento2.json", JSON.stringify(casamento2))
}
}
        
if(budy2 != undefined) {

  if(!JSON.stringify(pushnames).includes(botNumber)) {

    pushnames.push({id: botNumber, nick: NomeDoBot})

    fs.writeFileSync("./database/func/pushnames.json", JSON.stringify(pushnames, null, 2))

  }

  if(!JSON.stringify(pushnames).includes(sender)) {

    pushnames.push({id: sender, nick: pushname})

    fs.writeFileSync("./database/func/pushnames.json", JSON.stringify(pushnames, null, 2))

  } else {

    AB = pushnames.map(i => i.id).indexOf(sender)

    pushnames[AB].nick = pushTestName

    fs.writeFileSync("./database/func/pushnames.json", JSON.stringify(pushnames, null, 2))

  }

}
//fim das funções do casamento
        
//=======(função do aluguel)==========\\
  
  if(chaves.length > 0) {
    caixa = []
    for(k of chaves) {
      if(budy2.toUpperCase() === k.key) {
        caixa.push(k.key)
      }
    }
    if(isJsonIncludes(chaves, caixa[0])) {
      AD = chaves.map(i => i.key).indexOf(caixa[0])
      timeday = chaves[AD].dias
      pessoa = chaves[AD].cliente
      infinity = chaves[AD].dias > 0 ? false : true
      if(!isJsonIncludes(grupos, "shadowcu")) {
        grupos.push({id: "shadowcu", gps: []})
        fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      }
      if(!isJsonIncludes(grupos, from)) {
        grupos.push({id: from, limite: 5, validado: true})
        fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      } else {
        GP = grupos.map(i => i.id).indexOf(from)
        grupos[GP].validado = true
        fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      }
      if(infinity == false) {
        if(chaves[AD].tipo == 1 && isGroup) {
          if(!isJsonIncludes(aluguel, from)) {
            aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
            fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
            chaves.splice(AD, 1)
            fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
            reply(`*Grupo adicionado ao aluguel com sucesso* ✅`)
            await sleep(2000)
            vitu.sendMessage(nmrdn, {text: `[❕] código de aluguel validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa]})
          } else {
            AB = aluguel.map(i => i.id).indexOf(from)
            aluguel[AB].cortesia = false
            aluguel[AB].nome = groupName
            aluguel[AB].totalRent = aluguel[AB].tempo + timeday
            aluguel[AB].tempo += timeday
            fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
            chaves.splice(AD, 1)
            fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
            reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para este grupo`)
            await sleep(2000)
            vitu.sendMessage(nmrdn, {text: `[❕] código de aluguel validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa]})
          }
        }
        if(chaves[AD].tipo == 2 && isGroup) {
          CD = grupos.map(i => i.id).indexOf("shadowcu")
          if(!isJsonIncludes(grupos[CD].gps, from)) {
            if(!isJsonIncludes(aluguel, from)) {
              grupos[CD].gps.push({id: from})
              fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
              aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
              fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
              reply(`💵 *CARD CORTESIA* validado ✅\n24h liberadas neste grupo contando a partir de agora ⏲️`)
              await sleep(2000)
              vitu.sendMessage(nmrdn, {text: `[❕] código *CARD CORTESIA* validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa]})
            } else reply("Este grupo já está registrado")
          } else reply("Já foi validada neste mês uma cortesia neste grupo 🤨")
        }
      } else {
        if(chaves[AD].tipo == 1 && isGroup) {
          chaves.splice(AD, 1)
          fs.writeFileSync("./database/func/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
          reply(`Grupo salvo na pasta 📁`)
        }
      }
    }
  }


async function rentByMath() {
  if(aluguel.length > 0) {
    for( x of aluguel ) {
      if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
        if(x.tempo > 1) {
          shadowcu = aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome
          if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
            sendMess(x.cliente, `Olá 👋🏽😃\nAcabo de verificar que nosso contrato no grupo ${shadowcu} termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}... Não deixe de fechar contrato novamente com nossa equipe 📍\n_(OBS: Qualquer dúvida, contacte meu dono)_`)
          }
          x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
          x.tempo -= 1
          fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
        } else {
          sendMess(x.id, `⚠️ *TRANSMISSÃO DO SHADOW* ⚠️\n\n\`\`\`O tempo limite deste grupo acabou. Para renovação de contrato, entre em contato com meu dono:\`\`\`\nwa.me/${nmrdn.split('@')[0]}`)
          vitu.sendMessage(nmrdn, {text: `Só passando pra avisar que o tempo limite do grupo ${x.nome} expirou agora... Visto que o/a @${x.cliente.split('@')[0]} não renovou o contrato, eu saí do grupo dele/a e apaguei os registros 🗑️`, mentions: [x.cliente]})
          GP = grupos.map(i => i.id).indexOf(x.id)
          grupos.splice(GP, 1)
          fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
          RT = aluguel.map(i => i.id).indexOf(x.id)
          grupo = x.id
          aluguel.splice(RT, 1)
          fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
          await sleep(4000)
          vitu.groupLeave(grupo)
        }
      }
    }
  }
}

rentByMath();

async function cortesiaByMath() {
  if(aluguel.length > 0) {
    for( x of aluguel ) {
      if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
        if(x.tempo > 0) {
          x.save = Number(moment.tz('America/Sao_Paulo').format('HH'))
          x.tempo -= 1
          fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
        } else {
          sendMess(x.id, `⚠️ *TRANSMISSÃO DO SHADOW* ⚠️\n\n\`\`\`O cartão cortesia 24H deste grupo expirou... Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono:\`\`\`\nwa.me/${nmrdn.split('@')[0]}`)
          sendMess(nmrdn, `Só passando pra avisar que o cartão cortesia do grupo ${x.nome} expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados 🗑️`)
          GP = grupos.map(i => i.id).indexOf(x.id)
          grupos.splice(GP, 1)
          fs.writeFileSync("./database/func/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
          RT = aluguel.map(i => i.id).indexOf(x.id)
          grupo = x.id
          aluguel.splice(RT, 1)
          fs.writeFileSync("./database/func/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
          await sleep(4000)
          vitu.groupLeave(grupo)
        }
      }
    }
  }
}

cortesiaByMath();
        
//=========(fim do aluguel)=======\\

        
if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}
//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.indexOf(budy2) >= 0) {
if(!isGroupAdmins) {
 vitu.sendMessage(from, {text: `Sem palavrão ou palavras ofensivas aqui!`}, {quoted: info})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
vitu.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
vitu.sendMessage(from, {text: `*「 REMOVIDO POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`}, {quoted : info}).catch(e => {
vitu.sendMessage(from, {text: `Infelizmente, não sou um administrador, então não posso te banir!`}, {quoted : info})
})       							
}, 200)
} else {
return reply(`Você tem permissão, pq você é adm ${pushname}.`)
}
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return
if(info.key.fromMe) return
const numerosfds = ["1","2","3","4","5","6","7", "8", "9", "10", "11"]
if ( numerosfds[Math.floor(Math.random() * numerosfds.length)] === '1') {
muehe = await simih(budy)
vitu.sendMessage(from, {text: muehe}, {quoted: info}).catch(e => {
reply("Não entendi! Por favor, me explique!")  
}) }
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) vitu.sendMessage(from, {text: sami}, {quoted: info})
}
}

//========================================\\

if(isCmd) {
uptime = process.uptime()
await vitu.sendMessage(from, {react: {text: `❌`, key: info.key}})
vitu.sendMessage(from, {text: `_*${tempo}, ${pushname}. Este comando não existe, digite ~${prefix}menu~ para ver o menu.*_`, contextInfo: {externalAdReply: {title: `🍁 ${NomeDoBot} 🍁`, body: `》ｃｌｉｃｋ ａｑｕｉ《`, thumbnail: await getBuffer("https://telegra.ph/file/36e53ad0682f20cd40a67.jpg"), mediaType: 1, sourceUrl: `https://youtu.be/zaWtqK-xW90?si=buhu9XlxmEkStUIY?si=SW2CRGvTtMvUlQ5D`}}}, {quoted: vitin})
}
        
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

//========================================\\
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_SHADOW)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}

iniciarVitu().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index.js' - Error: "+e))
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.red(`Alterações salvas - '${__filename}'`))
    delete require.cache[file]
    require(file)
})