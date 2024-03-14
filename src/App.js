import React, { useEffect, useState } from 'react';
import { ethers  } from 'ethers';

function App() {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
      }
    };

    initializeProvider();
  }, []);

  return (
    <div>
      <h1>Ethers.js and React Integration</h1>
      {/* Your application code goes here */}
    </div>
  );
}

export default App;