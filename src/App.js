import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import React,{useState} from 'react';
//import {Routes,Route} from 'react-router-dom'

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#29687c';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light mode';
    }
  }
  return (
    <>
   
{/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
   <Alert alert={alert}/>
  <div className="container">
          <Routes>
            <Route path='/about' element={<About />}>
            </Route>
            <Route path='/' element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
  </div>*/}
       
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
{/*<Navbar/>*/}
<Alert alert={alert}/>

<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
{/*<About/>*/}
</div>
    </>
  );
}

export default App;
