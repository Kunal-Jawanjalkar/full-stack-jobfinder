import {View, ScrollView, FlatList, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, Text} from 'react-native-elements';
import useFetch from '../../../hooks/useFetch';
import {baseUrl} from '../../../helpers/companyRequest';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ICompanyDetails} from '../../../@types/company';
import {requestJobOpenings} from '../../../redux/companySlice';

const CompanyDashboard = () => {
  const [currentJobOpenings, setCurrentJobOpenings] = useState([]);
  // react redux hoooks
  const jobOpenings = useSelector(
    (state: RootState) => state.company.currentJobOpenings,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestJobOpenings());
    setCurrentJobOpenings(jobOpenings);
  }, [jobOpenings]);

  return (
    <ScrollView style={{marginHorizontal: Platform.OS === 'web' ? 50 : 10}}>
      <Text h4 style={{textAlign: 'center', marginVertical: 10}}>
        Current Job Openings
      </Text>
      {currentJobOpenings.map((job, index) => {
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
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default CompanyDashboard;
