# Stage 1: Build
FROM node:22-alpine3.19 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Run
FROM node:22-alpine3.19
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3000
CMD ["node", "server.js"]
