import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../styles/colors';
import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 20,
                    height: 88,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }
            }}
        >

            <AppTab.Screen 
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            size={size}
                            color={color}
                            name="add-circle-outline" />
                    ))
                }}
            />
            <AppTab.Screen 
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            size={size}
                            color={color}
                            name="format-list-bulleted" />
                    ))
                }}
            />

        </AppTab.Navigator>
    );
}

export default AuthRoutes;