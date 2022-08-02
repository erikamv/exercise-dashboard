import React from "react";
import logo from './logo.svg'

const App = () => {
  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
      <img src={logo} alt="Exercise logo"/>
      <h1 style={{
        color: '#6EC177',
        margin: 0
      }}>Dashboard Exercise</h1>
      <p>Frecuencia Cardiaca</p>
    </div>
  )
}

export default App
