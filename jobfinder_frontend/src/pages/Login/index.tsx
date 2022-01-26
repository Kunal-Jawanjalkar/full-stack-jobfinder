import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  ThemeProvider,
  Button,
  Input,
  getIconType,
  Icon,
  Text,
  useTheme,
  Divider,
  CheckBox,
} from 'react-native-elements';
import loginStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {requestCompanyLogin} from '../../redux/companySlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserLogin} from '../../redux/userSlice';

const Login: React.FC = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyChecked, setCompanyChecked] = useState(false);
  const [individualChecked, setIndividualChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {theme} = useTheme();

  // react redux hooks
  const dispatch = useDispatch();
  const companyState = useSelector((state: RootState) => state.company);
  const userState = useSelector((state: RootState) => state.user);

  // navigate to company dashboard if company login is successfull
  useEffect(() => {
    if (companyState.isLoginSuccess) {
      navigation.navigate('company-routes');
    } else if (companyState.isLoginError) {
      setErrorMessage('Error occured while logging in ');
      const timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2800);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [companyState.isLoginSuccess]);

  // navigate to company dashboard if company login is successfull
  useEffect(() => {
    if (userState.isUserLoginSuccess) {
      navigation.navigate('user-routes');
    } else if (userState.isUserLoginError) {
      setErrorMessage('Error occured while logging in ');
      const timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2800);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [userState.isUserLoginSuccess]);

  // Refrence functions
  const handleCompanyPress = () => {
    setCompanyChecked(true);
    setIndividualChecked(false);
  };
  const handleIndividualPress = () => {
    setCompanyChecked(false);
    setIndividualChecked(true);
  };
  const handleLogin = () => {
    if (!companyChecked && !individualChecked) {
      setErrorMessage('Select Login type');
      setTimeout(() => {
        setErrorMessage('');
      }, 2800);
      return;
    }
    if (companyChecked) {
      if (email && password) {
        dispatch(requestCompanyLogin({email, password}));
      } else {
        setErrorMessage('email and password is required');
        setTimeout(() => {
          setErrorMessage('');
        }, 2800);
      }
    } else if (individualChecked) {
      if (email && password) {
        dispatch(requestUserLogin({email, password}));
      } else {
        setErrorMessage('email and password is required');
        setTimeout(() => {
          setErrorMessage('');
        }, 2800);
      }
    }
  };
  // store token in async storage
  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.heading} h3>
        Welcome to JobFinder
      </Text>
      <Text style={loginStyles.heading} h4>
        Login to continue
      </Text>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          title="Company"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={companyChecked}
          onPress={handleCompanyPress}
        />
        <CheckBox
          title="Individual"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={individualChecked}
          onPress={handleIndividualPress}
        />
      </View>
      <Text style={{color: 'red'}}>{errorMessage && errorMessage}</Text>
      <Input
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder="email@something.com"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        autoCompleteType={undefined}
      />
      <Input
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder="password"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        autoCompleteType={undefined}
        secureTextEntry
      />
      <Divider orientation="horizontal" width={8} />
      <Button title="Login in" onPress={handleLogin} />
      <Divider orientation="horizontal" width={8} />
      <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;
