import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./sacsnapLogo.png')} />
      <StatusBar style="auto" />
      <TextInput
        style={{height: 40,
          width: 300,
          marginBottom: 40,
          marginTop: 50,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10}}
        placeholder="Enter OTP"
      />

      <Button
        title="Verify"
        onPress={() => Alert.alert('This is fantabulous')}
        color="rgb(0, 48, 79)"
        
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
