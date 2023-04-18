import * as React from "react";
import { metadataCafe } from "./metadata.js";

  
export default function RenderCoffe(props: { type: string; }) {
const ttt = metadataCafe(props.type);

function returnOTrem() {
  return (
    ttt.map((coffe: {
      preco: string | undefined;
      image: string | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
}) => {
      return (
        <div style={{     width: 350, border: 3, borderStyle: 'inset',  padding: 20, margin: 20, paddingBottom: 20, borderBottom: 'aliceblue', borderRadius: 10  }}>
        <div style={{ textAlign: 'center' }}>
          <img style={{ width: 300, height: 300 }} src={coffe.image}/>
          <div>
            <p style={{ color: 'white' }}>{coffe.description}</p>
            <p style={{ color: 'white' }}>R$: {coffe.preco} </p>
          </div>
        </div>
      </div>
      )
    })

  )
}

return (
  <div style={{ display: 'flex' }}>
    {returnOTrem()}
  </div>
  );
}