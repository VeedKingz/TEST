# Alibaba Cloud ACK Deployment & Error Troubleshooting Guide

This repository contains the complete configuration to build and deploy **Your AI Website Buddy** directly to an **Alibaba Cloud Container Service for Kubernetes (ACK)** cluster via GitHub Actions.

---

## 1. What was fixed in the codebase for ACK Deployment

1. **TypeScript Production Runtime**: Moved `tsx` to `dependencies` so it is not pruned during `npm ci --omit=dev` inside the Docker container.
2. **Kubernetes Health Checks (`/api/health`)**: Added a dedicated `GET /api/health` endpoint in `server.ts` to prevent `CrashLoopBackOff` and timeout failures on ACK liveness/readiness probes.
3. **Multi-Stage Containerization (`Dockerfile`)**: Automatically builds the Vite frontend during stage 1 and mounts it into the Node.js production runner on port 3000.
4. **Alibaba Cloud SLB Service**: `k8s/service.yaml` is pre-configured with Alibaba Cloud SLB annotations to automatically allocate an external public IP for your website.
5. **Zero-Downtime Rollout**: Rollout diagnostics and log retrieval automatically print error logs if any pod fails to boot.

---

## 2. GitHub Repository Secrets Setup

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add the following repository secrets:

| Secret Name | Value Description | Example |
| :--- | :--- | :--- |
| `ALIYUN_ACR_REGISTRY` | Your Alibaba Cloud Container Registry endpoint | `registry.cn-hangzhou.aliyuncs.com` or `registry.ap-southeast-1.aliyuncs.com` |
| `ALIYUN_ACR_USERNAME` | Your Alibaba Cloud Container Registry username | `your-ram-user` or `username@company` |
| `ALIYUN_ACR_PASSWORD` | Your Alibaba Cloud Container Registry password | `YourStrongPassword123` |
| `ALIYUN_ACR_NAMESPACE` | Your ACR namespace name | `ai-apps` |
| `ACK_KUBECONFIG` | Full contents of your ACK Cluster Kubeconfig file | (Copy from Alibaba Cloud ACK Console) |
| `GEMINI_API_KEY` | Your Google Gemini API Key | `AIzaSy...` |

### How to get your ACK KubeConfig:
1. Log in to the [Alibaba Cloud ACK Console](https://cs.console.aliyun.com/).
2. Select your ACK Cluster.
3. In the **Connection Information** tab, choose **Public Access** (or Internal Access if using an internal runner) and click **Copy**.
4. Paste the entire YAML content into the `ACK_KUBECONFIG` GitHub secret.

---

## 3. How to Trigger Deployment

Once your secrets are added, push any commit to `main` (or run manually via **Actions > Deploy to Alibaba Cloud ACK > Run workflow**).

---

## 4. Common ACK Deployment Errors & How to Fix Them

### Error 1: `ImagePullBackOff` or `ErrImagePull`
- **Cause**: ACK cluster nodes cannot authenticate to your ACR instance, or the image name / region registry is mismatched.
- **Fix**:
  1. Ensure the image repository is set to **Public**, OR
  2. Create an `imagePullSecret` on your ACK cluster:
     ```bash
     kubectl create secret docker-registry aliyun-acr-secret \
       --docker-server=registry.cn-hangzhou.aliyuncs.com \
       --docker-username=<username> \
       --docker-password=<password>
     ```
     and uncomment `imagePullSecrets: [{name: aliyun-acr-secret}]` in `k8s/deployment.yaml`.

### Error 2: `CrashLoopBackOff`
- **Cause**: Port binding conflict or missing environment variables.
- **Fix**: The container binds to `0.0.0.0:3000`. The `/api/health` route responds with HTTP 200. Check the pod logs using:
  ```bash
  kubectl logs -l app=your-ai-website-buddy --tail=100
  ```

### Error 3: SLB External IP Stuck on `<pending>`
- **Cause**: In some VPC subnets, automated SLB creation requires proper VPC and RAM role permissions for the ACK cloud controller manager (`AliyunCSDefaultRole`).
- **Fix**: Check `kubectl describe svc your-ai-website-buddy-service`. Ensure your cluster has authorization to bind Server Load Balancer instances.
