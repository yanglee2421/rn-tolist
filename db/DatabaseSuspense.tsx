import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import React from "react";
import { Text } from "react-native";
import migrations from "@/drizzle/migrations.js";
import { db } from "./db";

export function DatabaseSuspense(props: React.PropsWithChildren) {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }

  if (success) {
    return props.children;
  }

  return <Text>database loading...</Text>;
}
