
import { useState } from 'react';
import './App.css';

function App() {
  const [Horizontal, setHorizontal] = useState(10);
  const [Vertical, setVertical] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState(10);
  


  return (
    
    <div className="App">
      
      <div className="input">
        <div className="header">
          <h1>BOX-SHADOW-GENERATOR</h1>
        </div>
        <label className="labelss">Horizontal box shadow</label>
        <input type="range" value={Horizontal} onChange={(e) => { setHorizontal(e.target.value) } } className="inputt" min="-200" max="200" />
      
        <label className="labelss">Vertical box shadow</label>
        <input type="range" value={Vertical} onChange={(e) => { setVertical(e.target.value) }} className="inputt" min="-200" max="200" />
        
        <label className="labelss">Blur amount</label>
        <input type="range" value={Blur} onChange={(e) => { setBlur(e.target.value) }} className="inputt" min="-200" max="200" />
        
        <label className="labelss">color:</label>
        <input type="color" default={{color:"red"}} value={Color} onChange={(e) => { setColor(e.target.value) } } className="inputt" min="-200" max="200" />
      
      
      </div>
      <div className="output" style={{boxShadow:`${Horizontal}px ${Vertical}px ${Blur}px ${Color} `}}>
        <div className="text" >{`box-shadow:${Horizontal}px ${Vertical}px ${Blur}px ${Color} `}</div>  
        
      </div>
    </div>
  );
}

export default App;
