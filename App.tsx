import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const loadFonts = async () => {
	await Font.loadAsync({
		'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		loadFonts().then(() => setFontsLoaded(true));
	}, []);

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
			if (fontsLoaded) {
				await SplashScreen.hideAsync();
			}
		}
		prepare();
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style="light" backgroundColor="transparent" />
			<SafeAreaProvider>
				<View style={{ flex: 1, backgroundColor: '#1e124c' }}>
					<AppNavigator />
				</View>
			</SafeAreaProvider>
		</>
	);
}
