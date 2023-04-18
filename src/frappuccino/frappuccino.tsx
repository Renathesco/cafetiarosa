import * as React from "react";
import expressoDuplo from '../img/expresso/expressoDuplo.png';
import Box from '@mui/material/Box';
import background from '../img/background.jpg';
  
export default function Frappuccino() {
const testeee = `<img style={{ width: 300, height: 300 }} src={${expressoDuplo}}/>`

return (
  <div style={{     width: 350, border: 3, borderStyle: 'inset',  padding: 20, margin: 20, paddingBottom: 20, borderBottom: 'aliceblue', borderRadius: 10  }}>
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: 300, height: 300 }} src={expressoDuplo}/>
      <div>
        <p style={{ color: 'white' }}>Expresso duplo</p>
        <p style={{ color: 'white' }}>R$: 20,99 </p>
      </div>
    </div>
  </div>
  );
}