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
import {requestCompanySignup} from '../../redux/companySlice';
import {RootState} from '../../redux/store';
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

  const {theme} = useTheme();

  // Refrence functions
  const handleCompanyPress = () => {
    setCompanyChecked(true);
    setIndividualChecked(false);
  };
  const handleIndividualPress = () => {
    setCompanyChecked(false);
    setIndividualChecked(true);
  };
  const handleCompanySignup = () => {
    const {name, email, phoneNumber, category, password, location} =
      companyInputs;

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
            <Button
              title="Sign up"
              onPress={() => navigation.navigate('user-routes')}
            />
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
