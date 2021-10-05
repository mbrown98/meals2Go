import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
          }}
        >
          <Text>Search</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 16,
            backgroundColor: "blue",
          }}
        >
          <Text>List</Text>
        </View>
      </SafeAreaView>
      {/* expo dev bar */}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
