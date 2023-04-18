import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Expresso from './expresso/expresso';
import Mocha from './mocha/mocha';
import Frappuccino from './frappuccino/frappuccino';
import RenderCoffe from './renderCoffe';

function App() {
  const [menu, setMenu] = React.useState('Expresso');

  function testeMenu(item: any) {
    console.log('CHEGOU ITEMMM APP.tsx', item);
    setMenu(item);
  }

  switch (menu) {
    case 'Expresso':
      console.log('Caiu switch expresso');
      return (
        <>
        <Header setMenu={testeMenu} />
        <RenderCoffe type={'expresso'} />
        </>
      )
    case "Frappuccino's":
      return (
        <>
        <Header setMenu={testeMenu} />
        <RenderCoffe type={'frappuccino'} />
        </>
      )
    case 'Mocha':
      return (
        <>
          <Header setMenu={testeMenu} />
          <RenderCoffe type={'mocha'} />
        </>
      )
    default:
      return (
        <>
        <Header setMenu={testeMenu} />
        <RenderCoffe type={'expresso'} />
        </>
      )
  }

  return (
    <>
    <Header setMenu={testeMenu} />
    </>
  );
}

export default App;
