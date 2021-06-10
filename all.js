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

const _erc721abi = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamAdded","type":"event","signature":"0x3f5f1db80208f0d453083a86e16909cecc1e95e2618d5d927c93ace22b8200fc"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"TeamRemoved","type":"event","signature":"0x26b6063d78aefcf96f02ff06bc9822b5a623278253add7fffa5fb453db399810"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb463a75c"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c0360eb"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[],"name":"getTeamAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x89e52771"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x24851914"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceTeam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd9a431b3"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6a627842"}]');

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