async function deploy_NFTStaking(){

  console.log("Deploying NFTStaking...");
  console.log("------------------------------------------------------");
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const NFTStaking = await ethers.getContractFactory("NFTStaking");
  const contract = await NFTStaking.deploy();
  await contract.deployed();

  console.log("[NFTStaking] address:", contract.address);

  return contract.address;

}

async function deploy_NFTStaking(token_address){

  console.log("Deploying NFTStaking...");
  console.log("------------------------------------------------------");
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const NFTStaking = await ethers.getContractFactory("NFTStaking");
  const contract = await NFTStaking.deploy(token_address);
  await contract.deployed();

  console.log("[NFTStaking] address:", contract.address);

  return contract.address;

}

async function main() {
  console.log("\n");
  console.log("============================================================");
  console.log("Deploying contracts...");
  console.log();
  let NFTStaking_address = await deploy_NFTStaking();
  console.log();
  await deploy_NFTStaking(NFTStaking_address);
  console.log();
  console.log("============================================================");
  console.log("\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });