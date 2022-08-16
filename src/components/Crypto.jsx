import './Crypto.css';

const Crypto = ({ cryptocurrencies }) => {
	return (
		<div className="row row-cols-md-4">
			{cryptocurrencies.map((e, i) => (
				<div key={i} className="col mb-5">
					<div className="card" style={{ width: '260px'}}>
						<img src={e.image} style={{ width:'35px',  marginLeft: '40%' }} />
						<div className="card-body">
							<h5 className="card-title">{e.name}</h5>
							<p>{e.symbol.toUpperCase()}</p>
							<hr />
							<label style={{ color: '#a9a2a2' }}>Current Price</label>
							<p>${e.current_price}</p>
							<label style={{ color: '#a9a2a2' }}>Volume</label>
							<p>${e.total_volume.toLocaleString()}</p>
							<label style={{ color: '#a9a2a2' }}>% Change price 24h</label>
							{e.price_change_percentage_24h < 0 ? (
								<p className="red">
									{e.price_change_percentage_24h.toFixed(2)}%
								</p>
							) : (
								<p className="green">
									{e.price_change_percentage_24h.toFixed(2)}%
								</p>
							)}
							<label style={{ color: '#a9a2a2' }}>Mkt Cap</label>
							<p>${e.market_cap.toLocaleString()}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Crypto;
