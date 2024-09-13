import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screen/signIn';
import SignUp from '../screen/signUp';
import Logo from '../screen/logo';
import Main from '../screen/main';
import welcome from '../screen/welcome';


const Stack = createStackNavigator();

export default function initialRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{headerShown:false}}>
       <Stack.Screen  name='SignIn' component={Signin}/>
       <Stack.Screen  name='SignUp' component={SignUp}/>
       <Stack.Screen  name='Logo' component={Logo}/>
       <Stack.Screen  name='Main' component={Main}/>
       <Stack.Screen  name='Welcome' component={welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
