import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// importa cada tela
import Home from "./screens/Home";
import IMC from "./screens/IMC";
import Filmes from "./screens/Filmes";
import Viagens from "./screens/Viagens";
import Treino from "./screens/Treino";
import Vendas from "./screens/Vendas";
import Saude from "./screens/Saude";
import Despesas from "./screens/Despesas";
import Adivinha from "./screens/Adivinha";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="IMC" component={IMC} />
                <Stack.Screen name="Filmes" component={Filmes} />
                <Stack.Screen name="Viagens" component={Viagens} />
                <Stack.Screen name="Treino" component={Treino} />
                <Stack.Screen name="Vendas" component={Vendas} />
                <Stack.Screen name="Saude" component={Saude} />
                <Stack.Screen name="Despesas" component={Despesas} />
                <Stack.Screen name="Adivinha" component={Adivinha} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
