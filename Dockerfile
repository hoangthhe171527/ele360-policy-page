FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npm install --no-save --no-audit --no-fund \
  @rollup/rollup-linux-x64-gnu@4.60.2 \
  @tailwindcss/oxide-linux-x64-gnu@4.2.4 \
  lightningcss-linux-x64-gnu@1.32.0 \
  @rolldown/binding-linux-x64-gnu@1.0.2

COPY . .
ENV TANSTACK_START_NODE_DEPLOY=1
RUN npm run build
RUN npm prune --omit=dev

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8090

EXPOSE 8090

CMD ["npm", "start"]
