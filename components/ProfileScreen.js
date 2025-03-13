import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '../context/UserContext'; 

export default function ProfileScreen() {
  const { user } = useUser(); 

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>{user.name || 'John Doe'}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsLabel}>Age:</Text>
          <Text style={styles.details}>{user.age || 'N/A'}</Text>

          <Text style={styles.detailsLabel}>Academic Year:</Text>
          <Text style={styles.details}>{user.academicYear || 'N/A'}</Text>

          <Text style={styles.detailsLabel}>Email:</Text>
          <Text style={styles.details}>{user.email || 'N/A'}</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit Profile</Text>
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
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A11CB',
    marginBottom: 5,
  },
  details: {
    fontSize: 18,
    color: '#444',
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: '#6A11CB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
