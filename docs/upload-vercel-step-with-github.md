# Deploy to Vercel with GitHub

This guide shows how to upload your project to GitHub and deploy it to Vercel.

## 1. Push project to GitHub

1. Open terminal in your project folder.
2. Run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If the repository already exists locally, skip `git init` and `remote add` if already configured.

## 2. Sign in to Vercel

1. Go to https://vercel.com
2. Click **Sign Up** or **Log In**.
3. Choose **Continue with GitHub**.

## 3. Import GitHub repository

1. In Vercel dashboard, click **Add New...** -> **Project**.
2. Under GitHub repositories, find your repo.
3. Click **Import**.

## 4. Configure project settings

For this Next.js project, default settings are usually correct:

- Framework Preset: `Next.js`
- Build Command: `next build` (default)
- Install Command: `npm install` (default)
- Output Directory: leave default

If you need environment variables:

1. In the import screen, open **Environment Variables**.
2. Add key/value pairs.
3. Click **Add** for each variable.

## 5. Deploy

1. Click **Deploy**.
2. Wait for build and deployment to complete.
3. Open the generated `.vercel.app` URL.

## 6. Auto deploy on every push

After linking GitHub, Vercel automatically redeploys when you push commits to `main` (or your configured branch).

Use:

```bash
git add .
git commit -m "Update site"
git push
```

Vercel will build and publish the new version automatically.

## 7. (Optional) Add custom domain

1. In Vercel project -> **Settings** -> **Domains**.
2. Add your domain name.
3. Update DNS records as instructed by Vercel.

## 8. Redeploy manually (if needed)

In Vercel project dashboard:

1. Open the latest deployment.
2. Click **Redeploy**.

---

If deployment fails, check:

- GitHub repo permissions in Vercel
- Build logs in Vercel dashboard
- Environment variable values
- Branch and framework settings
