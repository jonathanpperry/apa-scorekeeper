import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types"; // Import your types

import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [formatOptions, _] = useState([
    { label: "8-Ball", value: "8ball" },
    { label: "9-Ball", value: "9ball" },
  ]);

  const [selectedFormat, setSelectedFormat] = useState("8-Ball");

  const [gameType, setGameType] = useState([
    { label: "Singles", value: "singles" },
    { label: "Team", value: "team" },
  ]);

  const startGame = () => {
    if (selectedFormat == "8ball") navigation.navigate("EightBall");
    else navigation.navigate("NineBall");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Metro Detroit APA Scorekeeper App
          </Text>
        </View>

        {/* Game details */}
        <View style={styles.gameDetails}>
          <Text style={styles.gameDetailsText}>Game details</Text>

          <View style={styles.gameDetailsRow}>
            <View style={styles.gameDetailsItem}>
              <Text>Table no:</Text>
              <TextInput
                maxLength={4}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>Format:</Text>
              <Picker
                selectedValue={selectedFormat}
                onValueChange={(itemValue) => {
                  console.log(itemValue);
                  setSelectedFormat(itemValue); // Update the selected format
                }}
                style={{ height: 50, width: 150 }}
              >
                {formatOptions.map((format, index) => (
                  <Picker.Item
                    label={format.label}
                    value={format.value}
                    key={index}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>Singles or Team:</Text>
              <Picker
                selectedValue={gameType}
                onValueChange={(itemValue) => setGameType(itemValue)}
                style={{ height: 50, width: 150 }}
              >
                {gameType.map((type, index) => (
                  <Picker.Item
                    label={type.label}
                    value={type.value}
                    key={index}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* Player 1 details */}
        <View style={styles.gameDetails}>
          <Text style={styles.gameDetailsText}>Player 1 details</Text>

          <View style={styles.playerDetailsRow}>
            <View style={styles.gameDetailsItem}>
              <Text>Player 1 Name:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>Membership #:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>SL:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>
          </View>
        </View>

        {/* Player 2 details */}
        <View style={styles.gameDetails}>
          <Text style={styles.gameDetailsText}>Player 2 details</Text>

          <View style={styles.playerDetailsRow}>
            <View style={styles.gameDetailsItem}>
              <Text>Player 2 Name:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>Membership #:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>

            <View style={styles.gameDetailsItem}>
              <Text>SL:</Text>
              <TextInput
                maxLength={32}
                style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Start Game */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8,
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: "#841584",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  gameDetails: {
    display: "flex",
    alignItems: "center",
  },
  gameDetailsItem: {
    marginVertical: 18,
    marginHorizontal: 12,
  },
  gameDetailsRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  gameDetailsText: {
    alignSelf: "flex-start",
    margin: 12,
    fontWeight: "bold",
  },
  playerDetailsRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 38,
    gap: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
