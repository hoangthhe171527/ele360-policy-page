FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ENV TANSTACK_START_NODE_DEPLOY=1
RUN npm run build
RUN npm prune --omit=dev

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8090

EXPOSE 8090

CMD ["npm", "start"]
