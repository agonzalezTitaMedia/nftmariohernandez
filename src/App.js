import { useState,  useEffect } from 'react';
import axios from "axios";
import Web3 from 'web3';

import Header from './componets/header';
import Hero from './componets/hero';
import Zafiro from './componets/Zafiro';
import Indigo from './componets/Indigo';
import Cobalto from './componets/Cobalto';
import Definition from './componets/Definition';
import Evolution from  './componets/Evolution';
import Beneficios from './componets/Beneficios';
import Questions from './componets/Questions';
import Menu from './componets/Menu';

import './App.scss';
import Footer from './componets/Footer';

function App() {
  const [connected, setConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [address, setAddress] = useState("");
  const [listNft, setListNft] = useState([]);
 
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
        nftOwners(account);
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





 
 const nftOwners = (address) =>{

      const options = {
        method: 'GET',
        url: 'https://eth-rinkeby.g.alchemy.com/nft/v2/vbBcAkWkcLUdBfrN1GJmyAkWxc7_O9_c/getNFTs',
        params: {
          //owner: '0x7F9691fAa9D935b5B55e3ac4E3399161e7ab37F6',
          owner: address,
          'contractAddresses[]': '0x12f03749c6b06d6751e3c41a51c60d685ad40056',
          withMetadata: 'false'
        },
        headers: {Accept: 'application/json'}
      };
  

      axios
      .request(options)
      .then(function (response) {
        console.log(response.data.ownedNfts)
        var arrayNfts = response.data.ownedNfts;
        var listPass = [];
        arrayNfts.forEach(element =>{
          console.log();
          listPass.push(element.id.tokenId)
        } );
        console.log(listPass)
        setListNft(listPass);

      })
      .catch(function (error) {
        console.error(error);
      });
 }

  return (
    <>
    <Menu />
    <Header connected={connected} onConnect={onConnect} disConnect={disConnect}/>
    <Hero connected={connected} ethBalance={ethBalance} listNft={listNft} /> 
    <Zafiro/>
    <Indigo/>
    <Cobalto/>
    <Definition/>
    <Evolution/>
    <Beneficios/>
    <Questions/>
    <Footer/>
    </>
  );
}

export default App;
