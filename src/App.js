import { useState,  useEffect } from 'react';
import Web3 from 'web3';
import Header from './componets/header';
import Hero from './componets/hero';
import './App.scss';

function App() {
  const [connected, setConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

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
        setEthBalance(web3.utils.fromWei(ethBalance));
        //const account = userAccount[0];
        setConnected(true)
      }
    } catch(err) {
      console.log(err);
    }
  }

  const disConnect = ()=>{
    setConnected(false)
  }

  
  useEffect(() => {
    onConnect();
  }, [])


  return (
    <>
    <Header connected={connected} onConnect={onConnect} disConnect={disConnect}/>
    <Hero connected={connected} ethBalance={ethBalance}/>
    </>
  );
}

export default App;
