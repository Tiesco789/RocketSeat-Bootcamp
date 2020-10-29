import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './config/ReactotronConfig';

import {Colors} from 'react-native/Libraries/NewAppScreen';


export default function App() {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Step One</Text>
      </View>
    </>
  );
}
