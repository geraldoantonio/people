import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Line({ label = '', content = '-' }) {
  return (
    <View style={styles.line}>
      <Text style={[
        styles.label,
        label.length > 8 ? styles.longLabel : null
      ]}>{label}: </Text>
      <Text style={styles.texto}> {content} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 3,
    marginTop: 5,
  },
  label: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 3,

  },
  longLabel: {
    fontSize: 10
  },
})