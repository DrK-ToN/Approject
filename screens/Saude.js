import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from "react-native";

export default function App({ navigation }) {
    const [energia, setEnergia] = useState("");
    const [sono, setSono] = useState("");
    const [estresse, setEstresse] = useState("");
    const [dica, setDica] = useState("");

    const analisarSaude = () => {
        const nEnergia = parseInt(energia);
        const nSono = parseInt(sono);
        const nEstresse = parseInt(estresse);

        let sugestao = "Continue cuidando bem da sua saúde!";

        // Estruturas de decisão
        if (nEnergia <= 4 && nSono <= 5) {
            sugestao =
                "Você parece cansado. Tente dormir mais cedo e reduzir o uso de telas à noite.";
        } else if (nEstresse >= 7) {
            sugestao =
                "Seu nível de estresse está alto. Experimente respiração profunda ou uma caminhada relaxante.";
        } else if (nEnergia >= 8 && nSono >= 7) {
            sugestao =
                "Ótimo! Seu corpo está bem descansado. Continue assim e mantenha hábitos saudáveis.";
        } else if (nSono < 5) {
            sugestao =
                "Seu sono está baixo. Crie uma rotina de descanso regular.";
        } else if (nEnergia < 5) {
            sugestao =
                "Você está com pouca energia. Talvez seja hora de se exercitar ou ajustar a alimentação.";
        }

        setDica(sugestao);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Monitor de Saúde e Bem-Estar 🧘</Text>

            <Text style={styles.label}>Nível de Energia (1-10):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={energia}
                onChangeText={setEnergia}
            />

            <Text style={styles.label}>Qualidade do Sono (1-10):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={sono}
                onChangeText={setSono}
            />

            <Text style={styles.label}>Nível de Estresse (1-10):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={estresse}
                onChangeText={setEstresse}
            />

            <Button title="Analisar" onPress={analisarSaude} />

            {dica !== "" && (
                <View style={styles.resultado}>
                    <Text style={styles.dica}>💡 Sugestão: {dica}</Text>
                </View>
            )}

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        marginTop: 5,
        marginBottom: 5,
    },
    resultado: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 2,
    },
    dica: {
        fontSize: 16,
        fontStyle: "italic",
    },
});
