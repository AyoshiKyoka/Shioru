<div align="center">
  <img src="https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/icons/apple-icon.png" width="100" style="border-radius: 100%;" />
  <strong>
    <h1>Shioru</h2>
    <p>เลขาส่วนตัวใน Discord ที่จะช่วยทำให้กิลด์ของคุณน่าอยู่ยิ่งขึ้น</p>
  </strong>
  <img src="https://img.shields.io/badge/discord.js-v14-7354F6?logo=discord&logoColor=white" />
  <img src="https://img.shields.io/github/stars/Maseshi/Shioru.svg?logo=github" />
  <img src="https://img.shields.io/github/v/release/Maseshi/Shioru" />
  <img src="https://img.shields.io/github/license/Maseshi/Shioru.svg?logo=github" />
  <img src="https://img.shields.io/github/last-commit/Maseshi/Shioru" />
  <a title="दर्जा" target="_blank" href="https://shioru.statuspage.io/">
    <img src="https://img.shields.io/badge/dynamic/json?logo=google-cloud&logoColor=white&label=status&query=status.indicator&url=https%3A%2F%2Fq60yrzp0cbgg.statuspage.io%2Fapi%2Fv2%2Fstatus.json" />
  </a>
  <a title="भीड़" target="_blank" href="https://crowdin.com/project/shioru">
    <img src="https://badges.crowdin.net/shioru/localized.svg" />
  </a>
  <a title="कोडफैक्टर" target="_blank" href="https://www.codefactor.io/repository/github/maseshi/shioru">
    <img src="https://www.codefactor.io/repository/github/maseshi/shioru/badge" alt="कोडफैक्टर" />
  </a>
  <a title="टॉप.जी" target="_blank" href="https://top.gg/bot/704706906505347183">
    <img src="https://top.gg/api/widget/upvotes/704706906505347183.svg" />
  </a>
</div>

