import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📱 AppsÚteis</Text>

            <View style={styles.btnWrapper}>
                <Button
                    title="Calculadora de IMC"
                    onPress={() => navigation.navigate("IMC")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Indicação de Filmes"
                    onPress={() => navigation.navigate("Filmes")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Planejamento de Viagens"
                    onPress={() => navigation.navigate("Viagens")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Acompanhamento de Treino"
                    onPress={() => navigation.navigate("Treino")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Valor de Vendas"
                    onPress={() => navigation.navigate("Vendas")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Monitor de Saúde"
                    onPress={() => navigation.navigate("Saude")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Controle de Economia"
                    onPress={() => navigation.navigate("Despesas")}
                />
            </View>
            <View style={styles.btnWrapper}>
                <Button
                    title="Jogo de Adivinhação"
                    onPress={() => navigation.navigate("Adivinha")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
    },
    btnWrapper: {
        width: "80%", // todos com a mesma largura
        marginBottom: 15, // espaçamento entre eles
    },
});
