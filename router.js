import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Login from './src/components/login';


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

        <Drawer.Screen name="LiveTv" component={LiveTv}/>
        
        <Drawer.Screen name="Movies" component={Movies}/>

        <Drawer.Screen name="Tv Shows" component={TvShows}/>
        <Drawer.Screen name="Sports" component={Sports}/>
        <Drawer.Screen name="Kids" component={Kids}/>
        <Drawer.Screen name="Settings" component={Settings}/>
    </Drawer.Navigator>
)
}

function myApp(){
    
return(

<NavigationContainer>                            


    
    <Stack.Navigator>
    <Stack.Screen  options={{headerShown:false}} name="Login" component={Login}/>
    <Stack.Screen  options={{headerShown:false}} name="MyDrawer" component ={myDrawer} />
   
    </Stack.Navigator>
    
   

</NavigationContainer>
)
}

export default myApp;