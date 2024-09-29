import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Home';
import Calls from './Calls';
import Scan from './Scan';
import Whishlist from './Wishlist';
import Vip from './Vip';
import Header from './Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const ChatStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            let useFeather = false;
            let useScan = false;

            if (route.name === 'Home') {
              iconName = 'chatbubbles-outline';
            } else if (route.name === 'calls') {
              iconName = 'phone-call';
              useFeather = true;
            } else if (route.name === 'scan') {
              iconName = 'qrcode-scan';
              useScan = true;
            } else if (route.name === 'wishlist') {
              iconName = 'heart-outline';
            } else if (route.name === 'vip') {
              iconName = 'ticket-outline';
            }

           
            if (useFeather) {
              return <Feather name={iconName} size={size} color={color} />;
            } else if (useScan) {
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#FF6500',
          tabBarInactiveTintColor: 'gray',
        })}>
    
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTitle: () => <Header />,
           headerStyle:{
            height:150
           }
          }}
        />

        <Tab.Screen
          name="calls"
          component={Calls}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="scan"
          component={Scan}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="wishlist"
          component={Whishlist}
          options={{headerShown: false}}
        />
        <Tab.Screen name="vip" component={Vip} options={{headerShown: false}} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ChatStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
});
