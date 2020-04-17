import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = NavigationContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
