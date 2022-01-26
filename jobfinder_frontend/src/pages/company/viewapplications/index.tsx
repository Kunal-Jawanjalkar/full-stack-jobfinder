import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {apiRequest, baseUrl} from '../../../helpers/requests';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Text, ListItem} from 'react-native-elements';
const ViewApplications = (props: any) => {
  const {route} = props;
  const {jobId, jobTitle} = route.params;

  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    getJobApplications();
  }, []);

  // function to get all job details
  const getJobApplications = async () => {
    const response = await apiRequest({
      url: `${baseUrl}/job/${jobId}`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    });
    console.log('job appolisd', response);
    setJobApplications(response.data.applications);
  };
  return (
    <View>
      <Text h3 style={{textAlign: 'center', margin: 5}}>
        {jobTitle}
      </Text>
      {jobApplications &&
        jobApplications.map((applicant, index) => {
          return (
            <ListItem
              style={{marginHorizontal: 50, marginVertical: 5}}
              key={index}
              bottomDivider
              hasTVPreferredFocus={undefined}
              tvParallaxProperties={undefined}>
              <ListItem.Content style={{flexDirection: 'column'}}>
                <View>
                  <ListItem.Title>
                    Name : {applicant.firstName + ' ' + applicant.lastName}
                    <Text> experience : {applicant.experience} yrs</Text>
                    <Text> qualification : {applicant.qualification} yrs</Text>
                    <Text> description : {applicant.description}</Text>
                  </ListItem.Title>
                </View>
                <View>
                  <Text> email : {applicant.email}</Text>
                  <Text> Phone Number : {applicant.phoneNumber}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          );
        })}
    </View>
  );
};

export default ViewApplications;
