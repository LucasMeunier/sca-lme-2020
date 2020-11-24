# Stage 1
FROM node:alpine AS my-app-build
WORKDIR app
COPY . /app
RUN npm ci && npm run build

# Stage 2
FROM nginx:alpine
COPY --from=my-app-build app/dist/episen-sca-lme-front /usr/share/nginx/html
EXPOSE 80

LABEL description="Frontend de mon application sca"
LABEL com.docker.order.version="4.0.0"
LABEL com.docker.order.dockerfile.date="24.11.2020"
