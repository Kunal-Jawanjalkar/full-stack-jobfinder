import {View, ScrollView, FlatList, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, Text} from 'react-native-elements';
import useFetch from '../../../hooks/useFetch';
import {baseUrl} from '../../../helpers/requests';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ICompanyDetails} from '../../../@types/@company';
import {requestJobOpenings} from '../../../redux/companySlice';

import {Button} from 'react-native-elements';

const CompanyDashboard = (props: any) => {
  // react redux hoooks
  const jobOpenings = useSelector(
    (state: RootState) => state.company.currentJobOpenings,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestJobOpenings());
  }, []);

  const handlePress = (jobId, jobTitle) => {
    props.navigation.navigate('view-applications', {jobId, jobTitle});
  };

  return (
    <ScrollView style={{marginHorizontal: Platform.OS === 'web' ? 50 : 10}}>
      <Text h4 style={{textAlign: 'center', marginVertical: 10}}>
        Current Job Openings
      </Text>
      {jobOpenings &&
        jobOpenings.map((job, index) => {
          return (
            <ListItem
              key={index}
              bottomDivider
              hasTVPreferredFocus={undefined}
              tvParallaxProperties={undefined}>
              <ListItem.Content style={{flexDirection: 'column'}}>
                <ListItem.Title>{job.title}</ListItem.Title>

                <Text> {job.applications.length} Applications</Text>
                <Text> description : {job.description}</Text>
              </ListItem.Content>
              <Button
                title={'View Applications'}
                onPress={() => handlePress(job._id, job.title)}></Button>
            </ListItem>
          );
        })}
    </ScrollView>
  );
};

export default CompanyDashboard;
