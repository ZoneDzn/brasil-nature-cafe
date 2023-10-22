import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeCarregamento from './src/pages/Home/TelaDeCarregamento';
import TelaPrincipal from './src/pages/Home/TelaPrincipal';
import CardapioScreen from './src/pages/Home/CardapioScreen';
import CardapioCompleto from './src/pages/Home/CardapioCompleto';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Carregamento"
            component={TelaDeCarregamento}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Principal"
              component={TelaPrincipal}
              options={{ headerTitle: 'Tela Principal' }}
            />
            <Stack.Screen
              name="CardapioScreen"
              component={CardapioScreen}
              options={{ headerTitle: 'Cardápio' }}
            />
            <Stack.Screen
              name="CardapioCompleto"
              component={CardapioCompleto}
              options={{ headerTitle: 'Cardápio Completo' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
