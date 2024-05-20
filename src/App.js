import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, {useState} from 'react'; 
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
    setAlert(null);   
    }, 1000);
  }
const togglemode =()=> {
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#134ccd4d';
    showAlert("dark mode enable", "success");
    document.title='textutils dark mode';
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode enable", "success");
    document.title='textutils light mode';
  }
}

  return (
    <> 
{/* <Navbar title="texttules" aboutText="About Text" /> */}
{/* <Navbar /> */}
{/* <Router> */}
<Navbar title="textutils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className = "container my-3">
{/* <Routes>
        <Route path="/about" element={ <About/>}>
          </Route>
          <Route path="/" element={ <TextForm heading= 'Enter the Text' mode={mode} showAlert={showAlert}/>}>  
          </Route>
    </Routes>  */}
    <TextForm heading= 'Enter the Text' mode={mode} showAlert={showAlert}/>
</div>
{/* </Router> */}
</> 
  );
}

export default App;
