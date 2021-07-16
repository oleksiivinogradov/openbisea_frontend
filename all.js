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

    auctionsNormalized = {};

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    let _openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72',
        _openBiSeaAuctionAddress = "0x1d2dfE8D85ddD235cb48a1282d45444543313A5B";
    if (chainId === 97) {
        _openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
        _openBiSeaAuctionAddress = "0xA72821226E7ac461A3CA30434f3D4671c8A3DC37";
    }

    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    document.querySelector("#network-name").textContent = chainData.name;

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];

    if (options.page === 'wc_details_nft') {
        if (ownerOftoken !== undefined && selectedAccount !== undefined && ownerOftoken.toLowerCase() === selectedAccount.toLowerCase()) {
            document.querySelector("#create-auction").style.display = "inline-block";
            if (options.lang === 'en') {
                document.querySelector("#cancel-auction").style.display = "inline-block";
            }
            console.log("ownerOftokens", ownerOftoken);
        }
    }
    console.log("selectedAccount", selectedAccount);

    document.querySelector("#selected-account").textContent = selectedAccount;

    // Get a handl
    const template = document.querySelector("#template-balance");
    const accountContainer = document.querySelector("#accounts");

    // Purge UI elements any previously loaded accounts
    accountContainer.innerHTML = '';

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
        const balance = await web3.eth.getBalance(address);
        console.log("balance", balance);

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
    console.log("rowResolvers", rowResolvers);

    // Because rendering account does its own RPC commucation
    // with Ethereum node, we do not want to display any results
    // until data for all accounts is loaded
    await Promise.all(rowResolvers);
    console.log('1 rowResolve:' + options.rowResolve)

    if (options.rowResolve) {
        console.log('2 rowResolve:' + options.rowResolve)

        const erc721abi = _erc721abi;
        const openbiseaABI = _openbiseaABI;
        const openbisea = new web3.eth.Contract(openbiseaABI, _openbiseaAddress);

        let openBiSeaAuctionAddress = _openBiSeaAuctionAddress;
        const openBiSeaAuctionAbi = _openBiSeaAuctionAbi;
        let openBiSeaAuctionContract = new web3.eth.Contract(openBiSeaAuctionAbi, openBiSeaAuctionAddress);

        if (options.page === 'wc_auctuons') {
            let contractWhitelisted = await openBiSeaAuctionContract.methods.contractsNFTWhitelisted().call().catch(function (error) {
                console.log('contractsNFTWhitelisted:' + error)
            });
            const templateAuction = document.querySelector("#template-auction");
            const auctionsContainer = document.querySelector("#auctions");
            auctionsContainer.innerHTML = '';
            let index = 1;
            console.log('contractWhitelisted', contractWhitelisted);

            for (const contract of contractWhitelisted) {
                console.log('check contract', contract);
                let nftContract = new web3.eth.Contract(erc721abi, contract);

                let auctions = await openBiSeaAuctionContract.methods.getNFTsAuctionList(contract).call().catch(function (error) {
                    console.log('getNFTsAuctionList:' + error)
                });

                let now = Math.floor(Date.now() / 1000);
                const rowResolversAuction = auctions.map(async (auction) => {
                    // console.log('auction',auction);
                    let seller = await openBiSeaAuctionContract.methods.sellerAddressFor(auction).call().catch(function (error) {
                        console.log('sellerAddressFor:' + error)
                    });
                    // console.log('seller',seller);

                    let auctionBN = web3.utils.toBN(auction);
                    let sellerBN = web3.utils.toBN(seller);
                    var tokenID = auctionBN.sub(sellerBN).toNumber() + '';
                    let auctionInfo = await openBiSeaAuctionContract.methods.getAuction(contract, tokenID).call().catch(function (error) {
                        console.log('getAuction:' + error)
                    });
                    console.log('auctionInfo ', auctionInfo);
                    let tokenURI = await nftContract.methods.tokenURI(tokenID).call().catch(function (error) {
                        console.log('tokenURI:' + error)
                    });
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

            if (options.page === 'wc_details_nft' && options.lang === 'en') {
                if (contractSaved !== undefined) {
                    nftContractAddress = contractSaved
                    let isContractNFTWhitelisted = await openBiSeaAuctionContract.methods.isContractNFTWhitelisted(contractSaved).call().catch(function (error) {
                        console.log('isContractNFTWhitelisted:' + error)
                    });
                    console.log('isContractNFTWhitelisted', isContractNFTWhitelisted);
                    if (isContractNFTWhitelisted === false) {
                        document.querySelector("#whitelist").style.display = "inline-block";
                    }
                }
            }

            let nftContract = new web3.eth.Contract(erc721abi, nftContractAddress);

            let auctions = await openBiSeaAuctionContract.methods.getNFTsAuctionList(nftContractAddress).call().catch(function (error) {
                console.log('getNFTsAuctionList:' + error)
            });
            const templateAuction = document.querySelector("#template-auction");
            const auctionsContainer = document.querySelector("#auctions");
            auctionsContainer.innerHTML = '';
            let index = 1;
            let now = Math.floor(Date.now() / 1000);
            const rowResolversAuction = auctions.map(async (auction) => {
                // console.log('auction',auction);
                let seller = await openBiSeaAuctionContract.methods.sellerAddressFor(auction).call().catch(function (error) {
                    console.log('sellerAddressFor:' + error)
                });
                // console.log('seller',seller);

                let auctionBN = web3.utils.toBN(auction);
                let sellerBN = web3.utils.toBN(seller);
                var tokenID = auctionBN.sub(sellerBN).toNumber() + '';

                if (options.page === 'wc_details_nft' && tokenIDsaved + '' === tokenID) {
                    let auctionInfo = await openBiSeaAuctionContract.methods.getAuction(nftContractAddress, tokenID).call().catch(function (error) {
                        console.log('getAuction:' + error)
                    });
                    console.log('auctionInfo ', auctionInfo);
                    if (options.page === 'wc_details_nft' && options.lang === 'en') {
                        if (auctionInfo.seller.toLowerCase() === selectedAccount.toLowerCase()) {
                            document.querySelector("#cancel-auction").style.display = "inline-block";
                        }
                    }
                    let tokenURI = await nftContract.methods.tokenURI(tokenID).call().catch(function (error) {
                        console.log('tokenURI:' + error)
                    });
                    if (options.page === 'wc_details_nft' && options.lang === 'en' && tokenURI.includes("ipfs://ipfs/")) {
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
                            var _buyNow = options.lang === 'en' ? "Buy now" : "Купить";
                            clone.querySelector(".bid").children[0].textContent = _buyNow;
                            console.log('clone.querySelector(".bid").children[0] ', clone.querySelector(".bid").children[0]);
                            let deadlineText = timeSince(auctionInfo.deadline);
                            clone.querySelector(".deadline").textContent = deadlineText;
                        } else {
                            let dur = duration(deadline, Date.now());
                            var _in = options.lang === 'en' ? 'in ' : 'осталось ';
                            var _days = options.lang === 'en' ? ' days,' : 'д.,';
                            var _hours = options.lang === 'en' ? ' hours' : 'ч.';
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

            await Promise.all(rowResolversAuction).then(data => {
                translateText(options.lang);
            });
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
 * Buy button pressed.
 */
async function onBuy() {
    console.log('onBuy:');

    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97 && chainId !== 137) {
        document.querySelector("#obsamount").textContent = "We support only BSC and MATIC mainnet";
        document.querySelector("#buy-obs").disabled = true;
        document.querySelector("#progress").style.display = "none";
        return;
    }
    let openbiseaAddress = '0x1Bf12f0650d8065fFCE3Cd9111feDEC21deF6825';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    if (chainId === 137) openbiseaAddress = "0x424E231FBd3f74Ab9D85D1cf7de2d242D96d8ea4";

    const openbiseaABI = _openbiseaABI;
    const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);

    const amountText = document.querySelector("#amount").value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= 0.1) {
        document.querySelector("#obsamount").textContent = "must be minimum 0.1 to purcase OBS";
        document.querySelector("#buy-obs").disabled = true;
        document.querySelector("#progress").style.display = "none";
        return;
    }
    document.querySelector("#buy-obs").disabled = true;

    const purchaseAmount = parseFloat(amountText) * (10 ** 18) + '';
    let tokensForPurchaseAmountOBSResult = await openbisea.methods.purchaseTokensQuantityFor(purchaseAmount).call()
    console.log('tokensForPurchaseAmountOBSResult:', tokensForPurchaseAmountOBSResult);
    let purchaseTokensOBSResult = await openbisea.methods.purchaseTokens().send({
        from: selectedAccount,
        value: purchaseAmount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#obsamount").textContent = err.message;
    });
    if (purchaseTokensOBSResult !== undefined) {
        console.log('purchaseTokensOBSResult:', purchaseTokensOBSResult.transactionHash);
        document.querySelector("#buy-obs").disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + purchaseTokensOBSResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + purchaseTokensOBSResult.transactionHash
        if (chainId === 137) resultURL = "https://polygonscan.com/tx/" + purchaseTokensOBSResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);
}

/**
 * Buy button pressed.
 */
async function onAmountChange() {
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97 && chainId !== 137) {
        document.querySelector("#obsamount").textContent = "We support only BSC or MATIC mainnet";
        document.querySelector("#buy-obs").disabled = true;
        return;
    }
    let openbiseaAddress = '0x1Bf12f0650d8065fFCE3Cd9111feDEC21deF6825';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    if (chainId === 137) openbiseaAddress = "0x424E231FBd3f74Ab9D85D1cf7de2d242D96d8ea4";

    const openbiseaABI = _openbiseaABI;
    const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);
    const amountText = document.querySelector("#amount").value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= 0.1) {
        document.querySelector("#obsamount").textContent = langs[options.lang].purchaseOBSwarn;
        document.querySelector("#buy-obs").disabled = true;
        return;
    }
    const purchaseAmount = parseFloat(amountText) * (10 ** 18) + '';
    console.log('amount:', amountText);
    console.log('purchaseAmount:', purchaseAmount);

    let tokensForPurchaseAmountOBSResult = await openbisea.methods.purchaseTokensQuantityFor(purchaseAmount).call();
    console.log('tokensForPurchaseAmountOBSResult:', tokensForPurchaseAmountOBSResult);
    document.querySelector("#obsamount").textContent = langs[options.lang].purchaseOBSreceive + Number(parseFloat(tokensForPurchaseAmountOBSResult[0]) / (10 ** 18)).toFixed(2) + " OBS";
    document.querySelector("#buy-obs").disabled = false;
}



// GET parameters from URL
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


// /**
// * Translation
// */

const enObj = {

    httpsWarning: "You can run this example only over HTTPS connection.",

    noWalletWarning1: "No wallet connected. Connect wallet to show accounts and their BNB balances.",
    noWalletWarning2: "Connect wallet",

    network1: "Connected blockchain:",
    network2: "Selected account:",
    network3: "Disconnect wallet",

    auctionTable1: "Name",
    auctionTable2: "Link",
    auctionTable3: "Price",
    auctionTable4: "Deadline",
    auctionTable5: "Bid amount",
    auctionTable6: "Allow",
    auctionTable7: "Bid",

    accountBalance1: "All account balances",
    accountBalance2: "Address",
    accountBalance3: "BNB balance",
    accountBalance4: "Please try to switch between different accounts in your wallet if your wallet supports this functonality.",

    transaction1: "Transaction in progress ...",
    transaction2: "Check transaction status",
    openNFTDetails: "Open NFT details",

    walletconnectH1: "Buy OBS token",

    walletconnectMintNFTH1: "Mint free NFT",

    walletconnectDetailsftH1: "NFT details",

    walletconnectAuctuonsH1: "Auctions",

    purchaseOBS: "Purchase OBS",
    purchaseOBSwarn: "Must be minimum 0.1 to purchase OBS",
    purchaseOBSreceive: "You will receive:",


    copy: "Copy",
    approve: "Approve",
    bid: "Bid",
    image: "Image",
    check: "Check",
    registerContract: "Register contract",

    whitelistContract: "Whitelist contract",
    contractNotWhitelisted: "Contract not whitelisted. Please press Whitelist to add.",
    noWalletConnected: "No wallet connected. Connect wallet to show accounts and their BNB balances.",
    connectWallet: "Connect wallet",
    NFTOwnerLoading: "NFT owner loading...",
    createAuction: "Create auction",
    cancelAuction: "Cancel auction",
    loading: "Loading...",

    beforeCSV: "Before upload check CSV format: name;description;artist;public url;image url; external url (optional) ",

    uploadCSV: "CSV list upload",

    EthereumBSCBridge: "Ethereum - Binance Smart chain bridge",
    pleaseCheckETH: "Please check if ETH asset contract registered first: ",
    contractNotChecked: "Contract not checked in.",
    chooseAssetToConvert: "Please choose asset to convert depends from type:",

    convertETHtoBSC: "Convert from Ethereum to Binance Smart Chain",
    convertBSCtoETH: "Convert back from Binance Smart Chain to Ethereum",
    approveETH: "Approve ETH",
    convertETH: "Convert ETH",
    approveBSC: "Approve BSC",
    convertBSC: "Convert BSC",


}
const ruObj = {

    // "https-warning":"You can run this example only over HTTPS connection.",

    httpsWarning: "Вы можете запустить этот пример только через HTTPS-соединение.",

    noWalletWarning1: "Кошелек не подключен. Подключите кошелек чтобы увидить ваши аккаунты и балансы.",
    noWalletWarning2: "Подключить кошелек",

    network1: "Сеть:",
    network2: "Выбранный аккаунт:",
    network3: "Отключить кошелек",

    auctionTable1: "Название",
    auctionTable2: "Ссылка",
    auctionTable3: "Цена",
    auctionTable4: "Дата завершения",
    auctionTable5: "Ставка",
    auctionTable6: "Разрешить",
    auctionTable7: "Сделать ставку",

    transaction1: "Транзакция обрабатывается ...",
    transaction2: "Проверить статус транзакции",
    openNFTDetails: "Открыть NFT детали",

    accountBalance1: "Балансы всех аккаунтов",
    accountBalance2: "Адрес",
    accountBalance3: "баланс",
    accountBalance4: "Можете переключится между аккаунтами, если ваш кошелек поддерживает эту опцию.",

    walletconnectH1: "Купить токен OBS",

    walletconnectMintNFTH1: "Создать свой NFT",

    walletconnectDetailsftH1: "Информация про NFT",

    walletconnectAuctuonsH1: "Аукционы",

    purchaseOBS: "Купить OBS",
    purchaseOBSwarn: "Минимум 0.1BNB для покупки OBS",
    purchaseOBSreceive: "Вы получите:",

    copy: "Копировать",
    approve: "Подтвердить",
    bid: "Сделать ставку",
    image: "Изображение",
    check: "Проверить",
    registerContract: "Register contract-rus",

    whitelistContract: "Whitelist contract-rus",
    contractNotWhitelisted: "Contract not whitelisted. Please press Whitelist to add.-rus",
    noWalletConnected: "Кошелек не подключен. Подключите кошелек чтобы увидить ваши аккаунты и балансы в BNB.",
    connectWallet: "Подключить кошелек",
    NFTOwnerLoading: "информация о владельце NFT загружается...",
    createAuction: "Создать аукцион",
    cancelAuction: "Отменить аукцион",
    approveNFT: "Подвтердить NFT",
    loading: "Загрузка...",

    beforeCSV: "Before upload check CSV format: name;description;artist;public url;image url; external url (optional) -rus",

    uploadCSV: "загрузить CSV",

    EthereumBSCBridge: "Ethereum - Binance Smart chain bridge - RUS",

    pleaseCheckETH: "Please check if ETH asset contract registered first: - RUS",

    contractNotChecked: "Contract not checked in.-rus",
    chooseAssetToConvert: "Please choose asset to convert depends from type:-rus",

    convertETHtoBSC: "Convert from Ethereum to Binance Smart Chain-rus",
    convertBSCtoETH: "Convert back from Binance Smart Chain to Ethereum-rus",
    approveETH: "Approve ETH-rus",
    convertETH: "Convert ETH-rus",
    approveBSC: "Approve BSC-rus",
    convertBSC: "Convert BSC-rus",


}
const langs = {
    en: enObj,
    ru: ruObj,
}

function Translate() {
    //initialization
    this.init = function (attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }

    //translate 
    this.process = function () {
        _self = this;

        const allDom = document.getElementsByTagName("*");
        for (let i = 0; i < allDom.length; i++) {
            let elem = allDom[i];
            const key = elem.getAttribute(_self.attribute);

            if (key != null) {

                elem.innerHTML = langs[`${_self.lng}`][key];
            }
        }

    }
}


function translateText(lang) {
    const translate = new Translate();
    translate.init('data-tag', lang);
    translate.process();
}

// Intigration chunks 
function chunkLoad(file, selector, lang) {
    fetch(file)
        .then(response => {
            return response.text()
        })
        .then(data => {
            selector.innerHTML = data;
            translateText(lang);
        });
}

// Check that the web page is run in a secure context,
// as otherwise MetaMask won't be available
function isHttps() {
    console.log(location.protocol);
    if (location.protocol !== 'https:') {
        // https://ethereum.stackexchange.com/a/62217/620
        const alert = document.querySelector("#alert-error-https");
        alert.style.display = "block";
        document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        return;
    }
}


// // Tell Web3modal what providers we have available.
// // Built-in web browser provider (only one can exist as a time)
// // like MetaMask, Brave or Opera is added automatically by Web3modal
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal
let provider;
let selectedAccount;
let resultURL;
let nftDetailsURL;



const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            // Mikko's test key - don't copy as your mileage may vary
            infuraId: "bb7b522604e54a2f8ad251e7417b2355",
        }
    },

    // fortmatic: {
    //   package: Fortmatic,
    //   options: {
    //     // Mikko's TESTNET api key
    //     key: "pk_test_391E26A3B43A3350"
    //   }
    // }
};

