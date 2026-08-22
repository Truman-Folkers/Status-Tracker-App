import Card from "@/components/Card";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Card title="Bro" icon="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
