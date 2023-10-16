const app = require('./app');

app.set('PORT', 3000);

const server = http.createServer(app);

server.listen(3000);