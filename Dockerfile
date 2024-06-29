FROM node

WORKDIR /webhooknode

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
