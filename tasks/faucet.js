// Transfer ETH. Useful to give your test address some ETH

task('faucet', 'Sends ETH to an address')
	.addPositionalParam('receiver', 'The address that will receive them')
	.setAction(async ({ receiver }) => {
		if (network.name === 'hardhat') {
			console.warn(
				'You are running the faucet task with Hardhat network, which' +
					'gets automatically created and destroyed every time. Use the Hardhat' +
					" option '--network localhost'"
			)
		}

		const [sender] = await ethers.getSigners()

		const tx = await sender.sendTransaction({
			to: receiver,
			value: ethers.constants.WeiPerEther, // 1 ETH
		})
		await tx.wait()

		console.log(`Transferred 1 ETH to ${receiver}`)
	})
