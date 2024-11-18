FROM node:alpine AS builder

WORKDIR /src
COPY . .
RUN npm install --force
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /src/out /usr/share/nginx/html