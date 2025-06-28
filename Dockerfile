FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:20 AS runner

WORKDIR /app
COPY --from=builder /app .

ENV PORT=4321
EXPOSE 4321

CMD ["npm", "run", "preview"]
