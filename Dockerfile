# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Copy the rest of the app to the working directory
COPY . .

# Set the command to run the app
CMD ["yarn", "dev"]