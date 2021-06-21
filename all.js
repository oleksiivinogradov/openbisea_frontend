const _erc721abi = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamAdded","type":"event","signature":"0x3f5f1db80208f0d453083a86e16909cecc1e95e2618d5d927c93ace22b8200fc"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamRemoved","type":"event","signature":"0x26b6063d78aefcf96f02ff06bc9822b5a623278253add7fffa5fb453db399810"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb463a75c"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[],"name":"getTeamAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x89e52771"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x24851914"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd9a431b3"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6a627842"}]');

const _openbiseaABI = JSON.parse('[{"inputs":[{"internalType":"address","name":"tokenForTokensale","type":"address"},{"internalType":"address","name":"superAdmin","type":"address"},{"internalType":"address","name":"gPartner","type":"address"},{"internalType":"address","name":"lPartner","type":"address"},{"internalType":"address","name":"team","type":"address"},{"internalType":"address","name":"poolRegistry","type":"address"},{"internalType":"address","name":"returnInvestmentLpartner","type":"address"},{"internalType":"contract IAssetsManageTeam","name":"assetsManageTeam","type":"address"},{"internalType":"uint256","name":"initialBalance","type":"uint256"},{"internalType":"address","name":"busdContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"bool","name":"result","type":"bool"}],"name":"ClaimFreeTokens","type":"event","signature":"0x9d6ad47cb919b7aa19b4e438ceeaa7b16afb7e9a6afe89335044b64c3cb4adca"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"getDepositLengthSender","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getDepositLengthOwner","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalAmountReturn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"indexesDepositLength","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balanceThis","type":"uint256"}],"name":"DebugWithdrawLPartner","type":"event","signature":"0x4414e991c92be9806f7baa6f03f81078e69201991679b3cbfe80e2f817e70e86"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Deposit","type":"event","signature":"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c"},{"anonymous":false,"inputs":[],"name":"Finalized","type":"event","signature":"0x6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b17681"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OracleAdded","type":"event","signature":"0x0047706786c922d17b39285dc59d696bafea72c0b003d3841ae1202076f4c2e4"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OracleRemoved","type":"event","signature":"0x9c8e7d83025bef8a04c664b2f753f64b8814bdb7e27291d7e50935f18cc3c712"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event","signature":"0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event","signature":"0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamAdded","type":"event","signature":"0x3f5f1db80208f0d453083a86e16909cecc1e95e2618d5d927c93ace22b8200fc"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamRemoved","type":"event","signature":"0x26b6063d78aefcf96f02ff06bc9822b5a623278253add7fffa5fb453db399810"},{"inputs":[],"name":"GENERAL_PARTNER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc1abd757"},{"inputs":[],"name":"LIMITED_PARTNER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xfe070e9d"},{"inputs":[],"name":"ORACLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x38013f02"},{"inputs":[],"name":"POOL_REGISTRY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1cda4a8d"},{"inputs":[],"name":"REFERER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5ac8b005"},{"inputs":[],"name":"RETURN_INVESTMENT_LPARTNER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x261fef02"},{"inputs":[],"name":"STARTUP_TEAM_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcbc5906e"},{"inputs":[],"name":"SUPER_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4460bdd6"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x6419bcdb"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addOracle","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdf5dd1a5"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb463a75c"},{"inputs":[],"name":"finalize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4bb278f3"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getMembersRole","outputs":[{"internalType":"address[]","name":"Accounts","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9cf6cc70"},{"inputs":[],"name":"getOracleAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7330aba2"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x248a9ca3"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9010d07c"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xca15c873"},{"inputs":[],"name":"getTeamAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x89e52771"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f2ff15d"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x91d14854"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOracle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa97e5c93"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x24851914"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOracle","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7837efdc"},{"inputs":[],"name":"renounceTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd9a431b3"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd547741f"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isPublicPool","type":"bool"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"locked","type":"uint256"},{"internalType":"uint256","name":"depositFixedFee","type":"uint256"},{"internalType":"uint256","name":"referralDepositFee","type":"uint256"},{"internalType":"uint256","name":"auctionCreationFeeMultiplier","type":"uint256"},{"internalType":"uint256","name":"auctionContractFeeMultiplier","type":"uint256"}],"name":"_updatePool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xb06fd88f"},{"inputs":[],"name":"getInfoPool","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isPublicPool","type":"bool"},{"internalType":"address","name":"tokenForTokensale","type":"address"},{"internalType":"uint256","name":"locked","type":"uint256"},{"internalType":"uint256","name":"initialBalance","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd2f0d2a8"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getDeposit","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"lock_period","type":"uint256"},{"internalType":"bool","name":"refund_authorize","type":"bool"},{"internalType":"uint256","name":"amountWithdrawal","type":"uint256"},{"internalType":"address","name":"investedToken","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2726b506"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getDepositLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x87ac828a"},{"inputs":[{"internalType":"address","name":"lPartner","type":"address"}],"name":"getReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3b0f0f2f"},{"inputs":[],"name":"getInfoPoolFees","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"depositFixedFee","type":"uint256"},{"internalType":"uint256","name":"referralDepositFee","type":"uint256"},{"internalType":"uint256","name":"auctionCreationFeeMultiplier","type":"uint256"},{"internalType":"uint256","name":"auctionContractFeeMultiplier","type":"uint256"},{"internalType":"uint256","name":"totalIncome","type":"uint256"},{"internalType":"uint256","name":"premiumFee","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xfedf51e9"},{"inputs":[{"internalType":"address","name":"lPartner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"investedToken","type":"address"}],"name":"_approveWithdrawLpartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xd93f48b0"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_depositPoolRegistry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xac6cc60c"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_withdrawTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xe89ec45f"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_withdrawTokensToStartup","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x16fb3c15"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_returnsInTokensFromTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x594ce4c7"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"}],"name":"_withdrawLPartner","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0xd5c5e434"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_withdrawSuperAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x7fdbc08b"},{"inputs":[],"name":"_activateDepositToPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x3049ea33"},{"inputs":[],"name":"_disactivateDepositToPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x6176dd9f"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"lPartner","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"name":"_setReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xcb4ff7f2"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"_setRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x94707a95"},{"inputs":[{"internalType":"uint256","name":"poolValueUSD","type":"uint256"},{"internalType":"uint256","name":"poolValue","type":"uint256"},{"internalType":"string","name":"proofOfValue","type":"string"}],"name":"_setPoolValues","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xbd8afbf8"},{"inputs":[{"internalType":"address","name":"newAuction","type":"address"}],"name":"_setAuction","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd6d68784"},{"inputs":[],"name":"auction","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7d9f6db5"},{"inputs":[],"name":"getPoolValues","outputs":[{"internalType":"uint256","name":"poolValueUSD","type":"uint256"},{"internalType":"uint256","name":"poolValue","type":"uint256"},{"internalType":"string","name":"proofOfValue","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf66fdcca"},{"inputs":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"_depositInvestmentInTokensToPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xf45efe67"},{"inputs":[],"name":"getInitialPriceInt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6d8664e0"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchaseTokensQuantityFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdae06b72"},{"inputs":[],"name":"purchaseTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x3290ce29"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"_getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a99bb0a"},{"inputs":[],"name":"contractsNFTWhitelisted","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x052c09fd"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"whitelistContractCreator","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x2dc20f62"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"whitelistContractCreatorTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8c533ba7"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"},{"internalType":"bool","name":"_isUSD","type":"bool"}],"name":"createAuction","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfd66c067"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_bidAmount","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"}],"name":"bidUSD","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x770108a7"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x878d9b7a"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"}],"name":"cancelAuction","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdca80c19"},{"inputs":[{"internalType":"address","name":"customer","type":"address"},{"internalType":"uint256","name":"priceMainToUSD","type":"uint256"}],"name":"checkTokensForClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9f2ac7f8"},{"inputs":[],"name":"claimFreeTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xf14d2181"}]');

