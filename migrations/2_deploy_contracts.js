const FlashLoan = artifacts.require("UnilendFlashLoan")


module.exports = async function(deployer) {
  deployer
  .then(async () => {
    // Deploy FlashLoan contract
    await deployer.deploy(FlashLoan)
    const FlashLoanContract = await FlashLoan.deployed()
    console.log("Unilend FlashLoan deployement done:", FlashLoanContract.address)
  })
}
