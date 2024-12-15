import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const reservations = [
  { id: '1', name: 'John Doe', time: '10:00 AM' },
  { id: '2', name: 'Jane Smith', time: '2:00 PM' },
];

const MyReservationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Reservations</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.time}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 18, marginBottom: 5 },
});

export default MyReservationsScreen;
