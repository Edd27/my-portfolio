FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

RUN npm install -g astro

EXPOSE 4321

CMD ["astro", "preview", "--host", "0.0.0.0"]
