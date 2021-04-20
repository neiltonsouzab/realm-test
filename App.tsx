import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import PersonRepository from './database/respository/PersonRepositry';
import PostRepository from './database/respository/PostRepository';


export default function App() {

  const addPerson = useCallback(() => {
    const persons = PersonRepository.findAll();
    const posts = PostRepository.findAll();


    console.log('persons', persons);
    console.log('posts', posts);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addPerson}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