web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
});


// walletconnect_uni.html

function sendOrderStatusFunction(attempts, sendOrderStatus) {
    if (window.BinanceChain !== undefined) {
        clearInterval(sendOrderStatus);
        console.log("YES window.BinanceChain ");

        const BinanceChain = window.BinanceChain;
        provider = BinanceChain;

        let currentChainId = BinanceChain.chainId;
        console.log('currentChainId:' + currentChainId);

        BinanceChain.on('chainChanged', handleChainChanged);

        function handleChainChanged(_chainId) {
            // We recommend reloading the page, unless you must do otherwise
            window.location.reload();
        }
        let currentAccount = null;
        BinanceChain
            .request({
                method: 'eth_accounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                // Some unexpected error.
                // For backwards compatibility reasons, if no accounts are available,
                // eth_accounts will return an empty array.
                console.error(err);
            });

        BinanceChain.on('accountsChanged', handleAccountsChanged);

        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                // Binance Chain Wallet is locked or the user has not connected any accounts
                console.log('Please connect to Binance Chain Wallet.');
            } else if (accounts[0] !== currentAccount) {
                currentAccount = accounts[0];
                console.log('currentAccount:' + currentAccount);
                fetchAccountData()
                // Do any other work!
            }
        }
        // BinanceChain
        //     .request({ method: 'eth_requestAccounts' })
        //     .then(handleAccountsChanged)
        //     .catch((err) => {
        //         if (err.code === 4001) {
        //             // EIP-1193 userRejectedRequest error
        //             // If this happens, the user rejected the connection request.
        //             console.log('Please connect to MetaMask.');
        //         } else {
        //             console.error(err);
        //         }
        //     });

    } else {
        console.log("NO window.BinanceChain ");
        attempts = attempts + 1;
        if (attempts > 5) {
            clearInterval(sendOrderStatus);
        }
    }
}





//walletconnect_mintNFT_uni.html

/**
 * onResultClick button pressed.
 */
