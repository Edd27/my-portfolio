FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm ci && npm run build

RUN npm install -g astro

EXPOSE 4321

CMD ["astro", "preview", "--host", "0.0.0.0"]
