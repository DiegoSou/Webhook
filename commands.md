### Docker
```docker build -t webhook:dev-v0.1 .```
```docker run --name webhook -p 3000:3000 -d webhook:dev-v0.1```
```docker stop webhook```

### Node js / libs
```npx prisma migrate dev --name init```
```npm run dev```
