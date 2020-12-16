import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  useLocation
} from "react-router-dom";
// components
import Landing from './pages/Landing';

// master styles
import './App.css';



const FormPages = () => {
  const location = useLocation();
  return (
    <>
   <Route exact path="/simianerADASolutions" component={Landing}/>     

   {/* <Route exact path="/Create" component={Create}/>            
   <Route exact path="/tracker-1" component={Login}/>  */}
    </>
  );
};



function App() {
  // const location = useLocation();

  return (
   
        <Router>
          <FormPages />
        </Router>
  );
}

export default App;