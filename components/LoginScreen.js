import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text ,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <LinearGradient
      colors={['#6A11CB', '#2575FC']}
      style={styles.background}
    >

      <View style={styles.container}>
      <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
          
        />
        <Text style={styles.title}>Quiz App Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
          Don’t have an account? Sign Up
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3B3B98',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
  link: {
    color: '#6A11CB', 
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'none',
  },
  button: {
    backgroundColor: '#6A11CB',
    width: '100%', 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
