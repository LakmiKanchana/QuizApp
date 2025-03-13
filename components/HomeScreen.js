import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
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
        <Text style={styles.title}>Welcome to the Quiz App</Text>

       
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizSelection')}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Setting</Text>
        </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B3B98',
    textAlign: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A11CB',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10, // Spacing between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
