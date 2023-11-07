const http = require('http')
const { testFunctiond, newFunction } = require('./function');
const { error } = require('console');

const printAgakTelat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ditilang');
        }, 1000 * 5);
    });
}

var server = http.createServer((req, res) => {
    // res.write('qwerty');
    // res.end();

    switch (req.url) {
        case '/about':
            // test();
            // newFunction('dari mesej');
            console.log('otw');
            printAgakTelat()
                .then((value) => {
                    console.log(value)
                    console.log('ngopi');
                })
            .catch((error) => console.log(error))
res.write('ini about');
res.end();
break;
        case '/home':
res.write('home');
res.end();
break;
        default:
res.write('404 not found');
res.end();
break;
    }

    // if (req.url == '/about') {
    //     res.write('ini about');
    //     res.end();
    // } else if (req.url == '/home') {
    //     res.write('ini home');
    //     res.end();
    // } else {
    //     res.write('404 not found');
    //     res.end();
    // }
});

const port = 3300;
server.listen(port, () => {
    console.log(`berjalan di http:/localhost:${port}`);
}
);