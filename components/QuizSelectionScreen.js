import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const quizzes = [
  { id: '1', title: 'Mobile Application Development', difficulty: 'Easy' },
  { id: '2', title: 'Bioinformatics', difficulty: 'Medium' },
  { id: '3', title: 'E-Commerce', difficulty: 'Hard' },
  { id: '4', title: 'Intelligent System', difficulty: 'Easy' },
  { id: '5', title: 'Data Mining', difficulty: 'Medium' },
  { id: '6', title: 'Cloud Application Development', difficulty: 'Hard' },
];

export default function QuizSelectionScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#6A11CB', '#2575FC']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select a Quiz</Text>
        <FlatList
          data={quizzes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.quizItem}
              onPress={() => navigation.navigate('Quiz', { subject: item.title })}
            >
              <Text style={styles.quizTitle}>{item.title}</Text>
              <Text style={[styles.difficulty, styles[item.difficulty.toLowerCase()]]}>
                {item.difficulty}
              </Text>
            </TouchableOpacity>
          )}
        />
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B3B98',
    textAlign: 'center',
    marginBottom: 20,
  },
  quizItem: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'left',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  difficulty: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  easy: {
    color: '#28a745', 
  },
  medium: {
    color: '#ffc107', 
  },
  hard: {
    color: '#dc3545', 
  },
});
