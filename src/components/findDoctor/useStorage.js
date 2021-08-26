import React,{useState} from 'react'

const useStorage = () => {
  const [myData,setMyData] = useState('');

  const myDataHandler = (data)=>{
     
       setMyData(
         data
       )
     
  }

  return {myDataHandler,myData}
}

export default useStorage
