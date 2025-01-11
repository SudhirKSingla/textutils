import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark Mode enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode enabled', 'success')
    }

  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" */}
              {/* element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
