const check = require("../../structures/modifyQueue");

module.exports.run = function (client, message, args) {
    let volume = parseInt(args[0]);
    let serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
        message.channel.send("❎ เอ๋...ไม่มีเพลงที่ฉันกำลังเล่นอยู่นะคะ จะไปปรับเสียงอะไรอ่ะ");
    } else {
        if (!check(message.member)) {
            message.channel.send("🚫 เฉพาะเจ้าของคิวนี้เท่านั้นที่จะปรับเสียงเพลงได้");
        } else {
            if (isNaN(volume)) {
                message.channel.send("🔈 ปริมาณเสียงปัจจุบันคือ: **" + serverQueue.volume + "**");
            } else {
                if (volume >= 101) {
                    message.channel.send("🔇 ดังเกินไปแล้ววว...เดี่ยวลำโพงก็แตกซ่ะหรอก");
                } else {
                    if (volume <= 0) {
                        message.channel.send("🔈 นั้นก็เบาไปคะ");
                    } else {
                        serverQueue.volume = volume;
                        serverQueue.connection.dispatcher.setVolumeLogarithmic(volume / 100);
                        message.channel.send("🔊 ปรับเสียงไปที่ระดับ: **" + volume + "**");
                    }
                }
            }
        }
    }
};

module.exports.help = {
    "name": "volume",
    "description": "Adjust the music volume",
    "usage": "volume <number>",
    "category": "music",
    "aliases": ["vl", "ระดับเสียง", "ระดับเพลง", "ปรับเสียง"]
};