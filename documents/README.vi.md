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
  <a title="Trạng thái" target="_blank" href="https://shioru.statuspage.io/">
    <img src="https://img.shields.io/badge/dynamic/json?logo=google-cloud&logoColor=white&label=status&query=status.indicator&url=https%3A%2F%2Fq60yrzp0cbgg.statuspage.io%2Fapi%2Fv2%2Fstatus.json" />
  </a>
  <a title="đám đông" target="_blank" href="https://crowdin.com/project/shioru">
    <img src="https://badges.crowdin.net/shioru/localized.svg" />
  </a>
  <a title="CodeFactor" target="_blank" href="https://www.codefactor.io/repository/github/maseshi/shioru">
    <img src="https://www.codefactor.io/repository/github/maseshi/shioru/badge" alt="CodeFactor" />
  </a>
  <a title="top.gg" target="_blank" href="https://top.gg/bot/704706906505347183">
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

## Đặc trưng

- Hoạt động trên [Discord.js](https://discord.js.org/) v14.
- Có thể tùy chỉnh nhiều mục mong muốn
- Có thể phát nhạc từ [YouTube](https://www.youtube.com/), [Spotify](https://www.spotify.com/) và [SoundCloud](https://soundcloud.com/) với tính năng phát lại tự động.
- Hỗ trợ nhiều ngôn ngữ Bạn có thể kiểm tra các ngôn ngữ được hỗ trợ từ các tệp[ngôn ngữ](https://github.com/Maseshi/shioru/blob/main/source/languages)của kho lưu trữ này.
- Hệ thống bậc (trình độ và kinh nghiệm)
- Hỗ trợ tùy chỉnh thông báo máy chủ
- Bạn có thể nói chuyện bằng cách nhập `@Shioru` theo sau là tin nhắn bạn muốn liên lạc.
- Lệnh ứng dụng (/) có thể được sử dụng.
- จำลองระบบฐานข้อมูลสำหรับทดสอบ
- รองรับการทำงานบน Shard

และคุณสมบัติที่น่าสนใจอื่นๆ อีกมากมาย...

## điều kiện tiên quyết

- [Node.js](https://nodejs.org/) v20.6.0 หรือมากกว่า
- [Python](https://www.python.org/downloads/) v3.8.0 หรือมากกว่า
- [Java](https://www.oracle.com/java/technologies/downloads/) v11.0.0 หรือมากกว่า
- [Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) หรือ[ติดตั้งด้วยตัวเอง](#1-ติดตั้ง-build-tools)
- [Firebase Tools](https://firebase.google.com/docs/cli)
- [FFmpeg](https://www.ffmpeg.org/download.html)
- [Git](https://git-scm.com/downloads)

## การติดตั้ง

<<<<<<< HEAD
ทดสอบแล้วบนระบบ Mac, Linux และ Windows

<<<<<<< Updated upstream

### เพิ่มบอทไปยังเซิร์ฟเวอร์

- Chuyển đến [Cổng thông tin dành cho nhà phát triển Discord](https://discord.com/developers/applications)
- Nhấp vào **"Ứng dụng mới"** và đặt tên cho bot của bạn và chấp nhận các quy tắc của chính sách Discord.
- ไปที่หน้า **"Bot"** และเปิดใช้งานตัวเลือกทั้งหมดในส่วน **Privileged Gateway Intent** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- # เชิญบอทของคุณไปที่เซิร์ฟเวอร์โดยไปที่หน้า **OAuth2 > URL Generator** เลือก `bot` และ `applications.commands` เลือก `Administrator` จากนั้นคัดลอกลิงก์และวางในที่อยู่ของเบราว์เซอร์ของคุณ ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### Thêm bot vào máy chủ.

- Đi đến trang [Discord Developer Portal](https://discord.com/developers/applications)
- Nhấn **"New Application"** và đặt tên cho bot của bạn và chấp nhận các quy tắc chính sách Discord.
- Đến trang **"Bot"** và bật tất cả các tùy chọn trong phần **Privileged Gateway Intents**.
  ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- Mời bot của bạn vào máy chủ bằng cách đi đến trang **OAuth2 > URL Generator**, lựa chọn `bot` và `applications.commands` và lựa chọn `Administrator`.
  Sau đó sao chép liên kết và dán nó vào địa chỉ trình duyệt của bạn.
  ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)
  > > > > > > > Stashed changes

### Thiết lập bot

เนื่องจากเราใช้ [sodium](https://www.npmjs.com/package/sodium) ในการเข้ารหัสและถอดรหัส เราจึงจำเป็นต้องติดตั้งส่วนประกอบเพิ่มเติมต่อไปนี้:

```bat
@REM บน Windows
npm install -g windows-build-tools
```

```sh
# บน MacOS (Darwin)
brew install libtool autoconf automake
```

```sh
# บน Linux
sudo apt-get install libtool-bin
```

- Khởi chạy một thiết bị đầu cuối và chạy lệnh sau.
=======
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

- Khởi chạy một thiết bị đầu cuối và chạy lệnh sau.
  ```bat
  git clone https://github.com/Maseshi/Shioru.git
  cd Shioru
  npm install
  ```
- Đổi tên tệp `.env.example` thành `.env` và chèn tất cả các giá trị cần thiết.

  > **💡 หมายเหตุ:** คุณสามารถแก้ไขข้อมูลบางอย่างใน **config** ที่ [./source/configs/data.js](../source/configs/data.js)

### 3. ตั้งค่าบอทและเชิญเข้าร่วม

- Chuyển đến [Cổng thông tin dành cho nhà phát triển Discord](https://discord.com/developers/applications)
- Nhấp vào **"Ứng dụng mới"** và đặt tên cho bot của bạn và chấp nhận các quy tắc của chính sách Discord.
- ไปที่หน้า **"Bot"** และเปิดใช้งานตัวเลือกทั้งหมดในส่วน **Privileged Gateway Intent** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- เชิญบอทของคุณไปที่เซิร์ฟเวอร์โดยไปที่หน้า **OAuth2 > URL Generator** เลือก `bot` และ `applications.commands` เลือก `Administrator` จากนั้นคัดลอกลิงก์และวางในแถบที่อยู่ของเบราว์เซอร์ของคุณ ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### 4. ตั้งค่าฐานข้อมูล

- Truy cập https://firebase.google.com/ và bắt đầu thiết lập dự án.
- Thêm một dự án mới và làm theo các bước.
- เพิ่มแอปพลิเคชันแรกของคุณด้วย **เว็บไซต์** ตั้งชื่อแอปของคุณโดยไม่จำเป็นต้องเลือกตัวเลือก **"ตั้งค่า Firebase Hosting สำหรับแอปนี้ด้วย"** และลงทะเบียนแอป ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase จะให้ข้อมูลเกี่ยวกับการกำหนดค่าแก่คุณ นำค่าเหล่านี้ไปใช้กับไฟล์ `.env`
- Đến **tạo > [cơ sở dữ liệu thời gian thực](https://console.firebase.google.com/u/0/project/_/database/data)** để tạo cơ sở dữ liệu lưu trữ.

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
>>>>>>> 7cd9c5100281cee9c71d556039e6a723965221fa

```bat
npm run emulators
```

<<<<<<< HEAD
- Bạn có thể sửa đổi một số dữ liệu trong **config** at `./source/config.js`

### Thiết lập căn cứ hỏa lực

- Truy cập https://firebase.google.com/ và bắt đầu thiết lập dự án.
- Thêm một dự án mới và làm theo các bước.
- เพิ่มแอปพลิเคชันแรกของคุณด้วย **เว็บไซต์** ตั้งชื่อแอปของคุณโดยไม่จำเป็นต้องเลือกตัวเลือก **"ตั้งค่า Firebase Hosting สำหรับแอปนี้ด้วย"** และลงทะเบียนแอป ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase จะให้ข้อมูลเกี่ยวกับการกำหนดค่าแก่คุณ นำค่าเหล่านี้ไปใช้กับไฟล์ `.env.example`
- Đến **tạo > [cơ sở dữ liệu thời gian thực](https://console.firebase.google.com/u/0/project/_/database/data)** để tạo cơ sở dữ liệu lưu trữ.

### phát triển

- Đổi tên tệp `.env.example` thành `.env` và chèn tất cả các giá trị cần thiết.
- ไปที่เทอร์มินัลแล้วรันคำสั่ง `npm run dev` สำหรับการพัฒนาและ `npm start` สำหรับการใช้งานจริง > **หมายเหตุ**: เมื่อคุณเข้าสู่โหมดการพัฒนา คุณลักษณะบางอย่างอาจถูกปิดใช้งาน เช่น การส่งสถิติ การอัปเดตข้อมูล เป็นต้น

## Khắc phục sự cố nhanh

- หากคุณพบปัญหาระหว่างการติดตั้งคอมโพเนนต์ซึ่งบนเทอร์มินัลระบุว่า `gyp ERR! stack Error: not found: make` ปัญหานี้อาจเกิดจาก **Build tools** ติดตั้งไม่ถูกต้องหรืออาจยังไม่ได้ติดตั้ง วิธีแก้ไขคือดาวน์โหลดเวอร์ชันล่าสุดของ [Node.js](https://nodejs.org/) และทำเครื่องหมายที่ส่วนนี้ภายในขั้นตอนการติดตั้ง

  ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/node-js-tools-for-native-modules.png)

- Nếu bạn không thể cài đặt gói **sodium** , hãy cài đặt **libsodium-wrappers** để thay thế.

```bat
npm cài đặt ffmpeg-static@latest --save
```

- Nếu bạn không thể phát nhạc hoặc các lệnh phát lại nhạc không hoạt động, hãy cài đặt [ffmpeg](https://ffmpeg.org/download.html) **(recommended)** hoặc cài đặt gói **ffmpeg-static** và thử lại.

```bat
npm cài đặt ffmpeg-static@latest --save
```

## Cải thiện bản dịch

và nhiều tính năng thú vị khác...

## tín dụng

Bạn có thể giúp chúng tôi dịch một ngôn ngữ hiện có hoặc một ngôn ngữ hiện không khả dụng tại [Crowdin](https://crowdin.com/project/shioru-bot).

Cảm ơn tất cả những người sáng tạo ban đầu đã cho phép sử dụng những tác phẩm tuyệt vời này của bạn.

## tìm thấy một vấn đề

Avatar vẽ bởi: [夏月 まりな (NATSUKI MARINA)](https://www.pixiv.net/en/users/482462)/[お着替え中](https://www.pixiv.net/en/artworks/76075098)
=======
## ปรับปรุงการแปลภาษา

và nhiều tính năng thú vị khác...

## tìm thấy một vấn đề

หากคุณพบปัญหาใดๆ จากการทำงานปัจจุบันของคุณ คุณสามารถแจ้งให้เราทราบได้ผ่านแท็บ [issues](https://github.com/Maseshi/Shioru/issues) ของพื้นที่เก็บนี้ได้
>>>>>>> 7cd9c5100281cee9c71d556039e6a723965221fa
