/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang,cmd } = require('../lib')
const Config = require('../config')
const prefix = Config.prefix
const maker = require('mumaker')

    //---------------------------------------------------------------------------
cmd({ pattern: "test", alias: ["logo1test"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://fdown.net/download.php', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "test1", alias: ["logo2test"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*𝗠𝗔𝗗𝗘 𝗕𝗬 :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })
    })
