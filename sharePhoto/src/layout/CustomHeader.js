/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {signout} from '../action/auth';
import {Body, Header, Right, Title, Button, Icon} from 'native-base';
const CustomHeader = (props) => {
  const  { authState, navigation} = props;
  return (
    <Header
    androidStatusBarColor="#0f4c75"
    style={{
        backgroundColor: '#0f4c75',
    }}
      >
      <Body>
        <Title>Photo Share</Title>
      </Body>
      <Right>
        {authState.isAuthenticated && (
          <>
            <Button
              transparent
              iconLeft
              onPress={() => navigation.navigate('Addpost')}>
              <Text
                style={{
                  color: '#fdcb9e',
                }}>
                Add post
              </Text>
            </Button>
            <Button transparent onPress={() => props.signout()}>
              <Icon name="log-out-outline" style={{color: 'red'}} />
            </Button>
          </>
        )}
      </Right>
    </Header>
  );
};

CustomHeader.propTypes = {
  signout: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
};

const mapStateToprops = state => ({
  authState: state.auth,
});

const mapDispatchToProps = {
  signout: signout,
};

export default connect(mapStateToprops, mapDispatchToProps)(CustomHeader);
