const hostname = 'https://hoangvanhoa-profile.herokuapp.com/';
const port = 3001;
 
const server = require('./controller.js');
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});