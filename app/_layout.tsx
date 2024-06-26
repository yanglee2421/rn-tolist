import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { LocaleProvider } from "@/components/LocaleProvider";
import { QueryProvider } from "@/components/QueryProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  React.useEffect(() => {
    if (fontLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (fontLoaded) {
    return (
      <React.StrictMode>
        <LocaleProvider>
          <QueryProvider>
            <Stack>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(guest)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
              <Stack.Screen name="about" />
              <Stack.Screen name="index" />
            </Stack>
          </QueryProvider>
        </LocaleProvider>
      </React.StrictMode>
    );
  }

  return null;
}
