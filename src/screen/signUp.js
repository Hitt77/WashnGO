import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Images from '../theme/images';
import CusButton from '../components/CusButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({navigation}) {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    // Basic validation for fields
    if (!name || !phone || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (!isChecked) {
      Alert.alert('Error', 'You must agree to the terms and conditions.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('password', password);

      const response = await fetch(
        'https://tor.appdevelopers.mobi/api/register',
        {
          method: 'POST',
          body: formData,
        },
      );

      const result = await response.json();
      console.log('name-=-=-=-', name);

      if (result.status) {
        await AsyncStorage.setItem('user', name);
        Alert.alert('Success', 'Registration successful');
        navigation.navigate('SignIn');
      } else {
        Alert.alert('Error', result.message || 'Something went wrong!');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.mainlogo} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.subHeaderText}>
          Fill in the below form and add life to{'\n'} your car!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          icon={Images.user}
        />

        <InputField
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone"
          icon={Images.phone}
          keyboardType="phone-pad"
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          icon={Images.Lock}
          secureTextEntry
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
        />
        <Text style={styles.checkboxText}>Agree with Terms & Conditions</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CusButton text="Sign Up" press={handleSignUp} loading={loading} />

        <View style={styles.signInPrompt}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          By signing up, you agree to our Terms of Use and Privacy Policy.
        </Text>
      </View>

      <Image style={styles.backgroundImage} source={Images.rupper} />
    </SafeAreaView>
  );
}

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  ...props
}) => (
  <View style={styles.inputWrapper}>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputFieldContainer}>
      <Image style={styles.iconStyle} source={icon} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...props}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeaderText: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputLabel: {
    color: 'black',
    fontWeight: '600',
    marginBottom: 5,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  signInPrompt: {
    flexDirection: 'row',
    marginTop: 15,
  },
  signInText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
  backgroundImage: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -100,
    transform: [{rotate: '90deg'}],
    right: 0,
  },
});
