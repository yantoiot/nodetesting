FROM node:16.14.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5152
CMD ["node","app.js"]