import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {CartView, HomeView, ItemDetailsView} from '../screens';
import {COLORS} from '../theme/colors';
import CartIcon from '../components/CartIcon/CartIcon';
import {RootStackParamList} from './RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const stackScreenOptions: StackNavigationOptions = {
  headerShown: true,
  title: '',
  headerBackTitleVisible: false,
  headerTintColor:COLORS.primary
};

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name="HomeView"
          component={HomeView}
          options={{
            headerRight: () => <CartIcon />,
          }}
        />
        <Stack.Screen
          name="ItemDetailsView"
          component={ItemDetailsView}
          options={{
            headerRight: () => <CartIcon />,
          }}
        />

        <Stack.Screen name="CartView" component={CartView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
