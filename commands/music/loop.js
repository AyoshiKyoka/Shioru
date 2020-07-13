const check = require("../../structures/modifyQueue");

module.exports.run = function (client, message, args) {
    let serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
        message.reply("❎ ไม่มีเพลงที่ฉันกำลังเล่นอยู่นะคะ")
            .then(function (msg) {
                msg.delete({
                    timeout: 10000
                });
            });
    } else {
        if (!check(message.member)) {
            message.reply("🚫 อืมม...มีแต่เจ้าของคิวนี้เท่านั้นละนะ ที่จะทำได้")
                .then(function (msg) {
                    msg.delete({
                        timeout: 10000
                    });
                });
        } else {
            serverQueue.loop = !serverQueue.loop;
            serverQueue.textChannel.send("🔁 " + (serverQueue.loop ? "**เปิด**" : "**ปิด**") + "การวนซ้ำแล้วคะ");
        }
    }
};

module.exports.help = {
    "name": "loop",
    "description": "Toggle music loop",
    "usage": "Yloop",
    "category": "music",
    "aliases": ["lp", "วน"]
};