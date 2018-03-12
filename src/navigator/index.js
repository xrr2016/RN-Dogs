import {StackNavigator} from 'react-navigation'

import Home from '../screen/Home'
import Play from '../screen/Play'
import Likes from '../screen/Likes'

export default StackNavigator({
  Home: {
    screen: Home
  },
  Play: {
    screen: Play
  },
  Likes: {
    screen: Likes
  }
}, {
  initialRouteName: 'Home',
  // headerMode: "none",
  navigationOptions: {
    headerTitle: 'BILIBILI 排行榜',
    headerStyle: {
      borderBottomWidth: 0
    }
  }
})
