import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  icon?: "primary" | "health" | "bible" | "homework" | "gym";
  name: string;
};

export default function Card({ title, icon, name }: Props) {
  const [isPressed, setIsPressed] = useState<0 | 1 | 2 | 3>(0);
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon === "primary" ? (
          <MaterialIcon name="info-outline" size={18} color="#3ddc97" />
        ) : icon === "health" ? (
          <MaterialIcon name="health-and-safety" size={18} color="#3ddc97" />
        ) : icon === "bible" ? (
          <MaterialIcon name="menu-book" size={18} color="#3ddc97" />
        ) : icon === "homework" ? (
          <MaterialIcon name="library-books" size={18} color="#3ddc97" />
        ) : icon === "gym" ? (
          <MaterialIcon name="directions-run" size={18} color="#3ddc97" />
        ) : (
          ""
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 1 ? "#007AFF" : "" },
          ]}
          onPress={() => (isPressed !== 1 ? setIsPressed(1) : setIsPressed(0))}
        >
          <Text style={styles.buttonLabel}>1</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 2 ? "#007AFF" : "" },
          ]}
          onPress={() => (isPressed !== 2 ? setIsPressed(2) : setIsPressed(0))}
        >
          <Text style={styles.buttonLabel}>2</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 3 ? "#007AFF" : "" },
          ]}
          onPress={() => (isPressed !== 3 ? setIsPressed(3) : setIsPressed(0))}
        >
          <Text style={styles.buttonLabel}>3</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#12151c",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  title: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#1f3d33",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    fontWeight: "600",
  },
});
