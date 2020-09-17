// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from "react";

//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//Import all the screens needed
import LoginScreen from "./Screen/LoginScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import DrawerNavigationRoutes from "./Screen/DrawerNavigationRoutes";

const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Register",
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    },
  },
});

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
