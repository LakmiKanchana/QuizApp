import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ResultsScreen({ route, navigation }) {
  const { score, total } = route.params;

  return (
    <LinearGradient
      colors={['#4facfe', '#00f2fe']}
      style={styles.container}
    >
      <Image
        source={require('../assets/congratulations.png')}
        style={styles.congratulationsImage}
      />
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.score}>
        You scored <Text style={styles.scoreHighlight}>{score}</Text> out of {total}
      </Text>
      <Text style={styles.performanceText}>
        {score / total >= 0.8
          ? 'Excellent! You did great!'
          : score / total >= 0.5
          ? 'Good job! Keep it up!'
          : 'You can do better, try again!'}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizSelection')}
        >
          <Text style={styles.buttonText}>Retake Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  congratulationsImage: {
    width: 250,
    height: 250,
    marginBottom: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  score: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreHighlight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  performanceText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6A11CB',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
