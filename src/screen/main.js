import { Alert, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Images from '../theme/images';
import CusButton from '../components/CusButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({ navigation }) {
  const [name, setname] = useState('');

  // Function to fetch the stored user name
  const getUserName = async () => {
    try {
      const storeData = await AsyncStorage.getItem('user');
      console.log('user-=-=-=', storeData);
      if (storeData) {
        setname(storeData);
      } else {
        Alert.alert('No User Found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load user name');
    }
  };

  // Call getUserName when the component mounts
  useEffect(() => {
    getUserName(); // Corrected: This should call the function
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.logo} source={Images.Logo} />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome {name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CusButton press={() => navigation.navigate('Welcome')} text={'Logout'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: '20%',
    width: '100%',
    resizeMode: 'contain',
    marginTop: 30,
  },
  welcomeTextContainer: {
    marginTop: '40%',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
  },
  buttonContainer: {
    height: '60%',
    width: '100%',
    marginTop: '30%',
    alignItems: 'center',
  },
});
