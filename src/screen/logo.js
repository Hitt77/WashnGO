import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../theme/images';

export default function Logo({navigation}) {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Welcome');
      }, 3000);
      return () => clearTimeout(timer);
    }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <View style={styles.upperImagesContainer}>
            <Image style={styles.rightImage} source={Images.right} />
            <Image style={styles.leftImage} source={Images.rupper} />
          </View>
        </View>
        <View style={styles.logoSection}>
          <Image style={styles.logoImage} source={Images.mainlogo} />
        </View>
        <View style={styles.lowerSection}>
          <Image style={styles.lowerImage} source={Images.rlower} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 0.3,
  },
  upperImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftImage: {
    height: 200,
    width: 150,
    resizeMode: 'contain',
  },
  rightImage: {
    height: '120%',
    width: '52%',
    resizeMode: 'contain',
  },
  logoSection: {
    flex: 0.4,
  },
  logoImage: {
    height: '100%',
    width: '100%',
  },
  lowerSection: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  lowerImage: {
    height: '90%',
    width: '90%',
  },
});
