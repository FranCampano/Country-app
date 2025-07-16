# Etapa 1: construir la aplicación Angular
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=dist/country-app

# Etapa 2: servir la app con un servidor web
FROM nginx:alpine

COPY --from=build /app/dist/country-app/browser /usr/share/nginx/html

EXPOSE 80
