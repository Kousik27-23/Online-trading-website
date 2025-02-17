const portfolioContent = document.getElementById('portfolio-content');
const portfolioLink = document.getElementById('portfolio-link'); // Assuming you have a portfolio link

const portfolioData = [ // Sample portfolio data (replace with actual data)
    { symbol: "AAPL", quantity: 10, purchasePrice: 150, currentPrice: 155 },
    { symbol: "GOOG", quantity: 5, purchasePrice: 2500, currentPrice: 2400 },
    { symbol: "TSLA", quantity: 2, purchasePrice: 800, currentPrice: 850 },
];

function updatePortfolioTable() {
    const tableBody = document.querySelector("#portfolio-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    portfolioData.forEach(item => {
        const profitLoss = (item.currentPrice - item.purchasePrice) * item.quantity;
        const row = tableBody.insertRow();
        const symbolCell = row.insertCell();
        const quantityCell = row.insertCell();
        const purchasePriceCell = row.insertCell();
        const currentPriceCell = row.insertCell();
        const profitLossCell = row.insertCell();

        symbolCell.textContent = item.symbol;
        quantityCell.textContent = item.quantity;
        purchasePriceCell.textContent = item.purchasePrice;
        currentPriceCell.textContent = item.currentPrice;
        profitLossCell.textContent = profitLoss.toFixed(2);

        if (profitLoss > 0) {
            profitLossCell.classList.add("profit");
        } else if (profitLoss < 0) {
            profitLossCell.classList.add("loss");
        }
    });
}
if (portfolioLink){
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    homeContent.style.display = 'none';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    marketContent.style.display = 'none';
    portfolioContent.style.display = 'block';
    updatePortfolioTable();
});
}