async function onDetailsClick() {
    window.open(nftDetailsURL, '_blank').focus();
}
/**
 * Buy button pressed.
 */
async function mintNFT(body) {
    return new Promise((resolve, reject) => {
        fetch('https://mac8.cfc.io/api/ipfsForNFT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.text())
            .then(async data => {
                console.log(data);
                if (data.length !== 46) {
                    console.log('wrong data');
                    reject('wrong data');
                    return;
                }
                let link = 'ipfs://' + data;
                const web3 = new Web3(provider);
                const chainId = await web3.eth.getChainId();
                let nftAddress = '0xb861DF245fc18483235D9C11b87d8A76F4678e08';
                if (chainId === 97) nftAddress = "0x873783a6c4586C196adfDb15C8ACdc576B799938";
                const nftABI = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenUri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd0def521"}]');
                const nft = new web3.eth.Contract(nftABI, nftAddress);

                let mintNFTResult = await nft.methods.mint(selectedAccount, link).send({
                    from: selectedAccount,
                    gas: 500000
                }).catch((err) => {
                    console.log('err->' + JSON.stringify(err));
                    reject(err.message)
                });
                if (mintNFTResult !== undefined) {

                    console.log('mintNFTResult:', mintNFTResult);
                    const tokenId = mintNFTResult.events.Transfer.returnValues.tokenId
                    // document.querySelector("#progress").textContent = "Your link to share: https://openbisea.io/detailsnft?tokenID=" + tokenId;
                    console.log('tokenId:', tokenId);
                    // nftDetailsURL = "https://openbisea.io/detailsnft?tokenID=" + tokenId;
                    // document.querySelector("#progress").style.display = "none";

                    let resultURLlocal = "https://bscscan.com/tx/" + mintNFTResult.transactionHash
                    if (chainId === 97) resultURLlocal = "http://testnet.bscscan.com/tx/" + mintNFTResult.transactionHash
                    resolve([resultURLlocal, "https://openbisea.io/detailsnft?tokenID=" + tokenId])
                } else {
                    reject('mintNFTResult undefined');
                }
            })
            .catch(error => {
                console.error(error)
            })
    })
}

// async function onMint() {
//     document.querySelector("#progress").style.display = "block";
//     document.querySelector("#mint").disabled = true;

//     let countDots = 0;
//     let sendOrderStatus = setInterval(async function () {
//         let phrase = "Transaction in progress " + ".".repeat(countDots);
//         document.querySelector("#progress").textContent = phrase;
//         countDots++;
//         if (countDots === 4) countDots = 0;
//     }, 1000);
//     const web3 = new Web3(provider);
//     const chainId = await web3.eth.getChainId();
//     if (chainId !== 56 && chainId !== 97) {
//         document.querySelector("#progress").textContent = "We support only BSC mainnet";
//         document.querySelector("#mint").disabled = true;
//         // document.querySelector("#progress").style.display = "none";
//         return;
//     }
//     let nftAddress = '0xb861DF245fc18483235D9C11b87d8A76F4678e08';
//     if (chainId === 97) nftAddress = "0x873783a6c4586C196adfDb15C8ACdc576B799938";
//     const nftABI = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenUri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd0def521"}]');
//     const nft = new web3.eth.Contract(nftABI, nftAddress);

//     if (nftBulkList.length > 0) {
//         document.querySelector("#csvInfo").innerText = "NFT mint Result:";
//         let index = nftBulkList.length - 1;
//         for (const nft of nftBulkList) {
//             let body = {
//                 name: nft.name,
//                 description: nft.description,
//                 external_url: nft.external_url,
//                 image_url: nft.image_url,
//                 properties: {
//                     artist: nft.artist,
//                     public_profile_link: nft.public_url
//                 }
//             };
//             console.log('body:', body);

//             let resultMint = await mintNFT(body);
//             console.log('resultMint:', resultMint);
//             document.querySelector("#csvInfo").innerText = document.querySelector("#csvInfo").innerText + "\n" + resultMint[0] + "\n" + resultMint[1]
//             index = index - 1
//             if (index === 0) {
//                 document.querySelector("#mint").disabled = false;
//                 clearInterval(sendOrderStatus);
//             }

//         }
//         return;
//     }
//     let description = document.querySelector("#desc").value
//     let description_text = document.querySelector("#desc").textContent
//     console.log('description:', document.querySelector("#desc"));
//     console.log('description_text:', description_text);

//     let body = {
//         name: document.querySelector("#name").value,
//         description: description,
//         image: base64image,
//         ext: extentionImage,
//         image_url: document.querySelector("#linkToImage").value,
//         animation_url: document.querySelector("#linkToVideo").value,
//         glb_url: document.querySelector("#linkToGlb").value,
//         properties: {
//             artist: document.querySelector("#artist").value,
//             public_profile_link: document.querySelector("#public_profile_link").value
//         }
//     };
//     if (base64animation !== undefined) {
//         body.animation = base64animation;
//         body.extAnimation = extentionAnimation;
//     }
//     if (base64glb !== undefined) {
//         body.glb = base64glb;
//     }
//     console.log(JSON.stringify(body));
//     // fetch('https://mac8.cfc.io/api/ipfsForNFT', {

//     fetch('https://mac8.cfc.io/api/ipfsForNFT', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/plain'
//             },
//             body: JSON.stringify(body)
//         })
//         .then(response => response.text())
//         .then(async data => {
//             console.log(data);
//             if (data.length !== 46) {
//                 console.log('wrong data');
//                 return;
//             }
//             let link = 'ipfs://' + data;


//             let mintNFTResult = await nft.methods.mint(selectedAccount, link).send({
//                 from: selectedAccount,
//                 gas: 500000
//             }).catch((err) => {
//                 console.log('err->' + JSON.stringify(err));
//                 document.querySelector("#progress").textContent = err.message;
//             });
//             if (mintNFTResult !== undefined) {

//                 console.log('mintNFTResult:', mintNFTResult);
//                 const tokenId = mintNFTResult.events.Transfer.returnValues.tokenId
//                 document.querySelector("#progress").textContent = "Your link to share: https://openbisea.io/detailsnft?tokenID=" + tokenId;
//                 console.log('tokenId:', tokenId);
//                 nftDetailsURL = "https://openbisea.io/detailsnft?tokenID=" + tokenId;
//                 // document.querySelector("#progress").style.display = "none";

//                 document.querySelector("#mint").disabled = false;
//                 document.querySelector("#buy-obs-result").style.display = "inline-block";
//                 document.querySelector("#link-to-nft-details").style.display = "inline-block";
//                 resultURL = "https://bscscan.com/tx/" + mintNFTResult.transactionHash
//                 if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + mintNFTResult.transactionHash
//                 // document.querySelector("#progress").style.display = "none";
//             } else {
//                 document.querySelector("#progress").style.display = "none";
//             }
//             clearInterval(sendOrderStatus);
//         })
//         .catch(error => {
//             console.error(error)
//         })

// }

function extFrom(name) {
    const lastDot = name.lastIndexOf('.');
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
    return ext
}
let extentionImage
let extentionAnimation
let base64image
const handleImageUpload = async event => {
    const files = event.target.files
    extentionImage = extFrom(files[0].name)

    base64image = await getBase64(files[0]);
    base64image = base64image.split(',')[1];
    // console.log('base64image ' + base64image );
    document.querySelector("#mint").disabled = false;
    document.querySelector("#imageUpload").textContent = "Image uploaded";
}
let base64animation

const handleAnimationUpload = async event => {
    const files = event.target.files
    base64animation = await getBase64(files[0]);
    base64animation = base64animation.split(',')[1];
    extentionAnimation = extFrom(files[0].name)

    document.querySelector("#mint").disabled = false;
    document.querySelector("#animationUpload").textContent = "Animation uploaded";
}

let base64glb

const handleGlbUpload = async event => {
    const files = event.target.files
    base64glb = await getBase64(files[0]);
    base64glb = base64glb.split(',')[1];

    document.querySelector("#mint").disabled = false;
    document.querySelector("#animationUpload").textContent = "3D model uploaded";
}

let nftBulkList = []

const handleCsvUpload = async event => {
    function readFile(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject(fileReader.error);
            };
            fileReader.readAsText(file);
        });
    }

    const files = event.target.files
    const fileContent = await readFile(event.target.files[0]);

    let nfts = fileContent.split('\n');
    console.log('fileContent', fileContent);

    const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org'));
    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";
    const erc721abi = _erc721abi;

    let nftContract = new web3.eth.Contract(erc721abi, nftContractAddress);
    let totalSupply = parseInt(await nftContract.methods.totalSupply().call().catch(function (error) {
        console.log('ownerOf:' + error)
    }));
    let preview = "NFT list to add:"
    for (const nft of nfts) {
        const nftObject = nft.split(';');
        //name;description;artist;public url;image url; external url (optional)
        const name = nftObject[0]
        const description = nftObject[1]
        const artist = nftObject[2]
        const public_url = nftObject[3]
        const image_url = nftObject[4]
        if (name === undefined || description === undefined || artist === undefined || public_url === undefined || image_url === undefined) {
            preview = preview + "\nERROR!!! - must filled all fields in:" + nft;
            continue;
        }
        let external_url = "https://openbisea.io/detailsnft?tokenID=" + totalSupply
        totalSupply = totalSupply + 1;
        if (nftObject.length > 5) {
            external_url = nftObject[5]
        }
        preview = preview + "\n" + name + ";" + description + ";" + artist + ";" + public_url + ";" + image_url + ";" + external_url;
        nftBulkList.push({
            name: name,
            description: description,
            artist: artist,
            public_url: public_url,
            image_url: image_url,
            external_url: external_url
        })
    }
    document.querySelector("#csvInfo").innerText = preview;
    console.log('document.querySelector("#csvInfo"):', document.querySelector("#csvInfo"));

    document.querySelector("#mint").disabled = false;
    document.querySelector("#fileCsvUpload").textContent = "CSV uploaded";
}


// walletconnect_details_nft_uni.html

