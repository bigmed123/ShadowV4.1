const fs = require("fs")

const moment = require('moment-timezone');

const { prepareWAMessageMedia } = require(`@whiskeysockets/baileys`);

const sendHours = (formato) => {return moment.tz('America/Sao_Paulo').format(formato)}

const atraso = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

var botoes = JSON.parse(fs.readFileSync("./settings/settings.json")).botoes

const sendButton = async(from, dados, vitu, sender, options, info) => {
  try {
    if(botoes) {
      but = []
      for(i of options) {
        if(i.type == `copy_url`) but.push({name: "cta_url", buttonParamsJson: JSON.stringify({display_text: i.text, url: i.url, merchant_url: i.url})})
        if(i.type == `copy_text`) but.push({name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: i.text, copy_code: i.url})})
        if(i.type == `call`) but.push({name: "cta_call", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.url})})
        if(i.type == `cmd`) but.push({name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.command, disabled: false})})
        if(i.type == `list` || i.type == `lista`) {
          caixa = []
          for(a of i.rowId) {
            lista = []
            for(b of a.options) {
              lista.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
            }
            caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: lista})
          }
          but.push({name: "single_select", buttonParamsJson: JSON.stringify({title: i.title, sections: caixa})})
        }
      }
      if(dados?.text) return vitu.relayMessage(from, {interactiveMessage: {body: {text: dados?.text || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      if(dados?.image) {
        img = await prepareWAMessageMedia({image: dados?.image}, {upload: vitu.waUploadToServer})
        return vitu.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      }
      vid = await prepareWAMessageMedia({video: dados?.video}, {upload: vitu.waUploadToServer})
      return vitu.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
    } else {
      if(dados?.text) return vitu.sendMessage(from, {text: dados?.text, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      if(dados?.image) return vitu.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      return vitu.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendListB = async(from, dados, vitu, sender, title, lista, info) => {
  try {
    if(botoes) {
      caixa = []
      for(a of lista) {
        hehe = []
        for(b of a.options) {
          hehe.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
        }
        caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: hehe})
      }
      but = [{name: "single_select", buttonParamsJson: JSON.stringify({title: title, sections: caixa})}]
      if(dados?.text) return vitu.relayMessage(from, {interactiveMessage: {body: {text: dados?.text || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      if(dados?.image) {
        img = await prepareWAMessageMedia({image: dados?.image}, {upload: vitu.waUploadToServer})
        return vitu.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      }
      vid = await prepareWAMessageMedia({video: dados?.video}, {upload: vitu.waUploadToServer})
      return vitu.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
    } else {
      if(dados?.text) return vitu.sendMessage(from, {text: dados?.text, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      if(dados?.image) return vitu.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      return vitu.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendListIOS = async(from, dados, vitu, sender, title, lista, info) => {
  try {
    if(botoes) {
      caixa = []
      for(a of lista) {
        for(b = 0; b < a.options.length; b++) {
          c = a.options[b]
          caixa.push({
            title: b == 0 ? a?.title || `` : ``,
            highlight_label: a?.body ? a.body : c?.high ? c.high : ``,
            rows: [{
              header: c?.name || ``,
              title: c?.title,
              description: c?.body,
              id: c?.command
            }]
          })
        }
      }
      if(dados?.image) {img = await prepareWAMessageMedia({image: dados?.image}, {upload: vitu.waUploadToServer})}
      if(dados?.video) {vid = await prepareWAMessageMedia({video: dados?.video}, {upload: vitu.waUploadToServer})}
      return vitu.relayMessage(from, {
        interactiveMessage: {
          header: dados?.image ? {
            title: dados?.contextInfo?.externalAdReply?.title || ``,
            subtitle: dados?.contextInfo?.externalAdReply?.body || ``,
            hasMediaAttachment: true,
            imageMessage: img.imageMessage
          } : dados?.video ? {
            title: dados?.contextInfo?.externalAdReply?.title || ``,
            subtitle: dados?.contextInfo?.externalAdReply?.body || ``,
            hasMediaAttachment: true,
            videoMessage: vid.videoMessage
          } : ``,
          body: {text: dados?.text ? dados.text : dados.caption},
          footer: {text: dados?.footer || ``},
          contextInfo: {
            participant: sender,
            mentionedJid: dados?.mentions,
            quotedMessage: info ? info.message : ``,
            forwardingScore: dados?.contextInfo?.forwardingScore || 0,
            isForwarded: dados?.contextInfo?.isForwarded || false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``,
              newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``
            }
          },
          nativeFlowMessage: {
            buttons: [{name: "single_select",
              buttonParamsJson: JSON.stringify({title: title, sections: caixa})
            }],
            messageParamsJson: ""
          }
        }
      }, {})
    } else {
      if(dados?.text) return vitu.sendMessage(from, {text: dados?.text, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      if(dados?.image) return vitu.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      return vitu.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendRoulette = async(from, vitu, dados) => {
  try {
    if(botoes) {
      let cards = []
      while(cards.length < dados.length) {
        i = dados[cards.length]
        if(i?.image) {
          let imageBuffer = await fetch(i.image.url).then(res => res.arrayBuffer());
          let imageBufferData = Buffer.from(imageBuffer);
          const imageinfo = await prepareWAMessageMedia({image: imageBufferData}, {upload: vitu.waUploadToServer})
          cards.push({
            header: {
              hasMediaAttachment: true,
              imageMessage: imageinfo.imageMessage
            }, headerType: 'IMAGE',
            body: {text: i?.caption || ""},
            footer: {text: i?.footer || ""},
            nativeFlowMessage: {buttons: []}
          })
        } else if(i?.video) {
          let videoBuffer = await fetch(i.video.url).then(res => res.arrayBuffer());
          let videoBufferData = Buffer.from(videoBuffer);
          const videoinfo = await prepareWAMessageMedia({video: videoBufferData}, {upload: vitu.waUploadToServer})
          cards.push({
            header: {
              hasMediaAttachment: true,
              videoMessage: videoinfo.videoMessage
            }, headerType: 'IMAGE',
            body: {text: i?.caption || ""},
            footer: {text: i?.footer || ""},
            nativeFlowMessage: {buttons: []}
          })
        }
      }
      return vitu.relayMessage(from, {
        interactiveMessage: {
          carouselMessage: {cards: cards}
        }
      }, {})
    } else {
      for(i of dados) {
        if(i?.image) {
          await atraso(1000)
          vitu.sendMessage(from, {image: i.image, caption: i?.caption || ``})
        } else if(i?.video) {
          await atraso(2500)
          vitu.sendMessage(from, {video: i.video, caption: i?.caption || ``})
        }
      }
    }
  } catch(e) {console.log(e)}
}

const sendPayment = async(from, dados, vitu, sender, info) => {
  try {
    type = dados.type.toLowerCase().replace(`ó`, `o`).replace(`-`, ``)
    if(type == `telefone` || type == `tel`) {keytype = `PHONE`
    } else if(type == `email`) {keytype = `EMAIL`
    } else if(type == `cpf`) {keytype = `CPF`
    } else if(type == `aleatoria` || type == `aleatorio`) {keytype = `EVP`
    } else return console.log(`Escolha um type válido dentre os abaixo:
• telefone
• email
• cpf
• aleatoria`)
    if(botoes) {
      await vitu.relayMessage(from, {
        interactiveMessage: {
          contextInfo: {
            participant: sender ? sender : ``,
            quotedMessage: info ? info.message : ``,
            mentionedJid: dados?.mentions ? dados.mentions : []
          },
          nativeFlowMessage: {
            buttons: [{
              name: "payment_info",
              buttonParamsJson: JSON.stringify({
                currency: "BRL",
                total_amount: {
                  value: 0,
                  offset: 100
                },
                reference_id: "4PKDFGOV636",
                type: "physical-goods",
                order: {
                  status: "pending",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "ORDER",
                  items: [{
                    name: "",
                    amount: {
                      value: 0,
                      offset: 100
                    },
                    quantity: 0,
                    sale_amount: {
                      value: 0,
                      offset: 100
                    }
                  }]
                }, payment_settings: [{
                  type: "pix_static_code",
                  pix_static_code: {
                    merchant_name: dados.text,
                    key: dados.chave,
                    key_type: keytype
                  }
                }]
              })
            }],
            messageParamsJson: "",
          },
        },
      },
      {})
    } else {
      vitu.sendMessage(from, {text: `*_${dados.text}_*
🔑 *Key:* ${dados.chave}
🔰 *Tipo:* ${dados.type}`}, {quoted: info})
    }
  } catch(e) { console.log(e) }
}

const GenerateQRpix = async(from, dados, vitu, sender, info) => {
  try {
    type = dados.type.toLowerCase().replace(`ó`, `o`).replace(`-`, ``)
    if(type == `telefone` || type == `tel`) {keytype = `PHONE`
    } else if(type == `email`) {keytype = `EMAIL`
    } else if(type == `cpf`) {keytype = `CPF`
    } else if(type == `aleatoria` || type == `aleatorio`) {keytype = `EVP`
    } else return console.log(`Escolha um type válido dentre os abaixo:
• telefone
• email
• cpf
• aleatoria`)
    if(botoes) {
      await vitu.relayMessage(from, {
        interactiveMessage: {
          contextInfo: {
            participant: sender ? sender : ``,
            quotedMessage: info ? info.message : ``,
            mentionedJid: dados?.mentions ? dados.mentions : []
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: JSON.stringify({
                currency: "BRL",
                total_amount: {
                  value: Number(dados.pix) * 100,
                  offset: 100
                },
                reference_id: "BLK"+sendHours("DDMM")+"ST"+sendHours("HHmmss"),//4PKE5JY25ZF
                type: "physical-goods",
                order: {
                  status: "payment_requested",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "PAYMENT_REQUEST",
                  items: [{
                    retailer_id: "custom-item-ee318df4-1d62-4ef9-9ccc-2277e85f3d02",
                    name: "",
                    amount: {
                      value: Number(dados.pix) * 100,
                      offset: 100
                    },
                    quantity: 1
                  }]
                }, payment_settings: [
                  {
                    type: "pix_static_code",
                    pix_static_code: {
                      merchant_name: dados?.footer || "BLACK SYSTEM",
                      key: dados.chave,
                      key_type: keytype
                    }
                  },
                  {
                    type: "cards",
                    cards: {
                      enabled: false,
                      payment_gateway_checkout_enabled: false
                    }
                  }
                ],
                additional_note: dados.text,
                native_payment_methods: []
              })
            }],
            messageParamsJson: ""
          }
        }
      }, {})
    } else {
      vitu.sendMessage(from, {text: `*_${dados.text}_*
🔑 *Key:* ${dados.chave}
🔰 *Tipo:* ${dados.type}
💰 *Valor:* R$ ${Number(dados.pix).toFixed(2)}

_${dados.footer}_`}, {quoted: info})
    }
  } catch(e) { console.log(e) }
}

module.exports = { sendButton, sendListB, sendListIOS, sendRoulette, sendPayment, GenerateQRpix }