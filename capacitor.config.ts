import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.syedarhamraza.portfolio",
  appName: "Syed Arham Raza",
  webDir: "out",

  server: {
    cleartext: true,
    allowNavigation: ["*"],
    androidScheme: "https",
  },
  plugins: {
    Haptics: {
      // Force enable haptics
    },
    SplashScreen: {
      launchShowDuration: 2000,
      launchFadeOutDuration: 300,
      backgroundColor: "#dac5a7",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    LocalNotifications: {
      smallIcon: "ic_icon",
      iconColor: "#dac5a7",
      backgroundColor: "#dac5a7",
    },
    StatusBar: {
      style: "default",
      backgroundColor: "#dac5a7",
    },
    App: {
      apiBaseURL: "https://backend-portfolio-livid.vercel.app",
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  ios: {
    contentInset: "automatic",
    scrollEnabled: true,
  },
};

export default config;