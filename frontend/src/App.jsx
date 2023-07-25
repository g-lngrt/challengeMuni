import { useState } from 'react'
import fondologo from '/sn-insignia.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <div id="container">
                <div id="left">
                    <h2>¡Bienvenidos a Integra<span class="color-kids">Kids!</span></h2>
                    <button id="login-button">Login</button>
                </div>
                <div id="right">
                    <img src="/sn-insignia.png" alt="Imagen"/>
                </div>
            </div>
    </div>
  )
}

export default App
