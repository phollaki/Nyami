const buildNumber = 1;

import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Nyami",
  slug: "Nyami",
  owner: "phollaki",
  scheme: "com.phollaki.nyami",
  privacy: "public",
  platforms: ["ios", "android"],
  orientation: "portrait",
  version: "1.0.0",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    icon: "./app/assets/icon.png",
    supportsTablet: true,
    buildNumber: buildNumber.toString(),
  },
  android: {
    icon: "./app/assets/icon.png",
    versionCode: buildNumber,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  plugins: [
    "expo-router"
  ]
})