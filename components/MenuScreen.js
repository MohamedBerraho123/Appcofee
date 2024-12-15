import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', name: 'Espresso', price: '$3', image: require('../assets/espresso.jpg') },
  { id: '2', name: 'Cappuccino', price: '$4', image: require('../assets/cappuccino.jpg') },
  { id: '3', name: 'Latte', price: '$4.5', image: require('../assets/latte.jpg') },
  { id: '3', name: 'Apple juice', price: '$7', image: require('../assets/Apple juice.jpg') },
  { id: '3', name: 'Avocado juice', price: '$8', image: require('../assets/Avocado juice.jpg') },
  { id: '3', name: 'pineapple juice', price: '$9', image: require('../assets/pineapple juice.jpg') },
  { id: '3', name: 'cocacola', price: '$5', image: require('../assets/cocacola.jpg') },
  { id: '3', name: 'Sprite', price: '$5', image: require('../assets/Sprite.jpg') },

];

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Café Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Reservation', { item })}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default MenuScreen;
