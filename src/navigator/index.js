import {StackNavigator} from 'react-navigation'

import Home from '../screen/Home'
import Play from '../screen/Play'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Play: {
    screen: Play
  }
}, {
  initialRouteName: 'Home',
  headerMode: "none",
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#3F51B5',
      borderBottomColor: 'transparent'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})
