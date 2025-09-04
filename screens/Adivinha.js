import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function Adivinha({ navigation }) {
    const [numeroSecreto, setNumeroSecreto] = useState(0);
    const [palpite, setPalpite] = useState("");
    const [mensagem, setMensagem] = useState("Digite um número entre 1 e 100");

    useEffect(() => {
        gerarNumero();
    }, []);

    const gerarNumero = () => {
        const aleatorio = Math.floor(Math.random() * 100) + 1;
        setNumeroSecreto(aleatorio);
        setMensagem("Digite um número entre 1 e 100");
        setPalpite("");
    };

    const verificarPalpite = () => {
        const numero = parseInt(palpite);

        if (isNaN(numero)) {
            Alert.alert("Erro", "Digite um número válido!");
            return;
        }

        if (numero < numeroSecreto) {
            setMensagem("🔼 O número secreto é maior!");
        } else if (numero > numeroSecreto) {
            setMensagem("🔽 O número secreto é menor!");
        } else {
            setMensagem(`🎉 Parabéns! Você acertou: ${numeroSecreto}`);
            Alert.alert("Acertou!", "Quer jogar de novo?", [
                { text: "Sim", onPress: gerarNumero },
                { text: "Não" },
            ]);
        }
    };

    const renderFooter = () => (
        <View style={styles.footer}>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>🎯 Jogo da Adivinhação</Text>
            <Text style={styles.texto}>{mensagem}</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu palpite"
                keyboardType="numeric"
                value={palpite}
                onChangeText={setPalpite}
            />

            <View style={{ marginTop: 20, width: 140 }}>
                <Button title="Verificar" onPress={verificarPalpite} />
            </View>

            <View style={{ marginTop: 20, width: 140 }}>
                <Button
                    title="Reiniciar Jogo"
                    color="red"
                    onPress={gerarNumero}
                />
            </View>
            {renderFooter()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#266b16ff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
    },
    texto: {
        fontSize: 18,
        marginBottom: 15,
    },
    input: {
        backgroundColor: "#ffffffff",
        borderWidth: 1,
        borderColor: "#ffffffff",
        borderRadius: 8,
        width: "60%",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15,
        width: 140,
    },
    footer: {
        // Estilo para garantir que o rodapé tenha um espaço
        paddingTop: 20, // Um respiro na parte de baixo
        width: 140,
    },
});
