<div align="center">
  <img src="https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/icons/apple-icon.png" width="100" alt="Shioru" />
  <strong>
    <h1>Shioru</h1>
    <p>персональный ассистент Discord который поможет сделать ваш сервер лучше.</p>
  </strong>
  <p>
    <a title="Discord.js v14" href="https://discord.js.org/">
      <img src="https://img.shields.io/badge/discord.js-14-blue?logo=discord&logoColor=white&style=for-the-badge" alt="Discord.js v14" />
    </a>
    <a title="Last commit" href="https://github.com/Maseshi/Shioru/commits/">
      <img src="https://img.shields.io/github/last-commit/Maseshi/Shioru?logo=github&style=for-the-badge" alt="Last commit" />
    </a>
    <a title="Status" href="https://shioru.statuspage.io/">
      <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fq60yrzp0cbgg.statuspage.io%2Fapi%2Fv2%2Fstatus.json&query=status.indicator&logo=google-cloud&logoColor=white&label=status&style=for-the-badge" alt="Status" />
    </a>
    <br />
    <a title="Краудин" href="https://crowdin.com/project/shioru">
      <img src="https://badges.crowdin.net/shioru/localized.svg" alt="Crowdin" />
    </a>
    <a title="КодФактор" href="https://www.codefactor.io/repository/github/maseshi/shioru">
      <img src="https://www.codefactor.io/repository/github/maseshi/shioru/badge" alt="КодФактор" />
    </a>
    <a title="Top.gg" href="https://top.gg/bot/704706906505347183">
      <img src="https://top.gg/api/widget/upvotes/704706906505347183.svg" alt="Top.gg" />
    </a>
  </p>
  <p>
    <a href="https://shiorus.web.app/invite">Добавить бота</a>
    ·
    <a href="https://github.com/Maseshi/Shioru/tree/main/documents">Сменить язык</a>
    ·
    <a href="https://shioru.statuspage.io/">Статус</a>
    ·
    <a href="https://crowdin.com/project/shioru">Улучшить перевод</a>
    ·
    <a href="https://top.gg/bot/704706906505347183">Оценить бота</a>
  </p>
</div>

Ваш лучший персональный ассистент поможет вашему серверу выглядеть более живым. Он умеет делать так много всего, что вы легко можете просмотреть подробную информацию обо всех командах, прописав `/help`

## ✨ Функции

