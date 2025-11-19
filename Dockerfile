FROM node:18 as build

WORKDIR /app
# Pass build-time ARGs for VITE variables
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
ARG VITE_API_QUIZ_PREFIX
ENV VITE_API_QUIZ_PREFIX=$VITE_API_QUIZ_PREFIX
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
