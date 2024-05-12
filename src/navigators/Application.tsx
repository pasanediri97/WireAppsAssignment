import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '@/theme/colors';
import {HomeView} from '@/screens/Home/HomeView';

const Stack = createStackNavigator();

const stackScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen name="HomeView" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
