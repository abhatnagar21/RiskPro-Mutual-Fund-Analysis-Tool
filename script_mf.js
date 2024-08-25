function assessRisk() {
    const stdDev = parseFloat(document.getElementById('std_dev').value);
    const categoryStdDev = parseFloat(document.getElementById('category_std_dev').value);
    const beta = parseFloat(document.getElementById('beta').value);
    const categoryBeta = parseFloat(document.getElementById('category_beta').value);
    const sharpeRatio = parseFloat(document.getElementById('sharpe_ratio').value);
    const categorySharpeRatio = parseFloat(document.getElementById('category_sharpe_ratio').value);
    const treynorRatio = parseFloat(document.getElementById('treynor_ratio').value);
    const categoryTreynorRatio = parseFloat(document.getElementById('category_treynor_ratio').value);
    const jensensAlpha = parseFloat(document.getElementById('jensens_alpha').value);
    const categoryJensensAlpha = parseFloat(document.getElementById('category_jensens_alpha').value);

    let result = "Not Risky";
    let analysis = [];

    if (stdDev > categoryStdDev) {
        analysis.push(`Standard Deviation: High volatility ${stdDev} vs ${categoryStdDev} (Category Avg)`);
    } else {
        analysis.push(`Standard Deviation: Within expected range ${stdDev} vs ${categoryStdDev} (Category Avg)`);
    }

    if (beta > categoryBeta) {
        analysis.push(`Beta: High volatility ${beta} vs ${categoryBeta} (Category Avg)`);
    } else {
        analysis.push(`Beta: Within expected range ${beta} vs ${categoryBeta} (Category Avg)`);
    }

    if (sharpeRatio > categorySharpeRatio) {
        analysis.push(`Sharpe Ratio: Better risk-adjusted returns ${sharpeRatio} vs ${categorySharpeRatio} (Category Avg)`);
    } else {
        analysis.push(`Sharpe Ratio: Below average risk-adjusted returns ${sharpeRatio} vs ${categorySharpeRatio} (Category Avg)`);
    }

    if (treynorRatio > categoryTreynorRatio) {
        analysis.push(`Treynor's Ratio: Better risk-adjusted returns ${treynorRatio} vs ${categoryTreynorRatio} (Category Avg)`);
    } else {
        analysis.push(`Treynor's Ratio: Below average risk-adjusted returns ${treynorRatio} vs ${categoryTreynorRatio} (Category Avg)`);
    }

    if (jensensAlpha > categoryJensensAlpha) {
        analysis.push(`Jensen's Alpha: Better risk-adjusted returns ${jensensAlpha} vs ${categoryJensensAlpha} (Category Avg)`);
    } else {
        analysis.push(`Jensen's Alpha: Below average risk-adjusted returns ${jensensAlpha} vs ${categoryJensensAlpha} (Category Avg)`);
    }

    if (stdDev > categoryStdDev || beta > categoryBeta) {
        result = "Risky";
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h3>${result}</h3><ul>${analysis.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function generateReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const symbol = document.getElementById('symbol').value;
    const stdDev = parseFloat(document.getElementById('std_dev').value);
    const categoryStdDev = parseFloat(document.getElementById('category_std_dev').value);
    const beta = parseFloat(document.getElementById('beta').value);
    const categoryBeta = parseFloat(document.getElementById('category_beta').value);
    const sharpeRatio = parseFloat(document.getElementById('sharpe_ratio').value);
    const categorySharpeRatio = parseFloat(document.getElementById('category_sharpe_ratio').value);
    const treynorRatio = parseFloat(document.getElementById('treynor_ratio').value);
    const categoryTreynorRatio = parseFloat(document.getElementById('category_treynor_ratio').value);
    const jensensAlpha = parseFloat(document.getElementById('jensens_alpha').value);
    const categoryJensensAlpha = parseFloat(document.getElementById('category_jensens_alpha').value);

    let analysis = [];

    analysis.push(`Fund Symbol: ${symbol}`);
    analysis.push(`Standard Deviation: ${stdDev} vs ${categoryStdDev} (Category Avg)`);
    analysis.push(`Beta: ${beta} vs ${categoryBeta} (Category Avg)`);
    analysis.push(`Sharpe Ratio: ${sharpeRatio} vs ${categorySharpeRatio} (Category Avg)`);
    analysis.push(`Treynor's Ratio: ${treynorRatio} vs ${categoryTreynorRatio} (Category Avg)`);
    analysis.push(`Jensen's Alpha: ${jensensAlpha} vs ${categoryJensensAlpha} (Category Avg)`);

    doc.text("Mutual Fund Risk Analysis Report", 20, 20);
    doc.text(analysis.join("\n"), 20, 30);
    doc.save(`${symbol}_Risk_Analysis_Report.pdf`);
}

function fetchData(symbol) {
    // Dummy function for fetching data. Replace with actual API call or logic.
    // For example:
    // axios.get(`API_URL/${symbol}`).then(response => {
    //     // Populate the input fields with response data
    // });
}

