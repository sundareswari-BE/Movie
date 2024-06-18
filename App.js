import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginModal from "./src/screens/myaccount";
import Myaccount from "./src/screens/LoginModal";
import Homepage from "./src/screens/HomePage";
import RegistrationModal from "./src/screens/RegistrationModal";
import OptionModal from "./src/screens/OptionModal";
import Favorites from "./src/screens/Favorites";
import TicketHistory from "./src/screens/TicketHistory";
import Cinemas from "./src/screens/Cinemas";
import Deleteccount from "./src/screens/Deleteaccount";
import MovieDetails from "./src/screens/MovieDetails";
import Terms_condition from "./src/screens/Terms&condition";
import Privacy_policy from "./src/screens/Privacypolicy";
import FAQ from "./src/screens/FAQ";
import SeatSelection from "./src/screens/SeatSelection";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="Login"  component={LoginModal}  options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="Myaccount" component={Myaccount} /> */}
          {/* <Stack.Screen  name="Register"  component={RegistrationModal}  options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="Option"  component={OptionModal}  options={{ headerShown: false }}/> */}
          <Stack.Screen name="Favorites"  component={Favorites}  options={{ headerShown: false }}  />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          {/* <Stack.Screen name="Cinemas" component={Cinemas}  /> */}
          <Stack.Screen name="SeatSelection" component={SeatSelection}  options={{ headerShown: false }} />
          <Stack.Screen  name="Tickets"  component={TicketHistory}  options={{ headerShown: false }}  />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
