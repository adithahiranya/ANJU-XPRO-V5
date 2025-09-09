//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUR2a21vMzk5QnY3YjRYNE1VRHg0ZHpReTBkVnZaQ2hOYXpVYnViK2dGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkVOa3Z0TW1WODdWNUk4UXVpa0YzSEpzSHZyLys2bnhBWUJKang1L3VXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSlAwQldSbWllL0dYZXI4WERxdUp5RGgwZ292NmJpR3VnSjV0d05GOG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKRHJrZzJYbjdMZVA5NVA4dXc2SHIrZGNBMHhIb3ZCbVBGS3FxbHgvb2tzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCemo0bUVGWDRjcjdTQm1oWVM3dkI4QmpHYlNlY2Uwb01QMG9rUXc4bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ZajZyY1dzZzB0cHdwSGU3V2V2RkFaeVo0RklNcUNiak5DU2hNS1M2V0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENWK2hKWjVqUzNZNE1Vc3BERTNsZGlXaDVTUjVTNkZpR0tQT2tLQXBWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmdIQURVMk9PVzZaNWRJUnFtY3F0MTFHK3F0M0g0UDIvQWU1VnY5N3dsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlvTnJCRE15QzI4ZEZOL1FPZi9YQnY2STg3NW4yQ251U0EvZW93K0JyVlgvZGhYa3R0L0FGYTZkMTlBTHRCNnJJeWJCV0oyRHVMRXp2QTc2RVFwOUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImpPZ1VXNHJ1MlBFUGM4c0t2d05TWE94Rng0enkzQ2FXQm9RUktUM1FQb1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjE1MzgzNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFRURBNjIxQjAwM0M1Nzg5MDkxNDQ4OUQ1RTYzQUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzM5NDI1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjE1MzgzNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2MUJBMTJGMUQxRkM5OEY2MDREQTgxMUQ0RTIzOTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzM5NDI1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjE1MzgzNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3MzdCQjBFNEJDMDg1NUIyQjUzQjA0NjgyQkIzQ0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzM5NDI1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTzdBWnFNb3BRNU90TTVTM1hHQ1hUZyIsInBob25lSWQiOiI3NWQ3ODkzOS1mMTMzLTQyODAtOTBjMi0wNGU5MTlmYjhkZmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG9OOVVEVTA2QUFkclUvaVY3SXVsNjVSU0I0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNNllMclRmVDJRdFBJYmZtb0VaNzlNL1A0VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5VjQzNVQzOSIsIm1lIjp7ImlkIjoiOTQ3MjE1MzgzNzM6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ5MjIxMDEzMTMxMjk0OjNAbGlkIiwibmFtZSI6IkFkaXRoYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSi91bmxzUXdlcit4UVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSGlpZnYwdk5zTWJockNnSms5b2VvN2k2ZWszOFUvdWdDUlU5Q056amhFQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicWVFa0FRV2wwMUR4MEJsdFM5cXV4Q1dFT21JUzJTQk44WHVVTXdqY2lFaVN3WmVMUzN1ZXowZTFPM2V6R2ZweG0yOWxmWFR3NjkxYWJHcGVDZnk4QUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImpZNzZoVnJMalY1TkJ4RG1ldTAxK0M5dUljaC9lOHhqWGlGcnlmUGhWRWpweWtrMUZuUjkveFQ2WDlTOXZBdUZyWGlxMmNQTHRUd2trakEyTnlEcENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjE1MzgzNzM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNG9uNzlMemJERzRhd29DWlBhSHFPNHVucE4vRlA3b0FrVlBRamM0NFJBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTczOTQyNTUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFY0sifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
