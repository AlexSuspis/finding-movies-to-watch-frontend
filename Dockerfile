FROM node:17.0.1

#Create folder in container to put our backend in
WORKDIR /usr/src/app/frontend

#Copy package json and install dependencies
COPY package.json ./
RUN npm cache verify
run npm update --force --legacy-peer-deps
RUN npm install --force --legacy-peer-deps
RUN npm install -g @angular/cli

#Copy app into container
COPY . .

EXPOSE 4200

# --host 0.0.0.0 is included so that angular app is open to connections coming from Docker Host (browser)
CMD ["ng","serve", "--host", "0.0.0.0"]

