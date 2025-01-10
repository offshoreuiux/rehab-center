# Use the Node.js official image for version 22.x
FROM node:22.11-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose port 3001 for React app
EXPOSE 3001

# Start the React app
CMD ["npm", "start"]
