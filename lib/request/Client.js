const request = require('superagent');
let response;

class Client {


    static  get(uri) {
        return request
            .get(uri)
            .then(res => {
                response = res;
                // res.body, res.headers, res.status
            })
            .catch(function (err) {
                response = err;
                // err.message, err.response
            });


    }

    post() {

    }

    delete() {

    }

    put() {


    }


}


module.exports = Client;