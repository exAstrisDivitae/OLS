// Import X and Y
const data = require('/home/user/path/to/swppxData.js');
const OLS = require('/home/user/path/to/OLS-Regression.js');
const { nullHyp } = require('/home/user/path/to/OLS-Regression.js');

// Titles
console.log('___Ordinary Least Squares Regression___');

console.log(data.title.data);
    
// Summary of Data
console.log('___Summary___');

console.log('Entries: ' + data.X.length);

console.log('X: ' + data.title.X);
console.log('X Mean: ' + OLS.meanX().toFixed(2));

console.log('Y: ' + data.title.Y);
console.log('Y Mean: ' + OLS.meanY().toFixed(2));

console.log(`_For Values of Y in Ascending Order___ Min: ${OLS.YMin().toFixed(2)} , 1Q: ${OLS.Y1Q().toFixed(2)} , Median: ${OLS.YMedian().toFixed(2)} , 3Q: ${OLS.Y3Q().toFixed(2)} , Max: ${OLS.YMax().toFixed(2)}`);

// Line of Best Fit
console.log('___Line of Best Fit___');
console.log('y = B0 + B1 * x + e');

console.log('B0 (Intercept): ' + OLS.bestFitIntercept().toFixed(2));
console.log('B1 (Slope): ' + OLS.bestFitSlope().toFixed(4));

const bestFitLine = () => {
    if (OLS.bestFitSlope() < 0){
        return console.log(`OLS Best-Fit Line: y = ${OLS.bestFitIntercept().toFixed(2)} - ${Math.abs(OLS.bestFitSlope().toFixed(4))} * x`);
    } else {
        return console.log(`OLS Best-Fit Line: y = ${OLS.bestFitIntercept().toFixed(2)} + ${OLS.bestFitSlope().toFixed(4)} * x`);
    }
};
bestFitLine();

// Forecast y of x
console.log('___Forecasts___');

console.log('Election Day 2020 Price Prediction: ' + OLS.forecastY(90).toFixed(2)); // forecastY(argument) argument represents number of units (e.g., days) after the final observation

console.log('One Week: ' + OLS.forecastY(7).toFixed(2));

// Residuals at X
console.log('___Residuals___');

console.log(`_For Y at X___ Min: ${OLS.residualXMin().toFixed(2)} , 1Q: ${OLS.residualX1Q().toFixed(2)} , Median: ${OLS.residualXMedian().toFixed(2)} , 3Q: ${OLS.residualX3Q().toFixed(2)} , Max: ${OLS.residualXMax().toFixed(2)}`);

// Residuals at Ascending Y
console.log(`_For Y at Ascending Y___ Min: ${OLS.residualYMin().toFixed(2)} , 1Q: ${OLS.residualY1Q().toFixed(2)} , Median: ${OLS.residualYMedian().toFixed(2)} , 3Q: ${OLS.residualY3Q().toFixed(2)} , Max: ${OLS.residualYMax().toFixed(2)}`);

// Sums of Squares
console.log('___Sums of Squares___');

console.log('Residual Sum of Squares: ' + OLS.RSS().toFixed(2));

console.log('Explained Sum of Squares: ' + OLS.ESS().toFixed(2));

console.log('Total Sum of Squares: ' + OLS.TSS().toFixed(2));

// R^2
console.log('R^2: ' + OLS.RSquared().toFixed(4));
console.log('Adjusted R^2: ' + OLS.adjRSqr().toFixed(4));

// Degrees of Freedom
console.log('Degrees of Freedom: ' + OLS.DF());

// Standard Deviation X
console.log('___Standard Deviation___');

console.log('Std Dev X: ' + OLS.stdDevX().toFixed(2));

console.log('Variance X: ' + OLS.varianceX().toFixed(2));

console.log('Std Error X: ' + OLS.stdErrorX().toFixed(2));

// Standard Deviation Y
console.log('Std Dev Y: ' + OLS.stdDevY().toFixed(2));

console.log('Variance Y: ' + OLS.varianceY().toFixed(2));

console.log('Std Error Y: ' + OLS.stdErrorY().toFixed(2));

// Coefficient of Correlation and Measures of Significance 
console.log('___Correlation and Statistical Significance___');

console.log('r: ' + OLS.r().toFixed(4));

console.log('t: ' + OLS.t().toFixed(4));

console.log('p-value: ' + OLS.pValue());

console.log('Reject Null Hypothesis (B1 = 0): ' + OLS.nullHyp());
