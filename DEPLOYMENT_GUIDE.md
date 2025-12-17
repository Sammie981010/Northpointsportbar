# Heroku Deployment Guide for Northpoint Sports Bar

## Prerequisites
1. Install Git: https://git-scm.com/downloads
2. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
3. Create Heroku account: https://signup.heroku.com/

## Deployment Steps

### 1. Initialize Git Repository
```bash
cd c:\Users\USER\Desktop\northpoint
git init
git add .
git commit -m "Initial commit - Northpoint Sports Bar website"
```

### 2. Login to Heroku
```bash
heroku login
```

### 3. Create Heroku App
```bash
heroku create northpoint-sports-bar
```
(Note: App name must be unique. If taken, try: northpoint-sportsbar-ke, northpoint-langata, etc.)

### 4. Deploy to Heroku
```bash
git push heroku main
```

### 5. Open Your Website
```bash
heroku open
```

## Your website will be live at:
https://northpoint-sports-bar.herokuapp.com (or your chosen app name)

## Troubleshooting
- If build fails, check logs: `heroku logs --tail`
- For custom domain: Use Heroku's domain management in dashboard
- To update website: Make changes, then run:
  ```bash
  git add .
  git commit -m "Update website"
  git push heroku main
  ```

## Files Created for Deployment:
✅ Procfile - Tells Heroku how to run the app
✅ package.json - Updated with Node.js version
✅ .gitignore - Excludes unnecessary files
✅ This deployment guide