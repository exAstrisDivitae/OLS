const data = {
    title: {
        data: 'Corn Futures (Dec. 2020) Closing Price Jul. 14 - Aug. 21 2020',
        X: 'Index',
        Y: 'Closing Price'
    },
    X: [],
    Y: [
        333.50,
        337.50,
        340.25,
        335.50,
        331.00,
        334.75,
        335.50,
        335.75,
        334.50,
        330.00,
        326.25,
        326.50,
        326.00,
        328.75,
        320.50,
        322.50,
        323.75,
        321.00,
        323.50,
        323.75,
        327.25,
        338.50,
        337.75,
        344.50,
        341.75,
        339.25,
        339.25,
        341.00
    ],
    fillXforY(){
        for (i = 1; i <= this.Y.length; i++){
            this.X.push(i);
        }
    }
};
data.fillXforY();

module.exports = data