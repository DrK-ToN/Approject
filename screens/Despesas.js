import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Despesas({ navigation }) {
    const [receita, setReceita] = useState("");
    const [despesa, setDespesa] = useState("");
    const [total, setTotal] = useState("");

    const calcular = () => {
        const n1 = parseFloat(receita);
        const n2 = parseFloat(despesa);

        if (isNaN(n1) || isNaN(n2)) {
            setTotal("Entrada invalida");
            return;
        }

        const economia = 100 - (despesa * 100) / receita;

        let indicacao = "";
        switch (true) {
            case economia >= 15:
                indicacao = "Invista seu dineheiro";
                break;
            case economia >= 10 && indicacao < 15:
                indicacao = "Vamos investir no próximo mês";
                break;
            default:
                indicacao = "Não desista!\nVamos continuar tentando";
        }

        setTotal(`Economia: ${economia.toFixed(1)}% (${indicacao})`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Controle de Economia</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite total das receitas do mês"
                keyboardType="numeric"
                value={receita}
                onChangeText={setReceita}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o total das despesas do mês"
                keyboardType="numeric"
                value={despesa}
                onChangeText={setDespesa}
            />

            <Button title="Calcular" onPress={calcular} />

            <Text style={styles.total}>{total}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(142, 150, 235, 1)",
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
    input: {
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
