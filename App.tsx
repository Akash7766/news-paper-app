import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Appbar, Button } from "react-native-paper";
import Cards from "./components/cards";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.newsList}>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={(item) => {
              return <Cards />;
            }}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#dedede",
  },
  newsList: {
    padding: 10,
  },
});
