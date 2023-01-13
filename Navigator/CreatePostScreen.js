import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="what's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Create Post',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}
