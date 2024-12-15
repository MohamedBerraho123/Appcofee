// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const ReservationScreen = () => {
//   const [name, setName] = useState('');
//   const [time, setTime] = useState('');
//   const handleReservation = () => {
//         if (!name || !time) {
//           // Show alert if fields are empty
//           alert('Please fill in all fields before making a reservation.');
//         } else {
//           // Show confirmation with name and time
//           alert('Reservation Confirmed', `Reservation made for ${name} at ${time}`);
//         }
//       };

//   // const handleReservation = () => {
//   //   alert(`Reservation made for ${name} at ${time}`);
//   // };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Make a Reservation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//      <TextInput
//   style={styles.input}
//   placeholder="Reservation Time"
//   value={time}
//   onChangeText={setTime}
//   keyboardType="numeric"  // Works well for numeric values like time
//   inputMode="numeric"     // Optimizes for time input on iOS
// />
//       <Button title="Reserve" onPress={handleReservation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
// });

// export default ReservationScreen;
//2
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, Image, Alert, Linking } from 'react-native';
// import RNFS from 'react-native-fs';
// const ReservationScreen = ({ route }) => {
//   const { item } = route.params;
//   const [name, setName] = useState('');
//   const [time, setTime] = useState('');

//   const handleReservation = () => {
//     if (!name || !time) {
//       alert('Please fill in all fields before making a reservation.');
//     } else {
//       alert(`Reservation Confirmed\nFor ${name} at ${time}`);
//     }
//   };

//   const handleDownload = async () => {
//     const downloadDest = `${RNFS.DocumentDirectoryPath}/coffee_image.jpg`;

//     try {
//       const result = await RNFS.downloadFile({
//         fromUrl: item.image,
//         toFile: downloadDest,
//       }).promise;

//       if (result.statusCode === 200) {
//         Alert.alert('Download Complete', 'Image has been downloaded!');
//       } else {
//         Alert.alert('Error', `Failed to download the image. Status: ${result.statusCode}`);
//       }
//     } catch (err) {
//       Alert.alert('Error', `Failed to download the image. Details: ${err.message}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Make a Reservation</Text>

//       {/* Reservation form */}
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Reservation Time"
//         value={time}
//         onChangeText={setTime}
//         keyboardType="numeric"
//         inputMode="numeric"
//       />
//       <Button title="Reserve" onPress={handleReservation} />

//       {/* Display the selected coffee item */}
//       <View style={styles.itemDetails}>
//         <Image source={item.image} style={styles.itemImage} />
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>{item.price}</Text>
//       </View>

//       {/* Download button */}
//       <Button title="Download Image" onPress={handleDownload} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   itemDetails: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   itemImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: '#888',
//   },
// });

// export default ReservationScreen;
//3
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   Alert,
//   Share,
// } from 'react-native';

// const ReservationScreen = ({ route }) => {
//   const { item } = route.params;
//   const [name, setName] = useState('');
//   const [time, setTime] = useState('');
//   const [isReserved, setIsReserved] = useState(false);

//   const handleReservation = () => {
//     if (!name || !time) {
//       alert('Please fill in all fields before making a reservation.');
//     } else {
//       setIsReserved(true);
//       Alert.alert('Reservation Confirmed', `Reservation made for ${name} at ${time}`);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this coffee: ${item.name} for ${item.price}`,
//         url: Image.resolveAssetSource(item.image).uri,
//         title: 'Coffee Image',
//       });
//     } catch (error) {
//       Alert.alert('Error', `Failed to share the image. Details: ${error.message}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Make a Reservation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Reservation Time"
//         value={time}
//         onChangeText={setTime}
//         keyboardType="numeric"
//       />
//       <Button title="Reserve" onPress={handleReservation} />

//       {isReserved && (
//         <View style={styles.reservationDetails}>
//           <Image source={item.image} style={styles.itemImage} />
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemPrice}>{item.price}</Text>
//           <Button title="Download or Share Image" onPress={handleShare} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   reservationDetails: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   itemImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: '#888',
//   },
// });

// export default ReservationScreen;
//4
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Platform,
  Alert,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const ReservationScreen = ({ route }) => {
  const { item } = route.params; // item has { name, price, image }
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [isReserved, setIsReserved] = useState(false);
  const viewShotRef = useRef(null);

  const handleReservation = () => {
    if (!name || !time) {
      Alert.alert('Error', 'Please fill in all fields before making a reservation.');
    } else {
      setIsReserved(true);
      Alert.alert('Reservation Confirmed', `Reservation made for ${name} at ${time}`);
    }
  };

  const handleDownload = async () => {
    try {
      const uri = await viewShotRef.current.capture();

      // For web, use base64 or file
      if (Platform.OS === 'web') {
        const blob = await fetch(uri).then((res) => res.blob());
        const url = URL.createObjectURL(blob);

        // Create an anchor tag for download
        const link = document.createElement('a');
        link.href = url;
        link.download = `${item.name}_reservation.jpg`;
        link.click();

        URL.revokeObjectURL(url); // Clean up
      } else {
        const savePath = `${FileSystem.documentDirectory}${item.name}_reservation.jpg`;

        // Save the image file
        await FileSystem.copyAsync({
          from: uri,
          to: savePath,
        });

        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(savePath);
        } else {
          Alert.alert('Download Complete', 'Image saved successfully!');
        }
      }
    } catch (error) {
      Alert.alert('Error', `Failed to save image: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Reservation</Text>
      <TextInput
        style={styles.input}
        placeholder="Reservation Time"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Reserve" onPress={handleReservation} />

      {isReserved && (
        <View style={styles.reservationDetails}>
          {/* Render the image and details within the ViewShot component */}
          <ViewShot
            ref={viewShotRef}
            options={{ format: 'jpg', quality: 0.9 }}
            style={styles.viewShotContainer}
          >
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.overlayText}>Name: {item.name}</Text>
            <Text style={styles.overlayText}>Price: {item.price}</Text>
            <Text style={styles.overlayText}>Reserved By: {name}</Text>
            <Text style={styles.overlayText}>Time: {time}</Text>
          </ViewShot>
          <Button title="Download Image" onPress={handleDownload} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  reservationDetails: {
    marginTop: 20,
    alignItems: 'center',
  },
  viewShotContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  overlayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
});

export default ReservationScreen;
