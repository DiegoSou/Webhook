# README

```
docker build -t diego-webhook-node:dev-v0.1 .
docker run --name diego-webhook-node -p 3000:3000 -d diego-webhook-node:dev-v0.1
docker stop diego-webhook-node
```