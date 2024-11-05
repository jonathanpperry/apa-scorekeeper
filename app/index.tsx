import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const [format, setFormat] = useState([
    { label: "8-Ball", value: "8ball" },
    { label: "9-Ball", value: "9ball" },
  ]);

  const [gameType, setGameType] = useState([
    { label: "Singles", value: "singles" },
    { label: "Team", value: "team" },
  ]);

  const startGame = () => {
    router.push("/gamescreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Metro Detroit APA Scorekeeper App</Text>
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
              selectedValue={format}
              onValueChange={(itemValue) => setFormat(itemValue)}
              style={{ height: 50, width: 150 }}
            >
              {format.map((format, index) => (
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
              selectedValue={format}
              onValueChange={(itemValue) => setFormat(itemValue)}
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
  button: {
    backgroundColor: "#841584",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 32,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    margin: 8,
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
