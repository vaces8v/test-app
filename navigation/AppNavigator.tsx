import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from '../types/navigation';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					id={undefined}
					screenOptions={{
						headerShown: false,
						gestureEnabled: true,
						gestureDirection: 'horizontal',
					}}
					initialRouteName="Home"
				>

					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: 'Главная',
							animation: 'fade'
						}}
					/>

				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}