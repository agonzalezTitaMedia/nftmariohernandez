import { useState } from 'react';
import Web3 from 'web3';
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

  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  =await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
      }
    } catch(err) {
      console.log(err);
    }
  }




  return (
    <>
    <Header connected={connected} onConnect={onConnect}/>
    <Hero connected={connected}/>

    </>
  );
}

export default App;
