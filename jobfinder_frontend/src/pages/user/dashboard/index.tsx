import {View, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ListItem, Text} from 'react-native-elements';

const UserDashboard = () => {
  const [jobOpenings, setJobOpenings] = useState([
    {role: 'React native developer', Company: 'Infosys'},
    {role: 'React  developer', Company: 'TCS'},
    {role: 'Nodejs developer', Company: 'Homzhub'},
    {role: 'Django developer', Company: 'Anzilsoft'},
    {role: 'Python developer', Company: 'Google'},
  ]);
  return (
    <ScrollView>
      <Text h4 style={{textAlign: 'center', marginVertical: 10}}>
        Applied Jobs
      </Text>
      {jobOpenings.map((job, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <ListItem.Content>
              <ListItem.Title>{job.Company}</ListItem.Title>
              <ListItem.Subtitle>Role : {job.role} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserDashboard;
