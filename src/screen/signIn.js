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
import React, {useState} from 'react';
import Images from '../theme/images';
import CusButton from '../components/CusButton.js';

export default function Signin({navigation}) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = async () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Please enter both phone and password.');
      return;
    }

    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          password,
        }),
      });

      const data = await response.json();

      console.log('data-=-=-=', data);

      if (data.status) {
        Alert.alert('Success', 'Signed in successfully!');
        console.log('Navigation to Main');
        navigation.navigate('Main');
      } else {
        console.log('Error data:', data);
        Alert.alert(
          'Error',
          data.message || 'An error occurred during sign-in.',
        );
      }
    } catch (error) {
      console.error('Network error:', error);
      Alert.alert(
        'Error',
        'Failed to connect to the server. Please try again later.',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={Images.mainlogo} />
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.welcomeText}>
          Hi! Welcome back, you{'\n'} have been missed
        </Text>

        {/* Phone/Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.inputRow}>
              <Image style={styles.icon} source={Images.Mail} />
              <TextInput
                placeholder="xyz@gmail.com"
                value={phone}
                onChangeText={setPhone}
                style={styles.inputField}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.passwordRow}>
              <View style={styles.inputRow}>
                <Image style={styles.icon} source={Images.Lock} />
                <TextInput
                  secureTextEntry={!isPasswordVisible}
                  placeholder="password"
                  value={password}
                  onChangeText={setPassword}
                  style={styles.inputField}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={{marginRight: 5}}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Image
                    style={styles.icon}
                    source={!isPasswordVisible ? Images.Hide : Images.Show}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <CusButton text={'Sign In'} press={handleSignIn} />
          <View style={styles.divider}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.socialLoginContainer}>
            <Image style={styles.socialIcon} source={Images.Glogo} />
            <Image style={styles.socialIcon} source={Images.Apple} />
          </View>
          <Image style={styles.lowerImage} source={Images.rupper} />
          <View style={styles.footerTextContainer}>
            <View style={styles.footerRow}>
              <Text>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up?</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.agreementText}>
              By login or sign up, you agree to our terms of use and{'\n'}{' '}
              privacy policy
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: '20%',
    width: '100%',
    resizeMode: 'contain',
  },
  signInText: {
    marginHorizontal: 5,
    fontSize: 32,
    marginTop: 20,
    color: 'black',
    fontWeight: '700',
    marginVertical: 5,
  },
  welcomeText: {
    marginHorizontal: 10,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    margin: 5,
  },
  inputLabel: {
    color: 'black',
    fontWeight: '600',
    marginVertical: 10,
  },
  inputWrapper: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  inputField: {
    flex: 1,
    marginLeft: 10,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    margin: 7,
  },
  forgotPasswordText: {
    color: 'black',
    fontWeight: '600',
  },
  buttonContainer: {
    height: '50%',
    top: 30,
    alignItems: 'center',
    width: '100%',
  },
  divider: {
    borderWidth: 1,
    width: '70%',
    marginTop: 35,
    borderColor: '#94C7FF',
  },
  orText: {
    margin: 10,
    textAlign: 'center',
    bottom: 32,
    backgroundColor: 'white',
    padding: 10,
  },
  socialLoginContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 7,
  },
  lowerImage: {
    height: '50%',
    width: '60%',
    resizeMode: 'contain',
    right: '34%',
    bottom: '7%',
    transform: [{rotate: '180deg'}],
  },
  footerTextContainer: {
    position: 'absolute',
    top: '47%',
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
  },
  signUpText: {
    fontWeight: '700',
    color: 'black',
    marginLeft: 10,
  },
  agreementText: {
    top: 15,
    textAlign: 'center',
  },
});
