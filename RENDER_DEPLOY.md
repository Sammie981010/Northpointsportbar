# 🚀 Deploy to Render - Step by Step

## 1. Create GitHub Repository
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Northpoint Sports Bar - Ready for deployment"

# Create repository on GitHub.com and then:
git remote add origin https://github.com/yourusername/northpoint-sports-bar.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Render
1. Go to: https://render.com
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Use these settings:
   - **Name**: northpoint-sports-bar
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 18

## 3. Your website will be live at:
`https://northpoint-sports-bar.onrender.com`

## ✅ Files Ready:
- render.yaml (Render configuration)
- All changes committed to Git
- Ready for deployment!

## 🔄 To Update Later:
Just push to GitHub and Render auto-deploys:
```bash
git add .
git commit -m "Update website"
git push origin main
```