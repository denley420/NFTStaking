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

const INFURA_API_KEY = "50352ec4dbf64f5196c3f4d60d20710b";
const RINKEBY_ACCOUNT_PK =
  "b2bc4b09d0628de841aa548f8aa3d67ecdccd03406fa1192f18b7bbb304029b4";
const RINKEBY_ACCOUNT_A2 =
  "591480bff6c34168105ce09f4ae26f5ec69f3673b93bc56e7b7fbea3dba04c79";
const RINKEBY_ACCOUNT_A3 =
  "73899643734bd5cb8cdbddce2b0d1e17163e7b69d76c1e93386ddbc7315dc4be";

module.exports = {
  solidity: "0.8.9",
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
