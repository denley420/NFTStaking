async function deploy_XToken(){

  console.log("Deploying XToken...");
  console.log("------------------------------------------------------");
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const XToken = await ethers.getContractFactory("XToken");
  const contract = await XToken.deploy();
  await contract.deployed();

  console.log("[XToken] address:", contract.address);

  return contract.address;

}

async function deploy_XTokenRaffle(token_address){

  console.log("Deploying XTokenRaffle...");
  console.log("------------------------------------------------------");
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const XTokenRaffle = await ethers.getContractFactory("XTokenRaffle");
  const contract = await XTokenRaffle.deploy(token_address);
  await contract.deployed();

  console.log("[XTokenRaffle] address:", contract.address);

  return contract.address;

}

async function main() {
  console.log("\n");
  console.log("============================================================");
  console.log("Deploying contracts...");
  console.log();
  let xtoken_address = await deploy_XToken();
  console.log();
  await deploy_XTokenRaffle(xtoken_address);
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