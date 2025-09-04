import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from "react-native";

export default function Treino({ navigation }) {
    const [atividade, setAtividade] = useState("Corrida");
    const [minutos, setMinutos] = useState("");
    const [meta, setMeta] = useState("");
    const [feedback, setFeedback] = useState("");

    const analisarProgresso = () => {
        const nMinutos = parseInt(minutos);
        const nMeta = parseInt(meta);

        if (!nMinutos || !nMeta) {
            setFeedback("⚠️ Por favor, insira valores válidos.");
            return;
        }

        let mensagem = "";

        if (nMinutos >= nMeta) {
            mensagem = `🔥 Parabéns! Você atingiu sua meta de ${nMeta} min. Continue firme com a ${atividade}!`;
        } else if (nMinutos >= nMeta * 0.7) {
            mensagem = `👏 Você está perto da meta! Faltam apenas ${
                nMeta - nMinutos
            } min. Que tal complementar com uma caminhada leve?`;
        } else if (nMinutos < nMeta * 0.7) {
            mensagem = `📉 Ainda falta para a meta. Você treinou ${nMinutos} min, mas precisa de mais ${
                nMeta - nMinutos
            } min. Sugestão: tente incluir alongamentos ou uma sessão de yoga.`;
        }

        setFeedback(mensagem);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Fitness Tracker 🏋️‍♂️</Text>

            <Text style={styles.label}>Escolha a atividade:</Text>
            <Picker
                selectedValue={atividade}
                style={styles.input}
                onValueChange={(itemValue) => setAtividade(itemValue)}
            >
                <Picker.Item label="Corrida" value="Corrida" />
                <Picker.Item label="Musculação" value="Musculação" />
                <Picker.Item label="Caminhada" value="Caminhada" />
                <Picker.Item label="Yoga" value="Yoga" />
                <Picker.Item label="Bicicleta" value="Bicicleta" />
            </Picker>

            <Text style={styles.label}>Minutos praticados hoje:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={minutos}
                onChangeText={setMinutos}
            />

            <Text style={styles.label}>Meta semanal de minutos:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={meta}
                onChangeText={setMeta}
            />

            <Button title="Analisar Progresso" onPress={analisarProgresso} />

            {feedback !== "" && (
                <View style={styles.resultado}>
                    <Text style={styles.feedback}>{feedback}</Text>
                </View>
            )}

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#242020ff",
        padding: 20,
        justifyContent: "center",
    },
    titulo: {
        textShadowColor: "#ffea00ff",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,

        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "white",
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        color: "white",
    },
    input: {
        borderWidth: 1,
        borderColor: "none",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        marginTop: 5,
        marginBottom: 10,
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
        fontStyle: "italic",
    },
});
