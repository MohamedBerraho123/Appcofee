import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReservationScreen = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleReservation = () => {
    alert(`Reservation made for ${name} at ${time}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Reservation</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Reservation Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Reserve" onPress={handleReservation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default ReservationScreen;
