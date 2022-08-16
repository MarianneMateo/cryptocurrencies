import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Crypto from './components/Crypto';

function App() {
	const [cryptocurrencies, SetCryptocurrencies] = useState([]);

  const initialUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const fetchCryptocurrency = (url) => {
    fetch(url).then((response) => response.json()).then((crypto) => {
        SetCryptocurrencies(crypto);
      })
			.catch(console.log);
	};
  
  useEffect(() => {
    fetchCryptocurrency(initialUrl);
  }, []);

  return (
		<div className="container mt-5">
			<Crypto cryptocurrencies={cryptocurrencies} />
		</div>
	);
}

export default App;
