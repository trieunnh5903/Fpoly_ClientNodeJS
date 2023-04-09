
import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import OrderScreen from './screen/OrderScreen';
import LoginScreen from './screen/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './config/colors';
import AccountScreen from './screen/AccountScreen';
import NotificationScreen from './screen/NotificationScreen';
import SearchScreen from './screen/SearchScreen';
import { Provider } from "react-redux";
import store from './redux/store';
import DetailScreen from './screen/DetailScreen';
import RegisterScreen from './screen/RegisterScreen';
import SplashScreen from './screen/SplashScreen';

const h = Dimensions.get('window').height
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppContext = React.createContext(null);

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
      <HomeStack.Screen name='SearchScreen' component={SearchScreen} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  )
}

const LoginStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <MaterialIcons name={'home'} size={size} color={color} />;
          }
          if (route.name === 'Cart') {
            return <MaterialCommunityIcons name={'cart'} size={size} color={color} />
          }
          if (route.name === 'Notification') {
            return <MaterialCommunityIcons name={'bell'} size={size} color={color} />;
          }
          if (route.name === 'Account') {
            return <MaterialCommunityIcons name={'account'} size={size} color={color} />;
          }
        },

        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
        tabBarStyle: {
          justifyContent: 'center',
          height: h * 0.09,
          padding: 15,
          paddingBottom: 10,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          position: 'absolute',
          bottom: 0,
          borderColor: '#E9E9E9',
          backgroundColor: "#ffffff"
        },

      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Cart" component={OrderScreen} options={() => ({
        tabBarStyle: {
          display: "none",
        },
      })} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export const useAppContext = () => {
  return React.useContext(AppContext)
}

function App() {
  const [products, setProducts] = React.useState([])
  const addProductToCart = (product) => {
    const existedProduct = products.find(item => item._id == product._id);
    if (existedProduct) {
      setProducts(
        [
          ...products.filter(item => item._id != product._id),
          { ...existedProduct, quantity: (existedProduct.quantity || 1) + 1 }
        ]
      )
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  }

  const removeProductFromCart = product => {
    const existedProduct = products.find(item => item._id == product._id);
    if (existedProduct && existedProduct.quantity == 1) {
      return setProducts(
        [...products.filter(item => item._id != product._id)]
      )
    }

    if (existedProduct) {
      return setProducts(
        [
          ...products.filter(item => item._id != product._id),
          { ...existedProduct, quantity: (existedProduct.quantity || 1) - 1 }
        ]
      )
    }
  }

  const contextValue = {
    products: products.sort((a, b) => a.name.localeCompare(b.name)),
    addProductToCart,
    removeProductFromCart
  }
  return (
    // <AppContext.Provider value={contextValue}>

    // </AppContext.Provider>
    // <AccountScreen></AccountScreen>
    <Provider store={store}>
      <AppContext.Provider value={contextValue}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginStack" component={LoginStackScreen} />
            <Stack.Screen name="Tabs" component={BottomTabsNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>

    </Provider>
  );
}

export default App;