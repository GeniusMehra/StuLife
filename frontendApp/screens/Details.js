import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DetailCard from '../components/DetailCard';
import { Linking } from 'react-native';

const Details = ({route,navigation}) => {
    const {item}=route.params;
    // console.log(route.params.name)
    let url=item.applicationForm
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    });
  return (
    <View style={{backgroundColor:'#ffea00', height:'100%', width:'100%'}}>
      <DetailCard item={item}/>
      <Button title='Apply' onPress={()=>handlePress()} />
    </View>
  )
}

export default Details