const firebase = require("firebase");

module.exports.run = async function (client, message, args) {
    if (message.member.hasPermission(["ADMINISTRATOR", "MANAGE_ROLES"])) {
        let notification = message.guild.channels.cache.find(ch => ch.name === "│การแจ้งเตือน🔔");

        let memberId = args[0];
        let amount = args[1];
        if (memberId === undefined) {
            message.reply("❓ กรุณาระบุสมาชิกที่ต้องการจะเปลี่ยนแปลง EXP ด้วยคะ!")
                .then(function (msg) {
                    msg.delete({
                        timeout: 10000
                    });
                });
        } else {
            if (amount === undefined) {
                message.reply("❓ ต้องการจะตั้งค่าให้เท่าไหร่ดีคะ")
                .then(function (msg) {
                    msg.delete({
                        timeout: 10000
                    });
                });
            } else {
                let database = firebase.database();
                let avatar = message.author.displayAvatarURL();
                let username = message.author.username;
                database.ref("Discord/Users/" + memberId + "/Leveling/").update({
                    EXP: amount
                }).then(function () {
                    database.ref("Discord/Users/" + memberId + "/Leveling/").once("value")
                    .then(function (snapshot) {
                        let exp = (snapshot.val().EXP);
                        let level = (snapshot.val().Level);
                        const embed = {
                            "description": username + " ตอนนี้คุณมี:",
                            "color": 4886754,
                            "thumbnail": {
                                "url": avatar
                            },
                            "footer": {
                                "icon_url": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/pencil_270f.png",
                                "text": "EXP ของคุณถูกตั้งค่าโดยทีมงาน"
                            },
                            "fields": [{
                                    "name": "EXP",
                                    "value": "```" + exp + "```"
                                },
                                {
                                    "name": "Level",
                                    "value": "```" + level + "```"
                                }
                            ]
                        };
                        notification.send({ embed });
                    });
                });
            }
        }
    } else {
        message.reply("🛑 ขอโทษนะคะ แต่ว่าาา...คุณไม่มีสิทธิ์ในการใช้งานฟังก์ชันนี้คะ <:shioru_heavy:694159309877018685>");
    }
};

module.exports.help = {
    "name": "setEXP",
    "description": "Set EXP of member",
    "usage": "YsetEXP <id> <amount>",
    "category": "manager",
    "aliases": ["setExp", "sExp", "ตั้งค่าEXP", "ตั้งค่าExp"]
};