import React from "react";
import { ScrollView, View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Avatar } from "./components/Avatar";
import { StatItem } from "./components/StatItem";
import { BotaoPerfil } from "./components/BotaoPerfil";
import { TagInteresse } from "./components/TagInteresse";
import { CardConquista } from "./components/CardConquista";

export default function Home() {
  const interesses = [
    "React Native",
    "UI/UX",
    "TypeScript",
    "Mobile",
    "Node.js",
  ];

  const conquistas = [
    {
      id: "1",
      icone: "emoji-events" as const,
      titulo: "Top Contribuinte",
      descricao: "Você postou 50 vezes este mês",
      corFundoIcone: "#FDE68A",
    },
    {
      id: "2",
      icone: "star-border" as const,
      titulo: "Estrela em Ascensão",
      descricao: "+500 seguidores em 30 dias",
      corFundoIcone: "#BFDBFE",
    },
  ];

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meu Perfil</Text>
          <MaterialIcons name="grid-view" size={24} color="#A5D6A7" />
        </View>

        {/* Informações de Perfil */}
        <Avatar
          iniciais="MS"
          tamanho={100}
          corFundo="#1B5E20"
          verificado={true}
        />

        <View style={styles.infoCenter}>
          <Text style={styles.nome}>Maria Silva</Text>
          <Text style={styles.cargo}>Desenvolvedora Mobile • IFRN</Text>
          <Text style={styles.bio}>Apaixonada por React Native 📱</Text>
        </View>

        {/* Estatísticas */}
        <View style={styles.row}>
          <StatItem valor="248" rotulo="Posts" />
          <StatItem valor="1.2k" rotulo="Seguidores" />
          <StatItem valor="389" rotulo="Seguindo" />
        </View>

        {/* Botões de Ação */}
        <View style={[styles.row, styles.marginTop]}>
          <BotaoPerfil
            texto="Seguir"
            variante="primario"
            onPressar={() => console.log("Seguiu!")}
          />
          <BotaoPerfil
            texto="Mensagem"
            variante="secundario"
            onPressar={() => console.log("Mensagem!")}
          />
        </View>

        {/* Seção Interesses */}
        <Text style={styles.sectionTitle}>Interesses</Text>
        <View style={styles.tagsContainer}>
          {interesses.map((interesse, index) => (
            <TagInteresse key={index} texto={interesse} />
          ))}
        </View>

        {/* Seção Conquistas */}
        <Text style={styles.sectionTitle}>Conquistas recentes</Text>
        <View>
          {conquistas.map((conquista) => (
            <CardConquista
              key={conquista.id}
              icone={conquista.icone}
              titulo={conquista.titulo}
              descricao={conquista.descricao}
              corFundoIcone={conquista.corFundoIcone}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    padding: 24,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  infoCenter: {
    alignItems: "center",
    marginBottom: 24,
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cargo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: "#888",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marginTop: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 32,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
