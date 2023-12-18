import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme';
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router'

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

