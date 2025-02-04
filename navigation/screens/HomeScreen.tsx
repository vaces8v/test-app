import { Button } from "@/components/shared/Button/Button";
import { View, BackHandler } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#111" }}>
			<Button text="Выйти" onPress={() => BackHandler.exitApp()} />
		</View>
	)
}