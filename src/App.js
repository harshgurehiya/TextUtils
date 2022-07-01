import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import {
//   BrowserRouter as Router,
//   //Switch,
//   Route,
//   //Link,
//   Routes
// } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
         {/* <Routes>
        
           <Route exact path="/about" element = {<About />}>
           </Route>
           <Route exact path="/" element = {}> */}
          <TextForm heading = "Enter the text to analyze below"/>
           {/* </Route>
         </Routes> */}
      </div>
     {/* </Router>     */}
    </>
  );
}

export default App;
