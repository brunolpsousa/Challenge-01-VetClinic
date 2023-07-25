# Use the latest LTS (long-term support) version of Node.js as the base image
FROM node:lts-alpine

# Set user
USER node

# Set the working directory to the project root
WORKDIR /app

# Copy files to container
COPY --chown=node:node . .

# Install the dependencies
RUN npm install

# Expose the app's port
EXPOSE 3000

# Run the app when the container is started
CMD [ "npm", "start" ]
