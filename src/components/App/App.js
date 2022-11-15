import React, { useEffect } from 'react'
import './App.css';
import Home from '../Home'

function App({appWillUnmount,appMounted}) {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  }, [appMounted, appWillUnmount])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
