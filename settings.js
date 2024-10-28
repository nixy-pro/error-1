require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6287840951374" // Nomor Kamu
global.namaowner = "Kenstore" // Nama Kamu

//======== Setting Bot & Link ========//
global.namabot = "KenBot" // Nama Bot Kamu
global.namabot2 = "Kanekiken"
global.foother = "© Kanekiken - 999"
global.idsaluran = "-" // Id Saluran Kamu
global.linkgc = 'https://chat.whatsapp.com/BFlMPzJeUTS0IYcfX78WoZ' // Link Groub Kamu
global.linksaluran = "https://whatsapp.com/channel/0029VaoOFdcElah2CYOc0R02" // Link Saluran Kamu
global.linkyt = 'https://youtube.com/@kairey77'
global.linktele = "https://t.me/kenpuki"
global.packname = "Created Kenstore"
global.author = "Ken"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 10000
global.delayjpm = 10000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15" // Gk Ush Di isi
global.loc = "1" // Gk Ush Di Isi
global.domain = "-" // Isi Doamin Kamu
global.apikey = "-" // Isi PLTA Kamu
global.capikey = "-" // Isi PLTC Kamu

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "085298108699"
global.gopay = "085946123323"
global.qris = fs.readFileSync("./media/qris.jpeg")
                             
//=========== Api Domain ===========//
global.zone1 = "5024bc4a02924cf69ddf4dfa6ee96069"
global.apitoken1 = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
global.tld1 = "dewapanel.my.id"

//========== Api Domain 2 ==========//
global.zone2 = "11d2b0d7530d8e7ad402add6a48af1ff";
global.apitoken2 = "tRlspCybESG4WKe2DmKwCgknTW7-o6DttTzi4tcz";
global.tld2 = "xstxyro.xyz";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "error occurred error occurred",
"done": "done bang✅", 
"wait": "wait for the bot to process", 
"group": "ngapain? fitur ini khusus di dalam grup!", 
"private": "ngapain? fitur ini khusus didalam private chat!", 
"admin": "ngapain? fitur ini khusus admin grup!", 
"adminbot": "ngapain? fitur ini dapat digunakan ketika bot menjadi admin", 
"owner": "ngapain? fitur ini khusus owner bot!", 
"developer": "ngapain? fitur ini khusus developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})