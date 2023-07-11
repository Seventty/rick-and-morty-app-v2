import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rick-and-morty-app-v2',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashInmersive: true,
    }
  }
};

export default config;