[เปลี่ยนภาษา](https://github.com/Maseshi/Shioru/tree/main/documents)

เลขาส่วนตัวที่ดีที่สุดของคุณจะช่วยให้กิลด์ของคุณดูมีชีวิตชีวามากขึ้น เธอสามารถทำสิ่งต่าง ๆ ได้หลายอย่างซึ่งคุณสามารถดูรายละเอียดข้อมูลของคำสั่งทั้งหมด ได้ง่าย ๆ โดยพิมพ์ `/help`

<div align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=704706906505347183&permissions=8&scope=applications.commands%20bot&redirect_uri=https%3A%2F%2Fshiorus.web.app%2Fthanks-you">
    <img src="https://img.shields.io/badge/Invite_Bot-1967D2?logo=discord&logoColor=white&style=for-the-badge" />
  </a>
</div>

## विशेषताएँ

- [Discord.js](https://discord.js.org/) v14 पर काम करता है।
- वांछित वस्तुओं की एक किस्म को अनुकूलित करने में सक्षम
- स्वचालित प्लेबैक के साथ [YouTube](https://www.youtube.com/), [Spotify](https://www.spotify.com/) और [SoundCloud](https://soundcloud.com/) से संगीत चलाया जा सकता है।
- कई भाषाओं का समर्थन करें आप इस रिपॉजिटरी की[भाषा फाइल](https://github.com/Maseshi/shioru/blob/main/source/languages)में समर्थित भाषाओं की जांच कर सकते हैं।
- टियर सिस्टम (स्तर और अनुभव)
- सर्वर अधिसूचना अनुकूलन के लिए समर्थन
- आप जिस संदेश से संवाद करना चाहते हैं उसके बाद `@Shioru` टाइप करके बात कर सकते हैं।
- एप्लिकेशन कमांड (/) का उपयोग किया जा सकता है।
- จำลองระบบฐานข้อมูลสำหรับทดสอบ
- รองรับการทำงานบน Shard

आपका अच्छा सर्वर सहायक आपके सर्वर को अधिक जीवंत दिखने में मदद करेगा। वह बहुत कुछ कर सकती है जिसके लिए आप `/help` टाइप करके विभिन्न कमांड की विस्तृत जानकारी प्राप्त कर सकते हैं।आप शिओरू को[यहाँ](https://discord.com/api/oauth2/authorize?client_id=704706906505347183&permissions=8&scope=applications.commands%20bot&redirect_uri=https%3A%2F%2Fshiorus.web.app%2Fthanks-you)

## आवश्यक शर्तें

- [Node.js](https://nodejs.org/) v20.6.0 หรือมากกว่า
- [Python](https://www.python.org/downloads/) v3.8.0 หรือมากกว่า
- [Java](https://www.oracle.com/java/technologies/downloads/) v11.0.0 หรือมากกว่า
- [Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) หรือ[ติดตั้งด้วยตัวเอง](#1-ติดตั้ง-build-tools)
- [Firebase Tools](https://firebase.google.com/docs/cli)
- [गिट](https://www.ffmpeg.org/download.html)
- [गिट](https://git-scm.com/downloads)

## การติดตั้ง

### 1. ติดตั้ง **Build Tools**

ทำการติดตั้ง **Build tools** โดยรันคำสั่งดังต่อไปนี้ตามระบบปฏิบัติการของคุณ

- สำหรับระบบปฏิบัติการ Linux และ MacOS

```sh
sudo apt update
sudo apt install build-essential
```

- สำหรับระบบปฏิบัติการ Windows

```sh
npm install --global --production --add-python-to-path windows-build-tools
```

> **💡 ทริป**: คุณสามารถข้ามขั้นตอนนี้ผ่านตัวติดตั้ง Node.js ดังภาพต่อไปนี้ ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/node-js-tools-for-native-modules.png)

### 2. โคลนบอทและติดตั้งส่วนประกอบ

- एक टर्मिनल लॉन्च करें और निम्न कमांड चलाएँ।
  ```bat
  git clone https://github.com/Maseshi/Shioru.git
  cd Shioru
  npm install
  ```
- https://firebase.google.com/ पर जाएं और प्रोजेक्ट सेट करना शुरू करें।

  > **💡 หมายเหตุ:** คุณสามารถแก้ไขข้อมูลบางอย่างใน **config** ที่ [./source/configs/data.js](../source/configs/data.js)

### 3. ตั้งค่าบอทและเชิญเข้าร่วม

- [डिसॉर्डर डेवलपर पोर्टल](https://discord.com/developers/applications)पर जाएं
- **"नया एप्लिकेशन"** पर क्लिक करें और अपने बॉट को नाम दें और डिस्कॉर्ड नीति नियमों को स्वीकार करें।
- ไปที่หน้า **"Bot"** และเปิดใช้งานตัวเลือกทั้งหมดในส่วน **Privileged Gateway Intent** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- เชิญบอทของคุณไปที่เซิร์ฟเวอร์โดยไปที่หน้า **OAuth2 > URL Generator** เลือก `bot` และ `applications.commands` เลือก `Administrator` จากนั้นคัดลอกลิงก์และวางในแถบที่อยู่ของเบราว์เซอร์ของคุณ ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### 4. ตั้งค่าฐานข้อมูล

- [डिसॉर्डर डेवलपर पोर्टल](https://discord.com/developers/applications)पर जाएं
- **"नया एप्लिकेशन"** पर क्लिक करें और अपने बॉट को नाम दें और डिस्कॉर्ड नीति नियमों को स्वीकार करें।
- เพิ่มแอปพลิเคชันแรกของคุณด้วย **เว็บไซต์** ตั้งชื่อแอปของคุณโดยไม่จำเป็นต้องเลือกตัวเลือก **"ตั้งค่า Firebase Hosting สำหรับแอปนี้ด้วย"** และลงทะเบียนแอป ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase จะให้ข้อมูลเกี่ยวกับการกำหนดค่าแก่คุณ นำค่าเหล่านี้ไปใช้กับไฟล์ `.env`
- स्टोरेज डेटाबेस बनाने के लिए **पर जाएं > [रीयलटाइम डेटाबेस](https://console.firebase.google.com/u/0/project/_/database/data)** बनाएं।

## 🪛 การพัฒนา

- เปิดเทอร์มินัลแล้วรัน `npm run emulators` เพื่อจำลองระบบฐานข้อมูลใน**โหมดพัฒนา**
- เปิดเทอร์มินัลหน้าใหม่แล้วรันคำสั่ง `npm run dev` > **💡 หมายเหตุ:** เมื่อคุณเข้าสู่โหมดการพัฒนา คุณลักษณะบางอย่างอาจถูกปิดใช้งาน เช่น การส่งสถิติ การอัปเดตข้อมูล เป็นต้น

## ☕ จำลอง

ทดสอบการใช้งานจริงด้วยการทำงานที่คล้ายกับการใช้งานจริง โดยระบบจะคำนวณการแยกเศษของการทำงานตามจำนวนของกิลด์โดยอัตโนมัติ

- เปิดเทอร์มินัลแล้วรัน `npm run emulators` เพื่อจำลองระบบฐานข้อมูลใน**โหมดจำลอง**
- เปิดเทอร์มินัลหน้าใหม่แล้วรันคำสั่ง `npm run serve` > **💡 หมายเหตุ:** คุณจะเข้าสู่โหมดการพัฒนาโดยอัตโนมัติเนื่องจากเป็นการจำลองการใช้งานจริง ทำให้คุณสมบัติบางอย่างอาจไม่ทำงาน

## 🍵 ใช้งานจริง

สำหรับการใช้งานจริงสามารถใช้คำสั่งหรือชุดคำสั่งที่เตรียมไว้ได้ตามปกติ ดังนี้:

- บน Linux หรือ MacOS

  ```sh
  # with command file (recommend)

  sh start.sh || sudo sh start.sh

  # or with call command

  npm start
  ```

- บน Windows

  ```bat
  @REM with command file (recommend)

  ./start.bat

  @REM or with call command

  npm start
  ```

### 🐳 ทำงานบน Docker

การดำเนินการนี้จำเป็นต้องมี [Docker](https://www.docker.com/products/docker-desktop/)

- ใช้คำสั่ง `npm run docker:build` แล้วรอให้ทำงานเสร็จทั้งหมด
- จากนั้นเปิดโปรแกรม Docker แล้วสั่งรันพร้อมกับใส่ข้อมูลสภาพแวดล้อมที่จำเป็น (env) หรือใช้คำสั่ง `npm run docker:run` แล้วรอจนบอททำงาน > **💡 หมายเหตุ:** คุณสามารถตรวจสอบการทำงานได้โดยใช้คำสั่ง `docker ps -a`

## แก้ไขปัญหาอย่างรวดเร็ว

### `gyp ERR! stack Error: not found: make`

ปัญหานี้อาจเกิดจาก **Build Tools** ติดตั้งไม่ถูกต้องหรืออาจยังไม่ได้ติดตั้ง วิธีแก้ไขปัญหานี้ให้ดูที่ส่วน[การติดตั้ง Build Tools](#1-ติดตั้ง-build-tools)

### `@firebase/firestore: Firestore (10.6.0): GrpcConnection RPC 'Write' stream 0x58a118ce error. Code: 14 Message: 14 UNAVAILABLE: No connection established. Last error: connect ECONNREFUSED 127.0.0.1:8080`

เป็นไปได้ว่าคุณยังไม่ได้จำลองระบบฐานข้อมูลบนเครื่องในโหมดทดสอบ โดยคุณสามารถแก้ปัญหานี้ได้โดยปิดบอทแล้วรันคำสั่งดังนี้ในอีกหน้าหนึ่ง

```bat
npm run emulators
```

## ปรับปรุงการแปลภาษา

और कई अन्य रोचक विशेषताएं...

## एक समस्या मिली

หากคุณพบปัญหาใดๆ จากการทำงานปัจจุบันของคุณ คุณสามารถแจ้งให้เราทราบได้ผ่านแท็บ [issues](https://github.com/Maseshi/Shioru/issues) ของพื้นที่เก็บนี้ได้
