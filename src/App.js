import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
import Alert from './Components/Alert';

function App() {

  const[mode,setMode] = useState("light")
  const[msg,setmsg] = useState("")
  const[alert,setalert] = useState("");

  setTimeout(() => {
    setalert("")
    setmsg("")
  }, 4000);

  const tglMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      // setalert("success")
      // setmsg("Enable Dark Mode SuccessFully.")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // setalert("success")
      // setmsg("Enable Light Mode SuccessFully.")
    }
  }

  // const router = createBrowserRouter([
   
  //   {
  //     path: "/",
  //     element: <><Navbar mode={mode} tglMode={tglMode}/>
  //     <Alert msg={msg} alert={alert}/>
  //     <TextForm heading="Enter the text to analyze below" mode={mode} alert={setalert} msg={setmsg}/>
  //     </>,
  //   },  
  //   {
  //     path: "/about",
  //     element: <><Navbar mode={mode} tglMode={tglMode}/>
  //     <About mode={mode}/></>
  //   },
  // ]);

  return (
   <>
     <Navbar mode={mode} tglMode={tglMode}/>
    <Alert msg={msg} alert={alert}/>
    <TextForm heading="Enter the text to analyze below" mode={mode} alert={setalert} msg={setmsg}/>
    {/* <About/>  
    <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
