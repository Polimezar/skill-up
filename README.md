- прокачка навыков работы с анимацией и реализацией карт через API Яндекс карт ( pug / scss / js )
- GitHub Pages: https://polimezar.github.io/skill-up/sitemap.html

## [Гайд по работе со сборкой](/GUIDE.md) 📕

## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js 16**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Сборка проекта, без минификации <br>
и оптимизация изображений перед деплоем на прод - `npm run nomin`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
