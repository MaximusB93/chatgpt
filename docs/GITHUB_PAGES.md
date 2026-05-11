# Публикация DirectPilot AI на GitHub Pages

Проект сейчас является статическим прототипом: `index.html`, `styles.css` и `main.js`. Его можно опубликовать на GitHub Pages без backend и без сборки.

## 1. Репозиторий проекта

GitHub-репозиторий для публикации:

```text
https://github.com/MaximusB93/directpilot-ai
```

Remote для локального репозитория:

```bash
git remote add origin https://github.com/MaximusB93/directpilot-ai.git
```

В этом рабочем окружении remote уже настроен как `origin`, но `git push` может потребовать авторизацию GitHub или быть заблокирован сетевым прокси среды. Если push из агента не проходит, выполните push локально со своего компьютера.

## 2. Отправить код на GitHub

Из корня проекта выполните:

```bash
git push -u origin work
```

Если GitHub попросит логин и пароль:

1. В поле `Username` введите ваш GitHub-логин.
2. В поле `Password` введите не пароль GitHub, а Personal Access Token.

Для создания токена используйте GitHub:

```text
Settings → Developer settings → Personal access tokens → Fine-grained tokens
```

Минимальные права для токена на этот репозиторий:

```text
Contents: Read and write
Actions: Read and write
```

## 3. Включить GitHub Pages

1. Откройте репозиторий на GitHub.
2. Перейдите в **Settings → Pages**.
3. В блоке **Build and deployment** выберите **Source: GitHub Actions**.
4. Запустите workflow **Deploy static prototype to GitHub Pages** или сделайте push в ветку `work`/`main`.

После успешного workflow сайт будет доступен по адресу:

```text
https://maximusb93.github.io/directpilot-ai/
```

## 4. Подключить поддомен

Если нужен собственный поддомен, например:

```text
https://directpilot.example.com
```

сделайте так:

1. В **Settings → Pages → Custom domain** укажите `directpilot.example.com`.
2. У DNS-провайдера домена создайте `CNAME`-запись:

```text
directpilot CNAME maximusb93.github.io
```

3. После проверки домена включите **Enforce HTTPS**.

## 5. Важно

GitHub Pages подходит для визуального прототипа и лендинга. Когда появится backend для OAuth Яндекса, импорта статистики, AI-orchestrator и очередей задач, его нужно будет размещать отдельно: например на VPS, Render, Railway, Fly.io, Yandex Cloud или другом backend-хостинге.
