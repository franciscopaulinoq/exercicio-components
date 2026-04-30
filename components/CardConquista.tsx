import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CardConquistaProps {
  icone: keyof typeof MaterialIcons.glyphMap;
  titulo: string;
  descricao: string;
  corFundoIcone: string;
}

export const CardConquista = ({
  icone,
  titulo,
  descricao,
  corFundoIcone,
}: CardConquistaProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconeContainer, { backgroundColor: corFundoIcone }]}>
        <MaterialIcons name={icone} size={24} color="#555" />
      </View>

      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  iconeContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  textoContainer: {
    flex: 1,
    flexShrink: 1,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  descricao: {
    fontSize: 13,
    color: "#666",
    flexWrap: "wrap",
  },
});
