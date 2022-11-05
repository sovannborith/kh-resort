import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AuthProvider } from "./src/hooks/useAuth";
import BottomTab from "./src/navigators/BottomTab";

export default function App() {
  return (
    <AuthProvider>
      <BottomTab />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
