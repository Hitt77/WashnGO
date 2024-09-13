import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CusButton({text,press}) {
  return (
    <TouchableOpacity onPress={press}
      style={{
        height: 50,
        width: '95%',
        backgroundColor: '#94C7FF',
        alignItems: 'center',
        justifyContent: 'center',borderRadius:30,zIndex:1
      }}>
      <Text style={{fontSize:24,fontWeight:'700',color:'black'}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
