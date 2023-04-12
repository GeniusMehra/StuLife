import { View, Text, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import PlaceCard from '../components/PlaceCard'
import axios from 'axios'
import Dropdowns from '../components/Dropdowns'
import { useSelector } from 'react-redux'

const Home = () => {
const data1=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},]
const [datas,setDatas]=useState()
const [init,setInit]=useState(true)
const [place,setPlace]=useState(true)

const fetchData=async()=>{
  try{
    if(init){
      const {data}= await axios.get("http://localhost:5000/api/v1/placements/all")
      setInit(!init)
      setDatas(data.placements)
      console.log(data.placements)
      
    }
    else{
      console.log('second running')
      const  {data}=await axios.get(`http://localhost:5000/api/v1/placements/gbcad?college=${college}&department=${department}`)
            if(data.placements.length==0){
              setPlace(false)
              return
            }
            setPlace(true)
            setDatas(data.placements)
      
       }
  }catch(e){
    console.log(e)
  }
}

const {college,department}=useSelector(state=>state.custom)

useEffect(()=>{
fetchData()
},[college,department])



const endReach=()=>{
// setData([...data,data1])
}

  return (
    <View style={{ width:"100%", backgroundColor:'#ffea00',height:'100%', zIndex:1}}>
      {/* <PlaceCard style={{flex:2}} /> */}
      <Dropdowns/>
      {(!place)? <Text>NO Placements As Of Now</Text>:<FlatList
      data={datas}
      renderItem={({item})=><PlaceCard item={item} />}
      keyExtractor={item=>item._id}
      // inverted={true}
      /> }
    </View>
  )
}

export default Home