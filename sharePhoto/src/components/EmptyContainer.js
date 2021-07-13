/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {Container, Spinner} from 'native-base';
const EmptyContainer = () => {
  return (
    <Container
    style={styles.emptyContaiener}
    >
      <Spinner />
    </Container>
  );
};

export default EmptyContainer;

const styles = StyleSheet.create({
    emptyContaiener:{
        flex:1,
        backgroundColor:'#1b262c',
        justifyContent:'center',
        alignItems:'center',
    },
}
    );
