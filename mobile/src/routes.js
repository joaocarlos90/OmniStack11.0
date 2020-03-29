//para as rotas e necessario instalar o reactnavegation npm install @react-navigation/nativepp
import react from 'react';
import { navagationContainer } from '@react-navigation/native;'
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'
import Detail from './pages/Details'


export default function Routes() {
    return(
        <navagationContainer>
            <AppStack.Navigator screenOptions={{headerShown : false}}>
                <AppStack.Screen name = "Incidents" component={Incidents}/>
                <AppStack.Screen name = "Details" component={Detail}/>
            </AppStack.Navigator>
        </navagationContainer>
    );
}