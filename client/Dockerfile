FROM env-management-bases:1.4

# Create app directory
WORKDIR /client
# RUN mkdir logs
# Install app dependencies
# RUN npm install -g serve@14.1.2
# RUN npm install --force

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json /env-management/

# Bundle app env-management source
COPY . .
# COPY serviceJs/package*.json /env-management/serviceJs/

# RUN npm install --legacy-peer-deps

# Change to the app directory
# WORKDIR /env-management/serviceJs

# Install dependencies
# RUN npm install

# Change to the app directory
# WORKDIR /env-management

#Build react/vue/angular bundle static files
# RUN npm run build
# RUN npm install pm2 -g

RUN ls /client
# RUN ls /env-management/serviceJs


EXPOSE 3000
# EXPOSE 3008

# serve build folder on port 3000
CMD ["npm", "start", "-p", "3000"]
# CMD ["serve", "-s", "build", "-p", "3000"]
# CMD ["/bin/bash", "-c", "pm2 start serviceJs/index.js && pm2 delete all &&  pm2 start serviceJs/index.js && npm start "]
