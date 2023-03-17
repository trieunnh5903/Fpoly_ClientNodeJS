
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import OrderScreen from './screen/OrderScreen';

const Stack = createNativeStackNavigator();
const AppContext = React.createContext(null);

export const useAppContext = () => {
  return React.useContext(AppContext)
}

function App() {
  const [products, setProducts] = React.useState([])
  const addProductToCart = (product) => {
    const existedProduct = products.find(item => item.id == product.id);
    if (existedProduct) {
      setProducts(
        [
          ...products.filter(item => item.id != product.id),
          { ...existedProduct, quantity: (existedProduct.quantity || 1) + 1 }
        ]
      )
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  }

  const removeProductFromCart = product => {
    const existedProduct = products.find(item => item.id == product.id);
    if (existedProduct && existedProduct.quantity == 1) {
      return setProducts(
        [...products.filter(item => item.id != product.id)]
      )
    }

    if (existedProduct) {
      return setProducts(
        [
          ...products.filter(item => item.id != product.id),
          { ...existedProduct, quantity: (existedProduct.quantity || 1) - 1 }
        ]
      )
    }
  }

  const contextValue = {
    products: products.sort((a,b) => a.name.localeCompare(b.name)),
    addProductToCart,
    removeProductFromCart
  }
  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>

  );
}

export default App;