# Syed Arham Raza - Portfolio Mobile App

<div align="center">
  
  ![Portfolio App Banner](/assets/banner.png)
  
  [![Release](https://img.shields.io/github/v/release/syedarhamraza/android-app?style=for-the-badge&color=dac5a7)](https://github.com/syedarhamraza/android-app/releases)
  [![License](https://img.shields.io/github/license/syedarhamraza/android-app?style=for-the-badge&color=06b6d4)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/syedarhamraza/android-app?style=for-the-badge&color=f59e0b)](https://github.com/syedarhamraza/android-app/stargazers)
  [![Forks](https://img.shields.io/github/forks/syedarhamraza/android-app?style=for-the-badge&color=10b981)](https://github.com/syedarhamraza/android-app/network/members)
  
  <h3>🚀 A sleek Android portfolio app showcasing projects, skills, and experience</h3>
  <p>Built with Next.js + Capacitor for native mobile performance</p>
  
  [📱 Download APK](#-download) •
  [🎯 Features](#-features) •
  [💻 Tech Stack](#-tech-stack) •
  [🚀 Installation](#-installation) •
  [📸 Screenshots](#-screenshots)
  
</div>

---

## 📱 Download

<div align="center">
  
  ### 🎉 Latest Release: v1.0.0-beta.1
  
  [![Download APK](https://img.shields.io/badge/Download-APK-4CAF50?style=for-the-badge&logo=android&logoColor=white)](https://github.com/syedarhamraza/android-app/releases/download/v1.0.0-beta.1/syedarhamraza.portfolio.apk)
  
  > ⚠️ **Beta Notice**: This is a beta release for testing. GitHub stats and API-dependent features are currently under development.
  
</div>

## 🤖 Automated Deployment

This repository features a **fully automated CI/CD pipeline**:

<div align="center">

```mermaid
graph LR
    A[🔒 Private Repo] --> B[📝 Push Changes]
    B --> C[🚀 GitHub Actions]
    C --> D[☁️ Deploy to Vercel]
    C --> E[📦 Push 'out' folder]
    E --> F[📱 Build APK]
    F --> G[🎉 Auto Release]
    
    style A fill:#ff6b6b
    style D fill:#00d2d3
    style G fill:#4ecdc4
```

</div>

### 🔄 Deployment Workflow
1. **🔒 Source Code**: Main development in private repository
2. **⚡ Auto Sync**: GitHub Actions pushes built `out/` folder to this repo  
3. **☁️ Vercel Deploy**: Web version automatically deployed
4. **📱 APK Build**: Capacitor wraps the app and builds Android APK
5. **🎉 Auto Release**: New APK automatically released on GitHub

> **🎯 Zero Manual Work**: Just push code changes, everything else is automated!

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **User Experience**
- 📂 Interactive project showcase
- ⚡ Lightning-fast performance
- 🎭 Smooth animations & transitions
- 📱 Native Android feel
- 🌙 Modern responsive design

</td>
<td width="50%">

### ⚙️ **Technical Features**
- 🔔 Smart local notifications
- 🌐 Offline-first architecture
- 🤖 Automated CI/CD pipeline
- 🔄 Real-time deployment sync
- 📦 Static asset optimization

> **🚧 In Development**: GitHub stats integration and API-dependent features are currently being implemented.

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

### Frontend & Mobile
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)

### Styling & Deployment
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

### Tools & Platforms
![Android Studio](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

## 📸 Screenshots

<div align="center">
  
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="./screenshots/home.png" width="200" alt="Home Screen"/>
        <br/><strong>🏠 Home</strong>
      </td>
      <td align="center" width="33%">
        <img src="./screenshots/projects.png" width="200" alt="Projects Screen"/>
        <br/><strong>📂 Projects</strong>
      </td>
      <td align="center" width="33%">
        <img src="./screenshots/skills.png" width="200" alt="Skills Screen"/>
        <br/><strong>🎯 Skills</strong>
      </td>
    </tr>
  </table>
  
  ### 🎬 Demo in Action
  ![App Demo](./screenshots/demo.gif)
  
</div>

## 🚀 Local Development

> **Important**: This repo contains only the production build (`out/` folder) and mobile wrapper. For local development of the web app, you'll need access to the private source repository.

### For APK Development Only

```bash
# 1️⃣ Clone this repository
git clone https://github.com/syedarhamraza/android-app.git
cd android-app

# 2️⃣ Install mobile dependencies
npm install

# 3️⃣ Setup Capacitor (if not already configured)
npx cap sync

# 4️⃣ Open in Android Studio
npx cap open android
```

### 🔧 Prerequisites for APK Building
- **Node.js** 16+ 
- **Android Studio** with SDK
- **Java JDK** 11+
- **Capacitor CLI**: `npm install -g @capacitor/cli`

### 📋 Build Steps
1. **Open Android Studio**
2. **Select your target device/emulator**
3. **Click the Run button** ▶️
4. **Install the generated APK**

## 🎯 Usage

<div align="center">

```mermaid
graph TD
    A[Install APK] --> B[Grant Permissions]
    B --> C[Explore Portfolio]
    C --> D[View Projects]
    C --> E[Check Skills]
    C --> F[GitHub Stats]
    D --> G[Offline Mode Available]
    E --> G
    F --> G
```

</div>

### Getting Started
1. **📲 Install** the APK on your Android device
2. **🔔 Allow** notification permissions when prompted
3. **🌟 Explore** projects, skills, and achievements
4. **📱 Enjoy** native mobile experience
5. **🔄 Works offline** with cached content

> **📍 Current Status**: GitHub stats and dynamic API features are in development and may not display live data yet.

## 🤝 Contributing

> **Note**: This is a deployment repository. For feature contributions, please reach out for access to the main development repository.

### 🔧 APK & Mobile Wrapper Contributions
You can contribute to the mobile wrapper and deployment process:

<details>
<summary><b>🛠️ Mobile Development Setup</b></summary>

```bash
# Fork this repository
git clone https://github.com/your-username/android-app.git
cd android-app

# Work with mobile-specific features
# - Capacitor configuration
# - Android native plugins
# - Mobile UI optimizations
# - GitHub Actions workflows

# Create feature branch
git checkout -b feature/mobile-improvement

# Make changes and test
npx cap sync
npx cap open android

# Commit and create PR
git commit -m "feat: improve mobile experience"
git push origin feature/mobile-improvement
```

</details>

### 💡 How You Can Help
- 🐛 Report mobile-specific bugs
- 📱 Suggest mobile UX improvements  
- 🔧 Optimize APK build process
- 🤖 Enhance GitHub Actions workflows
- 📝 Improve documentation

## 📊 Project Stats

<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/syedarhamraza/android-app?style=flat-square)
  ![GitHub last commit](https://img.shields.io/github/last-commit/syedarhamraza/android-app?style=flat-square)
  ![GitHub issues](https://img.shields.io/github/issues/syedarhamraza/android-app?style=flat-square)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr/syedarhamraza/android-app?style=flat-square)
  
</div>

## 🛣️ Roadmap

### 🔄 Current Development
- [ ] 📊 **GitHub stats integration** - API connections in progress
- [ ] 📈 **Dynamic portfolio data** - Real-time project updates
- [ ] 🔌 **API optimization** - Performance improvements for data fetching

### 🚀 Upcoming Features  
- [ ] 🎨 **v1.1** - Advanced theming system
- [ ] 🌐 **v1.2** - PWA capabilities for web version
- [ ] 📱 **v1.3** - iOS version release
- [ ] 🌍 **v1.4** - Multi-language support
- [ ] ☁️ **v2.0** - Cloud sync & backup
- [ ] 📊 **v2.1** - Analytics dashboard

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<div align="center">
  
  **Made with ❤️ by [Syed Arham Raza](https://arhamraza.me)**
  
</div>

---

<div align="center">

### 🌐 Connect With Me

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://arhamraza.me)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/syedarhamraza)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/syedarhamraza)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:syedarhamraza@example.com)

### ⭐ Don't forget to star this repo if you found it helpful!

</div>