let tokenIDsaved;
let contractSaved;
let isTestnetSaved;

let ownerOftoken;

function sendOrderStatusFunction(attempts = 0) {
    if (window.BinanceChain !== undefined) {
        clearInterval(sendOrderStatus);
        console.log("YES window.BinanceChain ");

        const BinanceChain = window.BinanceChain;
        provider = BinanceChain;

        let currentChainId = BinanceChain.chainId;
        console.log('currentChainId:' + currentChainId);

        BinanceChain.on('chainChanged', handleChainChanged);

        function handleChainChanged(_chainId) {
            // We recommend reloading the page, unless you must do otherwise
            window.location.reload();
        }

        let currentAccount = null;
        BinanceChain
            .request({
                method: 'eth_accounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                // Some unexpected error.
                // For backwards compatibility reasons, if no accounts are available,
                // eth_accounts will return an empty array.
                console.error(err);
            });

        BinanceChain.on('accountsChanged', handleAccountsChanged);

        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                // Binance Chain Wallet is locked or the user has not connected any accounts
                console.log('Please connect to Binance Chain Wallet.');
            } else if (accounts[0] !== currentAccount) {
                currentAccount = accounts[0];
                console.log('currentAccount:' + currentAccount);
                fetchAccountData()
                // Do any other work!
            }
        }

        BinanceChain
            .request({
                method: 'eth_requestAccounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });

    } else {
        console.log("NO window.BinanceChain ");
        attempts = attempts + 1;
        if (attempts > 5) {
            clearInterval(sendOrderStatusFunction);
        }
    }
}




async function updatePage() {
    let query = getQueryParams(document.location.search);
    tokenIDsaved = query.tokenID;
    contractSaved = query.contract;
    isTestnetSaved = query.testnet;
    console.log("query is", query);
    console.log("isTestnetSaved is", isTestnetSaved);
    let url = 'https://bsc-dataseed1.binance.org';
    if (isTestnetSaved === '1') {
        url = 'https://data-seed-prebsc-1-s2.binance.org:8545/'
    }
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    console.log("Web3 chainId is", chainId);

    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    if (chainId === 97) nftContractAddress = "0x873783a6c4586c196adfdb15c8acdc576b799938";
    if (contractSaved !== undefined) {
        nftContractAddress = contractSaved
    }
    const erc721abi = _erc721abi;

    let nftContract = new web3.eth.Contract(erc721abi, nftContractAddress);
    ownerOftoken = await nftContract.methods.ownerOf(query.tokenID + "").call().catch(function (error) {
        console.log('ownerOf:' + error)
    });

    let tokenURI = await nftContract.methods.tokenURI(query.tokenID + "").call().catch(function (error) {
        console.log('tokenURI:' + error)
    });
    console.log("tokenURI is", tokenURI);

    if (tokenURI.includes("ipfs://ipfs/")) {
        tokenURI = tokenURI.replace('ipfs://ipfs/', 'https://ipfs.io/ipfs/');
    } else {
        tokenURI = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    console.log("tokenURI after", tokenURI);

    let response = await fetch(tokenURI);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let tokenMetadata = await response.json();
        console.log("tokenMetadata", tokenMetadata);
        if (ownerOftoken.toLowerCase() === "0x1d2dfE8D85ddD235cb48a1282d45444543313A5B".toLowerCase()) {
            document.querySelector("#owner").textContent = "NFT owner is OpenBiSea Auction contract, check auction list bellow.";
        } else {
            document.querySelector("#owner").textContent = "NFT owner is " + ownerOftoken;
        }
        console.log("ownerOftoken", ownerOftoken);
        if (tokenMetadata.media !== undefined) {
            document.querySelector("#threed").style.display = "inline-block";
            document.querySelector("#threed").src = tokenMetadata.media.uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
        }
        if (tokenMetadata.image !== undefined) {
            tokenMetadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
            document.querySelector("#image").src = tokenMetadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
        }

        document.querySelector("#name").value = tokenMetadata.name;
        if (tokenMetadata.description !== undefined) document.querySelector("#desc").value = tokenMetadata.description;
        else document.querySelector("#desc").style.display = "none"

        if (tokenMetadata.properties !== undefined) document.querySelector("#artist").value = tokenMetadata.properties.artist;
        else document.querySelector("#artist").style.display = "none"
        if (tokenMetadata.properties !== undefined) document.querySelector("#public_profile_link").value = tokenMetadata.properties.public_profile_link;
        else document.querySelector("#public_profile_link").style.display = "none"
        // document.querySelector("#description").textContent = tokenMetadata.description;
        console.log("document.querySelector(#name)", document.querySelector("#description"));

    }
}

//let auctionsNormalized = {};

async function onCreateClick() {
    let url = "https://openbisea.io/auctioncreate-v2?tokenID=" + tokenIDsaved;
    if (contractSaved !== undefined) url = url + "&contract=" + contractSaved;
    window.open(url, '_blank').focus();
}

async function onCancelClick() {
    document.querySelector("#progress").style.display = "block";
    document.querySelector("#cancel-auction").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#cancel-auction").disabled = false;
        return;
    }

    const openbiseaABI = _openbiseaABI;
    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    const openbiseaContract = new web3.eth.Contract(openbiseaABI, openbiseaAddress);
    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";
    if (contractSaved !== undefined) {
        nftContractAddress = contractSaved
    }
    let cancelResult = await openbiseaContract.methods.cancelAuction(nftContractAddress, tokenIDsaved + "", false).send({
        from: selectedAccount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#progress").textContent = err.message;
        document.querySelector("#cancel-auction").disabled = false;
    });

    if (cancelResult !== undefined) {
        console.log('cancelResult:', cancelResult.transactionHash);
        // element.disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + cancelResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + cancelResult.transactionHash
        document.querySelector("#progress").style.display = "none";
        document.querySelector("#cancel-auction").disabled = false;
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);
}

async function onOpenImageClick(element) {
    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex);
    window.open(auctionsNormalized[element.parentNode.parentNode.rowIndex].image, '_blank').focus();
}

async function onAllowClick(element) {
    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex);
    const auctionInfo = auctionsNormalized[element.parentNode.parentNode.rowIndex];
    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";

    let busdAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
    if (chainId === 97) busdAddress = "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47";

    const busdABI = _busdABI;
    const busd = new web3.eth.Contract(JSON.parse(busdABI), busdAddress);

    const amountText = element.parentNode.parentNode.children[4].children[0].value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= auctionInfo.priceDouble) {
        document.querySelector("#progress").textContent = "must be more than last bid";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    element.disabled = true;
    const purchaseAmount = Number(parseFloat(amountText) * (10 ** 18)).toFixed(0) + '';

    let approveResult = await busd.methods.approve(openbiseaAddress, purchaseAmount).send({
        from: selectedAccount
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#progress").textContent = err.message;
    });
    if (approveResult !== undefined) {
        console.log('bidResult:', approveResult.transactionHash);
        element.disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + approveResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + approveResult.transactionHash
        document.querySelector("#progress").style.display = "none";
        element.parentNode.parentNode.children[6].children[0].removeAttribute("disabled");
        element.style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);

}

async function onBidClick(element) {
    // var element = event.target || event.srcElement;
    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex);
    const auctionInfo = auctionsNormalized[element.parentNode.parentNode.rowIndex];

    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    const openbiseaABI = _openbiseaABI;
    const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);

    console.log("1", element.parentNode.parentNode);
    console.log("2", element.parentNode.parentNode.children[4]);
    console.log("3", element.parentNode.parentNode.children[4].children[0]);

    const amountText = element.parentNode.parentNode.children[4].children[0].value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= auctionInfo.priceDouble) {
        document.querySelector("#progress").textContent = "must be more than last bid";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    element.disabled = true;

    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";
    if (contractSaved !== undefined) {
        nftContractAddress = contractSaved
    }
    const purchaseAmount = Number(parseFloat(amountText) * (10 ** 18)).toFixed(0) + '';
    let bidResult
    console.log("auctionInfo", auctionInfo);
    console.log("purchaseAmount", purchaseAmount);
    console.log("amountText", amountText);
    console.log("element.parentNode", element.parentNode);
    console.log("element.parentNode.parentNode", element.parentNode.parentNode);
    if (auctionInfo.isUSD === true) {
        // NEED allowance.
        bidResult = await openbisea.methods.bidUSD(nftContractAddress, auctionInfo.tokenID + "", purchaseAmount, false).send({
            from: selectedAccount,
            gas: 500000
        }).catch((err) => {
            console.log('err->' + JSON.stringify(err));
            document.querySelector("#progress").textContent = err.message;
        });
    } else {
        bidResult = await openbisea.methods.bid(nftContractAddress, auctionInfo.tokenID + "", false).send({
            from: selectedAccount,
            value: purchaseAmount,
            gas: 500000
        }).catch((err) => {
            console.log('err->' + JSON.stringify(err));
            document.querySelector("#progress").textContent = err.message;
        });
    }

    if (bidResult !== undefined) {
        console.log('bidResult:', bidResult.transactionHash);
        element.disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + bidResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + bidResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);
}

async function onWhitelist() {
    // var element = event.target || event.srcElement;

    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    const openbiseaABI = _openbiseaABI;
    const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);

    let whitelistResult = await openbisea.methods.whitelistContractCreator(contractSaved).send({
        from: selectedAccount,
        gas: 500000,
        value: "88800000000000000"
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#progress").textContent = err.message;
    });

    if (whitelistResult !== undefined) {
        console.log('whitelistResult:', whitelistResult.transactionHash);
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + whitelistResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + whitelistResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);
}



// walletconnect_auctuons_uni.html

