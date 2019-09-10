import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeView } from '../views/HomeView';

const RootNavigator = createSwitchNavigator(
  {
    Home: HomeView
  },
  { initialRouteName: 'Home' }
);

const RootNavigatorContainer = createAppContainer(RootNavigator);
export default RootNavigatorContainer;
