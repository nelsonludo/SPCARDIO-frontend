# Use Node.js as the build stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy all files from the current directory to the container's working directory
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build folder to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

