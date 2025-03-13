import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '../context/UserContext'; 

export default function SignUpScreen({ navigation }) {
  const { updateUser } = useUser(); 

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Form values:', { name, age, academicYear, email, password, confirmPassword });
  
    // Check if all fields are filled
    if (!name || !age || !academicYear || !email || !password || !confirmPassword) {
      console.log('Validation failed: Empty fields');
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
  
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email');
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
  
    // Validate age (must be a number)
    if (isNaN(age) || age <= 0) {
      console.log('Validation failed: Invalid age');
      Alert.alert('Validation Error', 'Please enter a valid age.');
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      console.log('Validation failed: Passwords do not match');
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }
  
    console.log('Navigating to Login...');
    // Update user info in context after successful validation
    updateUser({ name, age, academicYear, email });
  
    // Show success alert and navigate
    Alert.alert(
      'Sign Up Successful',
      'You have successfully signed up!',
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed, navigating to Login...');
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false } // Prevent dismissing by tapping outside
    );
  };
  
  

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Academic Year"
          value={academicYear}
          onChangeText={setAcademicYear}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
  button: {
    backgroundColor: '#6A11CB',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
