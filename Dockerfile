FROM node:10-slim

# Copy the application source code.
COPY . /app

WORKDIR /app

# Install dependencies
RUN npm --unsafe-perm install

# Run a server to serve the application
CMD npm run dev