function sendOrderStatusAuctionsFunction(attempts = 0) {
    if (window.BinanceChain !== undefined) {
        clearInterval(sendOrderStatus);
        console.log("YES window.BinanceChain ");

        const BinanceChain = window.BinanceChain;
        provider = BinanceChain;

        let currentChainId = BinanceChain.chainId;
        console.log('currentChainId:' + currentChainId);

        BinanceChain.on('chainChanged', handleChainChanged);

        function handleChainChanged(_chainId) {
            // We recommend reloading the page, unless you must do otherwise
            window.location.reload();
        }
        let currentAccount = null;
        BinanceChain
            .request({
                method: 'eth_accounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                // Some unexpected error.
                // For backwards compatibility reasons, if no accounts are available,
                // eth_accounts will return an empty array.
                console.error(err);
            });

        BinanceChain.on('accountsChanged', handleAccountsChanged);

        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                // Binance Chain Wallet is locked or the user has not connected any accounts
                console.log('Please connect to Binance Chain Wallet.');
            } else if (accounts[0] !== currentAccount) {
                currentAccount = accounts[0];
                console.log('currentAccount:' + currentAccount);
                fetchAccountData()
                // Do any other work!
            }
        }

        BinanceChain
            .request({
                method: 'eth_requestAccounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    } else {
        console.log("NO window.BinanceChain ");
        attempts = attempts + 1;
        if (attempts > 5) {
            clearInterval(sendOrderStatus);
        }
    }
}


let auctionsNormalized = {};

async function onOpenImageClick(element) {
    let text = 'https://openbisea.io/detailsnft-v2?tokenID=' + auctionsNormalized[element.parentNode.parentNode.rowIndex].tokenID + "&contract=" + auctionsNormalized[element.parentNode.parentNode.rowIndex].contract;

    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex + " text: " + text);
    copyToClipboard(text)
    // window.open(auctionsNormalized[element.parentNode.parentNode.rowIndex].image, '_blank').focus();
}

async function onAllowClick(element) {
    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex);
    const auctionInfo = auctionsNormalized[element.parentNode.parentNode.rowIndex];
    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }

    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";

    let busdAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
    if (chainId === 97) busdAddress = "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47";

    const busdABI = _busdABI;
    const busd = new web3.eth.Contract(JSON.parse(busdABI), busdAddress);

    const amountText = element.parentNode.parentNode.children[4].children[0].value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= auctionInfo.priceDouble) {
        document.querySelector("#progress").textContent = "must be more than last bid";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }

    element.disabled = true;
    element.parentNode.parentNode.children[4].children[0].setAttribute("readonly", true)
    console.log('element.parentNode.parentNode.children[4].children[0]:', element.parentNode.parentNode.children[4].children[0]);

    const purchaseAmount = Number(parseFloat(amountText) * (10 ** 18)).toFixed(0) + '';

    let approveResult = await busd.methods.approve(openbiseaAddress, purchaseAmount).send({
        from: selectedAccount
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#progress").textContent = err.message;
        element.parentNode.parentNode.children[4].children[0].setAttribute("readonly", false);
    });

    if (approveResult !== undefined) {
        console.log('bidResult:', approveResult.transactionHash);
        element.disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + approveResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + approveResult.transactionHash
        document.querySelector("#progress").style.display = "none";
        element.parentNode.parentNode.children[6].children[0].removeAttribute("disabled");
        element.style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
        element.parentNode.parentNode.children[4].children[0].setAttribute("readonly", false);
    }

    clearInterval(sendOrderStatus);
}

async function onBidClick(element) {
    var element = event.target || event.srcElement;
    console.log("row" + element.parentNode.parentNode.rowIndex + " - column" + element.parentNode.cellIndex);
    const auctionInfo = auctionsNormalized[element.parentNode.parentNode.rowIndex];

    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }

    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';
    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";
    const openbiseaABI = _openbiseaABI;
    const openbisea = new web3.eth.Contract(openbiseaABI, openbiseaAddress);

    console.log("1", element.parentNode.parentNode);
    console.log("2", element.parentNode.parentNode.children[4]);
    console.log("3", element.parentNode.parentNode.children[4].children[0]);

    const amountText = element.parentNode.parentNode.children[4].children[0].value;
    const amountDouble = parseFloat(amountText);
    if (amountDouble <= auctionInfo.priceDouble) {
        document.querySelector("#progress").textContent = "must be more than last bid";
        element.disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    element.disabled = true;

    let nftContractAddress = auctionInfo.contract; //"0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";

    const purchaseAmount = Number(parseFloat(amountText) * (10 ** 18)).toFixed(0) + '';
    let bidResult
    console.log("auctionInfo", auctionInfo);
    console.log("purchaseAmount", purchaseAmount);
    console.log("amountText", amountText);
    console.log("element.parentNode", element.parentNode);
    console.log("element.parentNode.parentNode", element.parentNode.parentNode);

    if (auctionInfo.isUSD === true) {
        // NEED allowance.
        bidResult = await openbisea.methods.bidUSD(nftContractAddress, auctionInfo.tokenID + "", purchaseAmount, false).send({
            from: selectedAccount,
            gas: 500000
        }).catch((err) => {
            console.log('err->' + JSON.stringify(err));
            document.querySelector("#progress").textContent = err.message;
        });
    } else {
        bidResult = await openbisea.methods.bid(nftContractAddress, auctionInfo.tokenID + "", false).send({
            from: selectedAccount,
            value: purchaseAmount,
            gas: 500000
        }).catch((err) => {
            console.log('err->' + JSON.stringify(err));
            document.querySelector("#progress").textContent = err.message;
        });
    }

    if (bidResult !== undefined) {
        console.log('bidResult:', bidResult.transactionHash);
        element.disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + bidResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + bidResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }

    clearInterval(sendOrderStatus);
}


//walletconnect_auction_create_uni.html

function sendOrderStatusAuctionFunction(attempts = 0) {
    if (window.BinanceChain !== undefined) {
        clearInterval(sendOrderStatus);
        console.log("YES window.BinanceChain ");

        const BinanceChain = window.BinanceChain;
        provider = BinanceChain;

        let currentChainId = BinanceChain.chainId;
        console.log('currentChainId:' + currentChainId);

        BinanceChain.on('chainChanged', handleChainChanged);

        function handleChainChanged(_chainId) {
            // We recommend reloading the page, unless you must do otherwise
            window.location.reload();
        }

        let currentAccount = null;
        BinanceChain
            .request({
                method: 'eth_accounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                // Some unexpected error.
                // For backwards compatibility reasons, if no accounts are available,
                // eth_accounts will return an empty array.
                console.error(err);
            });

        BinanceChain.on('accountsChanged', handleAccountsChanged);

        function handleAccountsChanged(accounts) {
            if (accounts.length === 0) {
                // Binance Chain Wallet is locked or the user has not connected any accounts
                console.log('Please connect to Binance Chain Wallet.');
            } else if (accounts[0] !== currentAccount) {
                currentAccount = accounts[0];
                console.log('currentAccount:' + currentAccount);
                fetchAccountData()
                // Do any other work!
            }
        }
        BinanceChain
            .request({
                method: 'eth_requestAccounts'
            })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    } else {
        console.log("NO window.BinanceChain ");
        attempts = attempts + 1;

        if (attempts > 5) {
            clearInterval(sendOrderStatus);
        }
    }
}

async function onApproveNFT() {
    document.querySelector("#progress").style.display = "block";
    document.querySelector("#approveNFT").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#approveNFT").disabled = true;
        return;
    }

    const openBiSeaAuctionAddressTestnet = "0xA72821226E7ac461A3CA30434f3D4671c8A3DC37";
    const openBiSeaAuctionAddressMainnet = "0x1d2dfE8D85ddD235cb48a1282d45444543313A5B";
    let openBiSeaAuctionAddress = openBiSeaAuctionAddressMainnet;
    if (chainId === 97) openBiSeaAuctionAddress = openBiSeaAuctionAddressTestnet;

    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    nftContractAddress = document.querySelector("#name").value
    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";

    const erc721abi = _erc721abi;

    let nftContract = new web3.eth.Contract(erc721abi, nftContractAddress);
    let tokenID = document.querySelector("#tokenID").value;
    console.log('tokenID->' + tokenID);

    let approveNFTResult = await nftContract.methods.approve(openBiSeaAuctionAddress, tokenID + "").send({
        from: selectedAccount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#obsamount").textContent = err.message;
    });

    if (approveNFTResult !== undefined) {
        console.log('approveNFTResult:', approveNFTResult.transactionHash);
        document.querySelector("#create").disabled = false;
        document.querySelector("#approveNFT").disabled = true;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + approveNFTResult.transactionHash;

        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + approveNFTResult.transactionHash;
        document.querySelector("#progress").style.display = "none";
    } else {
        document.querySelector("#progress").style.display = "none";
    }

    clearInterval(sendOrderStatus);
}

