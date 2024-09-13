import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../theme/images';
import CusButton from '../components/CusButton';

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: '100%', width: '53%', resizeMode: 'contain'}}
            source={images.right}></Image>
          <Image
            style={{
              height: '90%',
              width: '90%',
              resizeMode: 'contain',
              right: 60,
            }}
            source={images.rupper}></Image>
        </View>
        <View
          style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{Image: '90%', width: '90%', resizeMode: 'contain'}}
            source={images.mainlogo}></Image>
        </View>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <CusButton
            text={`Let's Start`}
            press={() => navigation.navigate('SignIn')}
          />
          <View style={{marginTop: 20}}>
            <Text>
              Already have an account?{' '}
              <Text style={{color: 'black', fontWeight: '600'}}> Sign in</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
