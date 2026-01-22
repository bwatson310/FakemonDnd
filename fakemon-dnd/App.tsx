import { Provider as PaperProvider, Button } from 'react-native-paper';
import { View } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Test 1
        </Button>
      </View>
    </PaperProvider>
  );
}
