import {View, ScrollView, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input, Button, Divider, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {requestCreateJob} from '../../../redux/companySlice';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // react redux hooks
  const dispatch = useDispatch();
  const companyState = useSelector((state: RootState) => state.company);

  // show success message on creation
  useEffect(() => {
    if (companyState.isCreateJobSuccess) {
      setSuccessMessage('Job Created successfully');
      setTitle('');
      setCategory('');
      setDescription('');
      setSalary('');
    }
    const timeout = setTimeout(() => {
      setSuccessMessage('');
    }, 2800);

    return () => {
      clearTimeout(timeout);
    };
  }, [companyState.isCreateJobSuccess]);

  // Reference functions
  const handleCreate = () => {
    if (title && category && description && salary) {
      dispatch(
        requestCreateJob({
          title,
          category,
          salary: Number(salary),
          description,
        }),
      );
    } else {
      setErrorMessage('All fields are required');
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: Platform.OS === 'web' ? 500 : 20,
        paddingVertical: 30,
      }}>
      <Text h4 style={{textAlign: 'center'}}>
        Create A Job
      </Text>
      <Input
        onChangeText={title => setTitle(title)}
        value={title}
        placeholder="Enter job title"
        autoCompleteType={undefined}
      />
      <Input
        placeholder="Enter Job category"
        onChangeText={category => setCategory(category)}
        value={category}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="Enter job description"
        value={description}
        onChangeText={description => setDescription(description)}
        autoCompleteType={undefined}
      />
      <Input
        value={salary}
        onChangeText={salary => setSalary(salary)}
        placeholder="Enter Salary"
        autoCompleteType={undefined}
        keyboardType="number-pad"
      />
      <Divider orientation="horizontal" width={8} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateJob;
