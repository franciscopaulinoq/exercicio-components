import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AvatarProps {
  iniciais: string;
  tamanho: number;
  corFundo: string;
  verificado: boolean;
}

export const Avatar = ({
  iniciais,
  tamanho,
  corFundo,
  verificado,
}: AvatarProps) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circulo,
          {
            width: tamanho,
            height: tamanho,
            borderRadius: tamanho / 2,
            backgroundColor: corFundo,
          },
        ]}
      >
        <Text style={[styles.texto, { fontSize: tamanho * 0.4 }]}>
          {iniciais}
        </Text>
      </View>

      {verificado && (
        <View style={styles.badge}>
          <MaterialIcons name="check" size={14} color="#FFF" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 16,
  },
  circulo: {
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#FFF",
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1B5E20",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFF",
  },
});
