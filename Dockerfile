FROM node:22.7.0-alpine3.19 as base

# Build
FROM base as build
WORKDIR /app
ADD . .
RUN npm ci
RUN node ace build

# Run
FROM base
WORKDIR /app
COPY --from=build /app/build /app
RUN npm ci --omit=dev
CMD ["node", "./bin/server.js"]