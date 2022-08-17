import { useState } from 'react';
import Header from './componets/header';
import Hero from './componets/hero';
import './App.scss';

function App() {
  const [connected, setConnected] = useState('');

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };


  return (
    <>
    <Header connected={connected} detectCurrentProvider={detectCurrentProvider}/>
    <Hero connected={connected}/>

    </>
  );
}

export default App;