async function onCreate() {
    document.querySelector("#progress").style.display = "block";
    document.querySelector("#create").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#create").disabled = true;
        return;
    }

    let bnbPrice = document.querySelector("#bnbPrice").value;
    let busdPrice = document.querySelector("#busdPrice").value;
    if (bnbPrice > 0 && busdPrice > 0) {
        document.querySelector("#progress").textContent = "Please choose BUSD or BNB price, leave 0 for opposite.";
        document.querySelector("#create").disabled = false;
        clearInterval(sendOrderStatus);
        return;
    }

    if (bnbPrice === 0 && busdPrice === 0) {
        document.querySelector("#progress").textContent = "Please fill BUSD or BNB price.";
        document.querySelector("#create").disabled = false;
        clearInterval(sendOrderStatus);
        return;
    }

    let isUSD = true;
    let price = busdPrice
    if (bnbPrice > 0) {
        isUSD = false;
        price = bnbPrice
    }

    let deadlineResult = document.querySelector("#deadline").value
    console.log('deadlineResult->' + deadlineResult);
    if (deadlineResult.length === 0) {
        document.querySelector("#progress").textContent = "Please choose date.";
        document.querySelector("#create").disabled = false;
        clearInterval(sendOrderStatus);
        return;
    }

    let deadline = (new Date(deadlineResult)).getTime() / 1000;
    if (deadline === 0) {
        document.querySelector("#progress").textContent = "Date can't parsed";
        document.querySelector("#create").disabled = false;
        clearInterval(sendOrderStatus);
        return;
    }

    let tokenID = document.querySelector("#tokenID").value
    console.log('tokenID->' + tokenID);

    if (tokenID.length === 0) {
        document.querySelector("#progress").textContent = "Please choose tokenID.";
        document.querySelector("#create").disabled = false;
        clearInterval(sendOrderStatus);
        return;
    }

    const priceWei = price * (10 ** 18) + '';
    console.log('priceWei->' + priceWei + 'deadline->' + deadline + ' isUSD->' + isUSD + ' tokenID->' + tokenID);

    const openbiseaABI = _openbiseaABI;
    let openbiseaAddress = '0x7b1AC460c155ABb6b1D02b543952426A6aaF6b72';

    if (chainId === 97) openbiseaAddress = "0x66Ddd56AB8F961a31Ef344086589D53Ee0b6944a";

    const openbiseaContract = new web3.eth.Contract(openbiseaABI, openbiseaAddress);
    let nftContractAddress = "0xb861DF245fc18483235D9C11b87d8A76F4678e08";
    nftContractAddress = document.querySelector("#name").value

    if (chainId === 97) nftContractAddress = "0x4F59D55D1c91fFD3267d560C37605409A7c885b9";

    let createResult = await openbiseaContract.methods.createAuction(nftContractAddress, tokenID + "", priceWei, deadline + "", false, isUSD).send({
        from: selectedAccount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        document.querySelector("#progress").textContent = err.message;
    });

    if (createResult !== undefined) {
        console.log('createResult:', createResult.transactionHash);
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://bscscan.com/tx/" + createResult.transactionHash
        if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + createResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }
    clearInterval(sendOrderStatus);
}
/**
 * Buy button pressed.
 */
async function onMint() {
    document.querySelector("#mint").disabled = true;
    document.querySelector("#progress").style.display = "block";

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 56 && chainId !== 97) {
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#mint").disabled = true;
        // document.querySelector("#progress").style.display = "none";
        return;
    }
    let nftAddress = '0xb861DF245fc18483235D9C11b87d8A76F4678e08';
    if (chainId === 97) nftAddress = "0x873783a6c4586C196adfDb15C8ACdc576B799938";
    const nftABI = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenUri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd0def521"}]');
    const nft = new web3.eth.Contract(nftABI, nftAddress);

    if (nftBulkList.length > 0) {
        document.querySelector("#csvInfo").innerText = "NFT mint Result:";
        let index = nftBulkList.length - 1;
        for (const nft of nftBulkList) {
            let body = {
                name:nft.name,
                description:nft.description,
                external_url:nft.external_url,
                image_url:nft.image_url,
                properties: {
                    artist:nft.artist,
                    public_profile_link:nft.public_url
                }
            };
            console.log('body:', body);

            let resultMint = await mintNFT(body);
            console.log('resultMint:', resultMint);
            document.querySelector("#csvInfo").innerText =  document.querySelector("#csvInfo").innerText + "\n" + resultMint[0]+ "\n" + resultMint[1]
            index = index -1
            if (index === 0 ) {
                document.querySelector("#mint").disabled = false;
                clearInterval(sendOrderStatus);
            }

        }
        return;
    }
    let description = document.querySelector("#desc").value
    let description_text = document.querySelector("#desc").textContent
    console.log('description:', document.querySelector("#desc"));
    console.log('description_text:', description_text);

    let body = {
        name:document.querySelector("#name").value,
        description:description,
        image:base64image,
        ext:extentionImage,
        image_url:document.querySelector("#linkToImage").value,
        animation_url:document.querySelector("#linkToVideo").value,
        glb_url:document.querySelector("#linkToGlb").value,
        properties: {
            artist:document.querySelector("#artist").value,
            public_profile_link:document.querySelector("#public_profile_link").value
        }
    };
    if (base64animation !== undefined) {
        body.animation = base64animation;
        body.extAnimation = extentionAnimation;
    }
    if (base64glb !== undefined) {
        body.glb = base64glb;
    }
    console.log(JSON.stringify(body));
    // fetch('https://mac8.cfc.io/api/ipfsForNFT', {

    fetch('https://mac8.cfc.io/api/ipfsForNFT', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.text())
        .then(async data => {
            console.log(data);
            if (data.length !== 46) {
                console.log('wrong data');
                return;
            }
            let link = 'ipfs://' + data;


            let mintNFTResult = await nft.methods.mint(selectedAccount,link).send({
                from: selectedAccount,
                gas: 500000
            }).catch((err) => {
                console.log('err->' + JSON.stringify(err) );
                document.querySelector("#progress").textContent = err.message;
            });
            if (mintNFTResult !== undefined) {

                console.log('mintNFTResult:', mintNFTResult);
                const tokenId = mintNFTResult.events.Transfer.returnValues.tokenId
                document.querySelector("#progress").textContent = "Your link to share: https://openbisea.io/detailsnft?tokenID=" + tokenId;
                console.log('tokenId:', tokenId);
                nftDetailsURL = "https://openbisea.io/detailsnft?tokenID=" + tokenId;
                // document.querySelector("#progress").style.display = "none";

                document.querySelector("#mint").disabled = false;
                document.querySelector("#buy-obs-result").style.display = "inline-block";
                document.querySelector("#link-to-nft-details").style.display = "inline-block";
                resultURL = "https://bscscan.com/tx/" + mintNFTResult.transactionHash
                if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + mintNFTResult.transactionHash
                document.querySelector("#progress").style.display = "none";
            } else {
                document.querySelector("#progress").style.display = "none";
            }
            clearInterval(sendOrderStatus);
        })
        .catch(error => {
            console.error(error)
            document.querySelector("#progress").textContent = "Error:" + error;
        })

}


// walletconnect_bridge_uni.html

