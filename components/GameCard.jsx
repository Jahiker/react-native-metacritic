import { View, Text, Image, StyleSheet } from "react-native";

export const GameCard = ({ game }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: game.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}%</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#ffffff",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
