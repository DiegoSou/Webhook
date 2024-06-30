FROM node

WORKDIR /webhooknode

COPY package.json package-lock.json* ./

RUN npm i

COPY . .

COPY prisma ./prisma/

EXPOSE 3000

RUN npx prisma generate --schema ./prisma/schema.prisma

CMD ["npm", "run", "dev"]
# ENTRYPOINT ["npx", "prisma", "migrate", "dev"]
