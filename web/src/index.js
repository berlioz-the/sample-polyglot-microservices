const express = require('express')
const Promise = require('promise');
const berlioz = require('berlioz-sdk');

const app = express();
berlioz.setupExpress(app);

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', function (req, response) {
    var renderData = {
        result: null,
        cardClass: 'blue'
    };

    return Promise.resolve()
        .then(() => {
            var options = { url: '/query', json: true, resolveWithFullResponse: true };
            return berlioz.service('app').request(options)
                .then(result => {
                    if (result) {
                        renderData.result = result.body;
                        renderData.cardClass = 'blue';
                    } else {
                        renderData.result = {
                            message: 'There was error.',
                            payload: null
                        }
                        renderData.cardClass = 'yellow';
                    }
                })
                .catch(error => {
                    renderData.result = {
                        payload: null
                    }
                    renderData.cardClass = 'red';
                    if (error.message) {
                        renderData.result.message = error.message
                    } else {
                        renderData.result.message = JSON.stringify(error, null, 2);
                    }
                });
        })
        .catch(error => {
            if (error instanceof Error) {
                renderData.error = error.stack + error.stack;
            } else {
                renderData.error = JSON.stringify(error, null, 2);
            }
        })
        .then(() => {

            console.log("renderData:");
            console.log(renderData);


            response.render('pages/index', renderData);
        });
});


app.listen(process.env.BERLIOZ_LISTEN_PORT_DEFAULT, process.env.BERLIOZ_LISTEN_ADDRESS, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`Server is listening on ${process.env.BERLIOZ_LISTEN_ADDRESS}:${process.env.BERLIOZ_LISTEN_PORT_DEFAULT}`)
})
