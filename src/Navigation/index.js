import {StackNavigator} from 'react-navigation'
import Home from '../screen/Home'
import Play from '../screen/Play'

export default StackNavigator(
  {
    Home: { screen: Home },
    Play: { screen: Play }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6C49B8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)
