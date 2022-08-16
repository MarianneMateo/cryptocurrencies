import './Crypto.css';

const Crypto = ({ cryptocurrencies }) => {
	return (
		<div className="row row-cols-md-4">
			{cryptocurrencies.map((e, i) => (
				<div key={i} className="col mb-5">
					<div className="card" style={{ minWidth: '200px' }}>
						<img src={e.image} />
						<div className="card-body">
							<h5 className="card-title">{e.name}</h5>
							<hr />
							<p>{e.symbol.toUpperCase()}</p>
							<p>${e.current_price}</p>
							<p>${e.total_volume.toLocaleString()}</p>
							{e.price_change_percentage_24h < 0 ? (
								<p className="red">
									{e.price_change_percentage_24h.toFixed(2)}%
								</p>
							) : (
								<p className="green">
									{e.price_change_percentage_24h.toFixed(2)}%
								</p>
							)}
							<p>Mkt Cap: ${e.market_cap.toLocaleString()}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Crypto;
