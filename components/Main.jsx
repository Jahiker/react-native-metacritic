import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.top }}>
      <View style={{ paddingVertical: 15 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#fff"} size={"large"} />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        ></FlatList>
      )}
    </View>
  );
}
