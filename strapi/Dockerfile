# Используем официальный образ Node.js
FROM node:20-alpine

# Установите необходимые утилиты
RUN apk add --no-cache shadow

# Создайте пользователя и группу с конкретным UID и GID
RUN addgroup -g 1001 strapi && adduser -u 1001 -G strapi -D strapi

# Установите рабочую директорию
WORKDIR /usr/app

# Копируем файлы package.json и package-lock.json
COPY --chown=strapi:strapi strapi/package*.json ./

ARG NODE_ENV=production

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY --chown=strapi:strapi strapi/ . .

# Открываем порт, на котором работает Strapi
EXPOSE 1337

# Установите пользователя по умолчанию
USER 1001

# Команда для запуска Strapi
CMD ["npm", "run", "start"]
