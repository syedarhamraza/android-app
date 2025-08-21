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
    },
    StatusBar: {
      style: "default",
      backgroundColor: "#dac5a7",
    },
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false, // Set to true for debugging
  },
  ios: {
    contentInset: "automatic",
    scrollEnabled: true,
  },
};

export default config;