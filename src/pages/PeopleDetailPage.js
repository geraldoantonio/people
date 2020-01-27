import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line'

const PeopleDetailsPage = props => {
  const { location, email, picture, phone, cell, nat } = props.navigation.state.params.people

  return (
    <View style={styles.container}>
      <Image style={styles.avatar}
        source={{ uri: picture.large }} />
      <View style={styles.card}>
        <Line label="E-mail" content={email} />
        <Line label="Cidade" content={location.city} />
        <Line label="Estado" content={location.state} />
        <Line label="Tel" content={phone} />
        <Line label="Cel" content={cell} />
        <Line label="Nacionalidade" content={nat} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  avatar: {
    aspectRatio: 1,
    flex: 3,
    alignSelf: "center",
    borderRadius: 120,
    marginBottom: 15,
  },
  card: {
    padding: 5,
    backgroundColor: "#ececec",
    borderRadius: 3,
    shadowColor: "#ccc",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2,
    flex: 5,
  },
})

export default PeopleDetailsPage