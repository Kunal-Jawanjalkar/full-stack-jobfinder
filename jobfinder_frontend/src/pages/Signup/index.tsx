import {ScrollView, View} from 'react-native';
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
import signupStyles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  requestCompanySignup,
  resetCompanyState,
} from '../../redux/companySlice';
import {RootState} from '../../redux/store';
import {requestUserSignup, resetUserState} from '../../redux/userSlice';
// signup prop types
type TSignupProps = {
  navigation: any;
};

const Signup: React.FC<TSignupProps> = props => {
  const {navigation} = props;
  const [companyChecked, setCompanyChecked] = useState(true);
  const [individualChecked, setIndividualChecked] = useState(false);

  // react-redux hooks
  const companyState = useSelector((state: RootState) => state.company);
  const userState = useSelector((state: RootState) => state.user);
  console.log('companyState', companyState);
  const dispatch = useDispatch();

  // company states
  const [companyInputs, setCompanyInputs] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    category: '',
    password: '',
    confirmPassword: '',
  });
  // user states
  const [userInputs, setUserInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    qualification: '',
    experience: '',
    password: '',
    confirmPassword: '',
  });
  // Error states
  const [error, setError] = useState('');
  // success states
  const [successMessage, setSuccessMessage] = useState('');

  const {theme} = useTheme();

  // show success messages on signup success and redirect to login
  // for user signup
  useEffect(() => {
    if (userState.isUserSignupSuccess) {
      setSuccessMessage('Signup successfull login to continue ');
      setUserInputs({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        qualification: '',
        experience: '',
        password: '',
        confirmPassword: '',
      });
      const timeout = setTimeout(() => {
        setSuccessMessage('');
        // navigation.navigate('Login');
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [userState.isUserSignupSuccess]);
  // for company signup
  useEffect(() => {
    if (companyState.isSignupSuccess) {
      setSuccessMessage('Signup successfull login to continue ');
      setCompanyInputs({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        category: '',
        password: '',
        confirmPassword: '',
      });
      const timeout = setTimeout(() => {
        setSuccessMessage('');
        // navigation.navigate('Login');
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [companyState.isSignupSuccess]);

  // Refrence functions
  const handleCompanyPress = () => {
    setCompanyChecked(true);
    setIndividualChecked(false);
  };
  const handleIndividualPress = () => {
    setCompanyChecked(false);
    setIndividualChecked(true);
  };
  // company signup function
  const handleCompanySignup = () => {
    const {
      name,
      email,
      phoneNumber,
      category,
      password,
      location,
      confirmPassword,
    } = companyInputs;
    // validate if all the fields are filled or not
    if (Object.values(companyInputs).some(val => val !== '')) {
      // check if both passwords match
      if (password === confirmPassword) {
        dispatch(
          requestCompanySignup({
            name,
            email,
            phoneNumber,
            category,
            password,
            location,
          }),
        );
      } else {
        setError('passwords dont match');
        setTimeout(() => {
          setError('');
        }, 2800);
      }
    } else {
      setError('all fields are required');
      setTimeout(() => {
        setError('');
      }, 2800);
    }
  };
  // user signup function verify all the input fields and then signup the user
  const handleUserSignup = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      qualification,
      experience,
      password,
      confirmPassword,
    } = userInputs;
    // check if all the inputs are filled
    if (Object.values(userInputs).some(val => val !== '')) {
      if (password === confirmPassword) {
        dispatch(
          requestUserSignup({
            firstName,
            lastName,
            email,
            phoneNumber,
            qualification,
            experience,
            password,
          }),
        );
      } else {
        setError('passwords dont match');
        setTimeout(() => {
          setError('');
        }, 2800);
      }
    } else {
      setError('All fields are required');
      setTimeout(() => {
        setError('');
      }, 2800);
    }
  };
  return (
    <ScrollView>
      <View style={signupStyles.container}>
        <Text style={signupStyles.heading} h3>
          Welcome to JobFinder
        </Text>
        <Text style={signupStyles.heading} h4>
          Signup to continue
        </Text>
        <Text style={signupStyles.heading}>Choose Signup type</Text>
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
        <Text style={{color: 'red'}}>{error}</Text>
        <Text style={{color: 'green'}}>{successMessage}</Text>
        {companyChecked && (
          <>
            <Input
              value={companyInputs.name}
              onChangeText={name => setCompanyInputs({...companyInputs, name})}
              placeholder="Enter company name"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={companyInputs.email}
              onChangeText={email =>
                setCompanyInputs({...companyInputs, email})
              }
              placeholder="Enter company email"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={companyInputs.phoneNumber}
              onChangeText={phoneNumber =>
                setCompanyInputs({...companyInputs, phoneNumber})
              }
              placeholder="Enter company Phone number"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={companyInputs.category}
              onChangeText={category =>
                setCompanyInputs({...companyInputs, category})
              }
              placeholder="Enter company category"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />

            <Input
              value={companyInputs.location}
              onChangeText={location =>
                setCompanyInputs({...companyInputs, location})
              }
              placeholder="Enter company location"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />

            <Input
              value={companyInputs.password}
              onChangeText={password =>
                setCompanyInputs({...companyInputs, password})
              }
              placeholder="Enter Password"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
              secureTextEntry
            />
            <Input
              value={companyInputs.confirmPassword}
              onChangeText={confirmPassword =>
                setCompanyInputs({...companyInputs, confirmPassword})
              }
              placeholder="Confirm password"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
              secureTextEntry
            />
            <Divider orientation="horizontal" width={8} />
            <Button title="Sign up" onPress={() => handleCompanySignup()} />
            <Divider orientation="horizontal" width={8} />
            <Button
              title="back to login"
              onPress={() => navigation.navigate('Login')}
            />
          </>
        )}

        {/* Individual signup code */}
        {individualChecked && (
          <>
            <Input
              value={userInputs.firstName}
              onChangeText={firstName =>
                setUserInputs({...userInputs, firstName})
              }
              placeholder="Enter First name"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={userInputs.lastName}
              onChangeText={lastName =>
                setUserInputs({...userInputs, lastName})
              }
              placeholder="Enter Last name"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={userInputs.email}
              onChangeText={email => setUserInputs({...userInputs, email})}
              placeholder="Enter email"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={userInputs.phoneNumber}
              onChangeText={phoneNumber =>
                setUserInputs({...userInputs, phoneNumber})
              }
              placeholder="Enter phonenumber"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={userInputs.qualification}
              onChangeText={qualification =>
                setUserInputs({...userInputs, qualification})
              }
              placeholder="Enter qualification"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />
            <Input
              value={userInputs.experience}
              onChangeText={experience =>
                setUserInputs({...userInputs, experience})
              }
              placeholder="Enter experience"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
            />

            <Input
              value={userInputs.password}
              onChangeText={password =>
                setUserInputs({...userInputs, password})
              }
              placeholder="Enter password"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
              secureTextEntry
            />

            <Input
              value={userInputs.confirmPassword}
              onChangeText={confirmPassword =>
                setUserInputs({...userInputs, confirmPassword})
              }
              placeholder="confirm password"
              leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
              autoCompleteType={undefined}
              secureTextEntry
            />

            <Divider orientation="horizontal" width={8} />
            <Button title="Sign up" onPress={() => handleUserSignup()} />
            <Divider orientation="horizontal" width={8} />
            <Button
              title="back to login"
              onPress={() => navigation.navigate('Login')}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Signup;