async function onApprove(isBSC) {
    console.log('onApprove->' + isBSC);

    document.querySelector("#progress").style.display = "block";
    document.querySelector("#approve").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (isBSC === false && chainId !== 1 && chainId !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only ETH mainnet";
        document.querySelector("#approve").disabled = false;
        return;
    }

    if (isBSC === true && chainId !== 56 && chainId !== 97) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#approve").disabled = false;
        return;
    }

    const contract = document.querySelector("#contract").value;
    if (contract === undefined || contract.length !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Wrong contract length";
        document.querySelector("#approve").disabled = false;
        return;
    }

    const type = parseInt(document.querySelector("#type").value);
    let amount = parseFloat(document.querySelector("#amount").value);
    if (amount.length === 0 || isNaN(amount)) amount = 1;
    const tokenID = parseInt(document.querySelector("#tokenID").value);

    if (type !== 20 && isNaN(tokenID)) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "TokenID must specified for ERC721/ERC1155 ";
        document.querySelector("#approve").disabled = false;
        return;
    }

    let ethAddress = '0x0440e9FA9C4c4C2B60A8942c64a870b9cd8e03FE';
    if (chainId === 42) ethAddress = "0xa47d25C2fa71f6e4790A3F3C6290ba14672f43F5";

    let bscAddress = '0xEEE87Dad2A6Ba15c301e3f6bc2bfB0ac1051EeA9';
    if (chainId === 97) bscAddress = "0x9d46937dDec8f9cEF796C1f30c1D92a4d1da18D6";

    let method;
    let contractObj;
    let contractAddress = contract;
    let addressForApproval = ethAddress;
    if (isBSC === true) {
        const bscAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"bep20Impl","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"bep20ProxyAdminAddr","type":"address"},{"internalType":"address","name":"erc721Impl","type":"address"},{"internalType":"uint256","name":"fee721","type":"uint256"},{"internalType":"address","name":"erc721ProxyAdminAddr","type":"address"},{"internalType":"address","name":"erc1155Impl","type":"address"},{"internalType":"uint256","name":"fee1155","type":"uint256"},{"internalType":"address","name":"erc1155ProxyAdminAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap1155Filled","type":"event","signature":"0x3656b6ae101e5a48382e246af477ac87f2e485a3beb4df5e4f1613a3c5b70303"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap1155Started","type":"event","signature":"0x1036aa5f58d80d7f7b8dd12ada9f74506ed8e12ee0053e53f0b61972bcc981c7"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swap721Filled","type":"event","signature":"0xdcf4a9a6cf1fd8be24480de01b10dd08e20e6a2e50bee21faefe2311de2bc58e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap721Started","type":"event","signature":"0xdd8c17ff964c6528e94cefcba62cee301ea5b2cc5218f2a93e939e546c1b54a7"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapFilled","type":"event","signature":"0x3bebd9a738291e69898b5dbfadb6329b4b09fc648bdef68762928e521463abd9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"SwapPair1155Created","type":"event","signature":"0x7f526265d038a88d8af434336358e2e8ebe634c6ed6d84da4d531b4c2f214ff9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"SwapPair721Created","type":"event","signature":"0x42db815f9d474fb2c517f165903cec11218a98d583f03930461e1f44ce3dc1f3"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"SwapPairCreated","type":"event","signature":"0xcc0314763eabceb74cd3d30ae785c09bfe4e204af2088b3bfcdbbe5082133db5"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"SwapStarted","type":"event","signature":"0x49c08ff11118922c1e8298915531eff9ef6f8b39b44b3e9952b75d47e1d0cdd0"},{"inputs":[],"name":"bep20Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x66fec65c"},{"inputs":[],"name":"bep20ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0344165a"},{"inputs":[],"name":"erc1155Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6e204c41"},{"inputs":[],"name":"erc1155ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3f7dffdc"},{"inputs":[],"name":"erc721Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a80a319"},{"inputs":[],"name":"erc721ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0b9edecc"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"filledETHTx","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4e2dc7f1"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"swap1155Fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x90f1adca"},{"inputs":[],"name":"swap721Fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3ccb5bfc"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x54cf2aeb"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"swapMappingBSC2ETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xbe0ace69"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"swapMappingETH2BSC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x60b810f1"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x34e19907"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"createSwapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x32bd6e31"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"name":"createSwapPair721","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x9c1e5828"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"createSwapPair1155","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x3a025b49"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fillETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xe307b931"},{"inputs":[{"internalType":"address","name":"bep20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapBSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x1ba3b150"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"fill721ETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x6ec2643d"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fill1155ETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4516ebe2"},{"inputs":[{"internalType":"address","name":"bep721Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"swap721BSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xdac3e1ab"},{"inputs":[{"internalType":"address","name":"bep1155Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap1155BSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xc5454c3e"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]')
        const bsc = new web3.eth.Contract(bscAbi, bscAddress);
        contractAddress = await bsc.methods.swapMappingETH2BSC(contract).call();
        addressForApproval = bscAddress;
    }
    console.log('contract->' + contract);
    console.log('contractAddress->' + contractAddress);
    console.log('amount->' + amount);
    console.log('addressForApproval->' + addressForApproval);
    console.log('tokenID->' + tokenID);

    if (type === 20) {
        const erc20 = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x32424aa3"},{"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd28d8852"},{"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb09f1266"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x893d20e8"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"}]');
        contractObj = new web3.eth.Contract(erc20, contractAddress);
        method = contractObj.methods.approve(addressForApproval, amount + "");
    } else if (type === 721) {
        const erc721abi = _erc721abi;
        contractObj = new web3.eth.Contract(erc721abi, contractAddress);
        method = contractObj.methods.approve(addressForApproval, tokenID + "");
    } else if (type === 1155) {
        const erc1155 = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event","signature":"0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event","signature":"0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event","signature":"0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"},{"inputs":[],"name":"BRONZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe00fd543"},{"inputs":[],"name":"GOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3e4bee38"},{"inputs":[],"name":"SILVER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe3e55f08"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x00fdd58e"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4e1273f4"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2eb2c2d6"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf242432a"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0e89341c"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x731133e9"}]');
        contractObj = new web3.eth.Contract(erc1155, contractAddress);
        method = contractObj.methods.setApprovalForAll(addressForApproval);
    }

    console.log('contractObj->' + contractObj);
    console.log('method->' + method);
    let contractApproveResult = await method.send({
        from: selectedAccount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = err.message;
    });

    if (contractApproveResult !== undefined) {
        console.log('contractRegisterResult:', contractApproveResult.transactionHash);
        document.querySelector("#approve").disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        if (isBSC === true) {
            resultURL = "https://bscscan.com/tx/" + contractApproveResult.transactionHash;
            if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + contractApproveResult.transactionHash;
        } else {
            resultURL = "https://etherscan.io/tx/" + contractApproveResult.transactionHash;
            if (chainId === 42) resultURL = "http://kovan.etherscan.io/tx/" + contractApproveResult.transactionHash;
        }

        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }

    clearInterval(sendOrderStatus);
}

async function onConvert(isBSC) {
    document.querySelector("#progress").style.display = "block";
    document.querySelector("#convert").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (isBSC === false && chainId !== 1 && chainId !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only ETH mainnet";
        document.querySelector("#convert").disabled = false;
        return;
    }
    if (isBSC === true && chainId !== 56 && chainId !== 97) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only BSC mainnet";
        document.querySelector("#convert").disabled = false;
        return;
    }

    let ethAddress = '0x0440e9FA9C4c4C2B60A8942c64a870b9cd8e03FE';
    if (chainId === 42) ethAddress = "0xa47d25C2fa71f6e4790A3F3C6290ba14672f43F5";

    const type = parseInt(document.querySelector("#type").value);

    const contract = document.querySelector("#contract").value;
    if (contract === undefined || contract.length !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Wrong contract length";
        document.querySelector("#convert").disabled = false;
        return;
    }

    const amount = parseFloat(document.querySelector("#amount").value);
    const tokenID = parseFloat(document.querySelector("#tokenID").value);
    if (type !== 20 && isNaN(tokenID)) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "TokenID must specified for ERC721/ERC1155 ";
        document.querySelector("#convert").disabled = false;
        return;
    }

    let method;
    let swapFee;

    if (isBSC === false) {
        const ethABI = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap1155Filled","type":"event","signature":"0x3656b6ae101e5a48382e246af477ac87f2e485a3beb4df5e4f1613a3c5b70303"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap1155Started","type":"event","signature":"0x8d122de08ad2d600423d7dc7dc12914c74797db61cdb3ffbd6116f9004f0af6a"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swap721Filled","type":"event","signature":"0xdcf4a9a6cf1fd8be24480de01b10dd08e20e6a2e50bee21faefe2311de2bc58e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap721Started","type":"event","signature":"0xc09139a196eea1a99da5f09e3016893e60c2b6aabe784942df8233a5157ab01e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapFilled","type":"event","signature":"0x3bebd9a738291e69898b5dbfadb6329b4b09fc648bdef68762928e521463abd9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"SwapPair1155Register","type":"event","signature":"0xfd26c04769f9fda184e877277305184bcddd883c217f94c9eeee3dd5041f7a79"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"SwapPair721Register","type":"event","signature":"0x1a7c9a5fa5d51a321bc7df01f4a8bd15302e6a5e7dfb8f48e35ea8cf655f7629"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"SwapPairRegister","type":"event","signature":"0xfe3bd005e346323fa452df8cafc28c55b99e3766ba8750571d139c6cf5bc08a0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"SwapStarted","type":"event","signature":"0xf60309f865a6aa297da5fac6188136a02e5acfdf6e8f6d35257a9f4e9653170f"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"filledBSCTx","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x50877c77"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredERC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xee514bc3"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x54cf2aeb"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x34e19907"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"}],"name":"register1155SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x841af51f"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"}],"name":"register721SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x03db8c72"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"}],"name":"registerSwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x5c13c151"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fillBSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x9867df11"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fill721BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x279b4568"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fill1155BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x790486ae"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xb9927a9c"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"swap721ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x08b3def6"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap1155ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x4977937a"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]')
        const eth = new web3.eth.Contract(ethABI, ethAddress);

        if (type === 20) {
            method = eth.methods.swapETH2BSC(contract, amount + "");
        } else if (type === 721) {
            method = eth.methods.swap721ETH2BSC(contract, tokenID + "");
        } else if (type === 1155) {
            method = eth.methods.swap1155ETH2BSC(contract, tokenID + "", amount + "");
        }
        swapFee = await eth.methods.swapFee().call();
    }
    if (isBSC === true) {
        let bscAddress = '0xEEE87Dad2A6Ba15c301e3f6bc2bfB0ac1051EeA9';
        if (chainId === 97) bscAddress = "0x9d46937dDec8f9cEF796C1f30c1D92a4d1da18D6";
        const bscAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"bep20Impl","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"bep20ProxyAdminAddr","type":"address"},{"internalType":"address","name":"erc721Impl","type":"address"},{"internalType":"uint256","name":"fee721","type":"uint256"},{"internalType":"address","name":"erc721ProxyAdminAddr","type":"address"},{"internalType":"address","name":"erc1155Impl","type":"address"},{"internalType":"uint256","name":"fee1155","type":"uint256"},{"internalType":"address","name":"erc1155ProxyAdminAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap1155Filled","type":"event","signature":"0x3656b6ae101e5a48382e246af477ac87f2e485a3beb4df5e4f1613a3c5b70303"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap1155Started","type":"event","signature":"0x1036aa5f58d80d7f7b8dd12ada9f74506ed8e12ee0053e53f0b61972bcc981c7"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swap721Filled","type":"event","signature":"0xdcf4a9a6cf1fd8be24480de01b10dd08e20e6a2e50bee21faefe2311de2bc58e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap721Started","type":"event","signature":"0xdd8c17ff964c6528e94cefcba62cee301ea5b2cc5218f2a93e939e546c1b54a7"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapFilled","type":"event","signature":"0x3bebd9a738291e69898b5dbfadb6329b4b09fc648bdef68762928e521463abd9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"SwapPair1155Created","type":"event","signature":"0x7f526265d038a88d8af434336358e2e8ebe634c6ed6d84da4d531b4c2f214ff9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"SwapPair721Created","type":"event","signature":"0x42db815f9d474fb2c517f165903cec11218a98d583f03930461e1f44ce3dc1f3"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ethRegisterTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"SwapPairCreated","type":"event","signature":"0xcc0314763eabceb74cd3d30ae785c09bfe4e204af2088b3bfcdbbe5082133db5"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bep20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"SwapStarted","type":"event","signature":"0x49c08ff11118922c1e8298915531eff9ef6f8b39b44b3e9952b75d47e1d0cdd0"},{"inputs":[],"name":"bep20Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x66fec65c"},{"inputs":[],"name":"bep20ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0344165a"},{"inputs":[],"name":"erc1155Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6e204c41"},{"inputs":[],"name":"erc1155ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3f7dffdc"},{"inputs":[],"name":"erc721Implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a80a319"},{"inputs":[],"name":"erc721ProxyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0b9edecc"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"filledETHTx","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4e2dc7f1"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"swap1155Fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x90f1adca"},{"inputs":[],"name":"swap721Fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3ccb5bfc"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x54cf2aeb"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"swapMappingBSC2ETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xbe0ace69"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"swapMappingETH2BSC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x60b810f1"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x34e19907"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"createSwapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x32bd6e31"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"name":"createSwapPair721","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x9c1e5828"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"createSwapPair1155","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function","signature":"0x3a025b49"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fillETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xe307b931"},{"inputs":[{"internalType":"address","name":"bep20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapBSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x1ba3b150"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"fill721ETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x6ec2643d"},{"inputs":[{"internalType":"bytes32","name":"ethTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fill1155ETH2BSCSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4516ebe2"},{"inputs":[{"internalType":"address","name":"bep721Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"swap721BSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xdac3e1ab"},{"inputs":[{"internalType":"address","name":"bep1155Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap1155BSC2ETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xc5454c3e"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]')
        const bsc = new web3.eth.Contract(bscAbi, bscAddress);
        let contractAddress = await bsc.methods.swapMappingETH2BSC(contract).call();

        if (type === 20) {
            method = bsc.methods.swapBSC2ETH(contractAddress, amount + "");
        } else if (type === 721) {
            method = bsc.methods.swap721BSC2ETH(contractAddress, tokenID + "");
        } else if (type === 1155) {
            method = bsc.methods.swap1155BSC2ETH(contractAddress, tokenID + "", amount + "");
        }
        swapFee = await bsc.methods.swapFee().call();
    }

    if (method === undefined) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Please choose correct asset type on ETH. 20 for ERC20, 721 for ERC721, 1155 for ERC1155";
        document.querySelector("#convert").disabled = false;
        return;
    }

    console.log('type->' + type);
    console.log('method->' + method);
    console.log('swapFee->' + swapFee);

    let contractConvertResult = await method.send({
        from: selectedAccount,
        gas: 500000,
        value: swapFee
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = err.message;
    });

    if (contractConvertResult !== undefined) {
        console.log('contractRegisterResult:', contractConvertResult.transactionHash);
        document.querySelector("#convert").disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        if (isBSC === true) {
            resultURL = "https://bscscan.com/tx/" + contractConvertResult.transactionHash
            if (chainId === 97) resultURL = "http://testnet.bscscan.com/tx/" + contractConvertResult.transactionHash
        } else {
            resultURL = "https://etherscan.io/tx/" + contractConvertResult.transactionHash
            if (chainId === 42) resultURL = "http://kovan.etherscan.io/tx/" + contractConvertResult.transactionHash
        }
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }

    clearInterval(sendOrderStatus);
}

