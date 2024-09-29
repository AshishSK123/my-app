import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textinput from "./components/Textinput";

function App() {

  const [mode, setMode] = useState('light');

  // toggle mode to change the background and Text color on click 
  function toggleMode() {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
      showAlert("Dark mode enabled")
    } else {
      document.body.style.backgroundColor = 'white'
      setMode('light');
      showAlert("Light mode enabled")
    }
  }

  const [msg, setMsg] = useState(null);

  function showAlert(message) {
    setMsg(message)
    setTimeout(() => {
      setMsg(null);
    }, 1500)
  }



  return (
    <>
      <Router>
        <Navbar title={"Text Manipulation"} mode={mode} toggleMode={toggleMode} />
        <Alert msg={msg} />
        <div className="container">
          <Routes>
            <Route exact path="/my-app/home" element={<Textinput input={"Enter Text  Here!"} mode={mode} alert={showAlert} />} />
            <Route path="/About/a" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