const _openBiSeaAuctionAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialPriceInt","type":"uint256"},{"internalType":"uint256","name":"auctionCreationFeeMultiplier","type":"uint256"},{"internalType":"uint256","name":"auctionContractFeeMultiplier","type":"uint256"},{"internalType":"address","name":"tokenForTokensale","type":"address"},{"internalType":"address","name":"openBiSeaMainContract","type":"address"},{"internalType":"address","name":"busdContract","type":"address"},{"internalType":"address","name":"poolRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractNFT","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isERC1155","type":"bool"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"bool","name":"isDeal","type":"bool"},{"indexed":false,"internalType":"bool","name":"isUSD","type":"bool"}],"name":"AuctionNFTBid","type":"event","signature":"0xe3d4bf61d078da5e663f7903e9655ec8cf344746ccd5b94a9990738446c46656"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractNFT","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isERC1155","type":"bool"},{"indexed":false,"internalType":"address","name":"seller","type":"address"}],"name":"AuctionNFTCanceled","type":"event","signature":"0x59c07ddb806e4f8958f0b5fbe93551e544398f76b776a98a29473f28c3bf8d93"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractNFT","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isERC1155","type":"bool"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"bool","name":"isUSD","type":"bool"}],"name":"AuctionNFTCreated","type":"event","signature":"0x1a0c83d7cab3b048aa0717666809666a5ec6f4a945ebcb95b13cc9b1b9d2ff60"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractNFT","type":"address"}],"name":"ContractNFTDeWhitelisted","type":"event","signature":"0x6b4fd386a2a256d0a61a637ccbf0378dd594ac406e282dce5ba5104ccfdef841"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractNFT","type":"address"}],"name":"ContractNFTWhitelisted","type":"event","signature":"0xdff3fafa91c4ae82a17b9359b81e51f5f24dc774a225d99f97cfa4d429c45ce2"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OracleAdded","type":"event","signature":"0x0047706786c922d17b39285dc59d696bafea72c0b003d3841ae1202076f4c2e4"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OracleRemoved","type":"event","signature":"0x9c8e7d83025bef8a04c664b2f753f64b8814bdb7e27291d7e50935f18cc3c712"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamAdded","type":"event","signature":"0x3f5f1db80208f0d453083a86e16909cecc1e95e2618d5d927c93ace22b8200fc"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamRemoved","type":"event","signature":"0x26b6063d78aefcf96f02ff06bc9822b5a623278253add7fffa5fb453db399810"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addOracle","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdf5dd1a5"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb463a75c"},{"inputs":[],"name":"getOracleAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7330aba2"},{"inputs":[],"name":"getTeamAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x89e52771"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOracle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa97e5c93"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x24851914"},{"inputs":[],"name":"renounceOracle","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7837efdc"},{"inputs":[],"name":"renounceTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd9a431b3"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"isContractNFTWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb68f9a6c"},{"inputs":[],"name":"contractsNFTWhitelisted","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x052c09fd"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"whitelistContractAdmin","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xeb3b1ac2"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"deWhitelistContractAdmin","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf4c33b70"},{"inputs":[{"internalType":"uint256","name":"auctionCreationFeeMultiplier","type":"uint256"}],"name":"setAuctionCreationFeeMultiplierAdmin","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc8a151b4"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"whitelistContractCreator","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4f63d3ce"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"whitelistContractCreatorTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4f580e40"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"}],"name":"getNFTsAuctionList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4d3d626a"},{"inputs":[{"internalType":"uint256","name":"_auctionID","type":"uint256"}],"name":"sellerAddressFor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xade6a814"},{"inputs":[{"internalType":"address","name":"_consumer","type":"address"}],"name":"revenueFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7661892e"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"latestBidder","type":"address"},{"internalType":"uint256","name":"latestBidTime","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"isUSD","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x762a66a2"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"},{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bool","name":"_isUSD","type":"bool"}],"name":"createAuction","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x854fe7ac"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"},{"internalType":"address","name":"_sender","type":"address"}],"name":"bid","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x15b60639"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_sender","type":"address"},{"internalType":"bool","name":"_isERC1155","type":"bool"}],"name":"cancelAuction","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9b58a9a8"},{"inputs":[{"internalType":"address","name":"_contractNFT","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bool","name":"_isERC1155","type":"bool"}],"name":"cancelAuctionAdmin","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7653b556"},{"inputs":[{"internalType":"address","name":"customer","type":"address"},{"internalType":"uint256","name":"priceMainToUSD","type":"uint256"}],"name":"checkTokensForClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9f2ac7f8"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"setConsumersReceivedMainTokenLatestDate","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xbb759806"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]');

