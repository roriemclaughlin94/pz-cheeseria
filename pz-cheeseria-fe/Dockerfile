# Compile and Build
FROM node:latest as build

WORKDIR /usr/local/app
COPY . /usr/local/app/
RUN npm install
# NODE_OPTIONS=--openssl-legacy-provider temp fix to allow build to continue
RUN export NODE_OPTIONS=--openssl-legacy-provider && npm run build --production --ignore-scripts --prefer-offline

# Serve app
FROM nginx:latest
COPY --from=build /usr/local/app/dist/pz-cheeseria /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]