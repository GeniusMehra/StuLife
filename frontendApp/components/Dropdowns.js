import { View, Text } from 'react-native'
import React,{useEffect, useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';

const Dropdowns = () => {

const [isOpen,setIsOpen]=useState(false);
const [isOpen1,setIsOpen1]=useState(false);
const [currentValue,setCurrentValue]=useState('open');
const [currentValue1,setCurrentValue1]=useState('open');

const colleges=[{label:"open",value:"open"},
        {label:"DSC", value:"DSC"},
        {label:"LSR", value:"LSR"},
        {label:"KMC", value:"KMC"},
        {label:"SRCC", value:"SRCC"},
]

const departments=[{label:"open",value:"open"},
        {label:"Commerce", value:"Commerce"},
        {label:"Maths", value:"Maths"},
        ]


const dispatch =useDispatch()

const {c,college,department}=useSelector(state=>state.custom)

const changeDepartment=(dept)=>{
  dispatch({
    type:"changeDepartment",
    payload:dept
  })
}

const changeCollege=(college)=>{
   dispatch({
      type:"changeCollege",
      payload:college
    })
} 

useEffect(()=>{
changeCollege(currentValue)
},[currentValue]);

useEffect(()=>{
  changeDepartment(currentValue1)
},[currentValue1])

  return (
      <View style={{flexDirection:'row', zIndex:2}}>
        <View style={{flex:2, flexDirection:'column',}}>
    <Text>College</Text>
      <DropDownPicker items={colleges}
      open={isOpen}
      setOpen={()=>setIsOpen(!isOpen)}
      value={currentValue}
      setValue={(val)=>setCurrentValue(val)}
      />
    
      </View>
<View style={{flex:2, flexDirection:'column',}}>
<Text>Department {c}</Text>
<DropDownPicker items={departments}
      open={isOpen1}
      setOpen={()=>setIsOpen1(!isOpen1)}
      value={currentValue1}
      setValue={(val)=>setCurrentValue1(val)}
      />
      </View>
      </View>
  )
}

export default Dropdowns