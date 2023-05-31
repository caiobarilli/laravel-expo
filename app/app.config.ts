import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "my-app",
  name: "My App",
  icon: "./src/assets/icon.png",
  splash: {
    image:
      "https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/splash.png?raw=true",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
});