async function onCheck() {
    // document.querySelector("#progress").style.display = "block";
    document.querySelector("#check").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Checking in progress " + ".".repeat(countDots);
        document.querySelector("#checkres").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 1 && chainId !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only ETH mainnet";
        document.querySelector("#register").disabled = false;
        return;
    }

    const contract = document.querySelector("#contract").value;
    if (contract === undefined || contract.length !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Wrong contract length";
        document.querySelector("#check").disabled = false;
        return;
    }

    let ethAddress = '0x0440e9FA9C4c4C2B60A8942c64a870b9cd8e03FE';
    if (chainId === 42) ethAddress = "0xa47d25C2fa71f6e4790A3F3C6290ba14672f43F5";
    const ethABI = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap1155Filled","type":"event","signature":"0x3656b6ae101e5a48382e246af477ac87f2e485a3beb4df5e4f1613a3c5b70303"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap1155Started","type":"event","signature":"0x8d122de08ad2d600423d7dc7dc12914c74797db61cdb3ffbd6116f9004f0af6a"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swap721Filled","type":"event","signature":"0xdcf4a9a6cf1fd8be24480de01b10dd08e20e6a2e50bee21faefe2311de2bc58e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap721Started","type":"event","signature":"0xc09139a196eea1a99da5f09e3016893e60c2b6aabe784942df8233a5157ab01e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapFilled","type":"event","signature":"0x3bebd9a738291e69898b5dbfadb6329b4b09fc648bdef68762928e521463abd9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"SwapPair1155Register","type":"event","signature":"0xfd26c04769f9fda184e877277305184bcddd883c217f94c9eeee3dd5041f7a79"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"SwapPair721Register","type":"event","signature":"0x1a7c9a5fa5d51a321bc7df01f4a8bd15302e6a5e7dfb8f48e35ea8cf655f7629"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"SwapPairRegister","type":"event","signature":"0xfe3bd005e346323fa452df8cafc28c55b99e3766ba8750571d139c6cf5bc08a0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"SwapStarted","type":"event","signature":"0xf60309f865a6aa297da5fac6188136a02e5acfdf6e8f6d35257a9f4e9653170f"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"filledBSCTx","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x50877c77"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredERC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xee514bc3"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x54cf2aeb"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x34e19907"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"}],"name":"register1155SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x841af51f"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"}],"name":"register721SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x03db8c72"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"}],"name":"registerSwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x5c13c151"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fillBSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x9867df11"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fill721BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x279b4568"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fill1155BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x790486ae"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xb9927a9c"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"swap721ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x08b3def6"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap1155ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x4977937a"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]')
    const eth = new web3.eth.Contract(ethABI, ethAddress);
    let contractCheckingResult = await eth.methods.registeredERC(contract).call();
    console.log('contract->' + contract);
    console.log('contractRegisterResult->' + contractCheckingResult);
    clearInterval(sendOrderStatus);

    if (contractCheckingResult === false) {
        document.querySelector("#checkres").textContent = "Contract not registered, register it first.";
    }
    if (contractCheckingResult === true) {
        document.querySelector("#checkres").textContent = "Contract registered, you can swap assets.";
    }
    document.querySelector("#check").disabled = false;

    clearInterval(sendOrderStatus);
}

async function onRegister() {
    document.querySelector("#progress").style.display = "block";
    document.querySelector("#register").disabled = true;

    let countDots = 0;
    let sendOrderStatus = setInterval(async function () {
        let phrase = "Transaction in progress " + ".".repeat(countDots);
        document.querySelector("#progress").textContent = phrase;
        countDots++;
        if (countDots === 4) countDots = 0;
    }, 1000);

    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    if (chainId !== 1 && chainId !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "We support only ETH mainnet";
        document.querySelector("#register").disabled = false;
        return;
    }

    let ethAddress = '0x0440e9FA9C4c4C2B60A8942c64a870b9cd8e03FE';
    if (chainId === 42) ethAddress = "0xa47d25C2fa71f6e4790A3F3C6290ba14672f43F5";
    const ethABI = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap1155Filled","type":"event","signature":"0x3656b6ae101e5a48382e246af477ac87f2e485a3beb4df5e4f1613a3c5b70303"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap1155Started","type":"event","signature":"0x8d122de08ad2d600423d7dc7dc12914c74797db61cdb3ffbd6116f9004f0af6a"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swap721Filled","type":"event","signature":"0xdcf4a9a6cf1fd8be24480de01b10dd08e20e6a2e50bee21faefe2311de2bc58e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"Swap721Started","type":"event","signature":"0xc09139a196eea1a99da5f09e3016893e60c2b6aabe784942df8233a5157ab01e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapFilled","type":"event","signature":"0x3bebd9a738291e69898b5dbfadb6329b4b09fc648bdef68762928e521463abd9"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155Addr","type":"address"},{"indexed":false,"internalType":"string","name":"uri","type":"string"}],"name":"SwapPair1155Register","type":"event","signature":"0xfd26c04769f9fda184e877277305184bcddd883c217f94c9eeee3dd5041f7a79"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc721Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"SwapPair721Register","type":"event","signature":"0x1a7c9a5fa5d51a321bc7df01f4a8bd15302e6a5e7dfb8f48e35ea8cf655f7629"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"SwapPairRegister","type":"event","signature":"0xfe3bd005e346323fa452df8cafc28c55b99e3766ba8750571d139c6cf5bc08a0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"erc20Addr","type":"address"},{"indexed":true,"internalType":"address","name":"fromAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"}],"name":"SwapStarted","type":"event","signature":"0xf60309f865a6aa297da5fac6188136a02e5acfdf6e8f6d35257a9f4e9653170f"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"filledBSCTx","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x50877c77"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredERC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xee514bc3"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x54cf2aeb"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x34e19907"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"}],"name":"register1155SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x841af51f"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"}],"name":"register721SwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x03db8c72"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"}],"name":"registerSwapPairToBSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x5c13c151"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fillBSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x9867df11"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fill721BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x279b4568"},{"inputs":[{"internalType":"bytes32","name":"bscTxHash","type":"bytes32"},{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fill1155BSC2ETHSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x790486ae"},{"inputs":[{"internalType":"address","name":"erc20Addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0xb9927a9c"},{"inputs":[{"internalType":"address","name":"erc721Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"swap721ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x08b3def6"},{"inputs":[{"internalType":"address","name":"erc1155Addr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap1155ETH2BSC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x4977937a"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0xbc197c81"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"}]')
    const eth = new web3.eth.Contract(ethABI, ethAddress);

    const type = parseInt(document.querySelector("#type").value);

    let method;
    if (type === 20) {
        method = "registerSwapPairToBSC"
    } else if (type === 721) {
        method = "register721SwapPairToBSC"
    } else if (type === 1155) {
        method = "register1155SwapPairToBSC"
    }
    console.log('type->' + type);

    if (method === undefined) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Please choose correct asset type on ETH. 20 for ERC20, 721 for ERC721, 1155 for ERC1155";
        document.querySelector("#register").disabled = false;
        return;
    }

    const contract = document.querySelector("#contract").value;
    if (contract === undefined || contract.length !== 42) {
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = "Wrong contract length";
        document.querySelector("#register").disabled = false;
        return;
    }
    console.log('contract->' + contract);
    console.log('method->' + method);

    let contractRegisterResult = await eth.methods[method](contract).send({
        from: selectedAccount,
        gas: 500000
    }).catch((err) => {
        console.log('err->' + JSON.stringify(err));
        clearInterval(sendOrderStatus);
        document.querySelector("#progress").textContent = err.message;
    });

    if (contractRegisterResult !== undefined) {
        console.log('contractRegisterResult:', contractRegisterResult.transactionHash);
        document.querySelector("#register").disabled = false;
        document.querySelector("#buy-obs-result").style.display = "inline-block";
        resultURL = "https://etherscan.io/tx/" + contractRegisterResult.transactionHash
        if (chainId === 42) resultURL = "http://kovan.etherscan.io/tx/" + contractRegisterResult.transactionHash
        document.querySelector("#progress").style.display = "none";
    } else {
        // document.querySelector("#obsamount").textContent = "Result undefined";
        document.querySelector("#progress").style.display = "none";
    }

    clearInterval(sendOrderStatus);
}

async function onApproveBSC() {
    await onApprove(true);
}

async function onApproveETH() {
    await onApprove(false);
}

async function onConvertBSC() {
    await onConvert(true);
}

async function onConvertETH() {
    await onConvert(false);
}