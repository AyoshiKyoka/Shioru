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
- [x] Вы можете поговорить, набрав `@Shioru`, а затем сообщение, которое вы хотите передать.
- [x] Поддерживает работу на Shard или поддержка работы на различных серверах.
- [x] Вы можете использовать слеш команды (/)
- [x] Имитация базы данных для тестов

И много других интересных функций...

## 🧩 Требования для установки

- [Node.js](https://nodejs.org/) v20.6.0 или выше
- [Firebase Tools](https://firebase.google.com/docs/cli) (требуется [Java](https://www.oracle.com/java/technologies/downloads/) v11.0.0 версии)
- [Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) (требуется [Python](https://www.python.org/downloads/) v3.8.0 версии)
- [FFmpeg](https://www.ffmpeg.org/download.html)
- [Git](https://git-scm.com/downloads)

## ⌛ Установка

### 1. Клонируйте бота и установите компоненты

- Запустите терминал и выполните следующие команды.
  ```bat
  git clone https://github.com/Maseshi/Shioru.git
cd Shioru
npm install
  ```
- Переименуйте файл `.env.example` в `.env` и вставьте все необходимые значения.

> [!NOTE]
> 
> Вы можете редактировать некоторую информацию в **config** по пути [./source/configs/data.js](../source/configs/data.js)

### 2. Настроить бота и пригласить

- Перейти на [Портал разработчиков Discord](https://discord.com/developers/applications)
- Нажмите **«Новое приложение»** , назовите своего бота и примите правила политики Discord.
- Перейдите на страницу **"Bot"** и включите все опции в разделе **Privileged Gateway Intent** ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-privileged-gateway-intents.png)
- Пригласите своего бота на сервер, перейдя на страницу **OAuth2 > URL Generator** выберите `bot` и `applications.commands` и `Administrator` скопируйте полученную ссылку и перейдите по ней. ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/discord-developer-portal-scopes.png)

### 3. Настройки базы данных

- Перейдите на https://firebase.google.com/ и начните настройку проекта.
- Добавьте новый проект и следуйте инструкциям.
- Добавьте свое первое приложение с помощью **Веб-сайта** Назовите свое приложение и по желанию выберите **«Also set up Firebase Hosting for this app»** и зарегистрируйте приложение. ![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase предоставит вам информацию о конфигурации. Запишите эти значения в файл `.env`
- Перейдите в **Build > [Realtime Database](https://console.firebase.google.com/u/0/project/_/database/data)**, чтобы создать базу данных для хранения данных.

## 🔥 Начало

Доступно несколько вариантов. Если вы используете [Visual Studio Code](https://code.visualstudio.com/), вы можете выбрать свой метод напрямую через вкладку Run and Debug (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>). Для других операций см. Tasks (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> и <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> введите `>Tasks: Run Task`)

### 🪛 Разработка

- Откройте терминал и выполните команду `npm run dev`

### ☕ Обслуживание

Проверьте фактическое использование, выполнив задачи, аналогичные реальному использованию. Система автоматически рассчитает долю работы исходя из количества серверов.

- Откройте терминал и добавьте все необходимые переменные среды.
  - Для Windows используйте команду `set variable=example`
  - Для Linux или MacOS используйте команду `export variable=example`
- Используйте команду `npm run serve`

> [!NOTE]
> 
> Вы автоматически перейдете в режим разработки, поскольку это имитация производства. Все данные не будут сохранены.

### 🍵 Продакшн

Для фактического использования подготовленную команду или набор команд можно использовать следующим образом:

- Для Linux или MacOS

  ```sh
  sh start.sh || sudo sh start.sh

  # or

  npm start
  ```

- Для Windows

  ```bat
  ./start.bat

  @REM or

  npm start
  ```

### 🐳 Запуск на Docker

Для этой операции требуется [Docker](https://www.docker.com/products/docker-desktop/)

- Откройте терминал и добавьте все необходимые переменные среды.
  - Для Windows используйте команду `set variable=example`
  - Для Linux или MacOS используйте команду `export variable=example`
- Создайте образ используя команду `npm run docker:build` или `npm run docker:build:serve` для режима обслуживания.
- После успешной сборки образа запустите его с помощью команды `npm run docker:run` или `npm run docker:build:serve` для режима обслуживания.

[Узнать больше о командах Docker](https://docs.docker.com/reference/)

## 🌐 Улучшить перевод

Вы можете помочь нам перевести существующий язык или языки, которые в настоящее время недоступны на [Crowdin](https://crowdin.com/project/shioru).

## ⚠️ Нашел проблему

Если у вас возникнут какие-либо проблемы на текущей работе, вы можете сообщить нам об этом через вкладку [issues](https://github.com/Maseshi/Shioru/issues) этого репозитория.
