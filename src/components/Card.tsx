import { colors } from "@/constants/colors";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  icon?: "primary" | "health" | "bible" | "homework" | "gym";
  name: string;
  onSendData: (b: any) => void;
  submitted: number;
};

export default function Card({
  title,
  icon,
  name,
  onSendData,
  submitted,
}: Props) {
  const [isPressed, setIsPressed] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    onSendData({ status: isPressed, name });
  }, [isPressed]);

  useEffect(() => {
    setIsPressed(0);
  }, [submitted]);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon === "primary" ? (
          <MaterialIcon name="info-outline" size={18} color={colors.green} />
        ) : icon === "health" ? (
          <MaterialIcon
            name="health-and-safety"
            size={18}
            color={colors.green}
          />
        ) : icon === "bible" ? (
          <MaterialIcon name="menu-book" size={18} color={colors.green} />
        ) : icon === "homework" ? (
          <MaterialIcon name="library-books" size={18} color={colors.green} />
        ) : icon === "gym" ? (
          <MaterialIcon name="directions-run" size={18} color={colors.green} />
        ) : (
          ""
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 1 ? colors.green : colors.paper },
          ]}
          onPress={() => (isPressed !== 1 ? setIsPressed(1) : setIsPressed(0))}
        >
          <Text style={styles.buttonLabel}>1</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 2 ? colors.green : colors.paper },
          ]}
          onPress={() => (isPressed !== 2 ? setIsPressed(2) : setIsPressed(0))}
        >
          <Text style={styles.buttonLabel}>2</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: isPressed === 3 ? colors.green : colors.paper },
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
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.black,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    fontFamily: "Inter_800ExtraBold",
    letterSpacing: -0.3,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.black,
    backgroundColor: colors.greenSoft,
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
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Inter_800ExtraBold",
  },
});
