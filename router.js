import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from './src/components/login';

import Home from './src/components/home';
import Home2 from './src/DrawerScreens/home2'
import Settings from './src/DrawerScreens/settings'
import Sports from './src/DrawerScreens/sports'
import LiveTv from './src/DrawerScreens/liveTv'
import Movies from './src/DrawerScreens/movies'
import Kids from './src/DrawerScreens/kids'

import { NavigationContainer } from '@react-navigation/native';
import TvShows from './src/DrawerScreens/tvShows';

const Drawer=createDrawerNavigator();


const Stack= createStackNavigator();

function myDrawer()
{  return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home2}/>

        <Drawer.Screen name="liveTv" component={LiveTv}/>
        
        <Drawer.Screen name="movies" component={Movies}/>

        <Drawer.Screen name="tvShows" component={TvShows}/>
        <Drawer.Screen name="sports" component={Sports}/>
        <Drawer.Screen name="kids" component={Kids}/>
        <Drawer.Screen name="Settings" component={Settings}/>
    </Drawer.Navigator>
)
}

function myApp(){
    
return(

<NavigationContainer>


    
    <Stack.Navigator>
    <Stack.Screen  name="Login" component={Login}/>
    <Stack.Screen  options={{headerShown:false}} name="MyDrawer" component ={myDrawer} />
   
    </Stack.Navigator>
    
   

</NavigationContainer>
)
}

export default myApp;