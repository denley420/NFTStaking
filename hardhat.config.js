require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_API_KEY = "6b060aee93c34c06980fa8e3b612c755";
const RINKEBY_ACCOUNT_PK =
  "0f48011361e5e719fd5dbde7763195b36e82526fb9bf62705344952fa25b3571";
const RINKEBY_ACCOUNT_A2 =
  "e2762c4547761e7a09c8c82e485355ef86ab286e68ea5a08362bebd0862a7f6d";
const RINKEBY_ACCOUNT_A3 =
  "22329897a437e76ad7df5112dbc4cb4ccd85255eae09f67753663f60b0ac1907";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_ACCOUNT_PK, RINKEBY_ACCOUNT_A2, RINKEBY_ACCOUNT_A3],
      timeout: 60000,
    },
    localhost: {
      url: "http://localhost:8545",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
      ],
      timeout: 60000,
      chainId: 1337
    },
    hardhat: {
      chainId: 1337,
    },
    matic_test: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [RINKEBY_ACCOUNT_PK, RINKEBY_ACCOUNT_A2]
    }
  },
  etherscan: {
    apiKey: "SD21SHHKZDP8442R1D5UWYV2AW6IAN814M",
  },
};
