# Use the official Node.js 14 image as a base
FROM node:lts-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY api_src /app

# Install dependencies
RUN npm install 
#express mysql dotenv mysql2

# Copy your API code to the working directory


# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node","index.js"]