import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const menuItems = [
  { id: '1', name: 'Espresso', price: '$3' },
  { id: '2', name: 'Cappuccino', price: '$4' },
  { id: '3', name: 'Latte', price: '$4.5' },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Café Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.price}
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

export default MenuScreen;
