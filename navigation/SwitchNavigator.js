import React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { Reset } from '../Components/';

import Login from '../Components/Login/login';
import Profile from '../Components/Profile/profile'
import Signup from '../Components/Signup/signup';

const SwitchNavigator = createSwitchNavigator(
   {
   Login: {
      screen: Login
   },
   Reset: {
      screen: Reset
   },
   Signup: {
      screen: Signup 
   },
   Profile: {
         screen: Profile
   }
},

   {
     initialRouteName: 'Login'
   }

)

export default createAppContainer(SwitchNavigator);
