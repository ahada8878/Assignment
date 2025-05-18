FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code into the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run your app
CMD ["node", "src/index.js"]
