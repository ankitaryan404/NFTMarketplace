require("@nomiclabs/hardhat-waffle");

require("dotenv").config()
// const API_URL = process.env.API_URL
// const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
 
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   //chainId:80001,
    //   //url: API_URL,
    //   url: "https://rpc-mumbai.maticvigil.com/",
    //   accounts: [PRIVATE_KEY],
    // },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.4", 
};
