const cashBalance = 15000;
const bitcoinAmount = 0.005;
const bitcoinPriceInTL = 3200000;

function calculateCryptoValue(){
   const cryptoValue = bitcoinAmount * bitcoinPriceInTL;

   return cryptoValue;
}

function calculateTotalPortfolio(){
    const cryptoTL = calculateCryptoValue();

   const totalPortfolio = cashBalance + cryptoTL;

    return totalPortfolio;
}

function printFinancialReport() {
    const finalWealth = calculateTotalPortfolio();

    console.log("--- FINANCIAL PORTFOLIO REPORT ---");
    console.log(`Cash Balance: ${cashBalance} TL`);
    console.log(`Total Portfolio Value: ${finalWealth} TL`);
}

printFinancialReport();