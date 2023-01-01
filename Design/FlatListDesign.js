import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

function FlatListDesign() {
  return (
    <View style={movieItemStyles.container}>
      <FlatList
        data={[
          {title: '111', icon: ''},
          {title: 'Dan', icon: ''},
          {title: 'Dominic', icon: ''},
          {title: 'Jackson', icon: ''},
          {title: 'James', icon: ''},
          {title: 'Joel', icon: ''},
          {title: 'John', icon: ''},
          {title: 'Jillian', icon: ''},
          {title: 'Jimmy', icon: ''},
          {title: 'Julie', icon: ''},
        ]}
        renderItem={({item}) => <MovieItem value={item} />}
      />
    </View>
  );
}

function MovieItem(props) {
  return (
    <View style={movieItemStyles.container}>
      <Image style={movieItemStyles.icon} source={require('')} />
      <Text style={movieItemStyles.title}>{props.title}</Text>
    </View>
  );
}

const movieItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
});

export default FlatListDesign;
