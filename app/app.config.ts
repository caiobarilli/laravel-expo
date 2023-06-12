import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "My App",
  slug: "my-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  splash: {
    image:
      "https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/splash.png?raw=true",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
});
