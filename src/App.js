import React, { useState, useEffect } from 'react'
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { data } from './dummydata';

const App=()=> {
  const [renderView, setRenderView] = useState(false)
  const [hackArr, setHackArr] = useState(data)

  console.log("hackarr", hackArr);

  // useEffect(() => {
  //   const arr = localStorage.getItem('hacks')
  //   setHackArr(arr);
  // }, [renderView])

  const setView=()=>{
    console.log("added new");
    setRenderView(true)
  }

  return (
    <>
    <Header setView={setView}/>
    <Container data={hackArr}/>
    </>
  );
}

export default App;
