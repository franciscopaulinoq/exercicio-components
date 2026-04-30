import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TagInteresseProps {
  texto: string;
}

export const TagInteresse = ({ texto }: TagInteresseProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0F2F1",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  texto: {
    color: "#00796B",
    fontSize: 13,
    fontWeight: "500",
  },
});
