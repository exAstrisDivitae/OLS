// Ordinary Least Squares (OLS) Simple Regression Calculator

//              *** X.length === Y.length ***
// *** X and Y are corresponding arrays of (x, y) value pairs ***

// Import X and Y
const data = require('/home/user/path/to/swppxData.js');

const OLS = {
    // Mean Averages of X and Y
    meanX(){
        const avgX = data.X.reduce((acc, cur) => acc + cur) / data.X.length;
        return avgX;
    },

    meanY(){
        const avgY = data.Y.reduce((acc, cur) => acc + cur) / data.X.length;
        return avgY;
    },

    // Summary of Y
    ascY(){
        const ascendingY = data.Y.map(a => a);
        ascendingY.sort((b, c) => b - c);
        return ascendingY;
    }, // Establishes New Array of Y in Ascending Order

    YMin(){
        return this.ascY()[0];
    },

    Y1Q(){
        return this.ascY()[Math.floor(this.ascY().length / 4)];
    },

    YMedian(){
        return this.ascY()[Math.floor(this.ascY().length / 2)];
    },

    Y3Q(){
        return this.ascY()[Math.floor(this.ascY().length * 3 / 4)];
    },

    YMax(){
        return this.ascY()[this.ascY().length - 1];
    },

    // Line of Best Fit
    bestFitSlope(){
        const numeratorArr = [];
        const denomenatorArr = [];
        for (i = 0; i < data.X.length; i++){
            const productOfDifferencesXY = (data.X[i] - this.meanX()) * (data.Y[i] - this.meanY());
            const squaredDifferenceX = (data.X[i] - this.meanX()) * (data.X[i] - this.meanX());
            numeratorArr.push(productOfDifferencesXY);
            denomenatorArr.push(squaredDifferenceX);
        }
        const rise = numeratorArr.reduce((acc, cur) => acc + cur);
        const run = denomenatorArr.reduce((acc, cur) => acc + cur);
        const slope = rise / run;
        return slope;
    },

    bestFitIntercept(){
        const intercept = this.meanY() - this.bestFitSlope() * this.meanX();
        return intercept;
    },

    // Forecast y of x
    forecastY(dayX = 0){
        return (dayX + data.X.length - 1) * this.bestFitSlope() + this.bestFitIntercept();
    },

    // Residuals at X
    residualXMin(){
        const resXMin = data.Y[0] - (data.X[0] * this.bestFitSlope() + this.bestFitIntercept());
        return resXMin;
    },

    residualX1Q(){
        const X1QIndex = Math.floor(data.X.length / 4);
        const resX1Q = data.Y[X1QIndex] - (data.X[X1QIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resX1Q;
    },

    residualXMedian(){
        const XMedianIndex = Math.floor(data.X.length / 2);
        const resXMedian = data.Y[XMedianIndex] - (data.X[XMedianIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resXMedian;
    },

    residualX3Q(){
        const X3QIndex = Math.floor(data.X.length * 3 / 4);
        const resX3Q = data.Y[X3QIndex] - (data.X[X3QIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resX3Q;
    },

    residualXMax(){
        const XMaxIndex = data.X.length - 1;
        const resXMax = data.Y[XMaxIndex] - (data.X[XMaxIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resXMax;
    },

    // Residuals at Ascending Y
    residualYMin(){
        const YMin = data.Y.reduce((a, b) => Math.min(a, b));
        const YMinIndex = data.Y.indexOf(YMin);
        const resYMin = data.Y[YMinIndex] - (data.X[YMinIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resYMin;
    },

    residualY1Q(){
        const Y1QIndex = Math.floor(data.X.length / 4);
        const resY1Q = this.ascY()[Y1QIndex] - (data.X[Y1QIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resY1Q;
    },

    residualYMedian(){
        const YMedianIndex = Math.floor(data.X.length / 2);
        const resYMedian = this.ascY()[YMedianIndex] - (data.X[YMedianIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resYMedian;
    },

    residualY3Q(){
        const Y3QIndex = Math.floor(data.X.length * 3 / 4);
        const resY3Q = this.ascY()[Y3QIndex] - (data.X[Y3QIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resY3Q;
    },

    residualYMax(){
        const YMax = data.Y.reduce((a, b) => Math.max(a, b));
        const YMaxIndex = data.Y.indexOf(YMax);
        const resYMax = data.Y[YMaxIndex] - (data.X[YMaxIndex] * this.bestFitSlope() + this.bestFitIntercept());
        return resYMax; 
    },

    //Residual Sum of Squares
    RSS(){
        const rssArr = [];
        for (i = 0; i < data.X.length; i++){
            const residual = data.Y[i] - (data.X[i] * this.bestFitSlope() + this.bestFitIntercept());
            const resSquared = residual * residual;
            rssArr.push(resSquared);
        }
        const resSumSquares = rssArr.reduce((acc, cur) => acc + cur);
        return resSumSquares;
    },

    // Explained Sum of Squares
    ESS(){
        const essArr = [];
        for (i = 0; i < data.X.length; i++){
            const explained = (data.X[i] * this.bestFitSlope() + this.bestFitIntercept()) - this.meanY();
            const expSquared = explained * explained;
            essArr.push(expSquared);
        }
        const expSumSquares = essArr.reduce((acc, cur) => acc + cur);
        return expSumSquares;
    },

    // Total Sum of Squares
    TSS(){
        return this.ESS() + this.RSS();
    },

    // R^2
    RSquared(){
        return 1 - this.RSS() / this.TSS();
    },

    // Adjusted R^2
    adjRSqr(){
        return 1 - this.RSS() / this.TSS() * (data.X.length - 1) / (data.X.length - 2);
    },

    // Degrees of Freedom
    DF(){
        return data.X.length - 2;
    },

    // Standard Deviation X
    stdDevX(){
        const stdDevArrX = [];
        for (i = 0; i < data.X.length; i++){
            const devX = data.X[i] - this.meanX();
            const devXSqr = devX * devX;
            stdDevArrX.push(devXSqr);
        }
        const devXSqrSum = stdDevArrX.reduce((acc, cur) => acc + cur);
        const XsumOverObs = devXSqrSum / (data.X.length - 1);
        const standardDevX = Math.sqrt(XsumOverObs);
        return standardDevX;
    },

    // Variance X
    varianceX(){
        return this.stdDevX() * this.stdDevX();
    },

    // Standard Error X
    stdErrorX(){
        return this.stdDevX() / Math.sqrt(data.X.length);
    },

    // Standard Deviation Y
    stdDevY(){
        const stdDevArrY = [];
        for (i = 0; i < data.X.length; i++){
            const devY = data.Y[i] - this.meanY();
            const devYSqr = devY * devY;
            stdDevArrY.push(devYSqr);
        }
        const devYSqrSum = stdDevArrY.reduce((acc, cur) => acc + cur);
        const YsumOverObs = devYSqrSum / (data.X.length - 1);
        const standardDevY = Math.sqrt(YsumOverObs);
        return standardDevY;
    },

    // Variance Y
    varianceY(){
        return this.stdDevY() * this.stdDevY();
    },
    // Standard Error Y
    stdErrorY(){
        return this.stdDevY() / Math.sqrt(data.X.length);
    },

    // Coefficient of Correlation 
    r(){
        const productXYArr = [];
        const XSqrArr = [];
        const YSqrArr = [];
        for (i = 0; i < data.X.length; i++){
            const productXY = data.X[i] * data.Y[i];
            const XSqr = data.X[i] * data.X[i];
            const YSqr = data.Y[i] * data.Y[i];
            productXYArr.push(productXY);
            XSqrArr.push(XSqr);
            YSqrArr.push(YSqr);
        }
        const productXYSum = productXYArr.reduce((a,b) => a + b);
        const XSqrSum = XSqrArr.reduce((a, b) => a + b);
        const YSqrSum = YSqrArr.reduce((a, b) => a + b);
        const XForSumX = data.X.map(a => a);
        const YForSumY = data.Y.map(a => a);
        const sumX = XForSumX.reduce((a, b) => a + b);
        const sumY = YForSumY.reduce((a, b) => a + b);
        const rNumerator = data.X.length * productXYSum - sumX * sumY;
        const rDenomenator = Math.sqrt((data.X.length * XSqrSum - Math.pow(sumX, 2)) * (data.X.length * YSqrSum - Math.pow(sumY, 2)));
        const calculateR = rNumerator / rDenomenator;
        return calculateR;
    },

    // Measures of Statistical Significance

    // t statistic
    t(){
       return this.bestFitSlope() / this.stdErrorY()
    },

    // p-value
    pValue(){

    },

    // Evaluation of Null Hypothesis
    nullHyp(){
        if (this.pValue() < .05){
            return true;
        } else {
            return false;
        }
    }
};

module.exports = OLS;