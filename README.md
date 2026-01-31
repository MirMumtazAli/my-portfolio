# 🚀 Angular Portfolio Website

Personal portfolio website built with **Angular** and deployed on **GitHub Pages**.

---

## 📦 Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- Angular CLI  
- Git

Check versions:

```bash
node -v
npm -v
ng version
````

---

## 🔧 Install Dependencies

```bash
npm install
```

---

## ▶ Run Project Locally

```bash
ng serve
```

Open browser:

```
http://localhost:4200
```

---

# 🌍 Deploying Angular App to GitHub Pages

This project is deployed using **angular-cli-ghpages**.

---

## ✅ Step 1: Install Deployment Tool

```bash
npm install -g angular-cli-ghpages
```

Installs a CLI tool used to publish Angular builds to GitHub Pages.

---

## ✅ Step 2: Build Project for Production

```bash
ng build --configuration production --base-href "/my-portfolio/"
```

### What this means:

* `ng build` → Builds the Angular project
* `--configuration production` → Optimized production build
* `--base-href "/my-portfolio/"` → Tells Angular that the app will be hosted inside a subfolder (GitHub repo name)

Build output folder:

```
dist/mirmumtazaliportfolio/browser
```

---

## ✅ Step 3: Deploy to GitHub Pages

```bash
npx angular-cli-ghpages --dir=dist/mirmumtazaliportfolio/browser
```

### What this means:

* `npx` → Runs package without installing
* `angular-cli-ghpages` → Deployment tool
* `--dir` → Folder to upload

Uploads files into **gh-pages** branch.

---

## ✅ Step 4: Enable GitHub Pages

1. Open GitHub Repository
2. Go to **Settings → Pages**
3. Source Branch: `gh-pages`
4. Save

---

## 🌐 Live Website

```
https://<your-username>.github.io/mirmumtazaliportfolio/
```

Replace `<your-username>` with your GitHub username.

---

## 🔁 Redeploy After Changes

Every time you update code:

```bash
ng build --configuration production --base-href "/mirmumtazaliportfolio/"
npx angular-cli-ghpages --dir=dist/mirmumtazaliportfolio/browser
```

---

## 🛠 Tech Stack

* Angular
* TypeScript
* HTML
* CSS / Tailwind CDN
* GitHub Pages

---

## 👤 Author

**Mir Mumtaz Ali**

---

## 📜 License

This project is open source and free to use.
