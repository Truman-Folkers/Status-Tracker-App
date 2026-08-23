import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/colors";

type Props = {
  label: string;
  theme?: "primary";
  onPress: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: colors.paper }]}
          onPress={onPress}
        >
          <FontAwesome
            name="paper-plane"
            size={18}
            color={colors.black}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: colors.black }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    alignSelf: "stretch",
    height: 76,
  },
  button: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.black,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Inter_800ExtraBold",
  },
});