const _busdABI = '[{"inputs":[{"internalType":"uint256","name":"_initialAmount","type":"uint256"},{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"uint8","name":"_decimalUnits","type":"uint8"},{"internalType":"string","name":"_tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"allocateTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';

/**
* Example JavaScript code that interacts with the page and Web3 wallets
*/
function getQueryParams(qs) {
    console.log("2222");
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date * 1000) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    
    return Math.floor(seconds) + " seconds ago";
}

function duration(t0, t1) {
    let d = (new Date(t1)) - (new Date(t0));
    let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
    let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
    let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
    let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
    let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
    let milliseconds = Math.floor(d - weekdays * 7 * 24 * 60 * 60 * 1000 - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000);
    let t = {};

    ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(q => { 
        if (eval(q) > 0) { 
            t[q] = eval(q);
        } 
    });

    return t;
}

function getId(element) {
    alert("row" + element.parentNode.parentNode.rowIndex +
      " - column" + element.parentNode.cellIndex);
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}




/**
* Kick in the UI action after Web3modal dialog has chosen a provider
*/
async function fetchAccountData() {
    let _openbiseaAddress, _openBiSeaAuctionAddressMainnet;
    if ((options.page == 'wc_details_nft' || options.page == 'wc_auctuons') && options.lang == 'en') {
        _openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
        _openBiSeaAuctionAddressMainnet = "0x1d2dfE8D85ddD235cb48a1282d45444543313A5B";
    } else {
        _openbiseaAddress = '0x1Bf12f0650d8065fFCE3Cd9111feDEC21deF6825';
        _openBiSeaAuctionAddressMainnet = "0x1c2b69833967500042d476B1149D4074B59c1A17";
    }

    auctionsNormalized = {};
    
    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    document.querySelector("#network-name").textContent = chainData.name;

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];

    if (options.page == 'wc_details_nft') {
        if (ownerOftoken !== undefined && selectedAccount !== undefined && ownerOftoken.toLowerCase() === selectedAccount.toLowerCase()) {
            document.querySelector("#create-auction").style.display = "inline-block";
            if (options.lang == 'en') {
                document.querySelector("#cancel-auction").style.display = "inline-block";    
            }
            console.log("ownerOftokens", ownerOftoken);
        }
    }

    document.querySelector("#selected-account").textContent = selectedAccount;

    // Get a handl
    const template = document.querySelector("#template-balance");
    const accountContainer = document.querySelector("#accounts");

    // Purge UI elements any previously loaded accounts
    accountContainer.innerHTML = '';

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
        const balance = await web3.eth.getBalance(address);
        // ethBalance is a BigNumber instance
        // https://github.com/indutny/bn.js/
        const ethBalance = web3.utils.fromWei(balance, "ether");
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
        // Fill in the templated row and put in the document
        const clone = template.content.cloneNode(true);
        clone.querySelector(".address").textContent = address;
        clone.querySelector(".balance").textContent = humanFriendlyBalance;
        accountContainer.appendChild(clone);
    });

    // Because rendering account does its own RPC commucation
    // with Ethereum node, we do not want to display any results
    // until data for all accounts is loaded
    await Promise.all(rowResolvers);

    if (options.rowResolve) {
        let openbiseaAddress = _openbiseaAddress;

        if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";

        const erc721abi = _erc721abi;
        const openbiseaABI = _openbiseaABI;
        const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);
        const openBiSeaAuctionAbi = _openBiSeaAuctionAbi;
        const openBiSeaAuctionAddressTestnet = "0xA72821226E7ac461A3CA30434f3D4671c8A3DC37";
        const openBiSeaAuctionAddressMainnet = _openBiSeaAuctionAddressMainnet;

        let openBiSeaAuctionAddress = openBiSeaAuctionAddressMainnet;
        if (chainId === 97) openBiSeaAuctionAddress = openBiSeaAuctionAddressTestnet;
        let openBiSeaAuctionContract = new web3.eth.Contract(openBiSeaAuctionAbi, openBiSeaAuctionAddress);

        if (options.page == 'wc_auctuons' && options.lang == 'en') {
            let contractWhitelisted = await openBiSeaAuctionContract.methods.contractsNFTWhitelisted().call().catch(function (error) { console.log('contractsNFTWhitelisted:' + error) });
            const templateAuction = document.querySelector("#template-auction");
            const auctionsContainer = document.querySelector("#auctions");
            auctionsContainer.innerHTML = '';
            let index = 1;

            for (const contract of contractWhitelisted) {
                console.log('check contract',contract);
                let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
                if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";
                let nftContract = new web3.eth.Contract(erc721abi, contract);

                let auctions = await openBiSeaAuctionContract.methods.getNFTsAuctionList(contract).call().catch(function (error) { console.log('getNFTsAuctionList:' + error) });

                let now = Math.floor(Date.now() / 1000);
                const rowResolversAuction = auctions.map(async (auction) => {
                    // console.log('auction',auction);
                    let seller = await openBiSeaAuctionContract.methods.sellerAddressFor(auction).call().catch(function (error) { console.log('sellerAddressFor:' + error) });
                    // console.log('seller',seller);

                    let auctionBN = web3.utils.toBN(auction);
                    let sellerBN = web3.utils.toBN(seller);
                    var tokenID = auctionBN.sub(sellerBN).toNumber() + '';
                    let auctionInfo = await openBiSeaAuctionContract.methods.getAuction(contract, tokenID).call().catch(function (error) { console.log('getAuction:' + error) });
                    console.log('auctionInfo ', auctionInfo);
                    let tokenURI = await nftContract.methods.tokenURI(tokenID).call().catch(function (error) {console.log('tokenURI:' + error)});
                    if (tokenURI.includes("ipfs://ipfs/")) {
                        tokenURI = tokenURI.replace('ipfs://ipfs/', 'https://ipfs.io/ipfs/');
                    } else {
                        tokenURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
                    }
                    let response = await fetch(tokenURI);

                    if (response.ok) { // если HTTP-статус в диапазоне 200-299
                        // получаем тело ответа (см. про этот метод ниже)
                        let tokenMetadata = await response.json();
                        // console.log('tokenMetadata ', tokenMetadata);
                        const clone = templateAuction.content.cloneNode(true);
                        clone.querySelector(".name").textContent = tokenMetadata.name;
                        // clone.querySelector(".image").textContent = 'image';
                        // clone.querySelector(".image").href = tokenMetadata.image.replace('ipfs://','https://ipfs.io/ipfs/');
                        const priceFloat = parseFloat(await web3.utils.fromWei(auctionInfo.price))
                        let price = priceFloat + ' BNB';
                        if (auctionInfo.isUSD === true) price = priceFloat + " USD";
                        clone.querySelector(".price").textContent = price;
                        clone.querySelector(".bidAmount").children[0].value = Math.round((priceFloat + 0.00001) * 100000) / 100000;

                        if (auctionInfo.isUSD === true) {
                            clone.querySelector(".allow").children[0].style.display = "block"
                            clone.querySelector(".bid").children[0].setAttribute("disabled", "disabled")
                        }
                        var deadline = new Date(parseInt(auctionInfo.deadline) * 1000);

                        if (parseInt(auctionInfo.deadline) < now) {
                            clone.querySelector(".bid").children[0].textContent = "Buy now";
                            console.log('clone.querySelector(".bid").children[0] ', clone.querySelector(".bid").children[0]);
                            let deadlineText = timeSince(auctionInfo.deadline);
                            clone.querySelector(".deadline").textContent = deadlineText;
                        } else {
                            let dur = duration(deadline, Date.now());
                            clone.querySelector(".deadline").textContent = 'in ' + dur.days + ' days,' + dur.hours + ' hours';
                        }

                        // console.log('clone.querySelector(".bidAmount").children[0].value ', clone.querySelector(".bidAmount").children[0].value);
                        // console.log('clone.querySelector(".bidAmount")children[0] ', clone.querySelector(".bidAmount").children[0]);
                        let image;
                        if (tokenMetadata.image.includes("ipfs://ipfs/")) {
                            image = tokenMetadata.image.replace('ipfs://ipfs/', 'https://ipfs.io/ipfs/');
                        } else {
                            image = tokenMetadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
                        }
                        auctionInfo.image = image;
                        auctionInfo.tokenID = tokenID;
                        auctionInfo.name = tokenMetadata.name;
                        auctionInfo.contract = contract;

                        auctionsNormalized[index] = auctionInfo;
                        await auctionsContainer.appendChild(clone);
                        // var index = Array.prototype.indexOf.call(auctionsContainer, clone);
                        // console.log('index ', index);
                        index = index + 1;
                    } else {
                        alert("Ошибка HTTP: " + response.status);
                    }
                });

                await Promise.all(rowResolversAuction);
            }
        } else {
            let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
            if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";

            if (options.page == 'wc_details_nft' && options.lang == 'en') {
                if (contractSaved !== undefined) {
                    nftContractAddress = contractSaved
                    let isContractNFTWhitelisted = await openBiSeaAuctionContract.methods.isContractNFTWhitelisted(contractSaved).call().catch(function(error) { console.log('isContractNFTWhitelisted:' + error) });
                    console.log('isContractNFTWhitelisted', isContractNFTWhitelisted);
                    if (isContractNFTWhitelisted === false) {
                        document.querySelector("#whitelist").style.display = "inline-block";
                    }
                }
            }

            let nftContract = new web3.eth.Contract(erc721abi, nftContractAddress);

            let auctions = await openBiSeaAuctionContract.methods.getNFTsAuctionList(nftContractAddress).call().catch(function (error) { console.log('getNFTsAuctionList:' + error) });
            const templateAuction = document.querySelector("#template-auction");
            const auctionsContainer = document.querySelector("#auctions");
            auctionsContainer.innerHTML = '';
            let index = 1;
            let now = Math.floor(Date.now() / 1000);
            const rowResolversAuction = auctions.map(async (auction) => {
                // console.log('auction',auction);
                let seller = await openBiSeaAuctionContract.methods.sellerAddressFor(auction).call().catch(function (error) { console.log('sellerAddressFor:' + error) });
                // console.log('seller',seller);

                let auctionBN = web3.utils.toBN(auction);
                let sellerBN = web3.utils.toBN(seller);
                var tokenID = auctionBN.sub(sellerBN).toNumber() + '';

                if (options.page == 'wc_details_nft' && tokenIDsaved + '' === tokenID) {
                    let auctionInfo = await openBiSeaAuctionContract.methods.getAuction(nftContractAddress, tokenID).call().catch(function (error) { console.log('getAuction:' + error) });
                    console.log('auctionInfo ', auctionInfo);
                    if (options.page == 'wc_details_nft' && options.lang == 'en') {
                        if (auctionInfo.seller.toLowerCase() === selectedAccount.toLowerCase()) {
                            document.querySelector("#cancel-auction").style.display = "inline-block";
                        }
                    }
                    let tokenURI = await nftContract.methods.tokenURI(tokenID).call().catch(function (error) {console.log('tokenURI:' + error)});
                    if (options.page == 'wc_details_nft' && options.lang == 'en' && tokenURI.includes("ipfs://ipfs/")) {
                        tokenURI = tokenURI.replace('ipfs://ipfs/', 'https://ipfs.io/ipfs/');
                    } else {
                        tokenURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
                    }
                    let response = await fetch(tokenURI);

                    if (response.ok) { // если HTTP-статус в диапазоне 200-299
                        // получаем тело ответа (см. про этот метод ниже)
                        let tokenMetadata = await response.json();
                        // console.log('tokenMetadata ', tokenMetadata);
                        const clone = templateAuction.content.cloneNode(true);
                        clone.querySelector(".name").textContent = tokenMetadata.name;
                        // clone.querySelector(".image").textContent = 'image';
                        // clone.querySelector(".image").href = tokenMetadata.image.replace('ipfs://','https://ipfs.io/ipfs/');
                        const priceFloat = parseFloat(await web3.utils.fromWei(auctionInfo.price))
                        let price = priceFloat + ' BNB';
                        if (auctionInfo.isUSD === true) price = priceFloat + " USD";
                        clone.querySelector(".price").textContent = price;
                        clone.querySelector(".bidAmount").children[0].value = Math.round((priceFloat + 0.00001) * 100000) / 100000;

                        if (auctionInfo.isUSD === true) {
                            clone.querySelector(".allow").children[0].style.display = "block"
                            clone.querySelector(".bid").children[0].setAttribute("disabled", "disabled")
                        }
                        var deadline = new Date(parseInt(auctionInfo.deadline) * 1000);

                        if (parseInt(auctionInfo.deadline) < now) {
                            var _buyNow = options.lang == 'en' ? "Buy now" : "Купить";
                            clone.querySelector(".bid").children[0].textContent = _buyNow;
                            console.log('clone.querySelector(".bid").children[0] ', clone.querySelector(".bid").children[0]);
                            let deadlineText = timeSince(auctionInfo.deadline);
                            clone.querySelector(".deadline").textContent = deadlineText;
                        } else {
                            let dur = duration(deadline, Date.now());
                            var _in = options.lang == 'en' ? 'in ' : 'осталось ';
                            var _days = options.lang == 'en' ? ' days,' : 'д.,';
                            var _hours = options.lang == 'en' ? ' hours' : 'ч.';
                            clone.querySelector(".deadline").textContent = _in + dur.days + _days + dur.hours + _hours;
                        }

                        // console.log('clone.querySelector(".bidAmount").children[0].value ', clone.querySelector(".bidAmount").children[0].value);
                        // console.log('clone.querySelector(".bidAmount")children[0] ', clone.querySelector(".bidAmount").children[0]);

                        auctionInfo.image = tokenMetadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
                        auctionInfo.tokenID = tokenID;
                        auctionInfo.name = tokenMetadata.name;

                        auctionsNormalized[index] = auctionInfo;
                        await auctionsContainer.appendChild(clone);
                        // var index = Array.prototype.indexOf.call(auctionsContainer, clone);
                        // console.log('index ', index);
                        index = index + 1;
                    } else {
                        alert("Ошибка HTTP: " + response.status);
                    }
                }
            });

            await Promise.all(rowResolversAuction);
        }
    }

    // Display fully loaded UI for wallet data
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
}

