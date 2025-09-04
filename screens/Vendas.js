import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Vendas({ navigation }) {
    /*

  */
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [codigo, setCodigo] = useState("");
    const [total, setTotal] = useState("");

    const calcular = () => {
        const n1 = parseFloat(valor);
        const n2 = parseFloat(quantidade);
        const n3 = parseFloat(codigo);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            setTotal("Entrada invalida");
            return;
        }

        const venda = quantidade * valor;

        let total = 0;

        switch (n3) {
            case 0:
                total = venda - venda * 0.25;
                break;
            case 1:
                total = venda - venda * 0.2;
                break;
            case 2:
                total = venda - venda * 0.1;
                break;
            case 3:
                total = venda - venda * 0.05;
                break;
            default:
                total = venda;
                setTotal(
                    `Negociado com vendedor. Valor final: R$${total.toFixed(2)}`
                );
                return;
        }

        setTotal(`Valor final: R$${total.toFixed(2)}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo Desconto de Venda</Text>

            <Text style={styles.subtitulo}>
                Código de desconto:{"\n"}0 -------------------- 25%{"\n"}1
                -------------------- 20%{"\n"}2 -------------------- 10%{"\n"}3
                ---------------------- 5%{"\n"}
                outro ---- sem desconto
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o valor do produto"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite a quantidade do produto"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o código de desconto"
                keyboardType="numeric"
                value={codigo}
                onChangeText={setCodigo}
            />

            <Button title="Calcular" onPress={calcular} />

            <Text style={styles.total}>{total}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(45, 95, 166, 1)",
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    subtitulo: {
        fontWeight: "bold",
        padding: 10,
        alignSelf: "center",
    },
    input: {
        textAlign: "center",
        backgroundColor: "#ddddddff",
        borderWidth: 1,
        borderColor: "#000000ff",
        fontWeight: "bold",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderMargin: 5,
    },
    total: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    indicacao: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
