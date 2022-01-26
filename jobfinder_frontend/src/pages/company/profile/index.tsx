import {Platform, View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ICompanyDetails} from '../../../@types/@company';
const CompanyProfile = () => {
  // react redux hoooks
  const companyDetails: ICompanyDetails = useSelector(
    (state: RootState) => state.company.companyDetails,
  );

  return (
    <View>
      <Card
        containerStyle={{marginHorizontal: Platform.OS === 'web' ? 400 : 10}}
        wrapperStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card.Title>Welcome, {companyDetails.name}</Card.Title>

        <Card.Divider />
        <Text>Email : {companyDetails.email}</Text>
        <Card.Divider />
        <Text>PhoneNumber : {companyDetails.phoneNumber}</Text>
        <Card.Divider />
        <Text>Description : {companyDetails.description}</Text>
        <Card.Divider />
        <Text>Location : {companyDetails.location}</Text>
        <Card.Divider />
        <Text>Category : {companyDetails.category}</Text>
      </Card>
    </View>
  );
};

export default CompanyProfile;
