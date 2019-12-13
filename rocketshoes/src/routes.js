import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cart from './pages/Cart';
import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Cart,
      Home,
    },
    {
      headerLayouPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
