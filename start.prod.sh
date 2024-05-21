#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Load environment variables from a file

echo "Building Docker images..."
docker compose -f docker-compose.yml build || { echo "Build failed"; exit 1; }

echo "Starting Docker containers..."
docker compose -f docker-compose.yml up -d --scale api=3 --remove-orphans || { echo "Failed to start containers"; exit 1; }

echo "Containers started successfully."
