module.exports.run = async function (client, message, args) {
	if (message.guild.id === "618837514882514944") {
		let update = client.config.update;
		let embed = {
			"title": "สัญลักษณ์",
			"color": 2918855,
			"timestamp": update,
			"footer": {
				"icon_url": "https://hotemoji.com/images/emoji/t/1utnwrapq218t.png",
				"text": "อัพเดทเมื่อ",
			},
			"thumbnail": {
				"url": "https://cdn.discordapp.com/emojis/693871871174770748.png",
			},
			"fields": [
				{
					"name": "👑 Administrator",
					"value": "__ควบคุมเซิร์ฟเวอร์ได้เต็มรูปแบบ__ \n**ดูแลเซิร์ฟเวอร์ สังเกตพฤติกรรมและจัดการสมาชิก เช่น แบนสมาชิกที่ไม่ปฏิบัติตามกฏระเบียบ และอื่นๆ**"
				},
				{
					"name": "📋 Moderator",
					"value": "__จัดการเนื้อหา__ \n**สมาชิกรายนี้ มีหน้าที่ในการดำเนินงานต่างๆ ของเซิร์ฟเวอร์และควบคุมเซิร์ฟเวอร์ได้แค่บางส่วนเท่านั้น**"
				},
				{
					"name": "✨ Staff",
					"value": "__จัดการสมาชิกทุกคน__ \n**ผู้ที่มีบทบาทนี้ สามารถจัดการสมาชิกได้ คือ แบน, เตะ, ปิดเสียงสมาชิก, ผู้พูดลำดับสูง, ย้ายสมาชิก, ปิดเสียงสมาชิก, ปิดการได้ยินสมาชิก**"
				},
				{
					"name": "🟢 Assistants",
					"value": "__ผู้ช่วยส่วนตัว__ \n**ดูแลเซิร์ฟเวอร์และบริการให้กับสมาชิกทุกคน**"
				},
				{
					"name": "💻 Developers",
					"value": "__พัฒนาเซิร์ฟเวอร์__ \n**ผู้ที่มีบทบาทนี้ จะสามารถจัดการหรือพัฒนาเซิร์ฟเวอร์ได้ เช่น แก้ไข-พัฒนาบอท, เพิ่ม-ลบ จัดการ Webhook เป็นต้น**"
				},
				{
					"name": "🖌️ Creater",
					"value": "__นักวาด__ \n**ผู้ที่มีบทบาทนี้คือ อาจจะเป็นทั้งผู้ออกแบบตัวละคร อีโมจิ ภาพประกอบและอื่นๆ ให้กับเซิร์ฟเวอร์นี้**"
				},
				{
					"name": "Member",
					"value": "__สมาชิกทั่วไป__ \n**ผู้ที่มีบทบาทนี้ เป็นสมาชิกที่เชื่อถือได้และมีบทบาทแบบสมาชิกทั่วไป**\n "
				},
				{
					"name": "**สำหรับสมาชิกที่ไม่มีบทบาท**",
					"value": "สมาชิกที่ไม่มีบทบาท จะต้องยืนยันที่หน้า <#651809661690839040> ก่อนจึงจะสามารถเห็นช่องอื่นๆ ภายในเซิร์ฟเวอร์นี้ได้ หรือคุณอาจจะเป็นสมาชิกที่ทำผิดกฏระเบียบของเซิร์ฟเวอร์ก็เป็นได้"
				}
			]
		};
		message.channel.send({ embed });

		let myGuild = client.guilds.cache.find(servers => servers.id === "618837514882514944");
		let guildChannel = myGuild.channels.cache.find(channels => channels.id === "692360422862618636");
		guildChannel.messages.fetch("712405841684463638")
		.then(message => message.edit({ embed }));
	} else {
		message.channel.send("🚫 ขออภัยย...คำสั่งนี้ใช้งานได้เฉพาะเซิร์ฟเวอร์ผู้สร้างเท่านั้นนะคะ");
	}
};

module.exports.help = {
	"name": "symbol",
	"description": "See information about symbols.",
	"usage": "Ysymbol",
	"category": "information",
	"aliases": ["สัญลักษณ์"]
};