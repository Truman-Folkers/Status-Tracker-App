import Button from "@/components/Button";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchStatuses } from "../api/post-statuses";

export type status = {
  name: string;
  status: number;
};

export default function Index() {
  const [statuses, setStatuses] = useState<status[]>([]);
  useEffect(() => {
    fetchStatuses().then(setStatuses);
  }, []);

  const groups = statuses.reduce<Record<string, status[]>>(
    (accumulator, status) => {
      (accumulator[status.name] ??= []).push(status);
      return accumulator;
    },
    {},
  );

  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;

  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{formattedDate}</Text>
      </View>
      {Object.entries(groups).map(([name, items]) => (
        <Card
          key={name}
          title={name}
          icon={
            name === "Bible Reading"
              ? "bible"
              : name === "Health"
                ? "health"
                : name === "Homework"
                  ? "homework"
                  : name === "Gym"
                    ? "gym"
                    : "primary"
          }
        />
      ))}
      <Button label="send today's log" theme="primary"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "monospace",
    letterSpacing: 2,
    textTransform: "uppercase",
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
