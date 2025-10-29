const contractAddress = "0x75847F0B6525cfB57e6d98F3f2a73Fad7c09Ec2c";

async function connectWallet() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Billetera conectada:", accounts[0]);
        alert("Billetera conectada: " + accounts[0]);
    } else {
        alert("Instalá MetaMask para usar TruekCoin");
    }
}
