import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    Image,
    ActivityIndicator,
} from "react-native";

// Mapeamento de gêneros para IDs da API do TMDB
const genreIds = {
    Terror: 27,
    Romance: 10749,
    Comédia: 35,
    Ação: 28,
    Drama: 18,
    FicçãoCientífica: 878,
    Aventura: 12,
};

export default function Filmes({ navigation }) {
    const [generoSelecionado, setGeneroSelecionado] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Se nenhum gênero for selecionado, limpa a lista e para.
        if (!generoSelecionado) {
            setFilmes([]);
            return;
        }

        const fetchFilmes = async () => {
            setLoading(true); // Começa o carregamento
            setFilmes([]); // Limpa a lista anterior
            const genreId = genreIds[generoSelecionado]; // Pega o ID do gênero

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=2260070350cc886087f7b1b1189b3ff9&with_genres=${genreId}&language=pt-BR&page=1`
                );
                const data = await response.json();
                setFilmes(data.results);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            } finally {
                setLoading(false); // Termina o carregamento
            }
        };

        fetchFilmes();
    }, [generoSelecionado]); // Este useEffect roda sempre que 'generoSelecionado' mudar

    // Componente do Cabeçalho da Lista
    const renderHeader = () => (
        <>
            <Text style={styles.titulo}>Indica Filmes 🍿</Text>
            <Picker
                selectedValue={generoSelecionado}
                style={styles.picker}
                onValueChange={(itemValue) => setGeneroSelecionado(itemValue)}
            >
                <Picker.Item label="-- Escolha um gênero --" value="" />
                <Picker.Item label="Terror" value="Terror" />
                <Picker.Item label="Romance" value="Romance" />
                <Picker.Item label="Comédia" value="Comédia" />
                <Picker.Item label="Ação" value="Ação" />
                <Picker.Item label="Drama" value="Drama" />
                <Picker.Item
                    label="Ficção-Científica"
                    value="FicçãoCientífica"
                />
                <Picker.Item label="Aventura" value="Aventura" />
            </Picker>
        </>
    );

    // Componente do Rodapé da Lista
    const renderFooter = () => (
        <View style={styles.footer}>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );

    // Componente para quando a lista está vazia
    const renderEmpty = () => {
        if (loading) {
            return <ActivityIndicator size="large" color="#FF0000" />;
        }
        return (
            <Text style={styles.placeholder}>
                🎬 Escolha um gênero para ver recomendações
            </Text>
        );
    };

    return (
        <FlatList
            style={styles.container}
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                        }}
                        style={styles.poster}
                    />
                    <Text style={styles.nome}>{item.title}</Text>
                </View>
            )}
        />
    );
}

// Estilos unificados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        paddingHorizontal: 20,
    },
    titulo: {
        color: "#FF0000",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    picker: {
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 10,
        marginBottom: 20,
    },
    placeholder: {
        color: "#aaa",
        textAlign: "center",
        marginTop: 40,
        fontSize: 16,
    },
    footer: {
        marginVertical: 20,
    },
    // Estilos do card de filme
    card: {
        flexDirection: "row",
        marginBottom: 12,
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: 8,
        padding: 8,
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 12,
    },
    nome: {
        fontSize: 16,
        color: "#fff",
        flex: 1, // Permite que o texto quebre a linha se for muito grande
    },
});
