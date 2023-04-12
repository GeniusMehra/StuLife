import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Details from '../screens/Details'
import { useDispatch, useSelector } from 'react-redux'


const PlaceCard = ({item}) => {
    const [read,setRead]=useState(false)
    const hello="hello how are you?? I am fine here hope you are also doing good and awesome and Best of luck and please don't type shit like me as I'm doing at this moment because I'm not trying to copy and paste stuff because I feel I'm capable of doing it this way even if this is the worst way of doing this stuff."
    const navigation=useNavigation()
    const years=item.year
    const profiles=item.profiles;
    const compensation=item.compensation;
    const lastDate=item.lastDate
    const arr=Array("1. football","2. table Tennis","3. Football")
    // console.log(years)

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}  onPress={()=>{navigation.navigate("Details",
      {item:item});}}>
      <Text style={{fontSize:20}}>{item.title}</Text>
      {/* <View style={{flexDirection:"column"}}> */}
        <View style={{flexDirection:"row"}}>
          <View style={{flex:2}}>
        <Text>For Year </Text>
          </View>
          <Text>:</Text>
          <View style={{flex:3}}>

        <FlatList style={{flex:1}}
      data={years}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
        </View>
      </View>

        <View style={{flexDirection:'row'}}>
<View style={{flex:2}}>

        <Text >Profile  </Text>
</View>
    <Text>:</Text>
<View style={{flex:3}}>
      <FlatList
      data={profiles}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      {/* </View> */}
    </View>
      {/* <View>
        {(read)?<Text>{hello}</Text>:<View><Text>{hello.slice(0,15)}</Text>
        <TouchableOpacity onPress={()=>setRead(true)}>
            <Text style={{color:"red"}}>...Read More</Text>
            </TouchableOpacity></View>}
      </View> */}
      
      <View style={{flexDirection:'row'}}>
        <View style={{flex:2}}>

        <Text>
          Compensation
        </Text>
        </View>
<Text>:</Text>
        <View style={{flex:3,}}>
        <FlatList
      data={compensation}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:2}}>Last Date</Text>
        <Text>:</Text>
        <Text style={{flex:3}}>{lastDate}</Text>
      </View>


      </TouchableOpacity>
    </View>
  )
}

export default PlaceCard

const styles= StyleSheet.create({
  container:{flex:1,backgroundColor:"white", margin:6,
  borderRadius:30,
  padding:10,
  paddingRight:15
  }
})