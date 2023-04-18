import * as React from "react";
import mochaDuplo from '../img/mocha/mochaDuplo.jpeg'
import Box from '@mui/material/Box';
import background from '../img/background.jpg';
  
export default function Mocha() {
const testeee = `<img style={{ width: 300, height: 300 }} src={${mochaDuplo}}/>`

return (
  <div style={{     width: 350, border: 3, borderStyle: 'inset',  padding: 20, margin: 20, paddingBottom: 20, borderBottom: 'aliceblue', borderRadius: 10  }}>
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: 300, height: 300 }} src={mochaDuplo}/>
      <div>
        <p style={{ color: 'white' }}>Expresso duplo</p>
        <p style={{ color: 'white' }}>R$: 20,99 </p>
      </div>
    </div>
  </div>
  );
}