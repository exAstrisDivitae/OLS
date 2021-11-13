const data = {
    title: {
        data: '',
        X: 'Index',
        Y: ''
    },
    X: [],
    Y: [

    ],
    fillXforY(){
        for (i = 1; i <= this.Y.length; i++){
            this.X.push(i);
        }
    }
};
data.fillXforY();

module.exports = data