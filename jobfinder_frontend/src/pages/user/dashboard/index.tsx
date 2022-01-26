import {View, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {apiRequest, baseUrl} from '../../../helpers/requests';
import moment from 'moment';

const UserDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const userId: any = useSelector(
    (state: RootState) => state.user.userDetails._id,
  );

  useEffect(() => {
    getAppliedJobs();
  }, []);

  // use selector
  const getAppliedJobs = async () => {
    const response = await apiRequest({
      url: `${baseUrl}/user/${userId}`,
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    });
    console.log(response);
    setAppliedJobs(response.data.appliedJobs);
  };

  return (
    <ScrollView>
      <Text h4 style={{textAlign: 'center', marginVertical: 10}}>
        Applied Jobs
      </Text>
      {appliedJobs.map((job, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <ListItem.Content>
              <ListItem.Title>
                {job.title}({job.companyName})
              </ListItem.Title>
              <ListItem.Subtitle>Salary : {job.salary} </ListItem.Subtitle>
              <ListItem.Subtitle>
                description : {job.description}{' '}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                applied on : {moment(job.updatedAt).format('DD/MM/YYYY')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserDashboard;
