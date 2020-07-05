const firebase = require("firebase");

module.exports.run = async function (client, message, args) {
    if (message.member.hasPermission(["ADMINISTRATOR", "MANAGE_ROLES"])) {
        let arg = args.join(" ");
        if (arg === "") {
            message.reply("❓ สมาชิกที่ต้องการจะลบชื่อว่าอะไรเหรอคะ รหัสบัญชีก็ได้นะ >-<")
            .then(function (msg) {
                msg.delete({
                    timeout: 10000
                });
            });
        } else {
            let user = client.users.cache.find(user => (user.username === arg) || (user.id === arg));
            if (user === undefined) {
                message.channel.send("❎ ไม่พบสมาชิกรายนี้นะคะ เอ๋..พิมพ์ผิดหรือเปล่า..?");
            } else {
                id = user.id;
                let msg = await message.channel.send("📁 กำลังลบข้อมูล EXP และ Level");
                let database = firebase.database();
                database.ref("Discord/Users/" + id + "/Leveling/").remove()
                .then(function () {
                    msg.edit("✅ ลบ EXP และ Level ของสมาชิกนี้ ออกจากฐานข้อมูลเรียบร้อยแล้วคะ!");
                }).catch(function (error) {
                    msg.edit("❎ ไม่พบผู้ใช้ในฐานข้อมูลคะ");
                    console.error(error);
                });
            }
        }
    } else {
        return message.reply("🛑 ขอโทษนะคะ แต่ว่าาา...คุณไม่มีสิทธิ์ในการใช้งานฟังก์ชันนี้คะ <:shioru_heavy:694159309877018685>");
    }
};

module.exports.help = {
    "name": "deleteLeveling",
    "description": "Removing EXP and Level of members",
    "usage": "YdeleteLeveling <member>",
    "category": "manager",
    "aliases": ["dLeveling", "deleteleveling", "ลบระดับชั้น"]
};