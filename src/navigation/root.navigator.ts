import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeView from '../views/HomeView';

const RootNavigator = createSwitchNavigator(
  {
    Home: HomeView
  },
  { initialRouteName: 'Home' }
);

const RootNavigatorContainer = createAppContainer(RootNavigator);
export default RootNavigatorContainer;
