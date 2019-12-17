import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },

    {
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#3c64ad',
      },
      defaultNavigationOptions: {
        header: <Header />,
        headerStyle: {
          backgroundColor: '#141417',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
