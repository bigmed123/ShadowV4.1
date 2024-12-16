/*
🚫 AVISO IMPORTANTE! 🚫

Olá! Eu sou o Vitu, criador do Shadow e venho, por meio desta mensagem, informar que a venda e o compartilhamento da Base/Cases do mesmo estão estritamente proibidas.
Esta medida visa garantir que as informações permaneçam confidenciais e utilizadas apenas para fins autorizados. Não gaste dinheiro atoa apenas para vazar o Bot, pois isso é tolice!

Peço a sua colaboração para respeitar esta diretriz e evitar qualquer tipo de infração. Agradeço pela compreensão e respeito ao meu trabalho.
Obs: Se você adquiriu a Base por meio de terceiros, esteja ciente de que você NÃO terá direito à suporte caso ocorra algum problema. Eu sei cada um que comprou comigo, então nem perca o seu tempo!
(¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.->ツ<¯`·.¸¸.·´¯`·.¸¸.-¯`·.¸¸.·´¯`·.¸¸.--.¸¸.·´¯`·.¸¸.·´¯)
ATENCIOSAMENTE: KAYSER/VITU-KJK
*/

const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, prepareWAMessageMedia } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, anotar, getRandom, NodeCache,insert, response } = require('./exports.js');

const { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");

var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("--code");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciarVitu() {
var folderUserAuth = "./database/shadow-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion()
 

const vitu = makeWASocket({
version,
auth: state,
syncFullHistory: true,
printQRInTerminal: !pairingCode,
qrTimeout: 180000,
logger: P({ level: 'silent' }),
browser: ["Chrome (Linux)", "", ""],
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message?.interactiveMessage);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
}});

const PhoneNumber = require('awesome-phonenumber')

if (pairingCode && !vitu.authState.creds.registered) {
let phoneNumber = await question(`${colors.white("- ")}${colors.cyan("Insira o número de telefone que deseja conectar o bot.\n")}`);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
let code = await vitu.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.white("- ")}${colors.cyan("Aqui está o seu código para conectar ao WhatsApp:")} ${code}\n\nComo conectar:\n1- Clique nos 3 pontinhos no canto superior direito do WhatsApp\n2- Dispositivos conectados\n3- Conectar dispositivo\n4- Conectar com Número de telefone\n5- Digite o código e pronto, já está conectado\n\nBoa sorte <3`);
rl.close();
}
    
vitu.ev.process(async(events) => {
  
if(events["group-participants.update"]){
try {
var kay2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${kay2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${kay2.id}.json`));

if(kay2.participants[0].startsWith(vitu.user.id.split(':')[0])) return;

try { var grpmdt = await vitu.groupMetadata(kay2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await vitu.groupMetadata(kay2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(kay2.action == 'add'){
num = kay2.participants[0];
if(nescessario.listanegraG.includes(num)){
await vitu.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban.'});
vitu.groupParticipantsUpdate(GroupMetadata_.id, [kay2.participants[0]], 'remove');
return;
}}
if(kay2.action == 'remove'){
num = kay2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage));
}
}
if(kay2.action == 'add' && jsonGp[0].listanegra.includes(kay2.participants[0])){
await vitu.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço'});
vitu.groupParticipantsUpdate(GroupMetadata_.id, [kay2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && kay2.action === 'add' && !kay2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await vitu.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
vitu.groupParticipantsUpdate(GroupMetadata_.id, [kay2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await vitu.groupMetadata(kay2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !kay2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await vitu.profilePictureUrl(kay2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await vitu.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(kay2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+kay2.participants[0].split('@')[0])
.replace('#numerobot#', vitu.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(kay2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
vitu.sendMessage(mdata_2.id, {image: {url:`https://kayserapis.com/welcome?titulo=BEM%20VINDO(A)&nome=${kay2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURI(mdata_2.subject)}`},
mentions: kay2.participants, caption: teks});
DLT_FL(ran);
} else if(kay2.action === 'remove') {
mem = kay2.participants[0];

try {
ppimg = await vitu.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', kay2.participants[0].split('@')[0])
.replace('#numerobot#', vitu.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = (kay2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
vitu.sendMessage(mdata_2.id, {image: {url:`https://kayserapis.com/welcome?titulo=Adeus&nome=${kay2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: kay2.participants})
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(kay2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+kay2.participants[0].split('@')[0])
.replace('#numerobot#', vitu.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(kay2.participants[0].split('@')[0], mdata_2.subject)
}
vitu.sendMessage(mdata_2.id, {text: teks, mentions: kay2.participants})
} else if(kay2.action === 'remove') {
var mem = kay2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', vitu.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = (mem.split('@')[0])
}
vitu.sendMessage(mdata_2.id, {text: teks, mentions: kay2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, vitu)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("Você precisará de um segundo celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"))
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vezes, creio que há uma outra sessão aberta, ou o bot está ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
iniciarVitu()
}
break;

case 'connecting':
console.log(colors.yellow(`[BOT] Reconectando / Iniciando - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(
`"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite, Lute, Conquiste E acima de tudo, seja feliz!"\n Conectado... Boa Sorte :D`))
await vitu.sendPresenceUpdate("available")
await vitu.updateProfileStatus(`『${NomeDoBot}』Dono: ${NickDono} • Prefixo: [ ${prefix} ] • Online Desde [ ${hora} ] • [ ${date} ]                       Canal: https://www.youtube.com/@zkayser`)
break;

default:
break;
}
}


if(events["creds.update"]) {
await saveCreds();
}

require("./index.js")(vitu, folderUserAuth)

})
}
iniciarVitu().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './connect.js' - Error: "+e))
})