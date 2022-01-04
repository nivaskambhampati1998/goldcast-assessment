
import React from 'react';
import './App.css';
import Customers from "./components/Customers";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">GoldCast Assessment</a>
        </nav>
       <Customers/>

        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
