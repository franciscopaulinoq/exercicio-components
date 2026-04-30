import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BotaoPerfilProps {
  texto: string;
  variante: "primario" | "secundario";
  onPressar: () => void;
}

export const BotaoPerfil = ({
  texto,
  variante,
  onPressar,
}: BotaoPerfilProps) => {
  const isPrimario = variante === "primario";

  return (
    <TouchableOpacity
      style={[
        styles.botao,
        isPrimario ? styles.botaoPrimario : styles.botaoSecundario,
      ]}
      onPress={onPressar}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.texto,
          isPrimario ? styles.textoPrimario : styles.textoSecundario,
        ]}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  botaoPrimario: {
    backgroundColor: "#1B5E20",
  },
  botaoSecundario: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#1B5E20",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textoPrimario: {
    color: "#FFF",
  },
  textoSecundario: {
    color: "#1B5E20",
  },
});
