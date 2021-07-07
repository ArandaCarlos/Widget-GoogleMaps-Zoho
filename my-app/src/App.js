import React from "react";
import './App.css';
import Check from "./Components/Check";
import ZohoProvider from './contexts/ZohoContext';


function App() {
  return (
    <ZohoProvider>
      <Check/>
    </ZohoProvider>
  );
}

export default App;

