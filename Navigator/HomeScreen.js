import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      //
    }
  }, [route.params?.post]);

  // return (
  //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //     <Text>Home Screen</Text>
  //     <Button
  //       title="Go to details"
  //       onPress={() =>
  //         navigation.navigate('Details', {
  //           itemId: 86,
  //           otherParam: 'anything you want here',
  //         })
  //       }
  //     />
  //   </View>
  // );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}
