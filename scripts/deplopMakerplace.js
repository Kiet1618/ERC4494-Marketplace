async function deploy() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const contract = await ethers.deployContract("NftMarketplace");

    console.log("Contract address:", await contract.getAddress());
}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });