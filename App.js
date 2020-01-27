import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
    navigationOptions: {
      title: 'Pessoas'
    }
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const { title, first } = navigation.state.params.people.name
      return ({
        title: `${title} ${first}`
      })
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: "#c5c5c5",
    },
    headerTitleStyle: {
      fontSize: 30,
      color: '#fff'
    },
    headerTitleAlign: "center",
    headerTintColor: "#FFF",
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;