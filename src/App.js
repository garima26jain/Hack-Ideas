import React, { useState } from 'react'
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { data }  from './dummydata';

const App=()=> {
  const [hackArr, setHackArr] = useState(data)

  const setView = (sortField) =>{
    console.log("update the main comp");

    if(sortField){
      if(sortField === "creationdate"){
        const myData1=[].concat(hackArr).sort((a,b) => new Date(a[sortField]) - new Date(b[sortField]));
        setHackArr(myData1)
      }
      else{
        const myData = [].concat(hackArr).sort((a, b) =>{ 
            return a[sortField] - b[sortField] })
          setHackArr(myData)
      }
    }
    else{
      setHackArr(JSON.parse(localStorage.getItem('hacks')))
    }
  }
  
  return (
    <>
    <Header setView={setView}/>
    <Container data={hackArr}/>
    </>
  );
}

export default App;
