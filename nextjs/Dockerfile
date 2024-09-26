# Используем официальный образ Node.js
FROM node:20-alpine

# Установите необходимые утилиты
RUN apk add --no-cache shadow

# Создайте пользователя и группу с конкретным UID и GID
RUN addgroup -g 1001 nextjs && adduser -u 1001 -G nextjs -D nextjs

# Установите рабочую директорию
WORKDIR /usr/app

# Копируем файлы package.json и package-lock.json
COPY --chown=nextjs:nextjs nextjs/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY --chown=nextjs:nextjs nextjs/ . .

# Открываем порт
EXPOSE 3000

# Установите пользователя по умолчанию
USER 1001

# Команда для запуска Next.js приложения
CMD ["npm", "run", "start"]
