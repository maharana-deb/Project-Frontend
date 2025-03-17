// curl \
//  -X GET https://openapi.niftypm.com/api/v1.0/apps?limit=25&offset=0 \
//  -H "Authorization: Bearer $ACCESS_TOKEN"

const apiUrl = 'https://openapi.niftypm.com/api/v1.0/apps?limit=25&offset=0';
// const params = 'limit=25&offset=0';

async function fetchCryptocurrencies() {
    try {
        const response = await fetch(`${apiUrl}`);
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
            <td>${crypto.name}</td>
            
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