- [x] Работает на [Discord.js](https://discord.js.org/) v14
- [x] Лёгок в чтении, прост в использовании и очень эффективен.
- [x] Возможность настроить различные желаемые элементы.
- [x] Доступ ко всем командам и более 100+ подкоманд.
- [x] Воспроизведение музыки с [YouTube](https://www.youtube.com/), [Spotify](https://www.spotify.com/), [SoundCloud](https://soundcloud.com/) и ещё более [900+ сайтов](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md) с автоматическим воспроизведением.
- [x] Поддержка множества языков. Вы можете проверить поддерживаемые языки в [языковом файле](https://github.com/Maseshi/Shioru/blob/main/source/configs/languages.json) этого репозитория.
- [x] Уровневая система (уровень и опыт)
- [x] Поддержка настройки уведомлений сервера.
- [x] สามารถพูดคุยได้โดยการพิมพ์ `@Shioru` ตามด้วยข้อความที่ต้องการสื่อสาร
- [x] รองรับการทำงานบน Shard หรือรองรับการทำงานในหลากหลายกิลด์
- [x] สามารถใช้งานคำสั่งแอปพลิเคชั่น (/) ได้
- [x] จำลองระบบฐานข้อมูลสำหรับทดสอบ

и много других интересных функций...

## 🧩 ข้อกำหนดเบื้องต้น

- [Node.js](https://nodejs.org/) v20.6.0 หรือสูงกว่า
- [Firebase Tools](https://firebase.google.com/docs/cli) (ต้องการ [Java](https://www.oracle.com/java/technologies/downloads/) v11.0.0 หรือสูงกว่า)
- [Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) (ต้องการ [Python](https://www.python.org/downloads/) v3.8.0 หรือสูงกว่า)
- [FFmpeg](https://www.ffmpeg.org/download.html)
- [Git](https://git-scm.com/downloads)

## ⌛ การติดตั้ง

### 1. โคลนบอทและติดตั้งส่วนประกอบ

- Запустите терминал и выполните следующую команду.
  ```bat
  git clone https://github.com/Maseshi/Shioru.git
  cd Shioru
  npm install
  ```
- Переименуйте файл `.env.example` в `.env` и вставьте все необходимые значения.

> [!NOTE]
> 
> คุณสามารถแก้ไขข้อมูลบางอย่างใน **config** ที่ [./source/configs/data.js](../source/configs/data.js)

### 2. ตั้งค่าบอทและเชิญเข้าร่วม

- Перейти на [Портал разработчиков Discord](https://discord.com/developers/applications)
- Нажмите **«Новое приложение»** , назовите своего бота и примите правила политики Discord.
- ไปที่หน้า **"Bot"** และเปิดใช้งานตัวเลือกทั้งหมดในส่วน **Privileged Gateway Intent** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- เชิญบอทของคุณไปที่เซิร์ฟเวอร์โดยไปที่หน้า **OAuth2 > URL Generator** เลือก `bot` และ `applications.commands` เลือก `Administrator` จากนั้นคัดลอกลิงก์และวางในแถบที่อยู่ของเบราว์เซอร์ของคุณ ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### 3. ตั้งค่าฐานข้อมูล

- Перейдите на https://firebase.google.com/ и начните настройку проекта.
- Добавьте новый проект и следуйте инструкциям.
- เพิ่มแอปพลิเคชันแรกของคุณด้วย **เว็บไซต์** ตั้งชื่อแอปของคุณโดยไม่จำเป็นต้องเลือกตัวเลือก **"ตั้งค่า Firebase Hosting สำหรับแอปนี้ด้วย"** และลงทะเบียนแอป ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase จะให้ข้อมูลเกี่ยวกับการกำหนดค่าแก่คุณ นำค่าเหล่านี้ไปใช้กับไฟล์ `.env`
- Перейдите к **, создайте > [базу данных реального времени](https://console.firebase.google.com/u/0/project/_/database/data)** , чтобы создать базу данных хранилища.

## 🔥 เริ่มต้นใช้งาน

มีหลากหลายทางเลือกให้เปิดใช้งานได้ หากคุณใช้ [Visual Studio Code](https://code.visualstudio.com/) คุณสามารถเลือกวิธีการทำงานได้ทันทีผ่านแท็บ Run and Debug (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>) ส่วนการทำงานอื่น ๆ ให้ดูที่ Tasks (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> และ <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> พิมพ์ `>Tasks: Run Task`)

### 🪛 พัฒนา

- เปิดเทอร์มินัลแล้วรันคำสั่ง `npm run dev`

### ☕ จำลอง

ทดสอบการใช้งานจริงด้วยการทำงานที่คล้ายกับการใช้งานจริง โดยระบบจะคำนวณการแยกเศษของการทำงานตามจำนวนของกิลด์โดยอัตโนมัติ

- เปิดเทอร์มินัลแล้วเพิ่มตัวแปรสภาพแวดล้อมทั้งหมดที่จำเป็น
  - สำหรับ Windows ใช้คำสั่ง `set variable=example`
  - สำหรับ Linux หรือ MacOS ใช้คำสั่ง `export variable=example`
- รันคำสั่ง `npm run serve`

> [!NOTE]
> 
> คุณจะเข้าสู่โหมดการพัฒนาโดยอัตโนมัติเนื่องจากเป็นการจำลองการใช้งานจริง ข้อมูลทั้งหมดจะไม่ได้รับการบันทึก

### 🍵 ใช้งานจริง

สำหรับการใช้งานจริงสามารถใช้คำสั่งหรือชุดคำสั่งที่เตรียมไว้ได้ตามปกติ ดังนี้:

- บน Linux หรือ MacOS

  ```sh
  sh start.sh || sudo sh start.sh

  # or

  npm start
  ```

- บน Windows

  ```bat
  ./start.bat

  @REM or

  npm start
  ```

### 🐳 ทำงานบน Docker

การดำเนินการนี้จำเป็นต้องมี [Docker](https://www.docker.com/products/docker-desktop/)

- เปิดเทอร์มินัลแล้วเพิ่มตัวแปรสภาพแวดล้อมทั้งหมดที่จำเป็น
  - สำหรับ Windows ใช้คำสั่ง `set variable=example`
  - สำหรับ Linux หรือ MacOS ใช้คำสั่ง `export variable=example`
- ทำการสร้างอิมเมจโดยใช้คำสั่ง `npm run docker:build` หรือ `npm run docker:build:serve` สำหรับโหมดจำลองแล้วรอจนกว่าจะเสร็จสิ้นกระบวนการ
- หลังจากสร้างอิมเมจสำเร็จแล้วให้รันโดยใช้คำสั่ง `npm run docker:run` หรือ `npm run docker:build:serve` สำหรับโหมดจำลอง

[เรียนรู้เพิ่มเติมเกี่ยวกับคำสั่ง Docker](https://docs.docker.com/reference/)

## 🌐 ปรับปรุงการแปลภาษา

Вы можете помочь нам перевести существующий язык или язык, который в настоящее время недоступен на [Crowdin](https://crowdin.com/project/shioru-bot).

## ⚠️ พบปัญหา

หากคุณพบปัญหาใดๆ จากการทำงานปัจจุบันของคุณ คุณสามารถแจ้งให้เราทราบได้ผ่านแท็บ [issues](https://github.com/Maseshi/Shioru/issues) ของพื้นที่เก็บนี้ได้
