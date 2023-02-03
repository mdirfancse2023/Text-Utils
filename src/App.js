import logo from "./logo.svg";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Footer from "./components/Footer"
import "./App.css";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode,setMode] = useState('light');
  const [tmode,tsetMode] = useState('dark');
  const toggle = ()=>{
    if(mode==='light'){
      setMode('dark');
      tsetMode('light');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      tsetMode('dark');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} tmode={tmode} toggle={toggle}/>
      <TextForm mode={mode} tmode={tmode}/>
      <Footer mode={mode} tmode={tmode}/>
      {/* <About/> */}
    </>
  );
}
export default App;
