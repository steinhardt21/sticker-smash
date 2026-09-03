import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our application! We are dedicated to providing the best
        experience for our users. Our team is passionate about creating
        innovative solutions that make your life easier and more enjoyable.
      </Text>
      <Text style={styles.description}>
        Thank you for choosing our app. We hope you enjoy using it as much as we
        enjoyed building it!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});
