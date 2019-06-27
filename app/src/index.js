const express = require('express');
const berlioz = require('berlioz-sdk');

const app = express();
berlioz.setupExpress(app);

app.get('/', (request, response) => {
    response.send({
        message: 'Hello from APP'
    });
})

app.get('/query', (request, response) => {
    var payload = {
        message: 'Hello, my name is BILLING microservice.'
    }
    response.send({
        message: 'Hello, my name is APP microservice. I have received following payload from BILLING microservice.',
        payload: payload
    });
})

app.listen(process.env.BERLIOZ_LISTEN_PORT_DEFAULT,
           process.env.BERLIOZ_LISTEN_ADDRESS, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`Server is listening on ${process.env.BERLIOZ_LISTEN_ADDRESS}:${process.env.BERLIOZ_LISTEN_PORT_DEFAULT}`)
});
