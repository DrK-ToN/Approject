import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function IMC({ navigation }) {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calcular = () => {
        const n1 = parseFloat(peso);
        const n2 = parseFloat(altura);

        if (isNaN(n1) || isNaN(n2) || n2 === 0) {
            setResultado("Entrada inválida");
            return;
        }

        const imc = n1 / (n2 * n2);

        let classificacao = "";
        switch (true) {
            case imc < 18.5:
                classificacao = "Abaixo do peso";
                break;
            case imc < 24.9:
                classificacao = "Peso normal";
                break;
            case imc < 29.9:
                classificacao = "Acima do peso";
                break;
            default:
                classificacao = "Obesidade";
        }

        setResultado(`IMC: ${imc.toFixed(2)} (${classificacao})`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>🧮 Calculadora de IMC</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua altura (m)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />

            <TouchableOpacity title="Calcular" onPress={calcular}>
                <Text
                    style={{
                        backgroundColor: "#1971baff",
                        width: 140,
                        height: 40,
                        color: "white",
                        borderRadius: 2,
                        textAlign: "center",
                        paddingTop: 10,
                        elevation: 8,
                    }}
                >
                    Calcular
                </Text>
            </TouchableOpacity>

            <Text style={styles.resultado}>{resultado}</Text>

            <TouchableOpacity
                title="Voltar"
                onPress={() => navigation.goBack()}
            >
                <Text
                    style={{
                        backgroundColor: "#f3218eff",
                        width: 140,
                        height: 40,
                        color: "white",
                        borderRadius: 2,
                        textAlign: "center",
                        paddingTop: 10,
                        marginTop: 2,
                        elevation: 8,
                    }}
                >
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(125, 156, 223, 1)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#ddddddff",
        borderWidth: 1,
        borderColor: "#000000ff",
        fontWeight: "bold",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderMargin: 5,
        width: 140,
        textAlign: "center",
    },
    resultado: {
        margin: 20,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