/**
* Fetch account data for UI when
* - User switches accounts in wallet
* - User switches networks in wallet
* - User connects wallet initially
*/
async function refreshAccountData() {
    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled")
}

/**
* Connect wallet button pressed.
*/
async function onConnect() {
    console.log("Opening a dialog", web3Modal);

    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
}

/**
* Disconnect wallet button pressed.
*/
async function onDisconnect() {
    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;

    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
}

/**
* onResultClick button pressed.
*/
async function onResultClick() {
    window.open(resultURL, '_blank').focus();
}

/**
* Translation
*/

const enObj =  {
            
    httpsWarning:"You can run this example only over HTTPS connection.",

    noWalletWarning1:"No wallet connected. Connect wallet to show accounts and their BNB balances.",
    noWalletWarning2:"Connect wallet",

    network1:"Connected blockchain:",
    network2:"Selected account:",
    network3:"Disconnect wallet",

    auctionTable1:"Name",
    auctionTable2:"Link",
    auctionTable3:"Price",
    auctionTable4:"Deadline",
    auctionTable5:"Bid amount",
    auctionTable6:"Allow",
    auctionTable7:"Bid",

    accountBalance1:"All account balances",
    accountBalance2:"Address",
    accountBalance3:"BNB balance",
    accountBalance4:"Please try to switch between different accounts in your wallet if your wallet supports this functonality.",

    transaction1:"Transaction in progress ...",
    transaction2:"Check transaction status",
    openNFTDetails: "Open NFT details",

    walletconnectH1:"Buy OBS token",
    
    walletconnectMintNFTH1:"Mint free NFT",

    walletconnectDetailsftH1:"NFT details",

    walletconnectAuctuonsH1: "Auctions",

    purchaseOBS:"Purchase OBS",

    copy:"Copy",
    approve:"Approve",
    bid:"Bid",
    image:"Image",

    whitelistContract:"Whitelist contract",
    contractNotWhitelisted:"Contract not whitelisted. Please press Whitelist to add.",
    noWalletConnected:"No wallet connected. Connect wallet to show accounts and their BNB balances.",
    connectWallet:"Connect wallet",
    NFTOwnerLoading: "NFT owner loading...",
    createAuction:"Create auction",
    cancelAuction:"Cancel auction",
    loading:"Loading...",

    beforeCSV:"Before upload check CSV format: name;description;artist;public url;image url; external url (optional) ",
    uploadCSV:"CSV list upload"


}
const ruObj = {
            
    // "https-warning":"You can run this example only over HTTPS connection.",
    
    httpsWarning:"Вы можете запустить этот пример только через HTTPS-соединение.",

    noWalletWarning1:"Кошелек не подключен. Подключите кошелек чтобы увидить ваши аккаунты и балансы в BNB.",
    noWalletWarning2:"Подключить кошелек",

    network1:"Сеть:",
    network2:"Выбранный аккаунт:",
    network3:"Отключить кошелек",

    auctionTable1:"Название",
    auctionTable2:"Ссылка",
    auctionTable3:"Цена",
    auctionTable4:"Дата завершения",
    auctionTable5:"Ставка",
    auctionTable6:"Разрешить",
    auctionTable7:"Сделать ставку",

    transaction1:"Транзакция обрабатывается ...",
    transaction2:"Проверить статус транзакции",
    openNFTDetails: "Открыть NFT детали",

    accountBalance1:"Балансы всех аккаунтов",
    accountBalance2:"Адрес",
    accountBalance3:"баланс BNB",
    accountBalance4:"Можете переключится между аккаунтами, если ваш кошелек поддерживает эту опцию.",

    walletconnectH1:"Купить токен OBS",

    walletconnectMintNFTH1:"Создать свой NFT",

    walletconnectDetailsftH1: "Информация про NFT",

    walletconnectAuctuonsH1: "Аукционы",

    purchaseOBS:"Купить OBS",

    copy:"Копировать",
    approve:"Подтвердить",
    bid:"Сделать ставку",
    image:"Изображение",

    whitelistContract:"Whitelist contract",
    contractNotWhitelisted:"Contract not whitelisted. Please press Whitelist to add.",
    noWalletConnected:"Кошелек не подключен. Подключите кошелек чтобы увидить ваши аккаунты и балансы в BNB.",
    connectWallet:"Подключить кошелек",
    NFTOwnerLoading: "информация о владельце NFT загружается...",
    createAuction:"Создать аукцион",
    cancelAuction:"Отменить аукцион",
    approveNFT: "Подвтердить NFT",
    loading:"Загрузка...",

    beforeCSV:"Before upload check CSV format: name;description;artist;public url;image url; external url (optional) ",

    uploadCSV:"загрузить CSV"


}

function Translate() {
    //initialization
    this.init = function (attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }
    const langs = {            
        en: enObj,
        ru: ruObj,
    }
    //translate 
    this.process = function () {
        _self = this;

        const allDom = document.getElementsByTagName("*");
        for (let i = 0; i < allDom.length; i++) {
            let elem = allDom[i];
            const key = elem.getAttribute(_self.attribute);

            if (key != null) {
                console.log(key+" -> "+langs[`${_self.lng}`].walletconnectH1);
                elem.innerHTML = langs[`${_self.lng}`][key];
            }
        }

    }
}