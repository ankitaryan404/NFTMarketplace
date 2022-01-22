
const fs = require('fs');

async function main() {
  const NFTKart = await ethers.getContractFactory("NFTKart");
  const nftKart = await NFTKart.deploy();

   console.log("nftKart deployed to:", nftKart.address);

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftKart.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  let config = `
  export const nftkartaddress = "${nftKart.address}"
  export const nftaddress = "${nft.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });