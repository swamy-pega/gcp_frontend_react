FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine

# overwrite default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

# Expose Cloud Run port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
