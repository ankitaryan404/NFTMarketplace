import { ethers } from "ethers";
import Web3Modal  from "web3modal";
import { useEffect } from "react";

export default function test() {
  let signer;
  let add;
  // useEffect(async ()=>{
  //     if(typeof window!='undefined' && typeof window.ethereum !=='undefined'){
  //         const provider = new ethers.providers.Web3Provider(window.ethereum)
  //         const [_, buyerAddress] = await ethers.getSigners()
  //         console.log(buyerAddress);
  //         }
  // },[signer])

  useEffect(async () => {

    if (typeof window != undefined) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
        signer = provider.getSigner();
      add =await signer.getAddress();
      console.log(add);
    }
  }, [add]);

  return <h2>Test</h2>;
}
