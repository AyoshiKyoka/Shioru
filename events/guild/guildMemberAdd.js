module.exports = async (client, member) => {
	let notification = member.guild.channels.cache.find(ch => ch.name === "│การแจ้งเตือน🔔");
	if (member.user.bot) {
		return;
	} else {
		let embed = {
			"title": member.user.tag,
			"description": "สวัสดีสมาชิกใหม่ **นี่เป็นข้อความอัตโนมัติ** \nขอบคุณสำหรับการเข้าร่วมเซิร์ฟเวอร์ของเรา กรุณาอ่านข้อมูลเกี่ยวกับเซิร์ฟเวอร์นี้อย่างละเอียดก่อนเริ่มพูดคุยกับทุกคนนะค่ะ \n\n<#692297482062790706>\n<#692360422862618636>",
			"color": 16777215,
			"thumbnail": {
				"url": member.user.displayAvatarURL(),
			},
			"author": {
				"name": "ยินดีต้อนรับสู่เซิร์ฟเวอร์",
				"icon_url": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/video-game_1f3ae.png",
			}
		};
		notification.send({ embed });
	}
};