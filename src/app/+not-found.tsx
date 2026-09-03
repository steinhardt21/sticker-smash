import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
