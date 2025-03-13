import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView ,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const questionsBySubject = {
  "Mobile Application Development": [
    { id: '1', question: 'What is React Native?', options: ['Library', 'Framework', 'Database', 'Tool'], correct: 1 },
    { id: '2', question: 'Which language is used for React Native?', options: ['Python', 'Swift', 'JavaScript', 'Kotlin'], correct: 2 },
    { id: '3', question: 'What is Expo?', options: ['IDE', 'Toolchain', 'Framework', 'Database'], correct: 1 },
  ],
  "Bioinformatics": [
    { id: '1', question: 'What does DNA stand for?', options: ['Deoxyribonucleic Acid', 'Diode Neutral Acid', 'Dynamic Neural Analysis', 'None'], correct: 0 },
    { id: '2', question: 'What is BLAST?', options: ['Algorithm', 'Tool', 'Database', 'Technique'], correct: 1 },
    { id: '3', question: 'What is a Genome?', options: ['Organism', 'Gene sequence', 'RNA sequence', 'Protein'], correct: 1 },
  ],
  "E-Commerce": [
    { id: '1', question: 'What does B2B stand for?', options: ['Business to Business', 'Buyer to Buyer', 'Back to Back', 'Business to Buyer'], correct: 0 },
    { id: '2', question: 'Which is a popular payment gateway?', options: ['PayPal', 'HTML', 'MongoDB', 'React'], correct: 0 },
    { id: '3', question: 'What does SSL stand for?', options: ['Secure Socket Layer', 'Super Security Layer', 'Simple Secure Link', 'System Security Level'], correct: 0 },
  ],
  "Intelligent System": [
    { id: '1', question: 'What is AI?', options: ['Artificial Input', 'Artificial Intelligence', 'Automatic Interface', 'Advanced Intelligence'], correct: 1 },
    { id: '2', question: 'Which is a type of Machine Learning?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'All of the above'], correct: 3 },
    { id: '3', question: 'What is an Expert System?', options: ['A human assistant', 'A knowledge-based system', 'A data storage system', 'None of the above'], correct: 1 },
  ],
  "Data Mining": [
    { id: '1', question: 'What is Data Mining?', options: ['Extracting patterns from data', 'Storing data', 'Deleting unused data', 'Data compression'], correct: 0 },
    { id: '2', question: 'Which of these is a clustering algorithm?', options: ['K-Means', 'Linear Regression', 'Decision Tree', 'Support Vector Machines'], correct: 0 },
    { id: '3', question: 'What does ETL stand for?', options: ['Extract, Transform, Load', 'Edit, Transfer, Link', 'Extract, Transfer, Load', 'Edit, Transform, List'], correct: 0 },
  ],
  "Cloud Application Development": [
    { id: '1', question: 'What is the full form of IaaS?', options: ['Infrastructure as a Service', 'Internet as a Service', 'Information as a Service', 'Innovation as a Service'], correct: 0 },
    { id: '2', question: 'Which cloud model combines private and public clouds?', options: ['Private Cloud', 'Public Cloud', 'Hybrid Cloud', 'Community Cloud'], correct: 2 },
    { id: '3', question: 'What does SaaS stand for?', options: ['Software as a Service', 'System as a Service', 'Storage as a Service', 'Solution as a Service'], correct: 0 },
  ],
};

export default function QuizScreen({ route, navigation }) {
  const { subject } = route.params; // Get the subject from navigation params
  const questions = questionsBySubject[subject] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
  let updatedScore = score;
  if (index === questions[currentQuestion].correct) {
    updatedScore += 1;
    setScore(updatedScore); 
  }

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    navigation.navigate('Results', { score: updatedScore, total: questions.length });
  }
};


  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  if (questions.length === 0) {
    return (
      <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.container}>

        <Text style={styles.error}>No questions available for {subject}.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.container}>
       <Image
                  source={require('../assets/logo.png')}
                  style={styles.logo}
                />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.question}>
          {questions[currentQuestion].question}
        </Text>

        {/* Display question navigation numbers */}
        <View style={styles.navigationContainer}>
          {questions.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => goToQuestion(index)}
              style={[
                styles.navigationButton,
                currentQuestion === index && styles.activeNavigationButton,
              ]}
            >
              <Text style={styles.navigationText}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Display answer options */}
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(index)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.progress}>
          Question {currentQuestion + 1} of {questions.length}
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 10,
    marginTop:50,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  navigationButton: {
    backgroundColor: '#6A11CB',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#6A11CB',
  },
  activeNavigationButton: {
    backgroundColor: '#00f2fe',
  },
  navigationText: {
    color: '#fff',
    fontSize: 16,
  },
  optionButton: {
    backgroundColor: '#6A11CB',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6A11CB',
    width: '80%',
    alignSelf: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  progress: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  error: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
