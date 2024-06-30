# README

```
docker build -t diego-webhook-node:dev-v0.2 .
docker run --name diego-webhook-node -p 3000:3000 -d diego-webhook-node:dev-v0.2
docker stop diego-webhook-node
```

```
npx prisma migrate dev --name init
```
