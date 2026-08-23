import Button from "@/components/Button";
import Card from "@/components/Card";
import { colors } from "@/constants/colors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { createStatus, fetchStatuses } from "../api/post-statuses";

export type status = {
  name: string;
  status: number;
};

export default function Index() {
  const [statuses, setStatuses] = useState<status[]>([]);
  const [buttons, setButtons] = useState<any[]>([]);

  useEffect(() => {
    fetchStatuses().then(setStatuses);
  }, []);

  const handleButton = (b: any) => {
    setButtons((prevList) => {
      const others = prevList.filter((item) => item.name !== b.name);
      return b.status === 0 ? others : [...others, b];
    });
  };

  const createStatuses = () => {
    for (let i = 0; i < buttons.length; i++) {
      try {
        createStatus(buttons[i].status, buttons[i].name);
        triggerToast(true);
      } catch (e) {
        triggerToast(false);
      }
    }
    setButtons([]);
  };

  const groups = statuses.reduce<Record<string, status[]>>(
    (accumulator, status) => {
      (accumulator[status.name] ??= []).push(status);
      return accumulator;
    },
    {},
  );

  const triggerToast = (s: boolean) => {
    if (s) {
      Toast.show({
        type: "success",
        text1: "Successfully submitted log",
        position: "top",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Failed - check your internet connection",
        position: "top",
      });
    }
  };

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
      <View style={styles.cardList}>
        {Object.entries(groups).map(([name, items]) => (
          <Card
            key={name}
            title={name}
            name={name}
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
            onSendData={handleButton}
          />
        ))}
      </View>
      <Button
        label="send today's log"
        theme="primary"
        onPress={() => createStatuses()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paper,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  text: {
    fontSize: 15,
    color: colors.green,
    fontFamily: "Inter_900Black",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  cardList: {
    flex: 1,
    width: "100%",
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

//styling - toasts/after send cleaning - mobile styling for web -  picture for web
