import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {DetailScreen} from './DetailScreen';
import {CreatePostScreen} from './CreatePostScreen';

const Stack = createNativeStackNavigator();

function NavigationContainerIndex() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Create Post"
          component={HomeScreen}
          options={{title: 'OverView'}}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationContainerIndex;
