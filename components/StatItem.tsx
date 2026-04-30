import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StatItemProps {
  valor: string;
  rotulo: string;
}

export const StatItem = ({ valor, rotulo }: StatItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.valor} numberOfLines={1} adjustsFontSizeToFit>
        {valor}
      </Text>
      <Text style={styles.rotulo} numberOfLines={1} adjustsFontSizeToFit>
        {rotulo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F5E9",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  valor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B5E20",
  },
  rotulo: {
    fontSize: 12,
    color: "#4CAF50",
    marginTop: 4,
    textAlign: "center",
  },
});
