async function searchCrypto() {
    const searchBox = document.getElementById('searchBox');
    const cryptoName = searchBox.value.toLowerCase();
    const cryptoInfoDiv = document.getElementById('cryptoInfo');

    cryptoInfoDiv.innerHTML = '';

    if (!cryptoName) {
        cryptoInfoDiv.innerHTML = '<p>Please enter a cryptocurrency name.</p>';
        return;
    }

    const coinUrl = `https://api.coingecko.com/api/v3/coins/${cryptoName}`;

    try {
        const response = await fetch(coinUrl);

        if (!response.ok) {
            throw new Error('Cryptocurrency not found');
        }

        const data = await response.json();

        const cryptoDetails = `
            <div class="crypto-details">
                <div class="crypto-detail"><strong>Name:</strong> ${data.name}</div>
                <div class="crypto-detail"><strong>Symbol:</strong> ${data.symbol.toUpperCase()}</div>
                <div class="crypto-detail"><strong>Current Price:</strong> $${data.market_data.current_price.usd}</div>
                <div class="crypto-detail"><strong>Market Cap:</strong> $${data.market_data.market_cap.usd}</div>
                <div class="crypto-detail"><strong>Total Volume:</strong> $${data.market_data.total_volume.usd}</div>
                <div class="crypto-detail"><strong>24h High:</strong> $${data.market_data.high_24h.usd}</div>
                <div class="crypto-detail"><strong>24h Low:</strong> $${data.market_data.low_24h.usd}</div>
            </div>
            <img src="${data.image.large}" alt="${data.name} logo" class="crypto-image">
        `;

        cryptoInfoDiv.innerHTML = cryptoDetails;
    } catch (error) {
        cryptoInfoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}
