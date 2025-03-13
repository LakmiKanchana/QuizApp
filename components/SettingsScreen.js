import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';  

export default function SettingsScreen() {
  const { darkMode, setDarkMode } = useTheme();  

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, darkMode ? styles.darkTitle : styles.lightTitle]}>Settings</Text>
      <View style={styles.setting}>
        <Text style={darkMode ? styles.darkText : styles.lightText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  lightContainer: {
    backgroundColor: '#f5f5f5', 
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 16 },
  lightTitle: {
    color: '#000', 
  },
  darkTitle: {
    color: '#fff', 
  },
  setting: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  lightText: {
    color: '#000', 
  },
  darkText: {
    color: '#fff',
  },
});
