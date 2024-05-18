import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeView, ItemDetailsView} from '../screens';
import { COLORS } from '../theme/colors';

const Stack = createStackNavigator();

const stackScreenOptions: StackNavigationOptions = {
  headerShown: true,
  title:'',
  headerBackTitleVisible:false, 
};

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="ItemDetailsView"  component={ItemDetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
