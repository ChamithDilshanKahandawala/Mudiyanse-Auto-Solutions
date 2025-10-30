# Use an official Node.js runtime as the base image
# Using 'alpine' makes the image very small and efficient
FROM node:22-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
# This is done first to leverage Docker's layer caching
COPY package*.json ./

# Install only the production dependencies
RUN npm install --production

# Copy the rest of your application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# The command to run your application when the container starts
CMD ["node", "server.js"]