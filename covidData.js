const data = {
    title: {
        data: 'Examining the Effect of New US Covid Cases on DJIA',
        X: 'New US Covid Cases',
        Y: 'Dow Jones Industrial Average Closing Price'
    },
    X: [
        16040,
        20039,
        19679,
        20975,
        23288,
        16301,
        17180,
        20246,
        17848,
        24422,
        18307,
        23048,
        23620,
        27082,
        30927,
        26558,
        33315,
        37945,
        38853,
        44726,
        36390,
        43865,
        52609,
        54869,
        46733,
        51108,
        62459,
        57443,
        67021,
        57936,
        61834,
        65370,
        69984,
        76091,
        55896,
        63496,
        68377,
        70719,
        74360,
        54806,
        58540,
        63255,
        68543,
        66364,
        41963,
        51185,
        51884,
        53305,
        60184,
        40171,
        54443,
        55170,
        51335,
        55057,
        37240,
        39794,
        43798,
        43027,
        49743,
        33618,
        36047,
        42355,
        43814,
        45447
    ],
    Y: [
        25475.019531,
        25742.650391,
        26269.890625,
        26281.820313,
        27110.980469,
        27572.439453,
        27272.300781,
        26989.990234,
        25128.169922,
        25605.539063,
        25763.160156,
        26289.980469,
        26119.609375,
        26080.099609,
        25871.460938,
        26024.960938,
        26156.099609,
        25445.939453,
        25745.599609,
        25015.550781,
        25595.800781,
        25812.880859,
        25734.970703,
        25827.359375,
        26287.029297,
        25890.179688,
        26067.279297,
        25706.089844,
        26075.300781,
        26085.800781,
        26642.589844,
        26870.099609,
        26734.710938,
        26671.949219,
        26680.869141,
        26840.400391,
        27005.839844,
        26652.330078,
        26469.890625,
        26584.769531,
        26379.279297,
        26539.570313,
        26313.650391,
        26428.320313,
        26664.400391,
        26828.470703,
        27201.519531,
        27386.980469,
        27433.480469,
        27791.439453,
        27686.910156,
        27976.839844,
        27896.720703,
        27931.019531,
        27844.910156,
        27778.070313,
        27692.880859,
        27739.730469,
        27930.330078,
        28308.460938,
        28248.439453,
        28331.919922,
        28492.269531,
        28653.869141
    ],
    fillXforY(){
        for (i = 1; i <= this.Y.length; i++){
            this.X.push(i);
        }
        return this.X;
    }
};

module.exports = data

//
console.log('X: ' + data.X.length);
console.log('Y: ' + data.Y.length);
