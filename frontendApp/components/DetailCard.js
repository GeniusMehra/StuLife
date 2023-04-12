import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'

const DetailCard = ({item}) => {
  return (
    <View style={{marginTop:10, marginLeft:10, backgroundColor:'white',borderRadius:20, 
    padding:10, width:'90%', }}>

      <Text style={{fontSize:20}}>{item.title}</Text>
      {/* <View style={{flexDirection:"column"}}> */}
        <View style={{flexDirection:"row"}}>
          <View style={{flex:2}}>
        <Text style={{fontSize:15}}>For Year </Text>
          </View>
          <Text>:</Text>
          <View style={{flex:3}}>
        <FlatList style={{flex:1}}
      data={item.year}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
        </View>
      </View>
        <View style={{flexDirection:'row'}}>
<View style={{flex:2}}>
        <Text style={{fontSize:15}}>Profile  </Text>
</View>
    <Text>:</Text>
<View style={{flex:3}}>
      <FlatList
      data={item.profiles}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
    </View>      
      <View style={{flexDirection:'row'}}>
        <View style={{flex:2}}>
        <Text style={{fontSize:14}}>
          Compensation
        </Text>
        </View>
<Text>:</Text>
        <View style={{flex:3,}}>
        <FlatList
      data={item.compensation}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      </View>

     { (item.duration)?<View style={{flexDirection:'row'}}>
        <View style={{flex:2}}>
        <Text style={{fontSize:15}}>
          Duration
        </Text>
        </View>
<Text>:</Text>
        <View style={{flex:3,}}>
        <FlatList
      data={item.duration}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      </View>:<View></View>}

      { (item.incentives)?<View style={{flexDirection:'row'}}>
        <View style={{flex:2}}>
        <Text style={{fontSize:15}}>
          Incentives
        </Text>
        </View>
<Text>:</Text>
        <View style={{flex:3,}}>
        <FlatList
      data={item.incentives}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      </View>:<View></View>}

      { (item.incentives)?<View style={{flexDirection:'row'}}>
        <View style={{flex:2}}>
        <Text style={{fontSize:15}}>
          Selection Procedure
        </Text>
        </View>
<Text>:</Text>
        <View style={{flex:3,}}>
        <FlatList
      data={item.selectionProcedure}
      renderItem={({item})=><View><Text>{item.id}</Text></View>}
      keyExtractor={(item)=>item.id}/>
      </View>
      </View>:<View></View>}


      <View style={{flexDirection:'row'}}>
        <Text style={{flex:2}}>Last Date</Text>
        <Text>:</Text>
        <Text style={{flex:3}}>{item.lastDate}</Text>
      </View>
    
    </View>
  )
}
export default DetailCard