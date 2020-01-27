import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
  const { people, navigateToPeopleDetail } = props
  const { title, first, last } = people.name

  return (
    <TouchableOpacity onPress={() => {
      navigateToPeopleDetail({ people })
    }} >
      <View style={styles.line}>
        <Image
          style={styles.avatar}
          source={{ uri: people.picture.thumbnail }}
        />
        <Text style={styles.lineText} >
          {`${
            capitalizeFirstLetter(title)
            } ${
            capitalizeFirstLetter(first)
            } ${
            capitalizeFirstLetter(last)
            }`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
    fontWeight: "bold",

  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  }

})

export default PeopleListItem