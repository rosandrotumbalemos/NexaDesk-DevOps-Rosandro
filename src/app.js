const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        message: 'NexaDesk API Online', 
        version: '1.0.0',
        environment: 'Production'
    }));
});

// Verifica se está sendo executado diretamente para abrir a porta
if (require.main === module) {
    server.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}

module.exports = server;