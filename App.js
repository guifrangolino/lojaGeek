import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Caixa from './src/screens/index'
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import mock from './src/mocks/caixa'
import AppLoading from 'expo-app-loading';

export default function App() {

  // CARREGAMENTO DAS FONTES
  const [fonteCarregada] = useFonts ({
    'PoppinsRegular': Poppins_400Regular,
    'PoppinsNegrito': Poppins_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Caixa {...mock} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
