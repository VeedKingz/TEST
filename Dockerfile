# Multi-stage Dockerfile for Your AI Website Buddy
# Optimized for Alibaba Cloud ACK & ACR (Alibaba Cloud Container Registry)

# ----------------- Stage 1: Build Frontend -----------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies (including devDependencies required for vite build)
RUN npm ci

# Copy source files
COPY . .

# Build Vite frontend into /app/dist
RUN npm run build

# ----------------- Stage 2: Production Runner -----------------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install dumb-init for proper signal forwarding and zombie process reaping in Kubernetes
RUN apk add --no-cache dumb-init

# Copy package definitions
COPY package*.json ./

# Install production dependencies (including tsx which is in dependencies)
RUN npm ci --omit=dev

# Copy compiled frontend from builder stage
COPY --from=builder /app/dist ./dist

# Copy backend entry point and assets
COPY server.ts ./
COPY src/assets ./src/assets
COPY tsconfig.json ./

# Create non-root user for security in ACK cluster
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

# Use dumb-init to run the server
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["npm", "start"]
