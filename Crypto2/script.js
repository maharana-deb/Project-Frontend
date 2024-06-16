const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
const params = 'vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';

async function fetchCryptocurrencies() {
    try {
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();
        displayCryptocurrencies(data);
    } catch (error) {
        console.error('Error fetching the cryptocurrency data:', error);
    }
}

function displayCryptocurrencies(cryptos) {
    const tbody = document.getElementById('crypto-tbody');
    tbody.innerHTML = '';

    cryptos.slice(0, 200).forEach((crypto, index) => {
        const row = document.createElement('tr');

        const priceChange = crypto.price_change_percentage_24h;
        const priceChangeColor = priceChange >= 0 ? 'green' : 'red';

        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${crypto.image}" alt="${crypto.name} logo" class="logo"></td>
            <td>${crypto.name}</td>
            <td>${crypto.symbol.toUpperCase()}</td>
            <td>$${crypto.current_price.toFixed(2)}</td>
            <td style="color:${priceChangeColor}">${priceChange.toFixed(2)}%</td>
            <td>$${crypto.total_volume.toLocaleString()}</td>
        `;

        tbody.appendChild(row);
    });
}

function searchCrypto() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#crypto-tbody tr');

    rows.forEach(row => {
        const name = row.children[2].textContent.toLowerCase();
        const symbol = row.children[3].textContent.toLowerCase();

        if (name.includes(query) || symbol.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

fetchCryptocurrencies();
setInterval(fetchCryptocurrencies, 60000);