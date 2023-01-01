import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

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
    <View style={styles.container}>
      <Text style={styles.item}>{props.value.title + '2'}</Text>
    </View>
  );
}

const movieItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    flexDirection: 'row',
  },
  // icon: {
  //   width: 40,
  //   height: 40,
  //   paddingTop: 10,
  //   paddingLeft: 10,
  //   paddingBottom: 10,
  // },
  title: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function SectionListBasics() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jacksondddd',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

//export default SectionListBasics;
export default FlatListDesign;
