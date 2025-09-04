import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function Viagens({ navigation }) {
    const [preferencia, setPreferencia] = useState("Praia");
    const [recomendacao, setRecomendacao] = useState("");

    const recomendarDestino = () => {
        let mensagem = "";

        switch (preferencia) {
            case "Praia":
                mensagem =
                    "🏖️ Destino recomendado: Fernando de Noronha, Brasil\n\nSugestões:\n- Mergulho nas águas cristalinas\n- Passeio de barco ao pôr do sol\n- Trilha até a Baía do Sancho";
                break;

            case "Montanha":
                mensagem =
                    "⛰️ Destino recomendado: Machu Picchu, Peru\n\nSugestões:\n- Trilha Inca\n- Visita às ruínas históricas\n- Observação do nascer do sol nas montanhas";
                break;

            case "Cidade Histórica":
                mensagem =
                    "🏛️ Destino recomendado: Roma, Itália\n\nSugestões:\n- Coliseu e Fórum Romano\n- Fontana di Trevi\n- Museu do Vaticano";
                break;

            case "Aventura":
                mensagem =
                    "🚵 Destino recomendado: Queenstown, Nova Zelândia\n\nSugestões:\n- Bungee Jump\n- Passeio de barco radical (jet boat)\n- Trilhas e esportes radicais";
                break;

            default:
                mensagem = "❓ Ops! Escolha um tipo de destino.";
                break;
        }

        setRecomendacao(mensagem);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Planejador de Viagens 🌍</Text>

            <Text style={styles.label}>Qual tipo de destino você prefere?</Text>
            <Picker
                selectedValue={preferencia}
                style={styles.input}
                onValueChange={(itemValue) => setPreferencia(itemValue)}
            >
                <Picker.Item label="Praia" value="Praia" />
                <Picker.Item label="Montanha" value="Montanha" />
                <Picker.Item
                    label="Cidade Histórica"
                    value="Cidade Histórica"
                />
                <Picker.Item label="Aventura" value="Aventura" />
            </Picker>

            <Button title="Recomendar Viagem" onPress={recomendarDestino} />

            {recomendacao !== "" && (
                <View style={styles.resultado}>
                    <Text style={styles.feedback}>{recomendacao}</Text>
                </View>
            )}

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#a0888fff",
        padding: 20,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 15,
    },
    resultado: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 2,
    },
    feedback: {
        fontSize: 16,
        lineHeight: 22,
    },
});
