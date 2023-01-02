import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

function FlatListDesign() {
  return (
    <View style={styles.container}>
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
        //renderItem={item => <Text style={styles.item}>{item.item.title}</Text>}
      />
    </View>
  );
}

function MovieItem(props) {
  // return (
  //   <View style={movieItemStyles.container}>
  //     <Image style={movieItemStyles.icon} source={require('')} />
  //     <Text style={movieItemStyles.title}>{'sssss'}</Text>
  //   </View>
  // );
  return (
    <View style={movieItemStyles.container}>
      <View style={movieItemStyles.icon} />
      <Text style={movieItemStyles.title}>{props.value.title + '2'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
  },
});

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
    backgroundColor: 'red',
  },
  title: {
    padding: 10,
    fontSize: 18,
  },
});

export default FlatListDesign;
