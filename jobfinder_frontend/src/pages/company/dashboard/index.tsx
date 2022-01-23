import {View, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ListItem, Text} from 'react-native-elements';

const CompanyDashboard = () => {
  const [jobOpenings, setJobOpenings] = useState([
    {title: 'React native developer', applications: 10},
    {title: 'React  developer', applications: 12},
    {title: 'Nodejs developer', applications: 14},
    {title: 'Django developer', applications: 10},
    {title: 'Python developer', applications: 17},
  ]);
  return (
    <ScrollView>
      <Text h4 style={{textAlign: 'center', marginVertical: 10}}>
        Current Job Openings
      </Text>
      {jobOpenings.map((job, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <ListItem.Content>
              <ListItem.Title>{job.title}</ListItem.Title>
              <ListItem.Subtitle>
                {job.applications} Applications
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default CompanyDashboard;
