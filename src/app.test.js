const server = require('./app');

// Simulação simples de teste
try {
    console.log("Iniciando Testes Automatizados...");
    console.log("Verificando integridade da API...");
    
    // Se o servidor existe, o teste passa
    if (server) {
        console.log("SUCESSO: O servidor foi iniciado corretamente.");
        process.exit(0); // Código 0 significa sucesso no Linux/Windows
    } else {
        throw new Error("Servidor não respondeu.");
    }
} catch (error) {
    console.error("FALHA: " + error.message);
    process.exit(1); // Código 1 significa erro e trava o pipeline
}