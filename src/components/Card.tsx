import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/colors";

type Props = {
  title: string;
  icon?: "primary" | "health" | "bible" | "homework" | "gym";
  name: string;
  onSendData: (b: any) => void;
};

const ACCENTS = {
  primary: { color: colors.orange, soft: colors.orangeSoft },
  gym: { color: colors.orange, soft: colors.orangeSoft },
  health: { color: colors.green, soft: colors.greenSoft },
  bible: { color: colors.blue, soft: colors.blueSoft },
  homework: { color: colors.yellow, soft: colors.yellowSoft },
} as const;

export default function Card({ title, icon, onSendData, name }: Props) {
  const [isPressed, setIsPressed] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    onSendData({ status: isPressed, name });
  }, [isPressed]);

  const accent = ACCENTS[icon ?? "primary"];
  const iconName =
    icon === "health"
      ? "health-and-safety"
      : icon === "bible"
        ? "menu-book"
        : icon === "homework"
          ? "library-books"
          : icon === "gym"
            ? "directions-run"
            : "info-outline";

  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: accent.soft }]}>
        <MaterialIcon name={iconName} size={18} color={accent.color} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        {([1, 2, 3] as const).map((n) => (
          <Pressable
            key={n}
            style={[
              styles.button,
              isPressed === n ? styles.buttonSelected : null,
            ]}
            onPress={() => (isPressed !== n ? setIsPressed(n) : setIsPressed(0))}
          >
            <Text
              style={[
                styles.buttonLabel,
                isPressed === n ? styles.buttonLabelSelected : null,
              ]}
            >
              {n}
            </Text>
          </Pressable>
        ))}
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
    backgroundColor: colors.paper,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSelected: {
    backgroundColor: colors.black,
  },
  buttonLabel: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Inter_800ExtraBold",
  },
  buttonLabelSelected: {
    color: colors.paper,
  },
});
