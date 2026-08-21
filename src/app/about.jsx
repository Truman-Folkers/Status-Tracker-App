import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <>
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.text}>YOOO</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
