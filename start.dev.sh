#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Load environment variables from a file
source .env  # Ensure this points to your environment file if needed

echo "Building Docker images..."
docker compose -f docker-compose.dev.yml build || { echo "Build failed"; exit 1; }

echo "Starting Docker containers..."
# docker compose -f docker-compose.dev.yml up -d --remove-orphans || { echo "Failed to start containers"; exit 1; }
docker compose -f docker-compose.dev.yml up --watch --remove-orphans || { echo "Failed to start containers"; exit 1; }

echo "Containers started successfully."