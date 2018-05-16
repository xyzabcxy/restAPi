
let Uri = require('../../../config/Uri');
let Client = require('../../../lib/request/Client');
class Get {

    AllProjects(){
        let uri = new Uri('proyects.json');
        Client.get(uri);


    }


}
module.exports = Get;