import React from 'react';
import StyledApp from "./styled/StyledApp";
import { Route } from 'react-router-dom';
import Home from './pages/Home';


const App = ()=> {
  
  return ( 
   <StyledApp className = "App">
       <Route path = '/' component = {Home}/> 
   </StyledApp>  
  );
}

export default App;