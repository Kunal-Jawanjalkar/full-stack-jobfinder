import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchBar, Input, Icon, ListItem} from 'react-native-elements';
import {apiRequest} from '../../../helpers/requests';
import {baseUrl} from '../../../helpers/requests';
import {Button, Divider} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const SearchJob = () => {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [success, setSuccess] = useState('');

  const userId: any = useSelector(
    (state: RootState) => state.user.userDetails._id,
  );

  useEffect(() => {
    searchJobs();
  }, [search]);

  // function that handles searching of jobs

  const searchJobs = async () => {
    const response = await apiRequest({
      url: `${baseUrl}/searchJobs?jobQuery=${search}`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    });
    setJobs(response.data);
  };

  // function that handles apply for job
  const handleApply = async jobId => {
    const response = await apiRequest({
      url: `${baseUrl}/job/${jobId}`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: {
        userDetails: userId,
        userId: userId,
      },
    });
    console.log(response);
  };

  return (
    <View>
      <Input
        placeholder="Search jobs by categories or company "
        leftIcon={{type: 'font-awesome', name: 'search'}}
        autoCompleteType={undefined}
        value={search}
        onChangeText={search => setSearch(search)}
      />

      {jobs.map((job, index) => {
        return (
          <ListItem
            style={{
              marginHorizontal: 30,
              paddingHorizontal: 30,
              paddingVertical: 5,
            }}
            key={index}
            bottomDivider
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            {/* render list of jobs */}
            <ListItem.Content
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 5}}>
                <ListItem.Title>
                  {job.title}({job.companyName})
                </ListItem.Title>
                <ListItem.Subtitle>
                  Job Description : {job.description}
                </ListItem.Subtitle>
                <ListItem.Subtitle>Salary : {job.salary}</ListItem.Subtitle>
                <ListItem.Subtitle>category : {job.category}</ListItem.Subtitle>
              </View>
              <View style={{flex: 5, flexDirection: 'column'}}>
                <Text>Contact Details</Text>
                <Text>
                  email : {job.companyDetails && job.companyDetails.email}
                </Text>
                <Text>
                  phoneNumber :{' '}
                  {job.companyDetails && job.companyDetails.phoneNumber}
                </Text>
              </View>

              <Button
                title="Apply"
                style={{flex: 2}}
                onPress={() => handleApply(job._id)}
              />
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

export default SearchJob;
